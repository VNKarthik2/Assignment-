import React from "react"
import "./homepage.css"
import ReactRoundedImage from "react-rounded-image";
import logo from './images/logo.jpeg';
import home from './images/home.jpeg';
import log from './images/log.jpeg'

import poilets from './images/poilets.jpeg';
import inbox from './images/inbox.jpeg';
import team from './images/team.jpeg'
import add from './images/add.jpeg'
import logout from './images/logout.jpeg'
import setting from './images/setting.jpeg'

import p1 from './images/profiles/p1.jpeg'
import p2 from './images/profiles/p2.jpeg'
import p3 from './images/profiles/p3.jpeg'

import hard from './images/Cards/hard.jpeg'
import b1 from './images/Cards/b1.jpeg'
import tool1 from './images/Cards/Tool1.jpeg'
import Inprogress from './images/Cards/Inprogress.jpeg'
import b2 from './images/Cards/b2.jpeg'


const Homepage = ({setLoginUser}) => {
    return (

    

     <div id="body">
         <div className="left" >
             <div>
             <img style={{width:'100%' , heigth:"100%"}}  src={logo} />
             </div>
             <div className="left1">
                 <button >
                 <img style={{width:'100%' , heigth:"90%"}}  src={home} />
                 </button>
                 <button >
                 <img style={{width:'100%' , heigth:"90%"}}  src={poilets} />
                 </button>
                 <button >
                 <img style={{width:'100%' , heigth:"90%"}}  src={inbox} />
                 </button>
                 <button >
                 <img style={{width:'100%' , heigth:"90%"}}  src={team} />
                 </button>
             </div>
             <hr></hr>
             <div className="left2" >                            
                 <button >
                 <img style={{width:'100%' , heigth:"90%"}}  src={add} />
                 </button>       
                 <img style={{}}  src={p1} />
                 <img style={{}}  src={p2} />
                 <img style={{}}  src={p3} />          
                 
             </div>

             <div className="left3">

                 <button >
                 <img style={{width:'100%' , heigth:"90%"}}  src={setting} />
                 </button>  
                 
                 <button  >
                 <img style={{width:'100%' , heigth:"90%"}}  src={logout} />
                 </button>
    
             </div>
        
         </div>


         <div className="right">
             <div className="header">

                 <h2>Shenzhen Houde Academy</h2>
                 <br></br>
                 <h5 >DISCOVER &emsp; IMPACT BOARDS  &emsp; LEARING PODS</h5>
            </div>
            <div className="info" >
                <div className="card1">
                    <br></br>
                    <h3>&emsp;  Imapact campaigns  </h3>
                    <br></br>
                    <div className="box">
                        <h3>Reading Comprahensive</h3>
                        <img style={{}}  src={hard} />
                        
                        <h5>Students &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp;   3 Tools </h5> 

                        <img style={{width:'100%'}}  src={b1} />

                    </div>
                    <br></br>
                    <div className="box">
                        <h3>Career Development</h3>
                        <img style={{}}  src={hard} />
                        
                        <h5>Students &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp;   0 Tools </h5> 

                        <img style={{width:'100%'}}  src={b1} />

                    </div>

                </div>

                <div className="card2">
                    <br></br>
                    <h3>Learing Tools  </h3>
                    <br></br>
                    <img style={{}}  src={tool1} />
                    <br></br>

                </div>

                <div className="card3">
                    <br></br>
                    <h3>Tool Pilots </h3>
                    <br></br>
                    <div className="box">
                        <h3>Houde Pilot 1</h3>
                        <img style={{}}  src={Inprogress} />
                        
                        <h5>Students &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp;   3 Tools </h5> 

                        <img style={{width:'100%'}}  src={b2} />

                    </div>
                    <br></br>

                </div>


                
            </div>
         </div> 
     </div>   

)}

export default Homepage
