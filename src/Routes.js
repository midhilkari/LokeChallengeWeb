import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
import Burgers from "./components/Burgers";
import SecretMenu from "./components/SecretMenu";
import Side from "./components/Sides";
import KidsMenu from "./components/KidsMenu";
import Drinks from "./components/Drinks";
import BoozeMenu from "./components/Booze";
import Retail from "./components/Retail";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Burgers" exact component={Burgers} />
        <Route path="/SecretMenu" exact component={SecretMenu} />
        <Route path="/Sides" exact component={Side} />
        <Route path="/KidsMenu" exact component={KidsMenu} />
        <Route path="/Drinks" exact component={Drinks} />
        <Route path="/Booze" exact component={BoozeMenu} />
        <Route path="/Retail" exact component={Retail} />
        <Route path="/ContactUs" exact component={ContactUs} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
