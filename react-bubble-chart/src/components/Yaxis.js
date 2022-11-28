import React from 'react';

const Yaxis = (props) => {
    let height = props.height;
    let width = props.width;
    return ( <line x1={width/2} y1="0" x2={width/2} y2={height} stroke='black'  /> );
}
 
export default Yaxis;