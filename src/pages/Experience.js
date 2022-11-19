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
                    <p>Major in Computer Science, Minor in Software Development.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - 2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title"> Customer Service Team Member | BIG W</h3>
                    <h4 classname="vertical-timeline-element-subtitle">Sydney, New South Wales</h4>
                    <p>Greeted customers with a friendly and helpful attitude. Answered any questions regarding inventory, sales, and promotions. Carefully and accurately rang up items, handled cash register and neatly packed customer bags. Worked well with other employees to ensure smooth processes.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022 - Present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title"> Test Engineer | Wipro </h3>
                    <h4 classname="vertical-timeline-element-subtitle">Sydney, New South Wales</h4>
                    <p>Worked in a highly motivated team to enable introduction of new mobile devices (Smartphones, Tablets, Routers, IoT modules/devices) in market. Validated native apps, carrier specific apps, radio performance and protocol conformance aspects of LTE (4G) & New Radio (5G) technologies for the Telstra Network.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience