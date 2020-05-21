import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/About/AboutUs";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about_us" component={AboutUs} />
    </Switch>
  );
}

export default App;
