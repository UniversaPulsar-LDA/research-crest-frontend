"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { Geist, Geist_Mono } from "next/font/google";
import { FaLink, FaEnvelope } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyPound } from "react-icons/tb";
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
import { FiSearch } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
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
import {
    IoIosArrowUp,
} from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { FaMicroscope, FaLaptopCode, FaBullhorn, FaUserGraduate } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
const dummyJobs = [
    {
        id: 1,
        href: "#job-1",
        theme: "light",
        type: "Featured",
        category: "Research",
        company: "AI Lab UK",
        companyImage: "",
        title: "Junior Researcher",
        location: "United Kingdom of Great Britain",
        salaryRange: "$30k - $35k",
        closes: "20 Feb 2026",
        isExternal: false,
    },
    {
        id: 2,
        href: "#job-2",
        theme: "dark",
        type: "Urgent",
        category: "AI Project",
        company: "HealthTech",
        companyImage: "/company-logo.png", // optional
        title: "AI in Healthcare Project",
        location: "London, UK",
        salaryRange: "$40k - $50k",
        closes: "28 Feb 2026",
        isExternal: true,
    },
];
/* ===== FONTS ===== */
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

/* ===== TAB CONFIG ===== */
const PROFILE_TABS = [
    { key: "overview", label: "Overview", component: <Overview /> },
    { key: "research", label: "Research Area", component: <ResearchArea /> },
    { key: "publications", label: "Publications", component: <Publications /> },
    { key: "network", label: "Network", component: <Network /> },
    { key: "projects", label: "Projects", component: <Projects /> },
    { key: "awards", label: "Awards", component: <Awards /> },
    { key: "career", label: "Career", component: <Career /> },
];

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

const disciplineData = [
    { title: "Agriculture, Food & Veterinary", count: 36 },
    { title: "Architecture, Building & Planning", count: 40 },
    { title: "Biological Sciences", count: 257 },
    { title: "Business & Management Studies", count: 148 },
    {
        title: "Computer Sciences",
        count: 342,
        children: [
            { title: "Artificial Intelligence", count: 186 },
            { title: "Computer Science", count: 271 },
            { title: "Cyber Security", count: 57 },
        ],
    },
];

const candidateLevelData = [
    "Entry Level",
    "Mid Level",
    "Expert Level",
];

const experienceData = [
    "Freshers",
    "1 - 2 Years",
    "2 - 4 Years",
    "4 - 6 Years",
    "6 - 8 Years",
    "8 - 10 Years",
    "10 - 15 Years",
    "15+ Years",
];

const academicDisciplineData = [
    { title: "Agriculture, Food & Veterinary", count: 5 },
    { title: "Biological Sciences", count: 15 },
    { title: "Business & Management Studies", count: 3 },
    { title: "Computer Sciences", count: 8 },
    { title: "Economics", count: 1 },
    { title: "Engineering & Technology", count: 8 },
    { title: "Health & Medical", count: 14 },
    { title: "Law", count: 2 },
    { title: "Mathematics & Statistics", count: 4 },
    { title: "Physical & Environmental Sciences", count: 10 },
    { title: "Psychology", count: 6 },
    { title: "Social Sciences & Social Care", count: 6 },
    { title: "Sport & Leisure", count: 2 },
];

const jobList = [
    {
        id: 1,
        href: "#job-1",
        badge: "Food",
        title: "Junior Researcher",
        institute: "Imperial College London",
        location: "Devon, Exeter",
        salary: "£33,000 to £35,000 plus benefits",
        closesAt: "05 Mar 2026",
        image: "/images/ppr/kul.png",
    },
    {
        id: 2,
        href: "#job-2",
        badge: "Health",
        title: "Postdoctoral Fellow - Moris Lab",
        institute: "The Francis Crick Institute",
        location: "Oxford, UK",
        salary: "From £45,500 with benefits",
        closesAt: "12 Mar 2026",
        image: "/images/ppr/frcr.png",
    },
    {
        id: 3,
        href: "#job-3",
        badge: "AI",
        title: "AI Research Intern",
        institute: "University College London",
        location: "London, UK",
        salary: "£1,500 / month",
        closesAt: "20 Mar 2026",
        image: "/images/ppr/kul.png",
    },
    {
        id: 4,
        href: "#job-4",
        badge: "Data",
        title: "Data Science Fellow",
        institute: "King’s College London",
        location: "London, UK",
        salary: "£40,000 to £45,000",
        closesAt: "28 Mar 2026",
        image: "/images/ppr/kul.png",
    },
    {
        id: 5,
        href: "#job-5",
        badge: "Biotech",
        title: "Lab Research Officer",
        institute: "University of Manchester",
        location: "Manchester, UK",
        salary: "£30,000 to £34,000",
        closesAt: "02 Apr 2026",
        image: "/images/ppr/kul.png",
    },
    {
        id: 6,
        href: "#job-6",
        badge: "Physics",
        title: "Postdoctoral Researcher",
        institute: "University of Cambridge",
        location: "Cambridge, UK",
        salary: "£42,000 to £48,000",
        closesAt: "10 Apr 2026",
        image: "/images/ppr/kul.png",
    },
];

const fundingData = [
    { title: "PhDs", count: 14 },
];

const professionalServicesData = [
    { title: "Fundraising, Alumni, Bids & Grants", count: 1 },
    { title: "Hospitality, Retail, Conferences & Events", count: 16 },
    { title: "Laboratory, Clinical & Technician", count: 2 },
    { title: "PR, Marketing, Sales & Communication", count: 3 },
    { title: "Project Management & Consulting", count: 2 },
    { title: "Senior Management", count: 2 },
    { title: "Student Services", count: 1 },
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

const TAG_STORAGE_KEY = "career_search_tags";

export default function CareerPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("overview");
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [openDiscipline, setOpenDiscipline] = useState(true);
    const [openSub, setOpenSub] = useState<string | null>(null);
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    //const [tags, setTags] = useState<string[]>([]);
    const [openFilter, setOpenFilter] = useState<string | null>("candidate");
    const [isClient, setIsClient] = useState(false);
    const toggleFilter = (key: string) => {
        setOpenFilter(prev => (prev === key ? null : key));
    };
    const [tags, setTags] = useState<string[]>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(TAG_STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        }
        return [];
    });

    const handleFindJob = () => {
        const newTags: string[] = [];
        if (keyword.trim()) newTags.push(keyword.trim());
        if (location.trim()) newTags.push(location.trim());
        if (category.trim()) newTags.push(category.trim());

        if (newTags.length === 0) return;

        setTags(prev => {
            const updatedTags = [...prev, ...newTags];
            // localStorage update
            localStorage.setItem(TAG_STORAGE_KEY, JSON.stringify(updatedTags));
            return updatedTags;
        });

        setKeyword("");
        setLocation("");
        setCategory("");
    };

    const removeTag = (index: number) => {
        setTags(prev => {
            const updatedTags = prev.filter((_, i) => i !== index);
            localStorage.setItem(TAG_STORAGE_KEY, JSON.stringify(updatedTags));
            return updatedTags;
        });
    };

    // useEffect(() => {
    //   setIsClient(true);
    // }, []);

    useEffect(() => {
        setIsClient(true);
        const stored = localStorage.getItem(TAG_STORAGE_KEY);
        if (stored) {
            setTags(JSON.parse(stored));
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem(TAG_STORAGE_KEY, JSON.stringify(tags));
    }, [tags]);

    if (!isClient) return null;

    return (
        <>
     <Head>
        <title>TensorCrest – Career Page</title>
        <meta name="description" content="TensorCrest - A Platform for Researchers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <header className="navbar-main">
        <div className="logo">
          <Image
            src="/logo.svg"
            alt="ResearchCrest Logo"
            width={160}
            height={40}
            priority
          />
        </div>
        <div className="inp-search">
          <input type="text" placeholder="Search In Tensor Crest" />
        </div>
        <nav className="nn-nav">
          <Link href="/career-page">Career</Link>
          <Link href="/network-page">Network</Link>
          <Link href="/qna-page">Q&A</Link>
          <Link href="/scholarship-page">Scholarships</Link>
          <Link href="/help-page">Help Center</Link>
          {/* <a href="#" className="nine-dots">
            <TbGridDots
              style={{
                verticalAlign: "middle",
                marginLeft: "6px",
                fontSize: "1.2rem",
              }}
            />
          </a> */}
          {/* Nine Dots */}
          {/* <div className="ninn-dots-wrapper" ref={dropdownRef}>
            <TbGridDots className="ninn-dots-icon"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="nn-dropdown">
                <div className="nn-dropdown-left">
                  <h4>My Apps</h4>
                  <a href="#">Find New Clients</a>
                  <a href="#">Groups</a>
                  <a href="#">Manage Billing</a>

                  <h4>Talent</h4>
                  <a href="#">Hire with AI</a>
                  <a href="#">Talent Insights</a>

                  <h4>Sales</h4>
                  <a href="#">Services Marketplace</a>
                </div>
                <div className="nn-dropdown-right">
                  <h4>Explore more for business</h4>
                  <a href="#">Hire on TensorCrest</a>
                  <a href="#">Sell with TensorCrest</a>
                  <a href="#">Post a job</a>
                  <a href="#">Advertise</a>
                  <a href="#">Get Premium</a>
                  <a href="#">Admin Center</a>
                </div>
              </div>
            )}
          </div> */}
        </nav>
      </header>
            {/* ================= PROFILE ================= */}
            <section className="profile-page">
                <section className="profile-wrap">
                    <section className="pdng-hero"></section>
                    {/* ===== HERO ===== */}
                    <section className="prof-her">
                        <div className="container">
                            {/* ===== Popular Categories ===== */}
                            <section className="popular-categories">
                                <div className="section-header">
                                    <h2>Popular category That matches your criteria</h2>
                                </div>
                                <div className="category-grid">
                                    <div className="cat-item active">
                                        <div className="icon-jb-box">
                                            <FaMicroscope />
                                        </div>
                                        <div className="cat-text">
                                            <p className="title">Research Assistant (RA)</p>
                                            <p className="subtitle">267 Open position</p>
                                        </div>
                                    </div>
                                    <div className="cat-item">
                                        <div className="icon-jb-box">
                                            <FaLaptopCode />
                                        </div>
                                        <div className="cat-text">
                                            <p className="title">Junior Researcher</p>
                                            <p className="subtitle">312 Open position</p>
                                        </div>
                                    </div>
                                    <div className="cat-item">
                                        <div className="icon-jb-box">
                                            <FaBullhorn />
                                        </div>
                                        <div className="cat-text">
                                            <p className="title">Senior Researcher</p>
                                            <p className="subtitle">297 Open position</p>
                                        </div>
                                    </div>

                                    <div className="cat-item">
                                        <div className="icon-jb-box">
                                            <FaUserGraduate />
                                        </div>
                                        <div className="cat-text">
                                            <p className="title">Project Intern</p>
                                            <p className="subtitle">247 Open position</p>
                                        </div>
                                    </div>
                                    <div className="cat-item">
                                        <div className="icon-jb-box">
                                            <MdOutlineSchool />
                                        </div>
                                        <div className="cat-text">
                                            <p className="title">Thesis / Dissertation Assistant</p>
                                            <p className="subtitle">247 Open position</p>
                                        </div>
                                    </div>

                                    <div className="cat-item">
                                        <div className="icon-jb-box">
                                            <FaUserGraduate />
                                        </div>
                                        <div className="cat-text">
                                            <p className="title">Postdoctoral Researcher</p>
                                            <p className="subtitle">167 Open position</p>
                                        </div>
                                    </div>

                                    <div className="cat-item">
                                        <div className="icon-jb-box">
                                            <FaBullhorn />
                                        </div>
                                        <div className="cat-text">
                                            <p className="title">Co-Researcher Collaborator</p>
                                            <p className="subtitle">167 Open position</p>
                                        </div>
                                    </div>

                                    <div className="cat-item">
                                        <div className="icon-jb-box">
                                            <FaBullhorn />
                                        </div>
                                        <div className="cat-text">
                                            <p className="title">Co-Researcher Collaborator</p>
                                            <p className="subtitle">167 Open position</p>
                                        </div>
                                    </div>
                                </div>

                                {/* View All moved below grid */}
                                <div className="view-all-wrap">
                                    <a href="#" className="view-all">
                                        View All <HiArrowRight />
                                    </a>
                                </div>
                            </section>
                            {/* ===== Search Filter ===== */}
                            <section className="search-jb-filter">
                                <div className="search-box">
                                    {/* INPUT ROW */}
                                    <div className="input-group">
                                        <FiSearch className="iic" />
                                        <input
                                            type="text"
                                            placeholder="Job title, Keyword..."
                                            value={keyword}
                                            onChange={(e) => setKeyword(e.target.value)}
                                        />
                                    </div>

                                    <div className="input-group">
                                        <MdLocationOn className="iic" />
                                        <input
                                            type="text"
                                            placeholder="Location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                    </div>

                                    <div className="input-group">
                                        <HiOutlineSquares2X2 className="iic" />
                                        <select
                                            className="category-select"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option value="" disabled hidden>
                                                Select Category
                                            </option>
                                            <option>Computer Science</option>
                                            <option>Engineering</option>
                                            <option>Business & Management</option>
                                            <option>Health & Medical</option>
                                        </select>
                                    </div>

                                    <button className="btn-find" onClick={handleFindJob}>
                                        Find Job
                                    </button>
                                </div>
                            </section>
                            {/* TAG RESULT */}
                            {tags.length > 0 && (
                                <div className="search-jb-tags">
                                    {tags.map((tag, index) => (
                                        <span key={index} className="jb-tag">
                                            {tag}
                                            <span
                                                className="jb-tag-close"
                                                onClick={() => removeTag(index)}
                                            >
                                                ×
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            )}
                            <div className="filter-jb-content">
                                <aside className="jb-sidebar">
                                    {/* Candidate Level */}
                                    <div className="filter-jb-card">
                                        <div className="filter-jb-header clickable" onClick={() => toggleFilter("candidate")}>
                                            <h3>Candidate Level</h3>
                                            {openFilter === "candidate" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </div>
                                        {openFilter === "candidate" && (
                                            <div className="discipline-list">
                                                {candidateLevelData.map((item, i) => (
                                                    <label className="simple-jb-item" key={i}>
                                                        <input type="checkbox" /> {item}
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {/* Experience */}
                                    <div className="filter-jb-card">
                                        <div className="filter-jb-header clickable" onClick={() => toggleFilter("experience")}>
                                            <h3>Experiences</h3>
                                            {openFilter === "experience" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </div>
                                        {openFilter === "experience" && (
                                            <div className="discipline-list">
                                                {experienceData.map((item, i) => (
                                                    <label className="simple-jb-item" key={i}>
                                                        <input type="checkbox" /> {item}
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {/* Academic Discipline */}
                                    <div className="filter-jb-card">
                                        <div className="filter-jb-header clickable" onClick={() => toggleFilter("academic")}>
                                            <h3>Academic Discipline / Field of Expertise</h3>
                                            {openFilter === "academic" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </div>
                                        {openFilter === "academic" && (
                                            <div className="discipline-list">
                                                {academicDisciplineData.map((item, i) => (
                                                    <label className="discipline-jb-main" key={i}>
                                                        <span>
                                                            <input type="checkbox" /> {item.title}
                                                        </span>
                                                        <span className="count">{item.count}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {/* PhD & Funding */}
                                    <div className="filter-jb-card">
                                        <div className="filter-jb-header clickable" onClick={() => toggleFilter("funding")}>
                                            <h3>PhD & Master’s Studentships and Funding</h3>
                                            {openFilter === "funding" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </div>
                                        {openFilter === "funding" && (
                                            <div className="discipline-list">
                                                {fundingData.map((item, i) => (
                                                    <label className="discipline-jb-main" key={i}>
                                                        <span>
                                                            <input type="checkbox" /> {item.title}
                                                        </span>
                                                        <span className="count">{item.count}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {/* Professional Services */}
                                    <div className="filter-jb-card">
                                        <div className="filter-jb-header clickable" onClick={() => toggleFilter("services")}>
                                            <h3>Professional Services</h3>
                                            {openFilter === "services" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </div>

                                        {openFilter === "services" && (
                                            <div className="discipline-jb-list">
                                                {professionalServicesData.map((item, i) => (
                                                    <label className="discipline-jb-main" key={i}>
                                                        <span>
                                                            <input type="checkbox" /> {item.title}
                                                        </span>
                                                        <span className="count">{item.count}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </aside>
                                <div className="job-jb-list-grid">
                                    {jobList.map((job) => (
                                        <a key={job.id} href={job.href} className="job-card-link">
                                            <div className="job-card">
                                                <div className="botttom">
                                                    <span className="bbagge ongoing">{job.badge}</span>
                                                </div>

                                                <div className="ckard-header">
                                                    <div className="iicon-jb no-bg">
                                                        <Image
                                                            src={job.image}
                                                            alt={job.title}
                                                            width={80}
                                                            height={80}
                                                            className="iicon-jb-img"
                                                        />
                                                    </div>
                                                    <div className="info-fd">
                                                        <h2 className="job-jb-title">{job.title}</h2>
                                                        <p className="lllocation-jb">
                                                            <FaUniversity className="jb-icon" />
                                                            {job.institute}
                                                        </p>
                                                        <p className="lllocation-jb-sm">
                                                            <MdLocationOn className="jb-icon" />
                                                            {job.location}
                                                        </p>

                                                        <p className="lllocation-jb-sm">
                                                            <GiMoneyStack className="jb-icon" />
                                                            {job.salary}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="date-row-fd">
                                                    <span></span>
                                                    <span>
                                                        <strong>Closes At:</strong> {job.closesAt}
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
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
        </>
    );
}
