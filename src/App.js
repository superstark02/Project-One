import React from 'react';
import './App.css';
import Chart from 'react-apexcharts'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }

    var p = [];
    var e = [];
    var i = [];

    var pPercentage = []

    var t = (new Date() - new Date(1995, 11, 4)) / (1000 * 60 * 60 * 24);

    for (var days = 0; days < 10; days++) {
      var py = Math.sin((Math.PI * 2 * t / 23) + days)
      var ey = Math.sin((Math.PI * 2 * t / 28) + days)
      var iy = Math.sin((Math.PI * 2 * t / 33) + days)

      if (days === 0) {
        var total = py+ey+iy
        pPercentage.push(py*100/total)
        pPercentage.push(ey*100/total)
        pPercentage.push(iy*100/total)
      }

      p.push({ x: (Math.PI * 2 * t / 23) + days, y: py })

      e.push({ x: (Math.PI * 2 * t / 23) + days, y: ey })

      i.push({ x: (Math.PI * 2 * t / 23) + days, y: iy })
    }

    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          type: 'numeric'
        },
        stroke: {
          curve: 'smooth',
        }
      },
      series: [{
        name: 'P',
        data: p
      }, {
        name: 'E',
        data: e
      }, {
        name: 'I ',
        data: i
      }],

      optionsRadialP: {
        series: [20],
        chart: {
          height: 200,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        labels: ['Physical'],
      },

      optionsRadialE: {
        series: [20],
        chart: {
          height: 200,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        labels: ['Emotional'],
      },

      optionsRadialI: {
        series: [20],
        chart: {
          height: 200,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        labels: ['Intelligence'],
      },

      pRadial: [
        pPercentage[0]
      ],
      eRadial: [
        pPercentage[1]
      ],
      iRadial: [
        pPercentage[2]
      ]
    }
  }

  render() {
    return (
      <div className="wrap" style={{ flexDirection: "column", height: '100vh' }} >
        <div className="wrap" >
          <Chart options={this.state.optionsRadialP} series={this.state.pRadial} type="radialBar" width={200} height={200} />
          <Chart options={this.state.optionsRadialE} series={this.state.eRadial} type="radialBar" width={200} height={200} />
          <Chart options={this.state.optionsRadialI} series={this.state.iRadial} type="radialBar" width={200} height={200} />
        </div>
        <Chart options={this.state.options} series={this.state.series} type="line" width={1000} height={320} />
      </div>
    );
  }
}

export default App;
