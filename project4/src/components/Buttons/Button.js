import React from "react";


const button = (props) => {
//put your component codes
const btnCss=`btn ${props.btnStyle} ${props.css}`;
return (
    <button type='button'
     className={btnCss} 
     onClick={props.Clic}
     style={props.isSelect?{opacity:1} :{opacity:0.7}}
     >{props.children}
     </button>
)
}
export default button;