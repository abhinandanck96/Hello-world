import React from 'react';
import ReactDOM from 'react-dom';
import './Class.css';
import Subcategories from './Subcategories.js';


const Class = (props) =>{
  console.log("props value",props.testdata)
      return (
          <div className="Categories">Categories list
           <Subcategories/>
          </div>
         
      )
  }



export default Class