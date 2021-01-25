import React from "react";
//Libraries
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
//Nav
import Nav from "./components/Nav";
//pages
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./components/NotFound";
//styles
import { GlobalStyle } from "./components/GlobalStyle";


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/projects" exact>
          <ProjectPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
     
    </div>
  );
}

export default App;
