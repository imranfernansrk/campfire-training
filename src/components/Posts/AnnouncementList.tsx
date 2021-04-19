import React, { useState } from "react";

const AnnouncementList = () => {
    const [announceList, setAnnouncementsist] = useState([
        {
            title: 'Announcement 01',
            desc: 'Announcements Description 01',
            postDate: 'Posted on 9/20'
        },
        {
            title: 'Announcement 02',
            desc: 'Announcements Description 02',
            postDate: 'Posted on 9/22'
        },
        {
            title: 'Announcement 03',
            desc: 'Announcements Description 03',
            postDate: 'Posted on 9/23'
        },
        {
            title: 'Announcement 04',
            desc: 'Announcements Description 04',
            postDate: 'Posted on 9/24'
        }
    ])
    return(
        <div>
            {
                announceList.map((data:any)=>(
                    <div className="announcement-detail-div">
                        <p className="announcement-detail-title">{data.title}</p>
                        <p className="announcement-detail-desc">{data.desc}</p>
                        <p className="announcement-detail-date">{data.postDate}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AnnouncementList;