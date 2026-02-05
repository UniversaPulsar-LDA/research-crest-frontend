import { useState } from "react";
import Image from "next/image";
import {
  IoMdShare,
} from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import { publications } from "@/data/publicaton";

const timelineData = [
  {
    text: "AI-driven traffic prediction using deep learning for smart cities",
    year: "18 Mar 2021",
  },
  {
    text: "Blockchain-based secure medical record management framework",
    year: "02 Jul 2022",
  },
  {
    text: "Sentiment analysis of Bangla social media texts using transformers",
    year: "09 Sep 2023",
  },
  {
    text: "Dataset for handwritten Bangla character recognition",
    year: "09 Sep 2024",
  },
  {
    text: "Energy-efficient routing protocol for wireless sensor networks",
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

const groupedPublications = publications.reduce((acc: any, item) => {
  acc[item.year] = acc[item.year] || [];
  acc[item.year].push(item);
  return acc;
}, {});

export default function Publications() {

  const years = Object.keys(groupedPublications).sort(
    (a: any, b: any) => b - a
  );

  const [selectedYear, setSelectedYear] = useState<string>("All");

  return (
    <>
      <section className="publction-card">
        <div className="publications-card">
          <h3 className="resrch-titl">Publications</h3>
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

                      <div className="pub-strr">
                        <span className="download">Download</span>
                        <div className="rating">{"★".repeat(item.rating)}</div>
                      </div>
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
      <section className="pub-contrbution">
        <h4 className="resrch-titl">Publications Contribution</h4>

        <div className="pub-row">
          <div className="pub-dontt"></div>
          <div className="pub-legnnd">
            <div>
              <span className="legnnd-dot dot-darkk"></span>
              <span>25% Machine learning</span>
            </div>
            <div>
              <span className="legnnd-dot dot-greenn"></span>
              <span>8% HRM</span>
            </div>
            <div>
              <span className="legnnd-dot dot-grayy"></span>
              <span>12% Personal Fingerprint</span>
            </div>
          </div>
          <div className="pub-stats">
            <div className="pub-stat-item">
              <IoMdShare className="pub-ick" />
              <span>78%</span>
            </div>
            <div className="pub-stat-item">
              <FaArrowRotateRight className="pub-ick" />
              <span>22%</span>
            </div>
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
    </>
  );
}
