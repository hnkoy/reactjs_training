import React, { Component } from 'react';
import TitleH1 from './components/Titles/TitleH1';
import Button from './components/Buttons/Button';
import Book from './containers/Books/Book';





class App extends Component {
  state = {
    addBook: false
  }

  handleAddBook = () => {
    this.setState((oldState, props) => {
      return { addBook: !oldState.addBook }
    })
  }





  render() {
    return (
      <div className='container'>
        <TitleH1>Books List</TitleH1>

        <Book addBook={this.state.addBook} closeForm={()=>this.setState({addBook:false})}></Book>
        <Button btnStyle="btn-success" css="w-100" Clic={this.handleAddBook}>{!this.state.addBook ? 'Add' : 'Close add'}</Button>



      </div>

    )
  }

}
export default App;