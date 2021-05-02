import React from 'react'
import LineChart from '../LineChart.js';

function ContentBlock1() {
    return (
        <div className="content-block">
            <div className="headline">
                <span className="headline__title">Hi Fillip,</span>
                <span className="headline__discription">Checkout your latest projects and their progress.</span>
            </div>
            <div className="chart">
                <LineChart />
            </div>
        </div>

    )
}

export default ContentBlock1
