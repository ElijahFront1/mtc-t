import React from 'react'

function ProfileInfo() {
    return (
        <div>
            <div className="user-info">
                <div className="user-info__bell">
                    <i className="bi bi-bell"></i>
                    <sup>8</sup>
                </div>
                <span className="user-info__name">Filip J.</span>
                <i className="bi bi-chevron-down"></i>
                <span className="user-info__circle">F</span>
            </div>
        </div>
    )
}

export default ProfileInfo
