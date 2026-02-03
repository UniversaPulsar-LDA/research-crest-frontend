import { useState } from "react";
import Image from "next/image";
import { awards } from "@/data/awards";
import { RiNextjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { SiRstudioide } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
const projectsData = [
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
    theme: "n",
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
    theme: "n",
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
    theme: "n",
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
    theme: "n",
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
const renderProjectCard = (item) => (
  <a
    key={item.id}
    href={`/projects/${item.id}`} // project details page
    target="_blank"              // open in new tab
    rel="noopener noreferrer"
    className={`fndd ${item.theme} tspj`}
    style={{ cursor: "pointer" }}
  >
    <div className="bottom">
      <span className={`bagge ${item.type.toLowerCase()}`}>{item.type}</span>
    </div>
    <div className="card-header">
      <div className="icon">
        💸
      </div>

      <div className="info">
        <h3>AI Research Program</h3>
        <p className="location">📍 Japan</p>
      </div>
    </div>
    <div className="top">
      <span className="title">{item.title}</span>
      <span className="desc">{item.desc}</span>
    </div>
    {/* <div className="prggress-row">
      <div className="bar">
        <span className={item.barClass} style={{ width: `${item.percent}%` }} />
      </div>
      <span className="percent">{item.percent}%</span>
    </div> */}
    <div className="bottom">
      <span className="tech">{item.tech}</span>
      <span className={`bagge ${item.type.toLowerCase()}`}>{item.type}</span>
    </div>
  </a>
);
export default function Career() {
  const years = Object.keys(groupedPublications).sort(
    (a: any, b: any) => b - a
  );
  const [selectedYear, setSelectedYear] = useState<string>("All");
  return (
    <>
      <section className="exprnce-card">
 <div className="main-container">
  <nav className="primary-nav">
    <ul>
      <li>Overview</li>
      <li>Research Area</li>
      <li>Publications</li>
      <li>Network</li>
      <li>Projects</li>
      <li className="active-pill">Career</li>
    </ul>
  </nav>

  <input type="radio" name="tab" id="tab-funding"/>
  <input type="radio" name="tab" id="tab-ongoing" checked/>
  <input type="radio" name="tab" id="tab-completed"/>

  <div className="secondary-bar">
    <div className="tabs">
      <label className="tab">Funding</label>
      <label className="tab">Ongoing Projects</label>
      <label className="tab">Completed Projects</label>
    </div>

    <div className="search-box">
      <input type="text" placeholder="Search for..."/>
    </div>
  </div>

  <section className="content funding">
    <h2 className="section-title">Funding Projects</h2>
    <div className="grid">
      <div className="card">
        <div className="card-header">
          <div className="teal-circle">
            <img src="https://cdn-icons-png.flaticon.com/512/2454/2454282.png"/>
          </div>
          <div className="info">
            <h3>Smart City Integration</h3>
            <span>📍 South Korea</span>
          </div>
          <span className="bbadge green">Fully Funded</span>
        </div>
        <div className="card-body">
          <label>GRANT AMOUNT</label>
          <p>$2,000,000</p>
        </div>
      </div>
    </div>
  </section>

  <section className="content ongoing">
    <h2 className="section-title">Ongoing Projects</h2>
    <div className="grid">
      <div className="ccard">
        <div className="ccard-header">
          <div className="teal-circle">
            <img src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png"/>
          </div>
          <div className="info">
            <h3>Frontend Engineer</h3>
            <span>📍 Remote / Dhaka</span>
          </div>
          <span className="bbadge red">Hiring</span>
        </div>
        <div className="card-body">
          <label>JOB TYPE</label>
          <p>Full-Time Role</p>
        </div>
      </div>
    </div>
  </section>

  <section className="content completed">
    <h2 className="section-title">Completed Projects</h2>
    <div className="grid">
      <div className="ccard">
        <div className="card-header">
          <div className="teal-circle">
            <img src="https://cdn-icons-png.flaticon.com/512/1441/1441402.png"/>
          </div>
          <div className="info">
            <h3>Healthcare AI App</h3>
            <span>📍 Canada</span>
          </div>
        </div>
        <div className="card-body">
          <label>STATUS</label>
          <p>Finished in 2023</p>
        </div>
      </div>
    </div>
  </section>

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
