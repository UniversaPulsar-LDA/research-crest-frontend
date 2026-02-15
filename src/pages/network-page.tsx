import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from 'react';
import {
    TbChevronLeft, TbChevronRight, TbFileText,
    TbDownload, TbStarFilled, TbSearch,
    TbBell, TbGridDots, TbUserCircle, TbSend, TbArrowLeft, TbCalendar
} from "react-icons/tb";
import { useRouter } from "next/router";
const NetworkPage = () => {
      const router = useRouter();
    const [selectedPub, setSelectedPub] = useState<any>(null);
    const topRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
        if (ref.current) {
            const scrollAmount = 300;
            ref.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    }
    // --- এইখানে ডেটা অ্যারেটি যোগ করুন ---
    const researchers = [
        { id: 1, name: "Dr. Alex Rahman", score: "95%", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop" },
        { id: 2, name: "Dr. Sarah J.", score: "92%", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop" },
        { id: 3, name: "Prof. Saiful Islam", score: "88%", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop" },
        { id: 4, name: "Dr. Emily Chen", score: "85%", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&h=200&auto=format&fit=crop" },
        { id: 5, name: "Michael Vance", score: "82%", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop" },
        { id: 6, name: "Dr. Lisa Ray", score: "80%", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=200&h=200&auto=format&fit=crop" },
        { id: 7, name: "Farzana Akter", score: "78%", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop" },
    ];

    // ১. পাবলিকেশন ডেটা অবজেক্ট (এখানে আরও প্রফেশনাল ডেটা অ্যাড করা হয়েছে)
    const publications = [
        {
            id: 1,
            title: "AI-driven traffic prediction using deep learning for smart cities",
            authors: "Rahim Uddin • Farzana Akter",
            fullAuthors: ["Rahim Uddin", "Farzana Akter", "Dr. Saiful Islam"],
            citations: 25,
            downloads: "1.5K",
            date: "Feb 2026",
            journal: "IEEE Smart Cities Journal",
            doi: "10.1109/TSC.2026.123456",
            keywords: ["Deep Learning", "Smart City", "LSTM", "Traffic Management"],
            description: "A novel deep learning approach using LSTM networks for real-time urban traffic flow prediction in dense smart city environments. This research focuses on the optimization of traffic signals to reduce congestion by 20% using predictive modeling."
        },


        {
            id: 2,
            title: "Quantum Computing Applications in Modern Healthcare Systems",
            authors: "Dr. Sarah J. • Alex Rahman",
            fullAuthors: ["Dr. Sarah J.", "Alex Rahman", "Michael Chen"],
            citations: 42,
            downloads: "2.1K",
            date: "Jan 2026",
            journal: "Medical Tech Review",
            keywords: ["Quantum", "Healthcare", "Data Security"],
            description: "Exploring how quantum algorithms can accelerate drug discovery beyond classical limits."
        },
        {
            id: 3,
            title: "Blockchain Frameworks for Supply Chain Transparency",
            authors: "Saiful Islam • Rahim Uddin",
            fullAuthors: ["Saiful Islam", "Rahim Uddin"],
            citations: 18,
            downloads: "900",
            date: "Dec 2025",
            journal: "Supply Chain Quarterly",
            keywords: ["Blockchain", "Logistics", "IoT"],
            description: "A study on implementing private blockchain networks to track product lifecycles."
        }
        // আরও ডেটা থাকলে এখানে যোগ হবে
    ];

    // ২. ডিটেইল ভিউ হ্যান্ডলার (ক্লিক করলে পেজের একদম উপরে নিয়ে যাবে)
    const handleViewDetails = (pub: any) => {
        setSelectedPub(pub);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ৩. প্রফেশনাল ডিটেইল ভিউ রিটার্ন (যদি selectedPub থাকে)
    if (selectedPub) {
        return (
            <div className="net-wrapper">
                {/* আপনি চাইলে এখানেও নেভবারটি রাখতে পারেন যাতে পেজটি খালি না লাগে */}
                <div className="professional-detail-container">
                    <div className="detail-header">
                        <button className="back-btn-modern" onClick={() => setSelectedPub(null)}>
                            <TbArrowLeft /> Back to Research Network
                        </button>
                        <div className="header-actions">
                            <button className="action-icon-btn"><TbSend /> Share</button>
                            <button className="action-icon-btn"><TbStarFilled color="#f59e0b" /> Save</button>
                        </div>
                    </div>

                    <div className="detail-grid">
                        {/* মেইন কন্টেন্ট এলাকা */}
                        <div className="main-info">
                            <div className="pub-badge">Academic Publication</div>
                            <h1 className="modern-title">{selectedPub.title}</h1>

                            <div className="author-tags">
                                {selectedPub.fullAuthors?.map((author: string, index: number) => (
                                    <span key={index} className="author-name">{author}</span>
                                ))}
                            </div>

                            <div className="meta-info-strip">
                                <span><TbCalendar /> {selectedPub.date}</span>
                                <span><TbFileText /> {selectedPub.journal}</span>
                            </div>

                            <div className="abstract-card">
                                <h3>Abstract / Description</h3>
                                <p>{selectedPub.description}</p>
                            </div>


                            {/* ডিটেইল পেজে অনেকগুলো ছবির সেকশন */}
                            <div className="detail-figure-gallery" style={{ marginTop: '25px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px', color: '#1a202c' }}>
                                    Research Figures & Data Visualization
                                </h3>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                                    gap: '15px'
                                }}>
                                    {[
                                        "https://pub.mdpi-res.com/sensors/sensors-19-03513/article_deploy/html/images/sensors-19-03513-g001.png",
                                        "/images/ccc.png",
                                        "/images/bbb.png",

                                    ].map((imgUrl, idx) => (
                                        <div key={idx} style={{
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            background: '#fff',
                                            padding: '10px'
                                        }}>
                                            <img
                                                src={imgUrl}
                                                alt={`Figure ${idx + 1}`}
                                                style={{ width: '100%', height: '160px', objectFit: 'contain' }}
                                                onError={(e) => { e.currentTarget.src = "https://placehold.jp/18/f1f5f9/64748b/300x200.png?text=Figure"; }}
                                            />
                                            <p style={{ fontSize: '11px', color: '#718096', textAlign: 'center', marginTop: '8px' }}>
                                                Figure {idx + 1}: Data Analysis for {selectedPub.title.split(' ')[0]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>












                            <div className="keywords-sec">
                                <div className="tags-container">
                                    {selectedPub.keywords?.map((tag: string, i: number) => (
                                        <span key={i} className="keyword-tag">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* সাইডবার (Stats & Download) */}
                        <aside className="detail-sidebar">
                            <div className="stats-card-modern">
                                <div className="stat-item-modern">
                                    <strong>{selectedPub.citations}</strong>
                                    <span>Citations</span>
                                </div>
                                <div className="stat-item-modern">
                                    <strong>{selectedPub.downloads}</strong>
                                    <span>Downloads</span>
                                </div>
                            </div>

                            <button className="download-full-btn">
                                <TbDownload /> Download PDF (Full Text)
                            </button>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <Head>
                <title>TensorCrest – Index Page</title>
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
                <nav className="nn-nav">
                    <a href="#" onClick={(e) => { e.preventDefault(); router.push("/career-page"); }}>Career</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); router.push("/network-page"); }}>Network</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); router.push("/qna-page"); }}>Q&A</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); router.push("/scholarship-page"); }}>Scholarship</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); router.push("/help-page"); }}>Help Center</a>
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
                    <div className="ninn-dots-wrapper" ref={dropdownRef}>
                        <TbGridDots className="ninn-dots-icon"
                            onClick={() => setOpen(!open)}
                        />
                        {/* Dropdown */}
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
                    </div>
                </nav>
            </header>
            <div className="net-wrapper">
                <div className="net-container">
                    {/* SIDEBAR */}
                    <aside className="net-sidebar">
                        <div className="filter-card">
                            <h3>Filters</h3>
                            <div className="filter-item">
                                <label>Gender</label>
                                <select><option>All</option></select>
                            </div>
                            <div className="filter-item">
                                <label>Rating</label>
                                <select><option>All Ratings</option></select>
                            </div>
                        </div>
                    </aside>

                    {/* MAIN CONTENT */}
                    <main className="net-main">
                        <h1 className="page-title">Network Page</h1>
                        {/* Top 5% Researchers */}
                        <section className="res-section">
                            <div className="section-header">
                                <h2>Top 5% Researchers</h2>
                                <div className="nav-btns">
                                    <button onClick={() => scroll(topRef, 'left')}><TbChevronLeft /></button>
                                    <button onClick={() => scroll(topRef, 'right')}><TbChevronRight /></button>
                                </div>
                            </div>
                            <div className="carousel-track" ref={topRef}>
                                {/* এখানে researchers অ্যারে ম্যাপ করুন এবং img প্রপস পাস করুন */}
                                {researchers.map((res) => (
                                    <ResearcherCard
                                        key={res.id}
                                        name={res.name}
                                        score={res.score}
                                        img={res.img}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Next 5% Researchers */}
                        <section className="res-section">
                            <div className="section-header">
                                <h2>Next 5% Researchers</h2>
                                <div className="nav-btns">
                                    <button onClick={() => scroll(nextRef, 'left')}><TbChevronLeft /></button>
                                    <button onClick={() => scroll(nextRef, 'right')}><TbChevronRight /></button>
                                </div>
                            </div>
                            <div className="carousel-track" ref={nextRef}>
                                {/* এখানেও img={res.img} অবশ্যই দিতে হবে */}
                                {researchers.slice().reverse().map((res) => (
                                    <ResearcherCard
                                        key={res.id}
                                        name={res.name}
                                        score={res.score}
                                        img={res.img}
                                    />
                                ))}
                            </div>
                        </section>


                        {/* PUBLICATIONS SECTION - Researcher Based Design */}
                        <section className="pub-section-modern">
                            <div className="section-header-modern">
                                <h2>Top Content Publications</h2>
                                <p>Discover the latest research in your network</p>
                            </div>

                            <div className="pub-list-vertical">
                                {publications.map((pub) => (
                                    <div key={pub.id} className="rg-full-card">

                                        {/* Top Researcher Header (নির্ধারিত রিসার্চার হাইলাইট) */}
                                        <div className="rg-card-author-header">
                                            <img
                                                src={`https://i.pravatar.cc/150?u=${pub.fullAuthors?.[0]}`}
                                                alt="Lead Researcher"
                                                className="header-avatar"
                                            />
                                            <div className="header-info">
                                                <span className="author-name-link">{pub.fullAuthors?.[0]}</span>
                                                <span className="author-action-text">authored this research</span>
                                            </div>
                                            <button className="header-dropdown-btn">
                                                <TbChevronRight className="rotate-90" />
                                            </button>
                                        </div>



                                        {/* Figure Preview Strip - Technical Research Figures */}
                                        <div className="rg-figure-strip" onClick={() => setSelectedPub(pub)}>
                                            {[
                                                "https://pub.mdpi-res.com/sensors/sensors-19-03513/article_deploy/html/images/sensors-19-03513-g001.png",
                                                "/images/ccc.png",
                                                "/images/bbb.png",
                                                "/images/hhh.png",
                                                "https://www.frontiersin.org/files/Articles/812328/fphy-09-812328-g002.jpg" // Comparative Analysis Table
                                            ].map((imgUrl, idx) => (
                                                <div key={idx} className="rg-figure-box">
                                                    <img
                                                        src={imgUrl}
                                                        alt="Research Diagram"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain', // যাতে টেকনিক্যাল ডায়াগ্রামের কোনো অংশ কেটে না যায়
                                                            padding: '4px',
                                                            background: '#fff'
                                                        }}
                                                    />
                                                    {idx === 4 && <div className="more-overlay">+1</div>}
                                                </div>
                                            ))}
                                        </div>







                                        {/* Content Body */}
                                        <div className="rg-card-body">
                                            <h3 className="rg-title" onClick={() => setSelectedPub(pub)}>
                                                {pub.title}
                                            </h3>

                                            <div className="rg-meta-line">
                                                <span className="rg-type-badge">Article</span>
                                                <span className="rg-meta-text">{pub.date} · {pub.downloads} Reads · {pub.citations} Citations</span>
                                            </div>

                                            <div className="rg-journal-line">
                                                <div className="journal-logo-placeholder"></div>
                                                <span>{pub.journal}</span>
                                            </div>

                                            {/* Co-authors List with Avatars */}
                                            <div className="rg-co-authors">
                                                {pub.fullAuthors?.map((author: string, idx: number) => (
                                                    <div key={idx} className="co-author-tag">
                                                        <img src={`https://i.pravatar.cc/40?u=${author}`} alt="" />
                                                        <span>{author}{idx < pub.fullAuthors.length - 1 ? ' · ' : ''}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="rg-footer-actions">
                                                <div className="action-group-left">
                                                    <button className="rg-btn-primary">Download</button>
                                                    <button className="rg-btn-secondary">Save</button>
                                                </div>
                                                <div className="action-group-right">
                                                    <button className="rg-btn-minimal">Follow</button>
                                                    <button className="rg-btn-minimal">Recommend</button>
                                                    <button className="rg-btn-minimal">Share</button>
                                                </div>
                                            </div>

                                            <div className="rg-social-proof">
                                                <TbUserCircle size={14} className="social-icon" />
                                                <span><strong>2 researchers</strong> recommend this research</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>
                {/* FOOTER */}
                <footer className="net-footer">
                    <div className="footer-container">
                        <div className="footer-brand-section">
                            <h2 className="footer-logo">Tensor<span>Crest</span></h2>
                            <p>Stay in the know by subscribing to our newsletter below</p>
                            <div className="newsletter-box">
                                <input type="email" placeholder="Enter your email address" />
                                <button className="send-btn"><TbSend /></button>
                            </div>
                        </div>
                        <div className="footer-links-wrapper">
                            <div className="footer-col">
                                <h4>Contact</h4>
                                <a href="#">Contact Form</a>
                                <a href="#">FAQ</a>
                                <p className="footer-bottom-text">© Researchcrest. All Rights Reserved 2023</p>
                            </div>
                            <div className="footer-col">
                                <h4>Legal</h4>
                                <a href="#">Privacy Policy</a>
                                <a href="#">T&C</a>
                            </div>
                            <div className="footer-col">
                                <h4>Social</h4>
                                <a href="#">Facebook</a>
                                <a href="#">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

const ResearcherCard = ({ name, score, img }: { name: string, score: string, img: string }) => (
    <div className="res-card-small">
        <div className="card-top-teal"></div>
        <div className="card-content">
            {/* ইমেজ সেকশন */}
            <div className="avatar-box">
                <img
                    src={img}
                    alt={name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    onError={(e) => { e.currentTarget.src = `https://i.pravatar.cc/150?u=${name}`; }}
                />
            </div>

            {/* নাম এবং স্কোর */}
            <h4>{name} <span className="score-text">{score}</span></h4>
            <p className="desig" style={{ marginBottom: '12px' }}>Professor, AI & ML</p>

            {/* সরাসরি স্ট্যাটাস বা ভ্যালুগুলো দেখানো হচ্ছে (হোভার ছাড়া) */}
            <div className="card-stats-row" style={{
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '11px',
                borderTop: '1px solid #edf2f7',
                paddingTop: '10px',
                marginBottom: '15px',
                textAlign: 'center'
            }}>
                <div>
                    <div style={{ fontWeight: 'bold', color: '#2d3748' }}>42</div>
                    <div style={{ color: '#718096' }}>Publication</div>
                </div>
                <div>
                    <div style={{ fontWeight: 'bold', color: '#2d3748' }}>3.1K</div>
                    <div style={{ color: '#718096' }}>Citations</div>
                </div>
                <div>
                    <div style={{ fontWeight: 'bold', color: '#2d3748' }}>28</div>
                    <div style={{ color: '#718096' }}>H-index</div>
                </div>
            </div>

            {/* অ্যাকশন বাটন */}
            <div className="card-footer-btns">
                <button className="btn-f">Follow</button>
                <button className="btn-c">Chat</button>
            </div>
        </div>
    </div>
);

export default NetworkPage;