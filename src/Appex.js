import React, { Component } from 'react'
import './App.css';
import Chart from 'react-apexcharts'

export class Appex extends Component {
    constructor(props) {
        super(props);

        var p = [];
        var e = [];
        var i = [];

        var pPercentage = []

        var t = (new Date() - new Date(2012, 12, 12)) / (1000 * 60 * 60 * 24);

        for (var days = 0; days < 31; days++) {
            var py = Math.round(100 * Math.sin((Math.PI * 2 * t / 23) + days + t))
            var ey = Math.round(100 * Math.sin((Math.PI * 2 * t / 28) + days + t))
            var iy = Math.round(100 * Math.sin((Math.PI * 2 * t / 33) + days + t))

            if (days === 0) {
                var total = py + ey + iy

                var percentageP = py * 100 / total;
                var percentageE = ey * 100 / total;
                var percentageI = iy * 100 / total;

                if (percentageP < 0) {
                    pPercentage.push(percentageP * -1)
                } else {
                    pPercentage.push(percentageP)
                }

                if (percentageE < 0) {
                    pPercentage.push(percentageE * -1)
                } else {
                    pPercentage.push(percentageE)
                }

                if (percentageI < 0) {
                    pPercentage.push(percentageI * -1)
                } else {
                    pPercentage.push(percentageI)
                }
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
            ],

            chartStyle: {
                colors: ['#FFFFFF', '#72DEC2', '#FFB545'],
                series: [
                    {
                        name: 'Intellectual',
                        data: py,
                    },
                    {
                        name: 'Physical',
                        data: ey,
                    },
                    {
                        name: 'Emotional',
                        data: iy,
                    },
                ],
                tooltip: {
                    enabled: true,
                    theme: 'dark',
                    fontFamily: 'Space-Mono, Monospace',
                    x: {
                        show: true,
                    },
                    y: {
                        formatter: function (value) {
                            return `${value}%`;
                        },
                    },
                },
                legend: {
                    show: false,
                },
                toolbar: {
                    show: false,
                },
                grid: {
                    show: false,
                },

                chart: {
                    id: 'test',
                    height: '100%',
                    parentHeightOffset: 105,
                    sparkline: {
                        enabled: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'straight',
                    lineCap: 'round',
                    width: 10,
                }
            }
        }
    }

    render() {
        return (
            <div className="wrap" style={{ flexDirection: "column" }} >
                <div className="wrap" >
                    <Chart options={this.state.optionsRadialP} series={this.state.pRadial} type="radialBar" width={200} height={200} />
                    <Chart options={this.state.optionsRadialE} series={this.state.eRadial} type="radialBar" width={200} height={200} />
                    <Chart options={this.state.optionsRadialI} series={this.state.iRadial} type="radialBar" width={200} height={200} />
                </div>
                <Chart options={this.state.chartStyle} series={this.state.series} type="line" width={1300} height={320} />
            </div>
        );
    }
}

export default Appex
