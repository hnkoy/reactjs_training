import React from "react";
import {NavLink } from "react-router-dom";
const Country = (props) => {
    //put your component codes
    
    
    return (
    <div className="row g-2 border m-2">

    <div className="col">

     <h2>Name : {props.name}</h2>
     <div>Capital: {props.capital}</div>
     <div>Region: {props.region}</div>
     {
         !props.detail &&
         <NavLink to={`/country/${props.name}`}>show detail country</NavLink>

     }
    

    </div> 


    </div>
    )
}
export default Country;