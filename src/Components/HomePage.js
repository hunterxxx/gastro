/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 09.11.19 - 15:58
 **/
import React from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import { Form, Input, Select, Button } from 'semantic-ui-react'
import Background from '../assets/images/background.jpg';

class HomePage extends React.Component {
    state = {
        chefInformed: false,
        numClients: 1,
        name: '',
    };

    informChef = () => {
        const { numClients, name } = this.state;
        axios.post('/start', {
            numClients,
            name,
        }).then(data => {
            console.log(data);
            this.setState({
                chefInformed: true,
            });
        }).catch(err => {
            console.error(err);
        });
    };

    renderForm = () => <Form style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: 20,  top: '22%' }}>
        <Form.Field>
            <label>Restaurant's name</label>
            <Input placeholder='Insert please the name of the restaurant' value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value })}}/>
        </Form.Field>
        <Form.Field>
            <label>Nº persons</label>
            <Select
                placeholder='Last Name'
                options={
                [1,2,3,4,5,6,7,8,9].map((v) => ({
                    key: v, value: v, text: v + ' persons',
                }))}
                value={this.state.numClients}
                onChange={(_e, data) => {
                    this.setState({ numClients: data.value });
                }}
            />
        </Form.Field>
        <Button onClick={this.informChef} type='submit'>Submit</Button>
    </Form>;

    render() {
        if (this.state.chefInformed) {
            return <Redirect to='/map2' />
        }
        return <div style={{ backgroundColor: '#03A9F4', height: '100%'}}>
                {this.renderForm()}
            </div>;
    }
}

export default HomePage;
