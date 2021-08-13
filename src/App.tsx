import {
  Link,
  NavLink,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import AboutPage from "./screens/about";
import Header from "@primer/components/lib/Header";
import NotFoundPage from "./screens/not-found";
import TrendingPage from "./screens/trending";

// Create a react query client
const queryClient = new QueryClient();

export default function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header className="f4">
          <div className="container-lg d-flex flex-1">
            <Header.Item className="f3">
              <Link to="/" className="Header-link py-1">
                Github Trendings
              </Link>
            </Header.Item>
            <Header.Item full></Header.Item>
            <Header.Item mr={0}>
              <NavLink
                to="/about"
                className="Header-link py-1"
                activeClassName="active"
              >
                About
              </NavLink>
            </Header.Item>
          </div>
        </Header>
        <main className="f4">
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
    </QueryClientProvider>
  );
}
