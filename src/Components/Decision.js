import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

class Decision extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleSubmit() {
        socket.emit('clicked');
    }

    render() {
        return (
            <Form style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: 20, top: '22%' }}>
                <Form.Field>
                    <label>Name of the restaurant</label>
                    <Input placeholder='Insert please the name of the restaurant' value={this.props.location.state.restaurant} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                </Form.Field>
                <Form.Field>
                    <label>Number of persons</label>
                    <Input placeholder='Insert please the name of the restaurant' value={this.props.location.state.length} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                </Form.Field>
                <Link to="/map">
                    <Button onClick={this.handleSubmit} type="submit" style={{ width: "100%" }}>Submit</Button>
                </Link>
            </Form>
        )
    }
}

export default Decision;