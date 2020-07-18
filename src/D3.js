import React, { Component } from 'react'
import Chart from './Data/Chart'
import MultiLineChart from './Data/MultiLine'

export class D3 extends Component {
    render() {
        return (
            <div>
                <Chart/>
                <MultiLineChart/>
            </div>
        )
    }
}

export default D3
