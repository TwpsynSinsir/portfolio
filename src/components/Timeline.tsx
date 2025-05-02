import React from 'react'
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faSchool } from '@fortawesome/free-solid-svg-icons'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">
              Dev Academy Aotearoa
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Auckland, NZ</h4>
            <p>
              17 week course full-time web development bootcamp (680 Hours Class
              time) <br /> Front-end and Back-end hands-on experience. Built
              many web apps solo and as a team. <br /> Simulated real-world
              software development teams, focusing on planning, collaboration,
              delegation, and creating a complete application.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Auckland
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Auckland, NZ</h4>
            <p>
              Responsible for student welfare and accommodation security. <br />{' '}
              Trained in First-Aid, Mental Health Awareness, Suicide Prevention.{' '}
              <br /> Detail-oriented work, checking coworkers’ work. <br />{' '}
              Professional working environment.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              WSP Auckland Laboratory
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Auckland, NZ</h4>
            <p>
              Physically and mentally strenuous work. Health & Safety focus.{' '}
              <br /> Worked solo and grouped on dangerous projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">JET Programme</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Fukushima, Japan
            </h4>
            <p>
              Responsible for 4 Primary Schools, Teaching roughly 1000 students.{' '}
              <br /> Fostered good relations with supervisors and peers, working
              to improve student learning and enjoyment. <br /> Fluent use of
              Japanese and English in a work environment.{' '}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Timeline
