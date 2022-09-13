import React from "react";
import imgEpee from '../../assets/images/armes/epee.png'
import imgFleau from '../../assets/images/armes/fleau.png'
import imgArc from '../../assets/images/armes/arc.png'
import imgHache from '../../assets/images/armes/hache.png'
import ImageActor1 from "../../assets/images/persos/player1.png"
import ImageActor2 from "../../assets/images/persos/player2.png"
import ImageActor3 from "../../assets/images/persos/player3.png"
const ActorDetails = (props) => {
    //put your component codes
    let imgplayer="";
    
    if(props.image===1) imgplayer=ImageActor1
    else if(props.image===2) imgplayer=ImageActor2
    else if(props.image===3) imgplayer=ImageActor3
    let imgwp="";
    if(props.weapon==="arc") imgwp=imgArc
    else if(props.weapon==="epee") imgwp=imgEpee
    else if(props.weapon==="fleau") imgwp=imgFleau
    else if(props.weapon==="hache") imgwp=imgHache

    return(
        <div className="row g-1">
         <div className="col-6 p-3">
        <img src={imgplayer} alt="player"></img>
        </div>
        <div className="col-6 p-3">
        Strong: {props.strong}<br/>
        Agility: {props.agility}<br/>
        Intelligence: {props.intelligence}<br/>
        Intelligence: {props.intelligence}<br/>
        <img src={imgwp} alt="player"></img>

        </div>
       
    </div>

    )
    
}
export default ActorDetails;