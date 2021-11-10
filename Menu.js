 import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './Menu.css'

const Categories= (props) =>{
    const [testStates, setTestStates ] =useState["click me"]
    const [testStates1, setTestStates1] =useState["click me"]
    const [testStates2, setTestStates2] =useState["click me"]
    console.log("props value",props.testdata)

    const handleClick = (evt) =>{
        console.log("clicked", evt)
        props.clickEventTriggered("button clicked in categories")
        //if (evt.value ==="clickme"){
            setTestStates("clicked by states")
            // else {
                // setTestStates["click me"]
               //}
        }
    return(
        <div>Categories Page
            <button className="click" onClick={handleClick}>
                {testStates}
            </button>
        </div>
    )
    }
export default Categories