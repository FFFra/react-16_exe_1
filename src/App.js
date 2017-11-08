import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    userOutput : [
      {name: "Rick"},
      {name: "Morty"}
    ]
  }  
  
  swichtStateHandler = (event) => {
    console.log('Typing...', event);
    this.setState({
      userOutput : [
        {name: event.target.value},
        {name: "Morty"}
      ]
    })
  }
    
  render() {
    return (
      <div className="App">
        <h1> Exercise 1 - React: The Complete Guide</h1>
        <UserInput changed={this.swichtStateHandler.bind(this)}/>
        <UserOutput 
        name1={this.state.userOutput[0].name} 
        name2={this.state.userOutput[1].name}
        />
        <UserOutput 
        name1={this.state.userOutput[0].name} 
        name2={this.state.userOutput[1].name}
        />
        <UserOutput 
        name1={this.state.userOutput[0].name} 
        name2={this.state.userOutput[1].name}
        />
      </div>
    );
  }
}

export default App;
