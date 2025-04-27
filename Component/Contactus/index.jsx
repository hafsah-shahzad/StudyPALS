
//import './App.css';
//import moment from 'moment';
import {useEffect , useState} from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Heading from '../../Heading';

function Contactus() {
  const[userData,setUserData]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((data)=>{
      console.log(data)
      setUserData(data)
    })
  },[]);
  
  


  return (
    <div style={{
      margin:"10px",
        color:"black",
        padding:"12px",
        textAlign:"center",
    }} >
      <h1>Contact Us</h1>
      <Link to='/'>Home</Link><br></br>
      <button>Home</button>

       <div style={{
        margin:"10px",
        color:"GREEN",
        padding:"12px",
        textAlign:"center",
       display:"flex",
       flexWrap:"wrap",
       justify:"center"
     
      }}>
      
        {userData.map((data)=>{
          return(
<div style={{
    border:"1px solid black",
    margin:"2px",
    borderRadius:"2px",
    padding:"12px"

}}>
  <img src='https://picsum.photos/200' style={{borderRadius:"60px", height:"50px" }}></img>
  <text>{data.name}</text> <br></br>
  <text>{data.email}</text>
</div>

)}
)}
       </div>
    
    </div>
  );
}

export default  Contactus; 
      
      

    
 


