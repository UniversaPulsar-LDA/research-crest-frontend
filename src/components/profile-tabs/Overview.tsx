import Image from "next/image";
import { FaFilter } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const timelineData = [
  { text: "NSF Career Award", year: 1970 },
  { text: "Best Paper - CVPR", year: 1980 },
  { text: "Best Researchers Award", year: 1990 },
  { text: "Best Youth Award", year: 2000 },
];

export default function Overview() {
  return (
    <section className="Ovr-cntnt">
      <section className="abt-card">
        <h4 className="resrch-titl">About</h4>
        <p>
          I am Brand Gardner, a passionate and detail-oriented professional with
          a strong interest in building meaningful, efficient, and scalable
          solutions. I enjoy working at the intersection of creativity and
          problem-solving, where ideas can be transformed into practical
          outcomes that create real value. With a curious mindset and a
          commitment to continuous learning, I consistently explore better ways
          to approach challenges and improve existing systems. I believe that
          clear communication, thoughtful planning, and adaptability are key to
          successful collaboration in any professional environment.
        </p>
      </section>
      <section className="eduction-card">
        <h4 className="resrch-titl">Education</h4>
        <div className="eduu-row">
          <div className="eduu-left">
            <p className="eduu-university">Fauget University</p>
            <span className="edu-year">2012 – 2014</span>
          </div>
          <div className="eduu-right">
            <p className="edu-degree">Master of Science in Marketing</p>
            <span className="edu-gpa">3.85 / 4 GPA</span>
          </div>
        </div>
        <div className="eduu-row">
          <div className="eduu-left">
            <p className="edu-university">Borcelle University</p>
            <span className="edu-year">2008 – 2011</span>
          </div>
          <div className="eduu-right">
            <p className="edu-degree">Bachelor of Science in Marketing</p>
            <span className="edu-gpa">3.7 / 4 GPA</span>
          </div>
        </div>
      </section>
      <section className="anlytics-card">
        <h4 className="resrch-titl">Analytics</h4>
        <div className="analytics-content">
          <div className="analytics-left">
            <p className="metric-label">Total Views</p>
            <span className="metric-rangea">35+</span>
            <p className="metric-sub">Search Apperence</p>
            <span className="metric-rangea">120</span>
          </div>
          <div className="analytics-right">
            <div className="donut-chart"></div>
            <div className="donut-legend">
              <div>
                <span className="dot dark"></span> Total Views
              </div>
              <div>
                <span className="dot light"></span> Search Apperence
              </div>
              <div className="donut-link">Last 7 Days</div>
            </div>
          </div>
        </div>
      </section>
      <div className="sklls-card">
        <section className="skills-ref">
          <h4 className="resrch-titl">Skills</h4>
          <div className="skills-ref-list">
            <span className="skill-pill dark">Open AI</span>
            <span className="skill-pill green">Java</span>
            <span className="skill-pill dark">C#</span>
            <span className="skill-pill green">AWS - EC2</span>
            <span className="skill-pill dark">.net</span>
            <span className="skill-pill green">R</span>
            <span className="skill-pill dark">Python</span>
            <span className="skill-pill green">Arduino</span>
            <span className="skill-pill dark">C++</span>
            <span className="skill-pill green">R</span>
            <span className="skill-pill dark">MongoDB</span>
          </div>
        </section>
      </div>
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
                  <div className="sch-text">{item.text}</div>
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
<section className="fltr-card">
  <h4 className="resrch-titl-left">Posts</h4>

  <button className="filter-btn">
    <FaFilter className="filter-icon" />
    Filters
  </button>
</section>
      <section className="feed-cntnt">
        <p></p>
        <div className="feed-cntnt">
          <div className="feed-card">
            <div className="feed-top">
              <div className="feed-user">
                <img src="/images/prof.jpg" />
                <span>Brand Gardner</span>
              </div>
              <span>
                <HiOutlineDotsHorizontal className="dots-icon" />
              </span>
            </div>
            <p className="feed-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              malesuada magna orci, in vestibulum turpis scelerisque vitae.
            </p>
            <div className="feed-immg">
              <img className="feed-img sm" src="/images/bga.png" />
            <img className="feed-img sm" src="/images/bgga.png" />
            </div>
            <div className="feed-actions-row">
              <div className="left-icn">
                <span>
                  <Image
                    src="/images/icons/hrt.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>
                <span>
                  <Image
                    src="/images/icons/cht.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>
                <span>
                  <Image
                    src="/images/icons/shr.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>
              </div>
              <div>
                <span>
                  <Image
                    src="/images/icons/wslst.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="feed-card">
            <div className="feed-top">
              <div className="feed-user">
                <img src="/images/prof.jpg" />
                <span>Brand Gardner</span>
              </div>
              <span>
                <HiOutlineDotsHorizontal className="dots-icon" />
              </span>
            </div>
            <p className="feed-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
              diam eleifend, imperdiet orci nec.
            </p>

            <div className="feed-actions-row">
              <div className="left-icn">
                <span>
                  <Image
                    src="/images/icons/hrt.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>
                <span>
                  <Image
                    src="/images/icons/cht.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>
                <span>
                  <Image
                    src="/images/icons/shr.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>
              </div>
              <div>
                <span>
                  <Image
                    src="/images/icons/wslst.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
