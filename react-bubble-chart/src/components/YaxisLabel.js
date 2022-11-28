import React from 'react';
import Label from './Label';

const YaxisLabel = (props) => {
    let coordinates = props.height/(props.labels.length-1);
    let padding = 15;
    return props.labels.map((labelName,ind)=>{
        let y = props.height - ind*coordinates;
        if(y === 0){
            y = 10 
        }
        return <Label key={y} x={props.width/2+padding} y={y} padding={padding} axis='yAxis' labelName={labelName} />
    })
}
 
export default YaxisLabel;