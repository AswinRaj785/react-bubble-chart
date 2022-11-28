import React from 'react';
import Label from './Label';
const XaxisLabel = (props) => {
    let coordinates = props.width/(props.labels.length-1);
    let padding = 15;
    return props.labels.map((labelName,ind)=>{
        let x = ind*coordinates;
        if(x == props.width){
            x = props.width - 30
        }
        return <Label key={x} x={x} y={props.height/2+padding} axis='xAxis' labelName={labelName} />
    })
}
 
export default XaxisLabel;