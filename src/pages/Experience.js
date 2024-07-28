import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 2022 - Aug 2023"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title"> Test Engineer</h3>
                    <h4 classname="vertical-timeline-element-subtitle">Wipro Limited</h4>
                    <p>
                        <ul>
                            <li>Worked in a highly motivated team to enable introduction of new mobile devices (Smartphones, Tablets, Routers, IoT modules/devices) in market.</li>

                            <li>Validated native apps, carrier specific apps, radio performance and protocol conform-ance aspects of LTE (4G) & New Radio (5G) technologies for the Telstra Network.</li>

                            <li>Conducted functional, performance, and regression testing to ensure the quality and reliability of mobile devices.</li>

                            <li>Utilized automated testing tools and frameworks to enhance testing efficiency and coverage.</li>

                            <li>Analysed test results, documented defects, and tracked issues to closure using bug tracking systems.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2021 - Feb 2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title"> Customer Service Team Member</h3>
                    <h4 classname="vertical-timeline-element-subtitle">BIG W</h4>
                    <p>
                        <ul>
                            <li>Provided exceptional customer service by addressing inquiries, resolving complaints, and ensuring customer satisfaction.</li>

                            <li>Maintained up-to-date knowledge of products, services, and company policies to ef-fectively assist customers.</li>

                            <li>Collaborated with team members and other departments to resolve complex issues and improve overall customer experience.</li>

                        </ul>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2021 – June 2021"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title">Warehouse Assistant</h3>
                    <h4 classname="vertical-timeline-element-subtitle">BODIE'z</h4>
                    <p>
                        <ul>
                            <li>Assisted in the receiving, unpacking, and organizing of incoming stock and materials.</li>

                            <li>Accurately picked, packed, and shipped orders according to company procedures and customer specifications.</li>

                            <li>Maintained a clean and organized warehouse environment to ensure safety and effi-ciency.</li>

                        </ul>
                    </p>
                </VerticalTimelineElement>



            </VerticalTimeline>
        </div>
    )
}

export default Experience