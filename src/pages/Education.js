import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Education() {
    return (
        <div className="education">
            <VerticalTimeline lineColor="#3e497a">

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Completed 2024"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title">Statement of Attainment in Networking Basics for Cyber </h3>
                    <h4 classname="vertical-timeline-element-subtitle">TAFE NSW</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Completed 2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title">AWS Certified Cloud Practitioner </h3>
                    <h4 classname="vertical-timeline-element-subtitle">Amazon Web Services</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Completed 2022"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title"> Bachelor of Computing, Major in Computer Science</h3>
                    <h4 classname="vertical-timeline-element-subtitle">The University of Sydney</h4>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}

export default Education