import React from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";


class Register extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
    }

    onSubmit = () => {

        console.log(this.state);
    };

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };


    render( ){

        const{username, email, password} = this.state;

        return(
        <Container text>
            <Header as='h2'>Register</Header>
            <Input name="username" onChange={this.onChange} placeholder="Username" fluid/>
            <Input name="email" onChange={this.onChange} placeholder="Email" fluid/>
            <Input name="password" type="password" placeholder="Password" fluid/>
            <Button onClick={this.onSubmit}>Submit</Button>
        </Container>
        );
    }
}

// const registerMutation = gql`
    
// `;

export default Register;