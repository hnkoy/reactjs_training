import React from "react";
import classes from './TitleH1.module.css'


const TitleH1 = (props) => {
//put your component codes
const styles=`${classes.title_styl} border-dark bg-primary p-2 m-2 rounded text-white text-center`;
return <h1 className={styles}>{props.children}</h1>
}
export default TitleH1;