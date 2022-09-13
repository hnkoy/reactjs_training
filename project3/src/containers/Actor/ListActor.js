import React, { Component } from 'react';
import axios from 'axios';
import TitleH1 from '../../components/Title/TitleH1';
import ActorDetails from '../../components/Actors/ActorDetails';
class ListActor extends Component {


    state = {
        actor: null,
        loading: false
    }

    handleLoadData=()=>{
        this.setState({ loading: true })
        axios.get('https://creaperso-21e95-default-rtdb.firebaseio.com/actor.json')
            .then(response => {
                let tab = Object.values(response.data);
                this.setState({ actor: tab });
                this.setState({ loading: false })
                console.log(tab);

            })
            .catch(e => {
                this.setState({ loading: false })

            })

    }
    componentDidUpdate=(oldProps,oldState)=>{
        if(oldProps.refresh !== this.props.refresh){
            this.handleLoadData()
        }
        
    }

    componentDidMount=()=> {
        this.handleLoadData()
    }
    render() {
        return (
            //put your component codes
            <>
                {
                    this.state.loading && <div>Loading data</div>
                }
                {
                    !this.state.loading && this.state.actor &&
                    <div className='row g-0'>
                    {
                        this.state.actor.map((resp,index)=>{
                          return (
                              <div className='col-6' key={index}>
                              <TitleH1> {resp.name}</TitleH1>
                              <ActorDetails {...resp.actor}></ActorDetails>
                             
                              </div>
                              )
                        })
                    }
                       
                    </div>
                }

            </>
        )
    }
}
export default ListActor;