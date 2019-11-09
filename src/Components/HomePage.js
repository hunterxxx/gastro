/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 09.11.19 - 15:58
 **/
import React from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

class HomePage extends React.Component {
    state = {
        chefInformed: false,
    };

    informChef = () => {
        axios.post('/start').then(data => {
            console.log(data);
            this.setState({
                chefInformed: true,
            });
        }).catch(err => {
            console.error(err);
        });
    };

    render() {
        if (this.state.chefInformed) {
            return <Redirect to='/map2' />
        }
        return (
            <button onClick={this.informChef}>Brauche Essen</button>
        );
    }
}

export default HomePage;
