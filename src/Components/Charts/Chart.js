import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import SoundsControl from '../Sound-Control/Sounds-Control';

export default function LineChart() {
    const [data] = useState([])
    const [e] = useState([])
    const [i] = useState([])
    const svgRef = useRef();

    useEffect(() => {
        generateData();

        const svg = d3.select(svgRef.current)

        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, 1500])

        const yScale = d3.scaleLinear()
            .domain([-1, 1])
            .range([150, 0])

        const xAxis = d3.axisBottom(xScale);
        svg.select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis)

        const yAxis = d3.axisLeft(yScale);
        svg.select(".y-axis")
            .call(yAxis)

        const myLine = d3.line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(d3.curveCardinal)

        svg
            .selectAll(".line")
            .data([data])
            .join("path")
            .attr("d", myLine)
            .attr("stroke", "blue")
            .attr("fill", "none")
            .attr("border-radius", 10);

    }, [data])

    function generateData() {

        for (var days = 0; days < 31; days++) {
            var P = Math.sin(2 * Math.PI * (2000 + days) / 23)
            data.push(P)
        }

        var E = Math.sin(2 * Math.PI * (2000 + days) / 33)
        e.push(E)

        var I = Math.sin(2 * Math.PI * (2000 + days) / 33)
        i.push(I)

        var total = e[0] + i[0] + data[0]
    }

    return (
        <React.Fragment>
            <div className="wrap" >
                <svg ref={svgRef} style={{ backgroundColor: 'lightgrey' }} >
                    <g className="segment" ></g>
                </svg>
            </div>
            <SoundsControl 
                love_volume={0} 
                happy_volume={0} 
                tranquality_volume={0} 
                />
        </React.Fragment>
    )

}
