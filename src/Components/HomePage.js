import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chefInformed: false,
            timestamp: ''
        };
    }

    componentDidMount() {
        socket.on('buttonUpdate', (data) => {
            this.setState({
                timestamp: data
            })
        });
    }

    handleSubmit = () => {
        socket.emit('clicked');
    }

    informChef = () => {
        axios.post('/start').then(data => {
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
            <>
                <button onClick={this.handleSubmit}>Brauche Essen</button>
                {this.state.timestamp}
            </>
        );
    }
}

export default HomePage;
