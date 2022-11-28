import React from 'react';
import { chartConfig } from '../config/chartConfig';
import Label from './Label';

const YaxisLabel = (props) => {
    const height = chartConfig.height;
    const width = chartConfig.width;
    let coordinates = height/(props.labels.length-1);
    let padding = 10;
    return props.labels.map((labelName,ind)=>{
        let y = height - ind*coordinates;
        if(y === 0){
            y = 10 
        }
        return <Label key={y} x={width/2+padding} y={y} padding={padding} axis='yAxis' labelName={labelName} />
    })
}
 
export default YaxisLabel;