import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { Geist, Geist_Mono } from "next/font/google";
import { FaLink, FaEnvelope } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaUserPlus, FaArrowRotateRight } from "react-icons/fa6";
import {
  IoIosArrowDown,
  IoMdNotificationsOutline,
  IoMdSearch,
  IoMdShare,
} from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const researcherData = [
  {
    name: "Licorla Bond",
    role: "Lecturer",
    img: "https://randomuser.me/api/portraits/women/34.jpg",
    link: "/researcher/licorla",
  },
  {
    name: "Yousf Amari",
    role: "Professor",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    link: "/researcher/yousf",
  },
  {
    name: "Emma Watson",
    role: "Senior Scientist",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    link: "/researcher/emma",
  },
  {
    name: "John Miller",
    role: "Research Fellow",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    link: "/researcher/john",
  },
  {
    name: "Emma Watson",
    role: "Senior Scientist",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    link: "/researcher/emma",
  },
  {
    name: "John Miller",
    role: "Research Fellow",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    link: "/researcher/john",
  },
];

// ---------------- UTILITY (chunk array) ----------------
const chunkArray = (arr: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const slides = chunkArray(researcherData, 2);

const publications = [
  {
    id: 1,
    title: "AI-driven traffic prediction using deep learning for smart cities",
    authors: "Rahim Uddin · Farzana Akter · Dr. Saiful Islam",
    meta: "Published Date: 18 March 2021 · DOI: 10.1109/aits.2023.34521",
    publishType: "Article",
    publishedJournal: "ACS Publications",
    rating: 4,
    icon: "/images/icons/artl.svg",
    color: "teal",
    link: "#",
  },
  {
    id: 2,
    title: "Blockchain-based secure medical record management framework",
    authors: "Nabila Sultana · Hasan Mahmud · Prof. Dr. Kamrul Hasan",
    meta: "Published Date: 02 July 2022 · DOI: 10.1007/978-3-031-23456-8",
    publishType: "Chapter",
    publishedJournal: "Springer",
    rating: 5,
    // icon: "/images/icons/cnfrnc.svg",
    icon: "/images/icons/chptr.svg",
    color: "orange",
    link: "#",
  },
  // {
  //   id: 3,
  //   title:
  //     "Sentiment analysis of Bangla social media texts using transformers",
  //   authors:
  //     "Md. Arif Hossain · Tanvir Ahmed · Shanta Roy",
  //   meta:
  //     "Published Date: 11 January 2024 · arXiv:2401.04567",
  //   publishType: "Preprint",
  //   publishedJournal: "IEEE Access",
  //   rating: 1,
  //   icon: "/images/icons/prprnt.svg",
  //   color: "black",
  //   link: "#",
  // },
  {
    id: 3,
    title: "Sentiment analysis of Bangla social media texts using transformers",
    authors: "Md. Arif Hossain · Tanvir Ahmed · Shanta Roy",
    meta: "Published Date: 09 September 2023 · arXiv:2401.04567",
    publishType: "Article",
    publishedJournal: "IEEE Access",
    rating: 3,
    icon: "/images/icons/artl.svg",
    color: "teal",
    link: "#",
  },
  {
    id: 4,
    title: "Dataset for handwritten Bangla character recognition",
    authors: "Sabbir Ahmed · Nafisa Islam · Dr. Mizanur Rahman",
    meta: "Published Date: 09 September 2024 · DOI: 10.17632/bangla.data.2021",
    publishType: "Data",
    publishedJournal: "Mendeley Data",
    rating: 3,
    icon: "/images/icons/dta.svg",
    color: "purple",
    link: "#",
  },
  {
    id: 5,
    title: "Energy-efficient routing protocol for wireless sensor networks",
    authors: "Imran Hossain · Jannatul Ferdous · Prof. Dr. Rashed Karim",
    meta: "Published Date: 27 May 2025 · DOI: 10.1016/j.adhoc.2020.102345",
    publishType: "Presentation",
    publishedJournal: "ACS Publications",
    rating: 5,
    icon: "/images/icons/prsntn.svg",
    color: "pink",
    link: "#",
  },
];

// Timeline ডেটা array
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

export default function ProfilePage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>ResearchCrest – Profile Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <header className="fnav">
        <div className="logo">
          <Image
            src="/logo.svg"
            alt="ResearchCrest Logo"
            width={160}
            height={40}
            priority
          />
        </div>
        <div className="search">
          <input type="text" placeholder="Search In Research Crest" />
        </div>
        <nav className="feed-menu">
          <a>Home</a>
          <a>Q&amp;A</a>
          <a>Network</a>
          <a>Career</a>
          <a>Scholarship</a>
          <a href="#" className="nine-dots">
            <TbGridDots
              style={{
                verticalAlign: "middle",
                marginLeft: "6px",
                fontSize: "1.2rem",
                color: "#000",
              }}
            />
          </a>
          <a>
            <IoMdNotificationsOutline
              style={{
                verticalAlign: "middle",
                marginLeft: "6px",
                fontSize: "1.3rem",
                color: "#000",
              }}
            />
          </a>
          <a className="profile-wrapper">
            <img src="/images/prof.jpg" alt="" className="menu-logo" />
            <IoIosArrowDown className="arrow-icon" />
          </a>
        </nav>
      </header>
      <section className="profile-page">
        <section className="profile-wrap">
          <section className="pdng-hero"></section>
          <section className="prof-hero">
            <div className="prof-hero-bg">
              <img src="/images/cvr.jpg" alt="Profile Background" />
              <div className="hero-overlay">
                <div className="prof-hero-left">
                  <p className="introo">I am</p>
                  <h1 className="name">Brand Gardner</h1>
                  <p className="desgnation">
                    Assistant General Manager – HR | Business HR & Strategy
                    <br />
                    MHRM (University of London)
                  </p>
                  <div className="sttcs">
                    <span>300+ connections</span>
                    <span>465 Followers</span>
                  </div>
                  <div className="cntact-info">
                    <p>
                      <MdOutlineMail /> gardner@gmail.com
                    </p>
                    <p>
                      <MdOutlineLocationOn /> Location: St. London Street,
                      Southern Park
                    </p>
                  </div>
                  <div className="tags">
                    <span className="tgg wht">CSE</span>
                    <span className="tgg wht">Current Affiliations: 50</span>
                    <span className="tgg icn">
                      <FaFacebook className="tag-icn" />
                    </span>
                    <span className="tgg icn">
                      <FaLinkedin className="tag-icn" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- MAIN GRID --> */}
          <section className="pfile-layut">
            {/* LEFT COLUMN */}
            <div className="pfl-main">
              <div className="profile-tabs-wrap">
                <div className="pfl-tabs">
                  <a className="tab">Overview</a>
                  <a className="tab">Research Area</a>
                  <a className="tab active">Publications</a>
                  <a className="tab">Network</a>
                  <a className="tab">Projects</a>
                  <a className="tab">Awards</a>
                  <a className="tab">Career</a>
                </div>
              </div>
              <section className="publction-card">
                <div className="publications-card">
                  <h3 className="resrch-titl">Publications</h3>
                  {publications.map((item) => (
                    <div className="pub-item" key={item.id}>
                      <div className={`pub-icon ${item.color}`}>
                        <img src={item.icon} alt="" className="pub-menu-logo" />
                      </div>

                      <div className="pub-content">
                        <h4>{item.title}</h4>

                        <p className="authrs">{item.authors}</p>

                        <div className="pub-meta-row">
                          <p className="metaa">{item.meta}</p>

                          <span className="article-badge">
                            {item.publishType}
                          </span>
                          <span className="article-badge">
                            {item.publishedJournal}
                          </span>
                        </div>
                      </div>
                      <div className="pub-strr">
                        <a href={item.link} className="download">
                          Download
                        </a>
                        <div className="rating">{"★".repeat(item.rating)}</div>
                      </div>
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
            </div>
            {/* <!-- RIGHT COLUMN --> */}
            <div className="pfl-right">
              <aside className="pfl-card">
                <div className="atr-wrap">
                  <img src="/images/prof.jpg" />
                  {/* <span className="badge">8+</span> */}
                </div>
                <div className="card-bttns">
                  <button className="btn-dark">
                    <FaLink /> Connect
                  </button>
                  <button className="btn-dark">
                    <FaEnvelope /> Message
                  </button>
                </div>

                <div className="card-stt">
                  <div className="stat">
                    <h4>42</h4>
                    <p>Publications</p>
                  </div>
                  <div className="stat">
                    <h4>18</h4>
                    <p>h-index</p>
                  </div>
                  <div className="stat">
                    <h4>324</h4>
                    <p>i10-index</p>
                  </div>
                </div>

                <div className="card-grid">
                  <div className="grid-label">Domain & Classification:</div>
                  <div className="grid-value">
                    Electrical Engineering
                    <br />
                    Faculty of Technology
                    <br />
                    Advanced Polymers
                  </div>

                  <div className="grid-label">Research Interests:</div>
                  <div className="grid-value">
                    Renewable Energy
                    <br />
                    Internet of Things
                    <br />
                    Machine Learning
                  </div>

                  <div className="grid-label">Advisors:</div>
                  <div className="grid-value"></div>
                  <div className="grid-label">PhD Advisors:</div>
                  <div className="grid-value">
                    <span className="green">Dr. Emily Carter</span>
                    <br />
                    <span className="green">Dr. Steven Harris</span>
                    <br />
                    <br />
                  </div>
                  <div className="grid-label">MS Advisors:</div>
                  <div className="grid-value">
                    <span className="green">Prof. Dr. Jonathan Miles</span>
                    <br />
                    <span className="green">Prof. Dr. Rebecca Thornton</span>
                    <br />
                    <br />
                  </div>
                  <div className="grid-label">Responsibilities:</div>
                  <div className="grid-value">
                    <ul className="resp-list">
                      <li>
                        Introduction to Materials and Manufacture (Module
                        Co-ordinator)
                      </li>
                      <li>Materials and Manufacture</li>
                      <li>
                        Sustainable Development and Environmental Management
                      </li>
                      <li>
                        Design and Sustainable Development (Distance Learning
                        Module)
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
              <section className="ntbl-researcher">
                {/* HEADER */}
                <div className="notable-head">
                  <h4 className="resrch-titl-left">Notable Researcher</h4>
                </div>

                {/* CAROUSEL */}
                <Carousel
                  indicators={false}
                  controls
                  interval={null} // ✅ autoplay OFF
                >
                  {slides.map((group, index) => (
                    <Carousel.Item key={index}>
                      <div className="researcher-row">
                        {group.map((item, i) => (
                          <div className="rsrcher-item" key={i}>
                            <img src={item.img} alt={item.name} />

                            <div className="resrcher-info">
                              <h6>{item.name}</h6>
                              <p>{item.role}</p>
                              <a href={item.link}>See Details</a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </section>
              <div className="ntbles-card notable-card">
                <div className="sid-header">
                  <h4 className="resrch-titl-left">People You May Know</h4>
                </div>
                <Carousel
                  indicators={false}
                  controls={true}
                  interval={null}
                  className="notable-carousel"
                >
                  <Carousel.Item>
                    <div className="notable-row">
                      <div className="notable-user">
                        <img src="https://randomuser.me/api/portraits/men/45.jpg" />
                        <p>Alfredo</p>
                        <span>Professor</span>
                        <p className="sub">alfredo@gmail.com</p>
                      </div>
                      <div className="notable-user">
                        <img src="https://randomuser.me/api/portraits/women/52.jpg" />
                        <p>Cahaya</p>
                        <span>Teacher</span>
                        <p>cahaya@gmail.com</p>
                      </div>
                      <div className="notable-user">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" />
                        <p>Mariana</p>
                        <span>Student</span>
                        <p>mariana@gmail.com</p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="notable-row">
                      <div className="notable-user">
                        <img src="https://randomuser.me/api/portraits/men/46.jpg" />
                        <p>James</p>
                        <span>Professor</span>
                        <p className="sub">alfredo@gmail.com</p>
                      </div>
                      <div className="notable-user">
                        <img src="https://randomuser.me/api/portraits/women/53.jpg" />
                        <p>Susan</p>
                        <span>Teacher</span>
                        <p>susan@gmail.com</p>
                      </div>
                      <div className="notable-user">
                        <img src="https://randomuser.me/api/portraits/women/69.jpg" />
                        <p>Linda</p>
                        <span>Student</span>
                        <p>linda@gmail.com</p>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
                <button className="read-more">SEE MORE</button>
              </div>
              <section className="suggst-section">
                <h4 className="resrch-titl-left">You May Like</h4>
                <p className="subb">Pages for you</p>
                <div className="suggest-list">
                  <div className="suggest-item">
                    <div className="suggest-left">
                      <img
                        src="/images/scigrp.jpg"
                        className="suggest-avatar-img"
                      />
                      <span>Science Group</span>
                    </div>
                    <button className="follow-btn">
                      <FaUserPlus /> Follow
                    </button>
                  </div>
                  <div className="suggest-item">
                    <div className="suggest-left">
                      <img
                        src="https://randomuser.me/api/portraits/men/40.jpg"
                        className="suggest-avatar-img"
                      />
                      <span>Research Group</span>
                    </div>
                    <button className="follow-btn">
                      <FaUserPlus /> Follow
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </section>
      </section>
      {/* <!-- ================= FOOTER ================= --> */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-left">
            <div className="logo">
              <Image
                src="/logo.svg"
                alt="ResearchCrest Logo"
                width={160}
                height={40}
                priority
              />
            </div>
            {/* <h3 className="footer-logo">ResearchCrest</h3> */}
            <p>Stay in the know by subscribing to our newsletter below</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email address" />
              <button>→</button>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="#">Contact Form</a>
              <a href="#">FAQ</a>
              <a href="#">Privacy Policy</a>
              <a href="#">T&amp;C</a>
            </div>

            <div className="footer-col">
              <h4>Social</h4>
              <a href="#">Facebook</a>
              <a href="#">Youtube</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Researchcrest. All Rights Reserved 2023</span>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </footer>
    </>
  );
}
