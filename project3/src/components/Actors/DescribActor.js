import React from "react";
import CaractActor from "./caract/CaractActor";
const DescribActor = (props) => (
    //put your component codes
    <>
        <div>
            Points available: 
            <span className="badge bg-success">{props.pointAvailable}</span>
        </div>
        <div>
        <CaractActor nbpoints={props.strong} plus={()=>props.plus('strong')} moins={()=>props.moins('strong')}>Strong</CaractActor><br/>
        <CaractActor nbpoints={props.agility}  plus={()=>props.plus('agility')} moins={()=>props.moins('agility')}>Agility</CaractActor><br/>
        <CaractActor nbpoints={props.intelligence}  plus={()=>props.plus('intelligence')} moins={()=>props.moins('intelligence')}>Intelligence</CaractActor><br/>
        </div>
    </>
)
export default DescribActor;