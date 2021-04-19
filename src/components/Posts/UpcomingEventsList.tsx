import { useState } from "react";

const UpcomingEventList = () => {
    const [upcomingEvents, setUpcomingEvent] = useState([
        {
            eventName: 'Event 01',
            eventDate: new Date().toString(),
        },
        {
            eventName: 'Event 02',
            eventDate: new Date().toString(),
        },
        {
            eventName: 'Event 03',
            eventDate: new Date().toString(),
        }
    ])
    return (
        <div>
            {
                upcomingEvents.map((data: any) => (
                    <div className="upcoming-event-card-details">
                        <p className="upcoming-event-name">{data.eventName}</p>
                        <p className="upcoming-event-date">{data.eventDate}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default UpcomingEventList;