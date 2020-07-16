import React from 'react';
import './App.css';
import Chart from 'react-apexcharts'

var options = {
  chart: {
    type: 'curve',
  },
  stroke: {
    curve: 'smooth',
  },
  series: [{
    data: [30,40,35,50,49,60,70,91,125]
  }],
}

var series = [{
  data: [30, 40, 45, 50, 49, 60, 70, 91]
}]

function App() {
  return (
    <div className="App">
        <Chart options={options} series={series} type="line" width={500} height={320} />
    </div>
  );
}

export default App;
