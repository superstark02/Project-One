import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

export default function MultiLineChart() {
    const [data, setData] = useState([])
    const svgRef = useRef();

    useEffect(() => {
        generateData();

        var margin = { top: 10, right: 40, bottom: 150, left: 70 },
            width = 760 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var w = width + margin.left + margin.right;
        var h = height + margin.top + margin.bottom;

        var svg = d3.select("body").append("svg") // this appends a new SVG element to body
            .attr("width", w) // set the width 
            .attr("height", h) // set the height
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // x scale will handle time
        var xScale = d3.scaleBand().range([0, width]).padding(0.1);


        // y scale will handle energy consumption values
        var yScale = d3.scaleLinear().range([height, 0]);

        // line generator function
        const y = d3.scaleLinear()
            .domain([-1, 1])
            .range([150, 0])


        var line = d3.line()
            .curve(d3.curveBasis)
            .x(function (d) { return xScale(d.value); })
            .y(y)

        var countries = d3.nest()
            .key(function (d) { return d.key; })
            .entries(data);

        console.log(countries);

        yScale.domain([-1, 1]);
        xScale.domain([0, 30]);

        svg.selectAll("path")
            .data(countries)
            .enter()
            .append("path")
            .attr("class", "line")
            .attr("d", function (d) {
                return line(d.values);
            });

    }, [data])

    function generateData() {

        for (var i = 0; i < 31; i++) {
            var p = Math.sin(2 * Math.PI * (2000 + i) / 23)
            data.push({ key: 'p', value: p })

            var e = Math.sin(2 * Math.PI * (2000 + i) / 33)
            data.push({ key: "e", value: e })
        }
    }

    return (
        <React.Fragment>
            <svg ref={svgRef} style={{ backgroundColor: 'lightgrey' }} >
                <g className="segment" ></g>
            </svg>
        </React.Fragment>
    )

}
