import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import logo from './logo.jpeg'; 
import LargeLogo from './LargeIcon.jpeg'

const Register = () => {

    const history = useHistory() 

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password} = user
        if( name && email && password ){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        
        <div id="full">
        
            <div className="register"> 

               {console.log("User", user)}
               <img style={{width:'110%' , heigth:"110%"}}  src={logo} />
              
               <label>What's your name ? </label>
               <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
                <br></br>
                <br></br>
              
               <label>Email </label>
               <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
               <br></br>
                <br></br>
               
                <label>Password </label>
               <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
               <div className="button" onClick={register} >CREATE ACCOUNT</div>
               <h3>or</h3>
                <div className="ln" onClick={() => history.push("/login")}>LOGIN </div>
            </div>

            <div id="right">
            <img style={{width:'100%' , heigth:"100%"}}   src={LargeLogo} />
            </div>
 
        </div>
    )
}

export default Register