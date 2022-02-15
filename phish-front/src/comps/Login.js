import React from "react";
import axios from "axios";
import List from "./List";

import { Navigate } from 'react-router-dom';

function Login() {
    const [state, setState] = React.useState({ email: "", password: "" });

    const handleInputs = (e) =>
        setState({ ...state, [e.target.name]: e.target.value });


    const login = async () => {
        let data = await axios.post("http://localhost:3000/api/v1/users/login", state);
        console.log(data.status)
        //use data.data.token as header . 
        if (data.status === 200) {
            console.log("200")
            return <Navigate to='/list' />;
        }
        return data;
    };

    return (
        <div className="btns-container">
            <input
                type="email"
                placeHolder="email"
                name="email"
                value={state.email}
                onChange={handleInputs}
                className="btns-inputs"
            />
            <input
                type="password"
                placeHolder="password"
                name="password"
                value={state.password}
                onChange={handleInputs}
                className="btns-inputs"
            />
            <div onClick={login} className="btns-inputs login-btn"
            >login</div>
        </div>
    );
}

export default Login;
