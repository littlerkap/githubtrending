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

/**
 * Base URL for axios.
 */
axios.defaults.baseURL = config.apiBaseUrl;

/**
 * Main app component
 */
export default function App() {
  /**
   * Hook to get detils about background fetching.
   */
  const isFetching = useIsFetching();

  return (
    <Router>
      {/* App Header */}
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

          {/* Background fetching loader */}
          <Header.Item>{isFetching ? <Spinner /> : ""}</Header.Item>
        </div>
      </Header>

      {/* App Content */}
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
