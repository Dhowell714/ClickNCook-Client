import React, { useState } from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from "../../helpers/environment";

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

 
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        fetch(`${APIURL}/user/register`, {      //http://localhost:3000/user/register the local 
            method: 'POST',
            body: JSON.stringify({user:{email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/JSON'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
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
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>

                    <Input type={showPassword ? "text" : "password"} onclick={togglePassword} onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                    
                </FormGroup>
                <Button onClick={clearInput} type="submit">Sign Up</Button>
                
            </Form>
        </div>
    )
}

export default Signup;