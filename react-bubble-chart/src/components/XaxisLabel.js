import React from 'react';
import { chartConfig } from '../config/chartConfig';
import Label from './Label';
const XaxisLabel = (props) => {
    const width = chartConfig.width;
    const height = chartConfig.height;
    let coordinates = width/(props.labels.length-1);
    let padding = 15;
    return props.labels.map((labelName,ind)=>{
        let x = ind*coordinates;
        if(x === Number(width)){
            x = width - 30
        }
        return <Label key={x} x={x} y={height/2+padding} padding={padding} axis='xAxis' labelName={labelName} />
    })
}
 
export default XaxisLabel;