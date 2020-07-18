import React, { useRef,useEffect,useState } from 'react';
import * as d3 from 'd3';

export default function LineChart () {
    const [data, setData] = useState([])
    const svgRef = useRef();

    useEffect(()=>{
        generateData();
        
        const svg = d3.select(svgRef.current)

        const xScale = d3.scaleLinear()
                .domain([0,data.length-1])
                .range([0, 1500])

        const yScale = d3.scaleLinear()
                .domain([-1,1])
                .range([150, 0])

        const xAxis = d3.axisBottom(xScale);
        svg.select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis)

        const yAxis =  d3.axisLeft(yScale);
        svg.select(".y-axis")
            .call(yAxis)

        const myLine  = d3.line()
            .x((value,index)=> xScale(index) )
            .y(yScale)
            .curve(d3.curveCardinal)

        const nested = d3.nest()
            .key(function (d){return d.key})
            .entries(data);
        
        console.log(nested)

        svg
            .selectAll(".line")
            .data([data])
            .join("path")
            .attr("d", myLine)
            .attr("stroke", "blue")
            .attr("fill", "none")
            .attr("border-radius", 10);

    },[data])

    function generateData(){
        
        for(var i = 0; i < 31; i++){
            var p = Math.sin(2*Math.PI*(2000+i)/23)
            data.push(p)

            //var e = Math.sin(2*Math.PI*(2000+i)/33)
            //data.push({key:"e",value:e})
        }
    }

    return(
        <React.Fragment>
            <svg ref={svgRef} style={{backgroundColor:'lightgrey'}} >
            </svg>
        </React.Fragment>
    )

}
