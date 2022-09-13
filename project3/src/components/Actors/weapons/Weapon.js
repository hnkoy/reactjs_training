import React from "react";
const Weapon = (props) => (
    //put your component codes
    <div>
    <div >
        <img
        onClick={props.clic}
        style={{ opacity: props.isCurent?"1":"0.5", cursor:"pointer"}}
        src={props.img} alt={props.children}
        ></img>
    </div>
    <div>{props.children}</div>

    </div>
    
)
export default Weapon;