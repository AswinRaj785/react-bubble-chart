import React from 'react';
import { chartConfig } from '../config/chartConfig';

const Yaxis = (props) => {
    let height = chartConfig.height;
    let width = chartConfig.width;
    return (<React.Fragment>
        <line x1={width/2} y1="0" x2={width/2} y2={height} stroke='black'  />
        <text x={(width/2)-80} y='15' className='firstLetterCapitalize' >{chartConfig.chartLabels.yAxisLabel}</text>
    </React.Fragment> );
}
 
export default Yaxis;