import React from "react";


const AlertMessage = (props) => {
    //put your component codes
    const style=`alert ${props.styleAlert}`;
    return <div className={style} role="alert">
    {props.children}
    </div>


}
export default AlertMessage;