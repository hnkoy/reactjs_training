import React from "react";
import ImageActor from "./ImageActor/ImageActor";
import DescribActor from "./DescribActor";

const Actor = (props) => (
//put your component codes
<div className="row no-gueters">
    <div className="col-6">
   
    <ImageActor 
    num={props.image}
    flechPrev={props.prev}
    flechNext={props.next}
    
    ></ImageActor>
    </div>
    <div className="col-6">
       <DescribActor
      
       strong={props.strong}
       agility={props.agility}
       intelligence={props.intelligence}
       pointAvailable={props.pointAvailable}
       plus={props.plus}
       moins={props.moins}
       >

       </DescribActor>
    </div>
</div>
)
export default Actor;