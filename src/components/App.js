import React from "react";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Items from "../pages/Items";
import Search from "../pages/Search";
import Template from "../templates/Template";
function App() {
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/items" component={Items} />
        </Switch>
      </Template>
    </BrowserRouter>
  );
}

export default App;
