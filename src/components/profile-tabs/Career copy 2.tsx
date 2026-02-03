import { useState } from "react";
import Image from "next/image";
import { awards } from "@/data/awards";
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

export default function Career() {
    const years = Object.keys(groupedPublications).sort(
    (a: any, b: any) => b - a
  );
  const [selectedYear, setSelectedYear] = useState<string>("All");
  return (
    <>
      <section className="exprnce-card">
        <h3 className="resrch-titl mb">Career</h3>
        <div className="experience-card">
          <div className="tabs">
            <button className="tab" id="btn-funding">Find a Job</button>
            <button className="tab" id="btn-funding">Funding</button>
            <button className="tab active-teal" id="btn-ongoing">Ongoing Projects</button>
            <button className="tab" id="btn-completed">Completed Projects</button>
          </div>
          <section className="job-search-wrapper">
            <h1>CAREERS FOR A BETTER TOMORROW</h1>
            <div className="search-bar">
              <div className="input-box">
                <span className="icon">🔍</span>
                <input type="text" placeholder="Search jobs" />
              </div>

              <div className="input-box">
                <span className="icon">📍</span>
                <input type="text" placeholder="Location" />
              </div>

              <select className="distance-select">
                <option>Within 0 miles</option>
                <option>Within 10 miles</option>
                <option>Within 25 miles</option>
                <option>Within 50 miles</option>
              </select>

              <button className="search-btn">Search</button>
            </div>
          </section>
          {/* <section className="hrrrro">
            <h1>GREAT JOBS FOR BRIGHT PEOPLE</h1>
            <div className="search-bar">
              <input type="text" placeholder="Search jobs" />
              <input type="text" placeholder="Location" />
              <select>
                <option>Within 0 miles</option>
                <option>Within 10 miles</option>
                <option>Within 25 miles</option>
              </select>
              <button>Search</button>
            </div>
          </section> */}
          <section className="discipline">
            <div className="discipline-title">
              Academic Job Discipline / Field of Expertise
            </div>
                  <section className="publction-card">
        <div className="publications-card">
          <h3 className="resrch-titl">Awards and Rewards</h3>
          <div className="pub-filter-row">
            <select
              className="yarr-dropdown"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="All">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {Object.entries(groupedPublications)
            .filter(([year]) =>
              selectedYear === "All" ? true : year === selectedYear
            )
            .sort((a: any, b: any) => b[0] - a[0]) // latest year first
            .map(([year, items]: any) => (
              <div key={year} className="year-group">
                {/* Year Header */}
                <div className="year-title">{year}</div>
                {items.map((item: any) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publi-item-link"
                  >
                    <div className="publi-item">
                      <div className={`pub-icon ${item.color}`}>
                        <img src={item.icon} alt="" className="pub-menu-logo" />
                      </div>
                      <div className="pub-content">
                        <h4>{item.title}</h4>
                        <p className="authrs">{item.authors}</p>
                        <div className="pub-meta-row">
                          <p className="metaa">{item.meta}</p>
                          <span className="article-badge">{item.publishType}</span>
                          <span className="article-badge">{item.publishedJournal}</span>
                        </div>
                      </div>

                      {/*<div className="pub-strr">
                        <span className="download">Download</span>
                        <div className="rating">{"★".repeat(item.rating)}</div>
                      </div>
                      */}
                    </div>
                  </a>
                ))}
              </div>
            ))}
          <div className="see-all-pub">
            1, 2, 3, 4… <span>See All</span>
          </div>
        </div>
      </section>
            {/* <section className="discipline-wrap">
              <div className="discipline-grid">
                <div className="col">
                  <div className="item">
                    <span>Search All</span>
                  </div>
                  <div className="item">
                    <span>Agriculture, Food & Veterinary</span><em>35</em>
                  </div>
                  <div className="item">
                    <span>Architecture, Building & Planning</span><em>38</em>
                  </div>
                  <div className="item">
                    <span>Biological Sciences</span><em>249</em>
                  </div>
                  <div className="item">
                    <span>Business & Management Studies</span><em>143</em>
                  </div>
                  <div className="item">
                    <span>Computer Sciences</span><em>336</em>
                  </div>
                  <div className="item">
                    <span>Creative Arts & Design</span><em>66</em>
                  </div>
                  <div className="item">
                    <span>Economics</span><em>83</em>
                  </div>
                  <div className="item">
                    <span>Education Studies (inc. TEFL)</span><em>64</em>
                  </div>
                  <div className="item">
                    <span>Engineering & Technology</span><em>328</em>
                  </div>
                </div>

                <div className="col">
                  <div className="item">
                    <span>Historical & Philosophical Studies</span><em>59</em>
                  </div>
                  <div className="item">
                    <span>Information Management & Librarianship</span><em>19</em>
                  </div>
                  <div className="item">
                    <span>Languages, Literature & Culture</span><em>75</em>
                  </div>
                  <div className="item">
                    <span>Law</span><em>62</em>
                  </div>
                  <div className="item">
                    <span>Mathematics & Statistics</span><em>173</em>
                  </div>
                  <div className="item">
                    <span>Media & Communications</span><em>25</em>
                  </div>
                  <div className="item">
                    <span>Physical & Environmental Sciences</span><em>327</em>
                  </div>
                  <div className="item">
                    <span>Politics & Government</span><em>58</em>
                  </div>
                  <div className="item">
                    <span>Psychology</span><em>151</em>
                  </div>
                  <div className="item">
                    <span>Social Sciences & Social Care</span><em>173</em>
                  </div>
                </div>

              </div>
            </section> */}
          </section>
          {/* {careerData.map((item) => (
            <div className={`expp-card ${item.theme}`} key={item.id}>
              <div className="top-decor">
                <img
                  src={item.topIcon}
                  alt="top decor"
                  className="topdv"
                />
                <img
                  src={item.centerIcon}
                  alt="center icon"
                  className="mtr"
                />
              </div>
              <div className="contnnt">
                <h5>{item.company}</h5>
                <p className="rlee">{item.role}</p>
                <span className="date">{item.date}</span>
              </div>
            </div>
          ))} */}
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
