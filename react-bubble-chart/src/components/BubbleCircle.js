import React from 'react';
import { getEllipsis, getRandomColor } from '../utility/commonUtility';
import '../css/bubbleChart.css';
import { chartConfig } from '../config/chartConfig';

const BubbleCircle = (props) => {
    const getXandYPosition = (axis, chartObj)=>{
        try{
            let axisObj = {xAxis:{'name':'salary','labelState':'xAxisLabel', 'property':'width'}, yAxis:{'name':'compratio','labelState':'yAxisLabel', 'property':'height'}}
            let diffInCurrentPoint = chartObj[axisObj[axis]['name']] - props[[axisObj[axis]['labelState']]][0];
            let diffInLabels = props[[axisObj[axis]['labelState']]][1] - props[[axisObj[axis]['labelState']]][0];
            let relativePosition = diffInCurrentPoint/diffInLabels;
            let diffInUserCoordinateSystemPoints = chartConfig[[axisObj[axis]['property']]]/(props[[axisObj[axis]['labelState']]].length-1);
            let absolutePosition = diffInUserCoordinateSystemPoints*relativePosition;
            if(axis === 'yAxis'){
                absolutePosition = chartConfig[[axisObj[axis]['property']]] - absolutePosition 
            }
            return absolutePosition;
        }catch(error){
            console.log(error)
        }
    }
    return props.chartData.map(chartObj=>{
        let fillColor = getRandomColor();
        let x = getXandYPosition('xAxis', chartObj);
        let y = getXandYPosition('yAxis', chartObj);
        let radius = chartObj.headcount/2;
        return ( <React.Fragment key={chartObj.title}>
                <circle key={chartObj.salary+','+chartObj.compratio} cx={x} cy={y} r={radius} fill={fillColor} className='bubbleCircle'>
                    <title className=''>{JSON.stringify(chartObj).replace('/{/\g','')}</title>
                </circle> 
                <text x={x} y={y} fill='white' textAnchor='middle' className='bubbleCircleText'>{getEllipsis(radius,chartObj.title)}<title className=''>{chartObj.title}</title></text>
            </React.Fragment>);
    })
}
 
export default BubbleCircle;