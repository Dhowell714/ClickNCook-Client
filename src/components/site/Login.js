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
            body: JSON.stringify({user:{email: email, password: password}}),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then ((data) => {
            props.updateToken(data.sessionToken)
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
        <div id="login">
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlfor="email">email</Label>
                    <Input id="" onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type={showPassword ? "text" : "password"} onclick={togglePassword} onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button onClick={clearInput} type="submit">Login</Button>
                <Button onClick={props.clickLogout}>Logout</Button>
            </Form>
        </div>
    )
}

export default Login;