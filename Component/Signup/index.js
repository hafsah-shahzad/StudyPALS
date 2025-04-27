import react from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

 function Signup(){
    const nav=useNavigate();
    return(
        <>
        <div style={{
            paddingLeft:"600px",
            paddingTop:"100px",
            paddingRight:"600px",

        }}>
        <div style={{
            border:"2px solid black",
            marginleft:"20px",
            height:"450px",
            width:"100x",
            paddingTop:"20px",
            backgroundColor:"whitesmoke",
            justifyContent:"center",
            display:"flex",
        }}>
    
        <form>
            
        <h1 style={{textAlign:"center"}}>Sign Up</h1>
        <label>First Name</label><br></br>
        <input style={{width:"200px",height:"25px"}} type='text' placeholder='Enter First Name' required></input><br></br><br></br>
       
        <label>Last Name</label><br></br>
        <input style={{width:"200px",height:"25px"}} type='text' placeholder='Enter Last Name' required></input><br></br><br></br>
       
        <label>Email</label><br></br>
        <input style={{width:"200px",height:"25px"}} type='text' placeholder='Enter Email' required></input><br></br><br></br>
        
        <label>Password</label><br></br>
        <input style={{width:"200px",height:"25px"}} type='text' placeholder='Enter Password' required></input><br></br><br></br>
        
        <button type="submit" style={{backgroundColor:"grey",width:"80px",height:"20px"}} onClick={()=>{nav("/login")}}>Sign Up</button>
    </form>
    </div>
    </div></>
        
    )
    
    
 }
  
 export default Signup;