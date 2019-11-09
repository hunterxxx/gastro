import React, { Component } from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Admin from "./Admin";
import Map from "./Map"
import Photo from "./Photo"

class NavigationWrapper extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/map" component={Map} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/photo" component={Photo} />
            </Switch>
        );
    }
}
export default NavigationWrapper;
