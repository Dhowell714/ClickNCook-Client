import React, { useState } from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import APIURL from "../../helpers/environment";

const Login = (props) => {
    console.log(props)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    fetch(`${APIURL}/user/login`, {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify({user:{email: email, password: password}}),
        }).then(
            (response) => response.json()
        ).then ((data) => {
            props.updateToken(data.sessionToken)
            // clearInput();
        })
    }
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    const clearInput = () => {
        setEmail('')
        setPassword('');
    };

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlfor="email">email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type={showPassword ? "text" : "password"} onclick={togglePassword} onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Login</Button>
                <Button onClick={props.clickLogout}>Logout</Button>
            </Form>
        </div>
    )
}

export default Login;