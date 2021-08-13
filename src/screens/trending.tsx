import { Route, Switch, useRouteMatch } from "react-router-dom";

import Box from "@primer/components/lib/Box";
import DevelopersComponent from "../components/trending/developers/component";
import NotFoundPage from "./not-found";
import RepositoriesComponent from "../components/trending/repositories/component";

/**
 * Trending page.
 * This page has nested router for 'trending/developer' and with filter query params
 */
export default function TrendingPage() {
  let { path, url } = useRouteMatch();

  return (
    <Box className="trending-page" mb={40}>
      <Switch>
        <Route exact path={path}>
          <RepositoriesComponent url={url} />
        </Route>
        <Route exact path={`${path}/developers`}>
          <DevelopersComponent url={url} />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Box>
  );
}
