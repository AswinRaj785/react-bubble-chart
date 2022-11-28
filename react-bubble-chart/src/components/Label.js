import React from 'react';

const Label = (props) => {
    console.log('test BubbleChart render')
    let x1, x2, y1, y2;
    if(props.axis === 'xAxis'){
        x1 = props.x;
        x2 = props.x;
        y1 = props.y - props.padding;
        y2 = y1 + (props.padding/3);
    }else if(props.axis === 'yAxis'){
        x1 = props.x - props.padding;
        x2 = x1 + (props.padding/3);
        y1 = props.y;
        y2 = props.y;
    }
    console.log(props.padding, props.padding/3, 'test padding')
    return ( 
    <React.Fragment>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke='black' />
        <text x={props.x} y={props.y} fill="black">{props.labelName}</text>
    </React.Fragment> );
}
 
export default Label;