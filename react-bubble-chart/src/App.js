import { useEffect, useState } from 'react';
import './App.css';
import { chartConfig } from './config/chartConfig';
import BubbleChart from './page/BubbleChart';

function App() {
  const [chartData, setChartData] = useState([]);
  const chartLabels = chartConfig.chartLabels;
  const [apiLoading, setLoading] = useState(true)
  useEffect(()=>{
    const getBubbleChartData=()=>{
      fetch('https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77').then(response=>response.json()).then(data=>{
        setChartData(data)
        setLoading(false)
      }).catch(error=>console.log(error))
    }
    getBubbleChartData();
  },[])
  return (
    <div className='text-center'>
      <h1>{chartConfig.chartHeading}</h1>
      {
        apiLoading ? 
          <div className='text-center mt-1' >...Loading</div>
        :
          chartData.length > 0 ? 
          <BubbleChart chartLabels={chartLabels} chartData={chartData} />
          :
          <div className='text-center mt-1' >{chartConfig.noDataText}</div>
      }
    </div>
  );
}

export default App;
