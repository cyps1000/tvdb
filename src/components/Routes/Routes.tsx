import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

/**
 * Component Imports
 */
import { ScrollToTop } from "../ScrollToTop";
import { SearchPage } from "../SearchPage";
import { SearchResults } from "../SearchResults";
import { TVShow } from "../TVShow";
import { Modal } from "../Modal";

/**
 * Displays the component
 */
export const Routes: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Modal />
        <Route path="/">
          <Switch>
            <Route exact path="/">
              <SearchPage />
            </Route>
            <Route exact path="/search/:name">
              <SearchResults />
            </Route>
            <Route exact path="/shows/:id">
              <TVShow />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Route>
      </ScrollToTop>
    </Router>
  );
};
