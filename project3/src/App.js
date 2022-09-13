import React, { Component } from 'react';

import ActorCreator from './containers/Actor/ActorCreator';
import ListActor from './containers/Actor/ListActor';


class App extends Component {
  state={
    refresh:false
  }

  handleRefresh=()=>{
    this.setState((oldState)=>{
      return {
        refresh:!oldState.refresh

      }
     
    })

  }
  render() {

    return (
      <>
        <ActorCreator refresh={this.handleRefresh} />
        <ListActor refresh={this.state.refresh}></ListActor>

      </>


    );

  }

}

export default App;
