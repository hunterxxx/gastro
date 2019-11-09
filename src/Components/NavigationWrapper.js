import React, { Component } from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import Map from "./Map";
import Map2 from "./Map2"

class NavigationWrapper extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/map" component={Map} />
                {/* <Route exact path="/search" component={} /> */}
                <Route exact path="/map2" component={Map2} />
            </Switch>
        );
    }
}
export default NavigationWrapper;
