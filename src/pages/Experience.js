import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019 - 2022"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title"> Bachelor of Computing | The University of Sydney</h3>
                    <h4 classname="vertical-timeline-element-subtitle">Sydney, New South Wales</h4>
                    <p>Major in Computer Science, Minor in Software Development</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - 2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title"> Customer Service Team Member | BIG W</h3>
                    <h4 classname="vertical-timeline-element-subtitle">Sydney, New South Wales</h4>
                    <p>Worked in the online section where items were collected and tagged to be packaged for online delivery</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022 - Present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title"> Test Engineer | Wipro </h3>
                    <h4 classname="vertical-timeline-element-subtitle">Sydney, New South Wales</h4>
                    <p>Performed various types of testing for wireless devices connected to the Telstra network</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience