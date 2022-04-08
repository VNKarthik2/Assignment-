import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

import logo from './logo.jpeg'; 
import LargeLogo from './LargeIcon.jpeg'

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div id="full">
            <div className="login">

              <img style={{width:'110%' , heigth:"110%"}}  src={logo} />
              <h1>Login</h1>
              <br></br>
              <label>Email </label>
              <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
              <br></br>
              <br></br>
            
              <label>Password </label>
              <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
              <br></br>
              <br></br>
            
              <div className="ln" onClick={login}>LOGIN</div>
              <div>or</div>
              <div className="button" onClick={() => history.push("/register")}>CREATE ACCOUNT</div>
             </div>

            
            <div id="right">
                <img style={{width:'100%' , heigth:"100%"}}   src={LargeLogo} />
            </div>
        </div>
    )
}

export default Login