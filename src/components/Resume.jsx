import React from 'react'
import Heading from '../utils/Heading'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// icons
import { MdOutlineWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";



const Resume = () => {
    return (
        <div className='bg-[#0f1a27] px-10 pb-10' id="resume">

            <Heading heading="My resume" inner="resume" />



            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Sep 2023 - Dec 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdOutlineWork />}
                >
                    <h3 className="vertical-timeline-element-title" style={{
                        fontWeight: "bold"
                    }}>Networking (Intern)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cisco Certified Network Associate (CCNA)</h4>
                    <h4 className="vertical-timeline-element-subtitle">MikroTik Certified Network Associate (MTCNA)</h4>
                    <p>
                        WellUp Technology,Chittagong
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019 - 2023"
                    dateClassName='text-white'
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ 
                        fontWeight: "bold"
                    }}>Diploma In Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">Computer Science and Technology</h4>
                    <p>
                        Chittagong Polytechnic Institute
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017 - 2019"
                    dateClassName='text-white'
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Secondary School Certificate</h3>
                    <h4 className="vertical-timeline-element-subtitle">Science</h4>
                    <p>
                        Banigram Sadhanpur High School
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2014 - 2016"
                    dateClassName='text-white'
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Junior School Certificate</h3>
                    <h4 className="vertical-timeline-element-subtitle">General</h4>
                    <p>
                        Raichata pramashia Model High School
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<IoIosStar />}
                />
            </VerticalTimeline>

        </div>
    )
}

export default Resume