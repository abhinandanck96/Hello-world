import React ,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import './Home.css'

function Homecategories (props) {
    var global ="it's my Love"

useEffect(() =>{
        console.log("inside useEffect")
    },[])

    useEffect(() =>{
        console.log("getderived states from props")
        return () =>{
            console.log("unmounting")
        }
    },[props.test])
    return (
     <div className ="home-page">{global}</div>
    )
    
}

export default Homecategories