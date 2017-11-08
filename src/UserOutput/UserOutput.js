import React from 'react';
import './UserOutput.css'


const UserOutput = (props) => {

    return (
        <div className="UserOutput">    
            <p>First paragraph written by {props.name1}</p>
            <p>Second paragraph written by {props.name2}</p>
        </div>    
    );
}


export default UserOutput;