import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
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

// ---------------- UTILITY (chunk array) ----------------
const chunkArray = (arr: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

const slides = chunkArray(researcherData, 2);

export default function CareerPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("overview");
    const [showUploadModal, setShowUploadModal] = useState(false);

    return (
        <>
            <Head>
                <title>TensorCrest – Career Page</title>
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
                    <a>Career</a>
                    <a>Q&amp;A</a>
                    <a style={{ cursor: "pointer" }} onClick={() => router.push("/network-page")}>
                    Network</a>
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
                    <section className="prof-her">
                        <div className="container">
                            {/* ===== Popular Categories ===== */}
                            <section className="popular-categories">
                                <div className="section-header">
                                    <h2>Popular category That matches your criteria</h2>
                                    <a href="#" className="view-all">
                                        View All →
                                    </a>
                                </div>
                                <div className="category-grid">
                                    <div className="cat-item active">
                                        <div className="icon-box">🔬</div>
                                        <div className="cat-text">
                                            <p className="title">Research Assistant (RA)</p>
                                            <p className="subtitle">267 Open position</p>
                                        </div>
                                    </div>
                                    <div className="cat-item">
                                        <div className="icon-box">💻</div>
                                        <div className="cat-text">
                                            <p className="title">Junior Researcher</p>
                                            <p className="subtitle">312 Open position</p>
                                        </div>
                                    </div>
                                    <div className="cat-item">
                                        <div className="icon-box">📢</div>
                                        <div className="cat-text">
                                            <p className="title">Senior Researcher</p>
                                            <p className="subtitle">297 Open position</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* ===== Search Filter ===== */}
                            <section className="search-filter">
                                <div className="search-box">
                                    <div className="input-group">
                                        🔍
                                        <input type="text" placeholder="Job title, Keyword..." />
                                    </div>

                                    <div className="input-group">
                                        📍
                                        <input type="text" placeholder="Location" />
                                    </div>

                                    <div className="input-group">
                                        🧩
                                        <select className="category-select">
                                            <option value="" disabled selected hidden>
                                                Select Category
                                            </option>
                                            <option>Computer Science</option>
                                            <option>Engineering</option>
                                            <option>Business & Management</option>
                                            <option>Health & Medical</option>
                                        </select>
                                    </div>
                                    <button className="btn-find">Find Job</button>
                                </div>
                            </section>
                            <div className="main-content">
                                <aside className="sidebar">
                                    <div className="filter-card">
                                        <div className="filter-header">
                                            <h3>Location Radius: <span>32 miles</span></h3>
                                            <i className="fas fa-chevron-up"></i>
                                        </div>
                                        <input type="range" className="range-slider" value="32" />

                                        <div className="filter-header">
                                            <h3>Candidate Level</h3>
                                            <i className="fas fa-chevron-up"></i>
                                        </div>
                                        <label><input type="radio" name="level" /> Entry Level</label>
                                        <label><input type="radio" name="level" checked /> Mid Level</label>
                                        <label><input type="radio" name="level" /> Expert Level</label>

                                        <div className="filter-header">
                                            <h3>Experiences</h3>
                                            <i className="fas fa-chevron-up"></i>
                                        </div>
                                        <label><input type="radio" /> Freshers</label>
                                        <label><input type="radio" /> 1 - 2 Years</label>
                                        <label><input type="radio" /> 2 - 4 Years</label>
                                        <label><input type="radio" checked /> 4 - 6 Years</label>
                                        <label><input type="radio" /> 6 - 8 Years</label>
                                        <label><input type="radio" /> 8 - 10 Years</label>
                                        <label><input type="radio" /> 10 - 15 Years</label>
                                        <label><input type="radio" /> 15+ Years</label>

                                        <div className="filter-header">
                                            <h3>Education</h3>
                                            <i className="fas fa-chevron-up"></i>
                                        </div>
                                        <label><input type="checkbox" /> All</label>
                                        <label><input type="checkbox" /> High School</label>
                                        <label><input type="checkbox" /> Intermediate</label>
                                        <label><input type="checkbox" checked /> Graduation</label>
                                        <label><input type="checkbox" /> Master Degree</label>
                                        <label><input type="checkbox" /> Bachelor Degree</label>

                                        <div className="filter-header">
                                            <h3>Gender</h3>
                                            <i className="fas fa-chevron-up"></i>
                                        </div>
                                        <label><input type="radio" name="gender" checked /> Male</label>
                                        <label><input type="radio" name="gender" /> Female</label>
                                        <label><input type="radio" name="gender" /> Others</label>
                                    </div>
                                </aside>
                                <div className="job-list-grid">
                                    <a href="#job-1" className="job-card-link">
                                        <div className="job-card">
                                            <span className="badge">Featured</span>
                                            <div className="card-header">
                                                <div className="job-icon-box"><i className="fas fa-code"></i></div>
                                                <div className="info">
                                                    <h4>Dr. A. Rahman - AI in Healthcare Project</h4>
                                                    <p><i className="fas fa-map-marker-alt"></i> United Kingdom of Great Britain</p>
                                                </div>
                                            </div>
                                            <h2 className="job-title">Junior researcher</h2>
                                            <div className="job-meta">
                                                <span className="post-time"><i className="far fa-clock"></i> 2 days ago</span>
                                            </div>
                                            <p className="job-footer">Full Time • $30k-$35k</p>
                                        </div>
                                    </a>

                                    <a href="#job-2" className="job-card-link">
                                        <div className="job-card">
                                            <span className="badge">Featured</span>
                                            <div className="card-header">
                                                <div className="job-icon-box"><i className="fas fa-book"></i></div>
                                                <div className="info">
                                                    <h4>Prof. M. Rahman - Impact Assessment Study</h4>
                                                    <p><i className="fas fa-map-marker-alt"></i> United Kingdom</p>
                                                </div>
                                            </div>
                                            <h2 className="job-title">Thesis / Dissertation Assistant</h2>
                                            <div className="job-meta">
                                                <span className="post-time"><i className="far fa-clock"></i> 1 day ago</span>
                                            </div>
                                            <p className="job-footer">Full Time • $30k-$35k</p>
                                        </div>
                                    </a>

                                    <a href="#job-3" className="job-card-link">
                                        <div className="job-card">
                                            <span className="badge">Featured</span>
                                            <div className="card-header">
                                                <div className="job-icon-box"><i className="fas fa-pen-nib"></i></div>
                                                <div className="info">
                                                    <h4>Dr. N. Islam - Legal Research Project</h4>
                                                    <p><i className="fas fa-map-marker-alt"></i> United Kingdom of Great Britain</p>
                                                </div>
                                            </div>
                                            <h2 className="job-title">Thesis Writer</h2>
                                            <div className="job-meta">
                                                <span className="post-time"><i className="far fa-clock"></i> 3 days ago</span>
                                            </div>
                                            <p className="job-footer">Full Time • $30k-$35k</p>
                                        </div>
                                    </a>

                                    <a href="#job-4" className="job-card-link">
                                        <div className="job-card">
                                            <span className="badge">Featured</span>
                                            <div className="card-header">
                                                <div className="job-icon-box"><i className="fas fa-user-tie"></i></div>
                                                <div className="info">
                                                    <h4>Dr. A. Hossain - AI in Data science Project</h4>
                                                    <p><i className="fas fa-map-marker-alt"></i> United Kingdom of Great Britain</p>
                                                </div>
                                            </div>
                                            <h2 className="job-title">Co- Ordinator</h2>
                                            <div className="job-meta">
                                                <span className="post-time"><i className="far fa-clock"></i> 5 hours ago</span>
                                            </div>
                                            <p className="job-footer">Full Time • $30k-$35k</p>
                                        </div>
                                    </a>

                                    <a href="#job-5" className="job-card-link">
                                        <div className="job-card">
                                            <span className="badge">Featured</span>
                                            <div className="card-header">
                                                <div className="job-icon-box"><i className="fas fa-hand-holding-heart"></i></div>
                                                <div className="info">
                                                    <h4>Dr Mridha - Reserch Project</h4>
                                                    <p><i className="fas fa-map-marker-alt"></i> United Kingdom of Great Britain</p>
                                                </div>
                                            </div>
                                            <h2 className="job-title">Student Volunteer</h2>
                                            <div className="job-meta">
                                                <span className="post-time"><i className="far fa-clock"></i> 1 week ago</span>
                                            </div>
                                            <p className="job-footer">Full Time • $30k-$35k</p>
                                        </div>
                                    </a>

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
