import React from 'react'
import WorkingHoursChartSmall from '../WorkingHoursChartSmall'

function ContentBlock1() {
    return (
        <div className="content-block">
            <div className="headline">
                <span className="headline__title">Crunch some Numbers</span>
                <span className="headline__discription">See how your projects are progressing via the new statistics engine.</span>
            </div>
            <div>
                <div className="three-row-charting">
                    <div>
                        <div>
                            <div className="d-block">96</div>
                            <div>Woking Hours</div>
                        </div>
                        <div>
                            <WorkingHoursChartSmall />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>1,204</div>
                            <div>Conversations</div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>7</div>
                            <div>People</div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>

    )
}

export default ContentBlock1
