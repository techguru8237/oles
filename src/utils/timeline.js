import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jan 2022 - Nov 2023"
          dateClassName="text-dark mx-lg-2"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              size="2x"
              icon={faBriefcase}
              className="timeline-work-icon"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Senior Web Developer
          </h3>
          <h6 className="vertical-timeline-element-subtitle mt-1">Fivecube</h6>
          <p>Express | React.JS | TypeScript | Redux</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Dec 2020 - Apr 2022"
          dateClassName="text-dark mx-lg-2"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              size="2x"
              icon={faBriefcase}
              className="timeline-work-icon"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h6 className="vertical-timeline-element-subtitle mt-1">
            SkySoft.tech
          </h6>
          <p>React.JS | TypeScript | Zustand</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jun 2018 - Aug 2020"
          dateClassName="text-dark mx-lg-2"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              size="2x"
              icon={faBriefcase}
              className="timeline-work-icon"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Associate Software Engineer
          </h3>
          <h6 className="vertical-timeline-element-subtitle mt-1">Rocque</h6>
          <p>React.JS | Express.JS | PostgreSQL</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          dateClassName="mx-lg-2"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              size="2x"
              icon={faGraduationCap}
              className="timeline-grad-icon"
            />
          }
        >
          <h3 className="vertical-timeline-element-title mb-4">
            Master of Science in Computer Science
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
}

export default Timeline;
