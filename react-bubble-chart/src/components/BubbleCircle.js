import React from 'react';
import { getRandomColor } from '../utility.js/commonUtility';

const BubbleCircle = (props) => {
    const getXandYPosition = (axis, chartObj)=>{
        try{
            let axisObj = {xAxis:{'name':'salary','labelState':'xAxisLabel', 'property':'width'}, yAxis:{'name':'compratio','labelState':'yAxisLabel', 'property':'height'}}
            let diffInCurrentPoint = chartObj[axisObj[axis]['name']] - props[[axisObj[axis]['labelState']]][0];
            let diffInLabels = props[[axisObj[axis]['labelState']]][1] - props[[axisObj[axis]['labelState']]][0];
            let relativePosition = diffInCurrentPoint/diffInLabels;
            let diffInUserCoordinateSystemPoints = props[[axisObj[axis]['property']]]/(props[[axisObj[axis]['labelState']]].length-1);
            let absolutePosition = diffInUserCoordinateSystemPoints*relativePosition;
            if(axis === 'yAxis'){
                absolutePosition = props[[axisObj[axis]['property']]] - absolutePosition 
            }
            return absolutePosition;
        }catch(error){
            console.log(error)
        }
    }
    return props.chartData.map(chartObj=>{
        console.log(getXandYPosition('xAxis',chartObj), getXandYPosition('yAxis', chartObj), 'test x y')
        let fillColor = getRandomColor();
        let x = getXandYPosition('xAxis', chartObj);
        let y = getXandYPosition('yAxis', chartObj);
        let radius = chartObj.headcount/2;
        return ( <React.Fragment key={chartObj.title}>
                <circle key={chartObj.salary+','+chartObj.compratio} cx={x} cy={y} r={radius} fill={fillColor} className='bubbleCircle' aria-labelledby={chartObj.title}>
                    </circle> 
                <text x={x} y={y} fill='white' textAnchor='middle'>{chartObj.title}</text>
            </React.Fragment>);
    })
}
 
export default BubbleCircle;