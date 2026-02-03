import { useState } from "react";
import Image from "next/image";
import { awards } from "@/data/awards";
import { RiNextjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { SiRstudioide } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoLayersSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
const projectsData = [
  {
    id: 1,
    title: "Next.Js Project",
    location: "Remote <br /> Global",
    salaryRange: "Contract Based",
    datePlaced: "10 Jan",
    closes: "25 Jan 2021",
    lastDate: "25 Jan 2021",
    companyImage: "", // no logo
    desc: "A modern, high-performance web application built with server-side rendering and optimized routing.",
    category: "Food",
    percent: 100,
    tech: "Completion Date: 18 Mar 2021",
    type: "Completed",
    startDate: "2021-03-18",
    barClass: "bar-tal",
    topIcon: "/images/icons/topdvlfttl.svg",
    centerIcon: RiNextjsLine,
    theme: "n",
  },
  {
    id: 2509824,
    title: "Kingston University PhD Studentships",
    location: "Society of Chemical Industry (SCI) <br /> London, Hybrid",
    outboundLink: "https://www.jobs.ac.uk/job/DPV838/kingston-university-phd-studentships",
    salaryRange: "£22,780",
    datePlaced: "05 Jun",
    closes: "05 Mar 2026",
    lastDate: "30 Jun 2022",
    desc: "A data-driven research project focused on statistical analysis and insight extraction.",
    category: "Food & Veterinary",
    percent: 80,
    tech: "Start Date: 02 Jul 2022",
    type: "Ongoing",
    startDate: "2022-07-02",
    barClass: "bar-blu",
    companyImage: "/images/ppr/kul.png",
    topIcon: "/images/icons/topdvlft.svg",
    centerIcon: SiRstudioide,
    theme: "n",
  },
  {
    id: 3,
    title: "PhD Studentship in Chemical Engineering",
    location: "Newcastle University <br />Newcastle upon Tyne",
    salaryRange: "£20,780 living allowance + Fees",
    closes: "18 Feb 2026",
    outboundLink:"https://www.jobs.ac.uk/job/DPR353/phd-studentship-in-chemical-engineering",
    desc: "A role-based admin dashboard for managing users, content, and system analytics.",
    category: "Agriculture",
    percent: 38,
    tech: "Start Date: 09 Sep 2023",
    type: "Ongoing",
    startDate: "2023-09-09",
    barClass: "bar-blk",
    topIcon: "/images/icons/topdvlft.svg",
    centerIcon: RiReactjsFill,
    theme: "n",
  },
  {
    id: 4,
    title: "Backend API",
    location: "AgriData Corp <br /> Hybrid",
    salaryRange: "$2000+",
    desc: "A scalable RESTful API handling authentication, data processing, and integrations.",
    category: "Agriculture",
    percent: 100,
    tech: "Completion Date: 09 Nov 2024",
    type: "Completed",
    startDate: "2024-09-09",
    barClass: "bar-tal",
    topIcon: "/images/icons/topdvlfttl.svg",
    centerIcon: RiJavaLine,
    theme: "n",
  },
  {
    id: 56807,
    title: "Journal Development Editor",
    location: "Society of Chemical Industry (SCI) <br /> London, Hybrid",
    outboundLink: "https://www.jobs.ac.uk/job/DQJ112/journal-development-editor",
    salaryRange: "£33,000 to £35,000 plus benefits",
    datePlaced: "02 Feb",
    closes: "24 Feb 2026",
    lastDate: "27 May 2026",
    companyImage: "/images/ppr/scii.png",
    desc: "Join a dynamic academic publishing team as a Journal Development Editor",
    percent: 54,
    tech: "Start Date: 27 May 2025",
    type: "Ongoing",
    category: "Agriculture",
    startDate: "2025-05-27",
    barClass: "bar-blk",
    topIcon: "/images/icons/topdvlft.svg",
    centerIcon: RiFlutterFill,
    theme: "n",
  },
];

// Timeline ডেটা array
const timelineData = [
  {
    text: "Ascend Money",
    role: "Head of Product",
    year: "Jun 2017 – Dec 2018 · 1 yr 6 mos",
  },
  {
    text: "TechNova",
    role: "Senior Product Manager",
    year: "Jun 2018 – Dec 2019 · 1 yr 6 mos",
  },
  {
    text: "FinTech Labs",
    role: "Product Strategy Lead",
    year: "Jan 2020 – Sep 2021 · 1 yr 9 mos",
  },
  {
    text: "CoiBoi",
    role: "Co-Founder & Head of Product",
    year: "Oct 2021 – Present · 7 mos",
  },
];

const careerData = [
  {
    id: 1,
    company: "CoiBoi",
    role: "Co-Founder & Head of Product",
    date: "Oct 2021 – Present · 7 mos",
    theme: "teal",
    topIcon: "/images/icons/topdv.svg",
    centerIcon: "/images/icons/mtr.svg",
  },
  {
    id: 2,
    company: "FinTech Labs",
    role: "Product Strategy Lead",
    date: "Jan 2020 – Sep 2021 · 1 yr 9 mos",
    theme: "black",
    topIcon: "/images/icons/toptv.svg",
    centerIcon: "/images/icons/dtt.svg",
  },
  {
    id: 3,
    company: "TechNova",
    role: "Senior Product Manager",
    date: "Jun 2018 – Dec 2019 · 1 yr 6 mos",
    theme: "black",
    topIcon: "/images/icons/toptv.svg",
    centerIcon: "/images/icons/grpp.svg",
  },
  {
    id: 4,
    company: "Ascend Money",
    role: "Head of Product",
    date: "Jun 2017 – Dec 2018 · 1 yr 6 mos",
    theme: "teal",
    topIcon: "/images/icons/topdv.svg",
    centerIcon: "/images/icons/prsttt.svg",
  },
  //     {
  //   id: 5,
  //   company: "TinyPlus",
  //   role: "Senior Business Manager",
  //   date: "Jun 2016 – Dec 2017 · 1 yr 6 mos",
  //   theme: "teal",
  //   topIcon: "/images/icons/topdv.svg",
  //   centerIcon: "/images/icons/fltt.svg",
  // },
  //   {
  //   id: 6,
  //   company: "TechNova",
  //   role: "Senior Product Manager",
  //   date: "Jun 2014 – Dec 2016 · 2 yr 6 mos",
  //   theme: "black",
  //   topIcon: "/images/icons/toptv.svg",
  //   centerIcon: "/images/icons/glbb.svg",
  // },
];

const truncateText = (text, maxLength = 35) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const groupedPublications = awards.reduce((acc: any, item) => {
  acc[item.year] = acc[item.year] || [];
  acc[item.year].push(item);
  return acc;
}, {});

const groupedByYear: Record<number, any[]> = {};
const orderedYears = Object.keys(groupedByYear)
  .map(Number)
  .sort((a, b) => a - b);

const ongoingProjects = projectsData.filter((p) => p.type === "Ongoing");
const completedProjects = projectsData.filter((p) => p.type === "Completed");

const allProjects = [...ongoingProjects, ...completedProjects];
const renderProjectCard = (item) => {
  const href = item.outboundLink
    ? item.outboundLink
    : `/projects/${item.id}`;

  const isExternal = Boolean(item.outboundLink);

  return (
  <a
    key={item.id}
    href={href}
    target={"_blank"}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className={`fndd ${item.theme} tspj`}
    style={{ cursor: "pointer" }}
  >
    <div className="botttom">
      <span className={`bbagge ${item.type.toLowerCase()}`}>{item.category}</span>
    </div>
    <div className="ckard-header">
      <div className={`iicon ${item.companyImage ? "no-bg" : "with-bg"}`}>
        {item.companyImage ? (
          <Image
            src={item.companyImage}
            alt={item.company}
            width={55}
            height={55}
          />
        ) : (
          "💼"
        )}
      </div>
      {/* <div className="iicon">
        {item.companyImage ? (
          <Image
            src={item.companyImage}
            alt={item.company}
            width={40}
            height={40}
          />
        ) : (
          "💼"
        )}
      </div> */}
      <div className="info">
        <h3>{item.title}</h3>
        <p className="lllocation" dangerouslySetInnerHTML={{ __html: item.location }} />
        <p className="lllocation-sm">{item.salaryRange}</p>
      </div>
    </div>
    <div className="date-row">
      <span></span>
      {/* <span>
        <strong>Date Placed:</strong> {item.datePlaced}
      </span> */}
      <span>
        <strong>Closes At:</strong> {item.closes}
      </span>
    </div>
    {/* <div className="prggress-row">
      <div className="bar">
        <span className={item.barClass} style={{ width: `${item.percent}%` }} />
      </div>
      <span className="percent">{item.percent}%</span>
    </div> */}
    {/* <div className="bottom">
      <span className="tech">{item.tech}</span>
      <span className={`bagge ${item.type.toLowerCase()}`}>{item.type}</span>
    </div> */}
  </a>
);
};
export default function Career() {
  const years = Object.keys(groupedPublications).sort(
    (a: any, b: any) => b - a
  );
  const [selectedYear, setSelectedYear] = useState<string>("All");
  return (
    <>
      <section className="exprnce-card">
        <h3 className="resrch-titl mb">Career</h3>
        <div className="fndd-card">
          <div className="tabs">
            <button className="tab active-teal" id="btn-funding">Find a Job</button>
            <button className="tab" id="btn-funding">Fundings</button>
            <button className="tab" id="btn-ongoing">Career Advice</button>
          </div>
          <section className="job-search-wrapper">
            <h1>CAREERS FOR A BETTER TOMORROW</h1>
            <div className="sssearch-bar">
              <div className="input-box">
                <FaSearch className="iic" />
                <input type="text" placeholder="Search jobs" />
              </div>
              <div className="input-box">
                <IoLocationSharp className="iic" />
                <input type="text" placeholder="Location" />
              </div>
              <div className="input-box select-box">
                <IoLayersSharp className="iic" />
                <select className="diist-select">
                  <option value="" selected disabled hidden>Select Category</option>
                  <option>Computer Science</option>
                  <option>Engineering</option>
                  <option>Business & Management</option>
                  <option>Health & Medical</option>
                </select>
              </div>
              <a href="/career-page" className="fndd-btn" target="_blank" rel="noopener noreferrer">
                Search
              </a>
            </div>
          </section>
          {/* Ongoing Projects */}
          <h5 className="stt-title">Jobs / Field of Expertise</h5>
          <div className="ppprojects-grid">
            {ongoingProjects
              .filter(
                (p) => selectedYear === "All" || new Date(p.startDate).getFullYear() === Number(selectedYear)
              )
              .map(renderProjectCard)}
          </div>
          {/* Completed Projects */}
          <h5 className="stt-title">Fundings</h5>
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
                  <div className="sch-text">
                    {" "}
                    {truncateText(item.text, 23)}
                  </div>
                  <div className="sch-year">{truncateText(item.role, 15)}</div>
                  <div className="sch-year">{truncateText(item.year, 20)}</div>
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
    </>
  );
}
