// import react from 'react';
// import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
// import { Link, useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Heading from '../../Heading';

function Login(){  
    return (
        <>
        <div className='d-flex justify-content-center mt-3'>
        <Form className='p-3 border'>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Password"
              />
             </Form.Group>
            
          </Row>
        
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              
            />
          </Form.Group>
          <Button variant='info' type="submit">Submit form</Button>
        </Form> 
        </div>
        </>
      );
    }

    export default Login;

//FORM STYLING USING CSS     
//  function Login(){
//     const nav=useNavigate();
//     return(
//         <>
//         <div style={{
//             paddingLeft:"600px",
//             paddingTop:"100px",
//             paddingRight:"00px",

//         }}>
//         <div style={{
//             border:"2px solid black",
//             marginleft:"20px",
//             height:"300px",
//             width:"100x",
//             paddingTop:"20px",
//             backgroundColor:"whitesmoke",
//             justifyContent:"center",
//             display:"flex",
//         }}>
    
//         <form>
            
//         <h1 style={{textAlign:"center"}}>Login Form</h1>
//         <label>Email</label><br></br>
//         <input style={{width:"200px",height:"25px"}} type='text' placeholder='Email' required></input><br></br><br></br>
//         <label>Password</label><br></br>
//         <input style={{width:"200px",height:"25px"}} type='text' placeholder='Password' required></input><br></br><br></br>
//         <button type="submit" style={{backgroundColor:"grey",width:"60px",height:"20px"}} onClick={()=>{localStorage.setItem("user",'farah');nav("/home")}}>Login</button>
//     </form>
//     </div>
//     </div></>
        
//     )
    
    
//  }
  
 