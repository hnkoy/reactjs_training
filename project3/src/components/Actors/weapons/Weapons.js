import React from "react";
import Weapon from "./Weapon";
import imgEpee from '../../../assets/images/armes/epee.png'
import imgFleau from '../../../assets/images/armes/fleau.png'
import imgArc from '../../../assets/images/armes/arc.png'
import imgHache from '../../../assets/images/armes/hache.png'

const Weapons = (props) => (
//put your component codes
<div className="row no-gutters text-center">
    {props.list.map(wp=>{
        let imgw;
        switch(wp){
            case 'arc':imgw=imgArc;
            break;
            case 'epee':imgw=imgEpee;
            break;
            case 'fleau':imgw=imgFleau;
            break;
            case 'hache':imgw=imgHache;
            break;
            
        }
        return (
            <div className="col-3"  key={wp} >
            <Weapon 
            img={imgw}
            isCurent={props.currentW===wp}
            clic={()=>props.selectw(wp)}
            >{wp}</Weapon>
            </div>
            )

    })}
</div>
)
export default Weapons;