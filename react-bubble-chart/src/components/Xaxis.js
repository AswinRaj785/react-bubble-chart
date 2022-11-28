import React from 'react';
import { chartConfig } from '../config/chartConfig';

const Xaxis = (props) => {
    let height = chartConfig.height;
    let width = chartConfig.width;
    return ( <React.Fragment key='xAxisLine'>
        <line x1='0' y1={height/2} x2={width} y2={height/2} stroke='black'  />
        <text x={width-50} y={(height/2)-20} className='firstLetterCapitalize'>{chartConfig.chartLabels.xAxisLabel}</text>
    </React.Fragment>  );
}
 
export default Xaxis;