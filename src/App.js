import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="container app_container">
        <div className="row app_row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/" component={About} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/project" component={Project} />
                <Redirect to="/" />
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
