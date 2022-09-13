import React from "react";
import Classes from "./CaractActor.module.css"
const CaractActor = (props) => {
    //put your component codes

    let tab=[];
    for(let i=0;i<props.nbpoints;i++){
        tab.push(<div key={i} className={Classes.points}></div>)
    }
    return (
        <div className="row no-gutters">
          <div className={[Classes.signe, Classes.moins].join(' ')} onClick={props.moins}></div>
          <div>{props.children} : {tab}</div>
          <div className={[Classes.signe, Classes.plus].join(' ')} onClick={props.plus}></div>
        </div>
    );

}
export default CaractActor;