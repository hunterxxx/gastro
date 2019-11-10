import React from 'react';
import openSocket from 'socket.io-client';
const socket1 = openSocket('http://localhost:8000');
const socket2 = openSocket('http://localhost:8001');

class Admin extends React.Component {
    componentDidMount() {
        socket1.on('receivedOrder', (data) => {
            alert("New customer order!")
        });

        socket2.on('startCooking', (data) => {
            alert("It's time to cook!")
        });

    };

    render() {
        return (
            <div className="App">
                <h3 style={{ padding: "30px" }}>
                    Dashboard of the restaurant owner
                    <img src="./Logo.png" alt="Logo" style={{ width: "50%", height: "50%" }} />
                </h3>
            </div >
        );
    }
}

export default Admin;