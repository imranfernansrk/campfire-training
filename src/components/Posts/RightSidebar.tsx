import React, { useState } from "react";
import AnnouncementList from "./AnnouncementList";
import MyGroup from "./MyGroup";

import { Button, Card } from "antd";


const RighSidebar = () => {
    const [brandCard, setBrandCard] = useState({
        brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1024px-Microsoft_logo_%282012%29.svg.png',
        brandDesc: 'Azure Discount for AARP Members'
    })

    return (
        <div className="right-sidebar-container">
            <Card className="brand-card">
                <div className="">
                    <p>
                        <img width="100%" alt="" src={brandCard.brandLogo} />
                    </p>
                    <div className="brand-details-div">
                    <p className="brand-details">{brandCard.brandDesc}</p>
                    </div>
                </div>
            </Card>
            <Card className="announcements-card" title="Recent Announcements">
                <AnnouncementList />
                <div className="view-more-link-div">
                    <a href="#" className="view-more-link">View All Announcements</a>
                </div>
            </Card>
            <Card title="My Groups" className="mygroup-list-card"
                actions={[
                    <Button size="small" className="mygroup-action-button">Create Group</Button>,
                    <Button size="small" className="mygroup-action-button">Explore Group</Button>
                ]}>
                <MyGroup />
                <div className="view-more-link-div">
                    <a href="#" className="view-more-link">View All Groups (10)</a>
                </div>
            </Card>
        </div>
    )
}

export default RighSidebar;