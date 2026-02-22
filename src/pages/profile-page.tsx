import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";
import { Carousel } from "react-bootstrap";
import { Geist, Geist_Mono } from "next/font/google";
import { FaLink, FaEnvelope } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import {
  IoIosArrowDown,
  IoMdNotificationsOutline,
  IoMdSearch,
} from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { SiScopus } from "react-icons/si";
/* ===== TAB COMPONENTS ===== */
import Overview from "@/components/profile-tabs/Overview";
import ResearchArea from "@/components/profile-tabs/ResearchArea";
import Publications from "@/components/profile-tabs/Publications";
import Network from "@/components/profile-tabs/Network";
import Projects from "@/components/profile-tabs/Projects";
import Awards from "@/components/profile-tabs/Awards";
import Career from "@/components/profile-tabs/Career";
import UploadPdfModal from "@/components/UploadPdfModal";
import FloatingChatBox from "@/components/FloatingChatBox";
/* ===== FONTS ===== */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Removed PROFILE_TABS from here, moved inside component

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
    name: "Emma Roy",
    role: "Scientist",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    link: "/researcher/emma",
  },
  {
    name: "John Miller",
    role: "Researcher",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    link: "/researcher/john",
  },
  {
    name: "Olla Watson",
    role: "Scientist",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    link: "/researcher/emma",
  },
  {
    name: "Ron Miller",
    role: "Researcher",
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

export default function ProfilePage() {
  const router = useRouter();
  const { user } = useAuth();
  const { profileData, overviewData, isLoading, error } = useProfile();

  const [activeTab, setActiveTab] = useState("overview");
  const [showUploadModal, setShowUploadModal] = useState(false);

  /* ===== TAB CONFIG ===== */
  const PROFILE_TABS = [
    { key: "overview", label: "Overview", component: <Overview data={overviewData} /> },
    { key: "research", label: "Research Area", component: <ResearchArea /> },
    { key: "publications", label: "Publications", component: <Publications /> },
    { key: "network", label: "Network", component: <Network /> },
    { key: "projects", label: "Projects", component: <Projects /> },
    { key: "awards", label: "Awards", component: <Awards /> },
    { key: "career", label: "Career", component: <Career /> },
  ];

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20vh' }}>Loading Profile...</div>;
  }

  if (error || !profileData) {
    return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20vh', color: 'red' }}>{error || "Profile not found"}</div>;
  }

  const generalInfo = profileData; // Flat object from backend
  const researcherProfile = profileData;
  // TODO: Notable researchers and PYMK are not returned by /me, mock for now or remove
  const notableResearchers: any[] = [];
  const peopleYouMayKnow: any[] = [];

  // Chunking for carousels
  const notableSlides = chunkArray(notableResearchers.length > 0 ? notableResearchers : researcherData, 2);
  const peopleSlides = chunkArray(peopleYouMayKnow.length > 0 ? peopleYouMayKnow : researcherData, 3);

  return (
    <>
      <Head>
        <title>TensorCrest – Profile Page</title>
        <meta
          name="description"
          content="TensorCrest - A Platform for Researchers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      {/* ================= HEADER ================= */}
      <header className="fnav">
        <div
          className="logo"
          onClick={() => router.push("/feed-page")}
          style={{ cursor: "pointer" }}
        >
          <Image src="/logo.svg" alt="Logo" width={160} height={40} />
        </div>
        <div className="search">
          <input type="text" placeholder="Search In Tensor Crest" />
        </div>
        <nav className="feed-menu">
          <a style={{ cursor: "pointer" }} onClick={() => router.push("/network-page")}>
            Network</a>
          <a>Q&amp;A</a>
          <a>Career</a>
          <a>Scholarship</a>
          <a>En</a>
          <a className="nine-dots">
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
            <img src="/images/prof.jpg" className="menu-logo" />
            <IoIosArrowDown className="arrow-icon" />
          </a>
        </nav>
      </header>
      {/* ================= PROFILE ================= */}
      <section className="profile-page">
        <section className="profile-wrap">
          <section className="pdng-hero"></section>
          {/* ===== HERO ===== */}
          <section className="prof-hero">
            <div className="prof-hero-bg">
              <img src="/images/cvr.jpg" alt="Profile Background" />
              <div className="hero-overlay">
                <div className="prof-hero-left">
                  <p className={`introo hd moontime`}>I Am</p>
                  <div className="namee-row">
                    <h1 className="name hd">{generalInfo.fullName || "Unknown"}</h1>
                    {generalInfo.verified && (
                      <img
                        src="/images/icons/vrfd.svg"
                        alt="verified-tag"
                        className="vrfd-tg lg"
                      />
                    )}
                  </div>
                  <p className="desgnation hd">
                    {generalInfo.designation || "No Designation"}
                    <br />
                    {generalInfo.finalEducation}
                  </p>
                  <div className="cntact-info">
                    <p>
                      <MdOutlineMail /> {(user as any)?.email || "No Email"}
                    </p>
                    <p>
                      <MdOutlineLocationOn />
                      Location: {generalInfo.location}
                    </p>
                  </div>
                  <div className="tags">
                    {generalInfo?.tags?.map((tag: string, idx: number) => (
                      <span className="tgg wht" key={idx}>{tag}</span>
                    ))}
                    <span className="tgg wht">Affiliations: {generalInfo?.affiliationsCount || 0}</span>
                    <span className="tgg bluu">300+ Connections</span>
                    <span className="tgg bluu">465 Followers</span>
                    <span
                      className="tgg icn"
                      style={{ cursor: "pointer" }}
                      title="LinkedIn"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/molly-gardner-624b2a138/",
                          "_blank",
                        )
                      }
                    >
                      <FaLinkedin className="tag-icn" />
                    </span>
                    <span
                      className="tgg icn"
                      style={{ cursor: "pointer" }}
                      title="Google Scholar"
                      onClick={() =>
                        window.open(
                          "https://scholar.google.com/citations?user=HZcIGI4AAAAJ&hl=en&oi=sra",
                          "_blank",
                        )
                      }
                    >
                      <FaGoogleScholar className="tag-icn" />
                    </span>
                    <span
                      className="tgg icn"
                      style={{ cursor: "pointer" }}
                      title="Scopus"
                      onClick={() =>
                        window.open(
                          "https://www.elsevier.com/products/scopus",
                          "_blank",
                        )
                      }
                    >
                      <SiScopus className="tag-icn" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ===== MAIN LAYOUT ===== */}
          <section className="pfile-layut">
            {/* ===== LEFT COLUMN ===== */}
            <div className="pfl-main">
              {/* ===== TABS ===== */}
              <div className="profile-tabs-wrap">
                <div className="pfl-tabs">
                  {PROFILE_TABS.map((tab) => (
                    <a
                      key={tab.key}
                      className={`tab ${activeTab === tab.key ? "active" : ""}`}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      {tab.label}
                    </a>
                  ))}
                </div>
              </div>
              {/* ===== TAB CONTENT ===== */}
              <section className="profile-tab-body">
                {PROFILE_TABS.find((tab) => tab.key === activeTab)?.component}
              </section>
            </div>
            {/* ===== RIGHT COLUMN ===== */}
            <div className="pfl-right">
              <aside className="pfl-card">
                <div className="atr-row">
                  <div className="atr-wrap">
                    <img src="/images/prof.jpg" />
                  </div>
                  <button
                    className="btn-downldd"
                    onClick={() => setShowUploadModal(true)}
                  >
                    Upload Resume
                  </button>
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
                  <div className="stat pad">
                    <p>Publications</p>
                    <h4>{/* Update when Publication API is ready */}42</h4>
                  </div>
                  <div className="stat pad">
                    <p>Citations</p>
                    <h4>{researcherProfile?.citations || 0}</h4>
                  </div>
                  <div className="stat pad">
                    <p>h-index</p>
                    <h4>{researcherProfile?.h_index || 0}</h4>
                  </div>
                </div>
                <div className="citation-chart-wrap">
                  <h4 className="chart-title">Citations per year</h4>
                  <div className="citation-mini-chart">
                    <div className="y-axis">
                      <span>3400</span>
                      <span>2550</span>
                      <span>1700</span>
                      <span>850</span>
                      <span>0</span>
                    </div>
                    <div className="chart-bars">
                      {(researcherProfile?.citations_per_year || []).map((item, i) => (
                        <div className="bar-col" key={i}>
                          <div
                            className="bar-ct"
                            style={{ height: `${(item.value / 3400) * 100}%` }}
                            title={`${item.value} citations`}
                          />
                          <span className="x-label">{item.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card-grid">
                  {generalInfo?.department && (
                    <>
                      <div className="grid-label">Department:</div>
                      <div className="grid-valueu">{generalInfo.department}</div>
                    </>
                  )}
                  <div className="grid-label">Research Interests:</div>
                  <div className="grid-valueu">
                    {researcherProfile?.research_interests?.map((interest, idx) => (
                      <span key={idx}>{interest}<br /></span>
                    ))}
                  </div>
                  <div className="grid-label">PhD Advisors:</div>
                  <div className="grid-valueu">
                    {researcherProfile?.advisors?.phd_advisors?.map((adv, idx) => (
                      <span className="green" key={idx}>{adv}<br /></span>
                    ))}
                  </div>
                  <div className="grid-label">MS Advisors:</div>
                  <div className="grid-valueu">
                    {researcherProfile?.advisors?.ms_advisors?.map((adv, idx) => (
                      <span className="green" key={idx}>{adv}<br /></span>
                    ))}
                  </div>
                  <div className="grid-label">Responsibilities:</div>
                  <div className="grid-valueu">
                    <ul className="resp-list">
                      {researcherProfile?.responsibilities?.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
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
                  {notableSlides.map((group, index) => (
                    <Carousel.Item key={index}>
                      <div className="researcher-row">
                        {group.map((item: any, i: number) => (
                          <div className="rsrcher-item" key={i}>
                            <img src={item.researcher_image || item.img || "https://randomuser.me/api/portraits/lego/1.jpg"} alt={item.name} />
                            <div className="resrcher-info">
                              <h6>{item.name}</h6>
                              <p>{item.position || item.role}</p>
                              <a href={`/researcher/${item.researcher_id || 'unknown'}`}>See Details</a>
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
                  {peopleSlides.map((group, index) => (
                    <Carousel.Item key={index}>
                      <div className="notable-row">
                        {group.map((item: any, i: number) => (
                          <div className="notable-user" key={i}>
                            <img src={item.researcher_image || item.img || "https://randomuser.me/api/portraits/lego/1.jpg"} alt={item.name} />
                            <p>{item.name}</p>
                            <span>{item.position || item.role}</span>
                            <p className="sub">{item.researcher_email || ""}</p>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
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
      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-left">
            <div className="logo">
              <Image
                src="/logo.svg"
                alt="TensorCrest Logo"
                width={160}
                height={40}
                priority
              />
            </div>
            {/* <h3 className="footer-logo">TensorCrest</h3> */}
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
      <UploadPdfModal
        open={showUploadModal}
        onClose={() => setShowUploadModal(false)}
      />
      <FloatingChatBox />
    </>
  );
}
