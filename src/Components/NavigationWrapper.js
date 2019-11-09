import React, { Component } from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Admin from "./Admin";
import Map from "./Map";
import Photo from "./Photo";
import Decision from "./Decision"

class NavigationWrapper extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Photo} />
                <Route exact path="/map" component={Map} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/photo" component={Photo} />
                <Route exact path="/" component={Photo} />
                <Route exact path="/decision" component={Decision} />
            </Switch>
        );
    }
}
export default NavigationWrapper;
