import React, { useState } from "react";

import { Avatar, Card, Image, Row, Col } from "antd";
import SuggestedMemberList from "./SuggestedMemberList";
import UpcomingEventList from "./UpcomingEventsList";


const LeftSidebar = () => {
    const [userDetails, setUserDetails] = useState({
        fullName: 'Imran Basha',
        designation: 'Developer',
        company: '10decoders'
    });

    return (
        <div className="profile-card-container">
            <Card className="profile-card">
                <div className="profile-detail-card">
                    <p>
                        <Avatar size="large"
                            src={<Image preview={false} alt="" src="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" />}
                        />
                    </p>
                    <p><b>{userDetails.fullName}</b></p>
                    <p>{userDetails.designation}</p>
                    <p><b>{userDetails.company}</b></p>
                </div>
                <div className="view-more-link-div">
                    <a href="#" className="view-more-link">Edit Profile</a>
                </div>
            </Card>
            <Card className="suggested-card" title="Suggested Connections">
                <SuggestedMemberList />
                <div className="view-more-link-div">
                    <a href="#" className="view-more-link">View Network</a>
                </div>
            </Card>
            <Card title="Upcoming Events" className="upcoming-event-card">
                <UpcomingEventList />
                <div className="view-more-link-div">
                    <a href="#" className="view-more-link">View Events Calendar</a>
                </div>
            </Card>
        </div>
    )
}

export default LeftSidebar;