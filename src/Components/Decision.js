import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import axios from 'axios';

class Decision extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    componentDidMount() {

    }

    handleSubmit() {
        axios.post('/decision')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (
            <Form style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: 20, top: '22%' }}>
                <Form.Field>
                    <label>Name of the restaurant</label>
                    <Input placeholder='Insert please the name of the restaurant' value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                </Form.Field>
                <Form.Field>
                    <label>Number of persons</label>
                    <Input placeholder='Insert please the name of the restaurant' value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                </Form.Field>
                <Link to="/map">
                    <Button onClick={this.handleSubmit} type="submit" style={{ width: "100%" }}>Submit</Button>
                </Link>
            </Form>
        )
    }
}

export default Decision;