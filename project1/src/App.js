import React,{Component} from "react";
import Person from './components/person/Person';
import Horloge from "./containers/horloge/Horloge";



class App extends Component{
    state={
        persons:[
            {name:'Henock',age:28,gender:true},
            {name:'Naomi',age:20,gender:false},
            {name:'Moses',age:40,gender:true},
    ]
    }
    anniversaireHandeler=()=>{
        const newPersons=this.state.persons.map(person=>{
            return {
                name:person.name,
                gender:person.gender,
                age:person.age +1,
            }
        })
        this.setState({persons:newPersons});
    }
    anniversaireSingleHandeler=(numberPerson)=>{
        const newPerson={...this.state.persons[numberPerson]};
        newPerson.age++;
        const newTab={...this.state.persons}

        newTab[numberPerson]=newPerson;

        this.setState({persons:newTab});

    }
    render(){
        return (
            <>
            <button onClick={this.anniversaireHandeler}>Anniversaire</button>
            <Horloge></Horloge>
            {
                this.state.persons.map((person,index)=>{
                    return(
                        <Person {...person} clic={()=>this.anniversaireSingleHandeler(index)}></Person>
                    );
            })
            }
          {/*   <Person {...this.state.persons[0]} clic={()=>this.anniversaireSingleHandeler(0)}></Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} gender={this.state.persons[1].gender}></Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} gender={this.state.persons[2].gender}></Person> */}

            </>
        )

    }
   
} 

export default App;