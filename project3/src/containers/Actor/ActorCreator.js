import React, { Component } from 'react';
import Button from '../../components/Buttons/Button';
import TitleH1 from '../../components/Title/TitleH1';
import Actor from '../../components/Actors/Actor';
import Weapons from '../../components/Actors/weapons/Weapons';
import axios from 'axios';
class ActorCreator extends Component {
    state = {
        Actor: {
            image: 1,
            strong: 0,
            agility: 0,
            intelligence: 0,
            weapon: null,

        },
        pointAvailable: 7,
        weapons: null,
        loading: false,
        name: ""
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios.get('https://creaperso-21e95-default-rtdb.firebaseio.com/weapons.json')
            .then(Response => {
                let datas = Object.values(Response.data);
                console.log(datas)
                this.setState({
                    loading: false,
                    weapons: datas
                })
            })
            .catch(err => {
                this.setState({
                    loading: false,

                })

            })

    }
    handleCreateActor = () => {
        this.setState({ loading: true });
        const player = {
            actor: { ...this.state.Actor },
            name: this.state.name
        }
        axios.post('https://creaperso-21e95-default-rtdb.firebaseio.com/actor.json', player)
            .then(Response => {
                console.log(Response);
                this.setState({
                    loading: false,
                })
                this.handleReset()
                this.props.refresh();
            })
            .catch(err => {
                this.setState({
                    loading: false,

                })
                this.handleReset()

            })
    }
    handleReset=()=>{
        this.setState({
            Actor: {
                image: 1,
                strong: 0,
                agility: 0,
                intelligence: 0,
                weapon: null,
    
            },
            name:""
        })
    }
    handlePrevImage = () => {
        this.setState(oldState => {
            const newActor = { ...oldState.Actor };
            if (oldState.Actor.image <= 1) newActor.image = 3;
            else newActor.image--;
            return { Actor: newActor };
        })

    }
    handleNextImage = () => {
        this.setState(oldState => {
            const newActor = { ...oldState.Actor };
            if (oldState.Actor.image >= 3) newActor.image = 1;
            else newActor.image++;
            return { Actor: newActor };
        })
    }
    handlePlus = (caract) => {
        this.setState((oldState, props) => {
            if (oldState.Actor[caract] >= 5 || oldState.pointAvailable <= 0) return null;
            const newpointCara = oldState.Actor[caract] + 1;
            const newactor = { ...oldState.Actor };

            const newPointAvail = oldState.pointAvailable - 1;
            newactor[caract] = newpointCara;
            return {
                Actor: newactor,
                pointAvailable: newPointAvail
            }
        })

    }
    handleMoins = (caract) => {
        this.setState((oldState, props) => {
            if (oldState.Actor[caract] <= 0 || oldState.pointAvailable >= 7) return null;
            const newpointCara = oldState.Actor[caract] - 1;
            const newactor = { ...oldState.Actor };

            const newPointAvail = oldState.pointAvailable + 1;
            newactor[caract] = newpointCara;
            return {
                Actor: newactor,
                pointAvailable: newPointAvail

            }

        })

    }


    handleSelectWeapon = (wp) => {
        const newActor = { ...this.state.Actor };
        newActor.weapon = wp;
        this.setState({ Actor: newActor });
    }
    render() {
        return (
            //put your component codes
            <div className='container'>

                <TitleH1>persons creator</TitleH1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="put the name" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
                </div>
                <Actor
                    {...this.state.Actor}
                    prev={this.handlePrevImage}
                    next={this.handleNextImage}
                    pointAvailable={this.state.pointAvailable}
                    plus={this.handlePlus}
                    moins={this.handleMoins}
                ></Actor>
                {
                    this.state.loading && <div>Loading datas</div>
                }
                {
                    this.state.weapons &&
                    <Weapons
                        selectw={this.handleSelectWeapon}
                        currentW={this.state.Actor.weapon}
                        list={this.state.weapons}
                    ></Weapons>

                }

                <div className='row no-gutters'>
                    <Button btnStyle='btn-danger' css='col-6' Clic={this.handleReset}>Reset</Button>
                    <Button btnStyle='btn-success' css='col-6' Clic={this.handleCreateActor}>Create</Button>

                </div>


            </div>
        )
    }
}
export default ActorCreator;