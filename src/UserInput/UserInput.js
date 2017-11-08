import React from 'react';
import './UserInput.css'


const UserInput = (props) => {
    return (
        <div className="UserInput">
            <input className="Input"
            type="text" 
            placeholder="Type your new name here"
            onChange={props.changed} 
            value={props.currentName}/>
        </div>
    );
}

export default UserInput;