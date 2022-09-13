import React,{Component} from "react";
import AgePerson from './AgePerson';
import classes from './css/person.module.css';


class Person extends Component{
    render(){
        return(
            <>
            <h1 className={classes.header_title}>{this.props.name}</h1>
            <AgePerson age={this.props.age}></AgePerson>
          
           <div>Gender: {this.props.gender?'homme':'Femme'}</div>
           <button onClick={this.props.clic}>Anniversaire</button>
        </>
        )

}
    
}
export default Person;