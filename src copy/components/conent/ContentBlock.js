import React from 'react'
import LineChart from '../LineChart.js';

function ContentBlock1() {
    return (
        <div className="wrapper">
            <div className="content">
                <p className="content__title">Hi Fillip,</p>
                <p className="content__discription">Checkout your latest projects and their progress.</p>
            </div>
            <div className="chart">
                <LineChart />
            </div>
        </div>

    )
}

export default ContentBlock1
