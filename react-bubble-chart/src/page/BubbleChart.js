import React, { useEffect, useState } from 'react';
import BubbleCircle from '../components/BubbleCircle';
import Xaxis from '../components/Xaxis';
import XaxisLabel from '../components/XaxisLabel';
import Yaxis from '../components/Yaxis';
import YaxisLabel from '../components/YaxisLabel';
import { chartConfig } from '../config/chartConfig';

function BubbleChart(props) {
    let chartData = props.chartData;
    const chartLabels = props.chartLabels;
    const [minAndMaxValue, setMinAndMaxValue] = useState({
        maxYValue : 0,
        minYValue : 0,
        maxXValue : 0,
        minXValue : 0
    })
    const [listOfXaxisLabels, setListofXaxisLabels] = useState([]);
    const [listOfYaxisLabels, setListofYaxisLabels] = useState([]);
    const noOfYAxisLabels = 7;
    const noOfXAxisLabels = 5;

    useEffect(()=>{
        const getMinandMaxValue = () =>{
            let valueObj = minAndMaxValue;
            chartData.forEach((obj,ind)=>{
                if(obj[chartLabels.yAxisLabel] > valueObj.maxYValue){
                    valueObj.maxYValue = obj[chartLabels.yAxisLabel]
                }
                if((obj[chartLabels.yAxisLabel] < valueObj.minYValue) || (ind === 0)){
                    valueObj.minYValue = obj[chartLabels.yAxisLabel]
                }
                if(obj[chartLabels.xAxisLabel] > valueObj.maxXValue){
                    valueObj.maxXValue = obj[chartLabels.xAxisLabel] 
                }
                if((obj[chartLabels.xAxisLabel] < valueObj.minXValue) || (ind === 0)){
                    valueObj.minXValue = obj[chartLabels.xAxisLabel]
                }
            })
            setMinAndMaxValue(valueObj)
            let listOfXaxisLabels = getListOfLabels(valueObj.maxXValue, valueObj.minXValue, noOfXAxisLabels);
            let listOfYaxisLabels = getListOfLabels(valueObj.maxYValue, valueObj.minYValue, noOfYAxisLabels);
            setListofXaxisLabels(listOfXaxisLabels);
            setListofYaxisLabels(listOfYaxisLabels);
        }
        const getListOfLabels = (maxVal, minVal, length) =>{
            let difference = maxVal - minVal;
            let range = difference/5;
            let labelList = [];
            let iterance = -1;
            while(iterance <= length ){
                labelList.push(minVal+(range*iterance)); 
                iterance +=1;
            }
            return labelList
        }
        getMinandMaxValue()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const width = chartConfig.width;
    const height = chartConfig.height;
    // const paddingTop = 200;
    const paddingDown = chartConfig.viewPortCoordinatepaddingDown;
    const paddingRight = chartConfig.viewPortCoordinatepaddingRight;
    return ( <svg width={width+paddingRight} height={height+paddingDown}>
        {
            listOfXaxisLabels.length > 0 && listOfYaxisLabels.length > 0 ? 
                <React.Fragment key={'chartComponents'} >
                    <Xaxis/>
                    <XaxisLabel labels={listOfXaxisLabels} />
                    <Yaxis />
                    <YaxisLabel labels={listOfYaxisLabels} />
                    <BubbleCircle xAxisLabel={listOfXaxisLabels} yAxisLabel={listOfYaxisLabels} chartData={chartData}/>
                </React.Fragment>
            :
            ''
        }
    </svg> );
}

export default BubbleChart;