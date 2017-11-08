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
		const output = (
			<UserOutput
				name1={this.state.userOutput[0].name}
				name2={this.state.userOutput[1].name}
			/>
		)
    return (
      <div className="App">
        <h1> Exercise 1 - React: The Complete Guide</h1>
        <UserInput
        changed={this.swichtStateHandler}
        currentName={this.state.userOutput[0].name}
        />
				<div className="outputs">
					{output}
					{output}
					{output}
				</div>
      </div>
    );
  }
}

export default App;
