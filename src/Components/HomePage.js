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
        const path = [
            { lat: 47.800003, lng: 13.043557 },
            { lat: 47.800020, lng: 13.042291 },
            { lat: 47.797907, lng: 13.046871 },
            { lat: 47.796771, lng: 13.045356 },
            { lat: 47.794995, lng: 13.047655 },
        ];
        window.open('https://www.google.com/maps/dir/' + path.map(v => v.lat + ',' + v.lng).join('/'));
        axios.post('/start').then(data => {
            this.setState({
                chefInformed: true,
            });
        }).catch(err => {
            console.error(err);
        });
    };

    renderForm = () => <button onClick={this.handleSubmit}/>;

    render() {
        if (this.state.chefInformed) {
            return <Redirect to='/map' />
        }
        return <div style={{ backgroundColor: '#03A9F4', height: '100%'}}>
                {this.renderForm()}
            </div>;
    }
}

export default HomePage;
