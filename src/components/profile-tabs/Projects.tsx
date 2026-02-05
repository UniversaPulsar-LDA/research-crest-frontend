import Image from "next/image";
import { RiNextjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { SiRstudioide } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { useState } from "react";
//import ProjectModal from "@/components/ProjectModal";
import { IconType } from "react-icons";
interface ProjectItem {
  id: number;
  title: string;
  desc: string;
  percent: number;
  tech: string;
  type: "Ongoing" | "Completed";
  startDate: string;
  barClass: string;
  topIcon: string;
  centerIcon: IconType;
  theme: string;
}
const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Next.Js Project",
    desc: "A modern, high-performance web application built with server-side rendering and optimized routing.",
    percent: 100,
    tech: "Completion Date: 18 Mar 2021",
    type: "Completed",
    startDate: "2021-03-18",
    barClass: "bar-tal",
    topIcon: "/images/icons/topdvlfttl.svg",
    centerIcon: RiNextjsLine,
    theme: "teal",
  },
  {
    id: 2509824,
    title: "Kleon – Data Science Project",
    desc: "A data-driven research project focused on statistical analysis and insight extraction.",
    percent: 80,
    tech: "Start Date: 02 Jul 2022",
    type: "Ongoing",
    startDate: "2022-07-02",
    barClass: "bar-blu",
    topIcon: "/images/icons/topdvlft.svg",
    centerIcon: SiRstudioide,
    theme: "black",
  },
  {
    id: 3,
    title: "Admin Portal",
    desc: "A role-based admin dashboard for managing users, content, and system analytics.",
    percent: 38,
    tech: "Start Date: 09 Sep 2023",
    type: "Ongoing",
    startDate: "2023-09-09",
    barClass: "bar-blk",
    topIcon: "/images/icons/topdvlft.svg",
    centerIcon: RiReactjsFill,
    theme: "black",
  },
  {
    id: 4,
    title: "Backend API",
    desc: "A scalable RESTful API handling authentication, data processing, and integrations.",
    percent: 100,
    tech: "Completion Date: 09 Nov 2024",
    type: "Completed",
    startDate: "2024-09-09",
    barClass: "bar-tal",
    topIcon: "/images/icons/topdvlfttl.svg",
    centerIcon: RiJavaLine,
    theme: "teal",
  },
  {
    id: 5,
    title: "Flutter Mobile App",
    desc: "A cross-platform mobile application with smooth UI and consistent performance.",
    percent: 54,
    tech: "Start Date: 27 May 2025",
    type: "Ongoing",
    startDate: "2025-05-27",
    barClass: "bar-blk",
    topIcon: "/images/icons/topdvlft.svg",
    centerIcon: RiFlutterFill,
    theme: "black",
  },
];

// Timeline ডেটা array
const timelineData = [
  {
    text: "Next.Js Project",
    year: "18 Mar 2021",
  },
  {
    text: "Kleon – Data Science Project",
    year: "02 Jul 2022",
  },
  {
    text: "Admin Portal",
    year: "09 Sep 2023",
  },
  {
    text: "Backend API",
    year: "09 Sep 2024",
  },
  {
    text: "Flutter Mobile App",
    year: "27 May 2025",
  },
];

// const truncateText = (text, maxLength = 35) => {
//   return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
// };

const truncateText = (text: string, maxLength: number = 35): string => {
  return text.length > maxLength
    ? text.slice(0, maxLength) + "..."
    : text;
};

export default function Projects() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const ongoingProjects = projectsData.filter((p) => p.type === "Ongoing");
  const completedProjects = projectsData.filter((p) => p.type === "Completed");

  const allProjects = [...ongoingProjects, ...completedProjects];
  const groupedByYear: Record<number, any[]> = {};
  allProjects.forEach((p) => {
    const year = new Date(p.startDate).getFullYear();
    if (!groupedByYear[year]) groupedByYear[year] = [];
    groupedByYear[year].push(p);
  });

  const orderedYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => a - b);

const renderProjectCard = (item: ProjectItem) => (
    <a
      key={item.id}
      href={`/projects/${item.id}`} // project details page
      target="_blank"              // open in new tab
      rel="noopener noreferrer"
      className={`project ${item.theme} tspj`}
      style={{ cursor: "pointer" }}
    >
      <div className="top-decor-lft">
        <img src={item.topIcon} alt="top decor" className="topdv" />
        <div className="mtr">
          <item.centerIcon />
        </div>
      </div>

      <div className="top">
        <span className="title">{item.title}</span>
        <span className="desc">{item.desc}</span>
      </div>

      <div className="prggress-row">
        <div className="bar">
          <span className={item.barClass} style={{ width: `${item.percent}%` }} />
        </div>
        <span className="percent">{item.percent}%</span>
      </div>

      <div className="bottom">
        <span className="tech">{item.tech}</span>
        <span className={`bagge ${item.type.toLowerCase()}`}>{item.type}</span>
      </div>
    </a>
  );
  return (
    <>
      <section className="projctt-card">
        <div className="projts-card">
          <div className="projctss-header">
            <h4 className="resrch-titl">Projects</h4>
          </div>
          {/* Year Filter */}
          <div className="pub-filter-row">
            <select
              className="yarr-dropdown"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="All">All Years</option>
              {orderedYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {/* Ongoing Projects */}
          <h5 className="stt-title">Ongoing</h5>
          <div className="projects-grid">
            {ongoingProjects
              .filter(
                (p) => selectedYear === "All" || new Date(p.startDate).getFullYear() === Number(selectedYear)
              )
              .map(renderProjectCard)}
          </div>
          {/* Completed Projects */}
          <h5 className="stt-title">Completed</h5>
          <div className="projects-grid">
            {completedProjects
              .filter(
                (p) => selectedYear === "All" || new Date(p.startDate).getFullYear() === Number(selectedYear)
              )
              .map(renderProjectCard)}
          </div>
        </div>
      </section>
      <section className="tmln-card">
        {/* Header */}
        <div className="header-row">
          <h4 className="resrch-titl">Timeline</h4>
          <div className="tmln-img">
            <Image
              src="/images/icons/aiimg.svg"
              alt="ai image"
              width={30}
              height={30}
            />
          </div>
        </div>
        {/* Timeline */}
        <div className="sch-style-2">
          <div className="sch-timeline-content">
            {timelineData.map((item, index) => (
              <div className="sch-content" key={index}>
                {/* Text + Year */}
                <div className="sch-data">
                  <div className="sch-text"> {truncateText(item.text, 23)}</div>
                  <div className="sch-year">{item.year}</div>
                </div>
                {/* Button */}
                <button className="btn-right"></button>
                {/* Odd → sch-down, Even → sch-up */}
                {index % 2 === 0 ? (
                  <div className="sch-down">
                    <div className="sch-icon">
                      <i>{index + 1}</i>
                    </div>
                  </div>
                ) : (
                  <div className="sch-up">
                    <div className="sch-icon">
                      <i>{index + 1}</i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <ProjectModal
        open={showUploadModal}
        project={activeProject}
        onClose={() => setShowUploadModal(false)}
      /> */}
    </>
  );
}
