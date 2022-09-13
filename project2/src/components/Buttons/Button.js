import React from "react";


const button = (props) => {
//put your component codes
const btnCss=`btn ${props.btnStyle} ${props.css}`;
return (
    <button type='button' className={btnCss} onClick={props.Clic}>{props.children}</button>
)
}
export default button;