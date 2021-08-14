import {
  Link,
  NavLink,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import AboutPage from "./screens/about";
import Header from "@primer/components/lib/Header";
import { MarkGithubIcon } from "@primer/octicons-react";
import NotFoundPage from "./screens/not-found";
import Spinner from "@primer/components/lib/Spinner";
import TrendingPage from "./screens/trending";
import axios from "axios";
import { config } from "./config";
import { useIsFetching } from "react-query";

axios.defaults.baseURL = config.apiBaseUrl;

export default function App() {
  const isFetching = useIsFetching();
  return (
    <Router>
      <Header className="f4">
        <div className="container-lg d-flex flex-1 p-responsive">
          <Header.Item mr={4}>
            <Link to="/" className="Header-link py-1">
              <MarkGithubIcon size={32} />
            </Link>
          </Header.Item>
          <Header.Item mr={0}>
            <NavLink
              to="/about"
              className="Header-link py-1"
              activeClassName="active"
            >
              About
            </NavLink>
          </Header.Item>
          <Header.Item full></Header.Item>
          <Header.Item>{isFetching ? <Spinner /> : ""}</Header.Item>
        </div>
      </Header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/trending" />
          </Route>
          <Route path="/trending" component={TrendingPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </Router>
  );
}
