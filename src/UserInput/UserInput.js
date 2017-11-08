import React from 'react';
import './UserInput.css'


const UserInput = (props) => {
    // For inline style
    // const style {
    //     border: '2px solid red'
    // }
    return (
        <div className="UserInput">
            <input className="Input"
            type="text"
            /* style={style}  */
            placeholder="Type your new name here"
            onChange={props.changed} 
            value={props.currentName}/>
        </div>
    );
}

export default UserInput;