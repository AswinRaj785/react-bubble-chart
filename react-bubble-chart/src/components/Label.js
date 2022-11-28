import React from 'react';

const Label = (props) => {
    return ( <text x={props.x} y={props.y} fill="black">{props.labelName}</text> );
}
 
export default Label;