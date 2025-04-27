
//import './App.css';
//import moment from 'moment';
import {useEffect , useState} from 'react';

import Heading from '../../Heading';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";
import "./icecream.jpg"
import ProductCard from '../Utilities/product';


function Home() {
  
  const Home=() =>{
    const[Product, setProduct] = useState([
      {
        name:"Icecream",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta labore ullam deserunt aliquid sapiente enim.",
        imageSrc:require("./icecream.jpg")
      },  
          {
        name:"Shake",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta labore ullam deserunt aliquid sapiente enim.",
        imageSrc:require("./shake.jpg")
      },
      {
        name:"Icecream",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta labore ullam deserunt aliquid sapiente enim.",
        imageSrc:require("./icecream2.jpg")
      },
      {
        name:"Shake",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta labore ullam deserunt aliquid sapiente enim.",
        imageSrc:require("./shake2.jpg")
      }
    ])
  }


  return (
    <div className="main">
      <div id='navbar'>
        <div id='logo'>
          <img src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-food-logo-png-image_5687717.png" alt="" />
          <span style={{fontWeight:"bold", fontSize:"20px"}}> Strawbera</span>
        </div>
        <div id='navcontent'>
          <a href="#active">Home</a>
          <a href="">About us</a>
          <a href="">Features</a>
          <a href="">Shop</a>
          <a href="">Blog</a>
        </div>
      </div>
      <div id='section'>
        <div className="subsection" id="subleft">
          <div id="text">
          <h2>Hello</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in dolore, voluptatem reprehenderit odio cum iure! Exercitationem ipsam ipsum cupiditate? Distinctio, sit quas commodi ratione velit dolorum quo quaerat quia.
          </p>
          </div></div>
        <div className="subsection" id="subright"></div>
      </div>
      <div id='categories'>
        <div id='heading'>
          <h1>Our Popular Menu</h1>
          <h2>Come To Eat</h2>
        </div>
        <div id="cardarea">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
   </div>
        </div>
        <div id="bottom">
          <div id="bottomleft">
            <img src={require('./strawberry.jpg')}></img>
          </div>
          <div id="bottomright"><div id="text2">
          <h2>Strawberries are what make life taste wonderful!</h2>
          </div>
           
          </div>
        </div>
      </div>
  //   
  




















































  
      






)}

export default Home; 
      
      

    
 


