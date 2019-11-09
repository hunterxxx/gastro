import React, { Component } from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Admin from "./Admin";
import Map2 from "./Map2"

class NavigationWrapper extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/map2" component={Map2} />
                <Route exact path="/admin" component={Admin} />
            </Switch>
        );
    }
}
export default NavigationWrapper;
