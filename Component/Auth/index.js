
//import './App.css';
//import moment from 'moment';
import {useEffect , useState} from 'react';
import Heading from '../../Heading';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link,useNavigate } from 'react-router-dom';
import Aboutus from '../Aboutus';
import Home from '../Home';

function Auth(props) {
  const [isAuth, setAuth]= useState(false);
  const navigate = useNavigate();
  const getUsers = async() => {
    if(localStorage.getItem("users")){
      setAuth(true)
    }else{
      navigate("/")
    }
  };

 // const[userData,setUserData]=useState([]);

  useEffect(()=>{
    //fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((data)=>{
      //console.log(data)
      //setUserData(data)
  getUsers();

},[]);

  //  })
 // },[]);
  
  


  return (
    <>
    {!isAuth ?(
      <Home/>
    )
    :
    props.children
  }
   
    </>
  );
}

export default Auth; 
      
      

    
 


