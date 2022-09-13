import React from "react";
import ImageActor1 from "../../../assets/images/persos/player1.png"
import ImageActor2 from "../../../assets/images/persos/player2.png"
import ImageActor3 from "../../../assets/images/persos/player3.png"
import Classes from './ImageActor.module.css'

const ImageActor = (props) => {
    let imageToprint="";
    if(props.num===1)imageToprint=ImageActor1;
    else if(props.num===2)imageToprint=ImageActor2
    else if(props.num===3)imageToprint=ImageActor3
    //put your component codes
    return (
    <div className="row no-gutters text-center align-items-center">
    <div className={['col1',Classes.fleche,Classes.gauche].join(' ')} onClick={props.flechPrev}></div>
    <div className="col">
    <img src={imageToprint} alt="actor"></img>
    </div>
    <div className={['col1',Classes.fleche,Classes.droite].join(' ')} onClick={props.flechNext}></div>
       
    </div>
    )
}
export default ImageActor;