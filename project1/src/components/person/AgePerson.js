import React from "react";

const agePerson=(props)=>{
    let now =new Date();
    let year=now.getFullYear();
    return (
        <div>Age: {props.age}- ({year-props.age})</div>
    )

}
export default agePerson;