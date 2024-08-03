import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import HomePage from "views/HomePage.js";
import Test from "views/Test.js";
import CreateEvent from "views/CreateEvent.js";
import EventDetails from "views/EventDetails.js";
import Favorites from "views/Favorites.js";
import Authen from "views/auth/Authen.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      
      {/* add routes without layouts */}
      <Route path="/HomePage" exact component={HomePage} />
      <Route path="/CreateEvent" exact component={CreateEvent} />
      <Route path="/Favorites" exact component={Favorites} />
      <Route path="/EventDetails" exact component={EventDetails} />
      <Route path="/Authen" exact component={Authen} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/Test" exact component={Test} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
