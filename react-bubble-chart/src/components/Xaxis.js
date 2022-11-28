import React from 'react';

const Xaxis = (props) => {
    console.log('test Xaxis render')
    let height = props.height;
    let width = props.width;
    return ( <line x1='0' y1={height/2} x2={width} y2={height/2} stroke='black'  /> );
}
 
export default Xaxis;