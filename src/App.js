import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/About/AboutUs";
import Services from "./components/Services/Services";
import Form from "./components/Form/Form";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about_us" component={AboutUs} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/public/form/view" component={Form} />
    </Switch>
  );
}

export default App;
