import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Categories.css';


class Categories extends React.Component{
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: {
      "key1":"value3",
      "key2":"value2"

    } 
  };
   console.log("inside constructor")
    //this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    const global ="test"
    console.log("inside componentDidMount")
  }
  static getDerivedStateFromProps(props, state){
    console.log("inside getDerivedStateFromProps")
  }
  render(){
    console.log("inside render")
      return (
          <div className="load-page">Load page</div>
      )
  }
  componentWillUnmount(){
     console.log("inside Unmount")
  }
  handclick(){
    
  }
}


export default Categories