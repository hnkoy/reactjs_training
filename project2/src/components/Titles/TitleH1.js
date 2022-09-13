import React from "react";
import classes from './css/TitleH1.module.css' 


const titleH1=(props)=>{   
    const moreStyleH1=`${classes.titleFont} border border-dark p-2 m-2 bg-primary rounded text-center text-white`;
    return(
        <h1 className={moreStyleH1}>
    {props.children}
    </h1>

    )
    
}
export default titleH1;
