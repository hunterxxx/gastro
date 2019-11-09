import React from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: 'no timestamp yet'
        };
    }

    componentDidMount() {
        socket.on('buttonUpdate', (data) => {
            alert("New customer order!")
        });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    This is the timer value: {this.state.timestamp}
                </p>
            </div>
        );
    }
}

export default Admin;