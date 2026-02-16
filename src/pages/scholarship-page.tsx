import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
// এখানে useState ইমপোর্ট করতে হবে
import React, { useRef, useState } from 'react';
import {
  TbGridDots, TbSearch, TbSchool, TbCertificate,
  TbTarget, TbArrowRight, TbSend, TbMapPin, TbCalendar, TbX, TbCheck, TbFileDescription, TbLink
} from "react-icons/tb";

export default function ScholarshipPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // ১. সিলেক্টেড স্কলারশিপ স্টেট
  const [selectedScholar, setSelectedScholar] = useState<any>(null);

  const scholarships = [
    {
      id: 1,
      name: "Global Excellence Scholarship",
      univ: "University of Oxford",
      loc: "UK",
      deadline: "15 March 2026",
      amount: "$30,000/year",
      eligibility: "Minimum GPA 3.8/4.0, IELTS 7.5+, Relevant Research Background.",
      benefits: "Full Tuition Fee, Monthly Stipend (£1,500), Health Insurance, Return Airfare.",
      documents: "Updated CV, Statement of Purpose (SOP), 2 Letters of Recommendation (LOR).",
      applyLink: "https://ox.ac.uk/scholarships"
    },
    {
      id: 2,
      name: "Stem Research Fellowship",
      univ: "MIT",
      loc: "USA",
      deadline: "02 April 2026",
      amount: "Fully Funded",
      eligibility: "PhD candidates in Robotics or AI, GRE Score 320+, 2+ Publications.",
      benefits: "Tuition Waiver, Research Grant ($5,000), Housing Allowance, Lab Access.",
      documents: "Research Proposal, Academic Transcripts, Portfolio of Projects.",
      applyLink: "https://mit.edu/fellowships"
    },
    {
      id: 3,
      name: "DAAD Research Grant",
      univ: "Heidelberg University",
      loc: "Germany",
      deadline: "10 May 2026",
      amount: "€1,200/month",
      eligibility: "Master's degree holders, German Language (A2 level preferred).",
      benefits: "Monthly Allowance, Travel Subsidy, Language Course Support.",
      documents: "DAAD Application Form, Proof of Language Proficiency, Study Plan.",
      applyLink: "https://daad.de/grants"
    }
  ];

  return (
    <>
      <Head>
        <title>TensorCrest – Scholarships Page</title>
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
      <div className="scholarship-page-wrapper">
        <main>
          <section className="scholarship-hero">
            <div className="hero-content">
              <h1>Unlock Your Academic Potential</h1>
              <p>Discover fully-funded scholarships and research grants from top global universities.</p>
              <div className="search-pill-box">
                <TbSearch className="s-icon" />
                <input type="text" placeholder="Search by University, Country or Field..." />
                <button>Find Grants</button>
              </div>
            </div>
          </section>

          <div className="page-main-container">
            <div className="scholarship-grid">
              {[
                { icon: <TbSchool />, title: "Full Funding", desc: "Covers tuition, living expenses, and travel costs for PhD & Masters." },
                { icon: <TbCertificate />, title: "Merit Based", desc: "Awarded based on academic excellence and research potential." },
                { icon: <TbTarget />, title: "Research Grants", desc: "Specific funding for STEM and Social Science research projects." }
              ].map((item, idx) => (
                <div className="scholarship-card-mini" key={idx}>
                  <div className="icon-wrapper">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <section className="scholarship-list-section">
              <h2>Latest Open Opportunities</h2>
              <div className="opportunity-stack">
                {/* এখানে সরাসরি ম্যাপ করা হয়েছে যাতে ক্লিক করলে ডাটা পাওয়া যায় */}
                {scholarships.map((scholar) => (
                  <div className="scholar-row" key={scholar.id}>
                    <div className="scholar-info">
                      <h3>{scholar.name}</h3>
                      <div className="scholar-meta">
                        <span><TbMapPin /> {scholar.univ}, {scholar.loc}</span>
                        <span><TbCalendar /> Deadline: {scholar.deadline}</span>
                      </div>
                    </div>
                    {/* ক্লিক করলে স্টেট সেট হবে */}
                    <button className="apply-btn" onClick={() => setSelectedScholar(scholar)}>
                      View Details <TbArrowRight />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* --- Modal (SelectedScholar থাকলে দেখাবে) --- */}
          {selectedScholar && (
            <div className="scholarship-modal-overlay">
              <div className="scholarship-modal-card">
                <button className="close-modal" onClick={() => setSelectedScholar(null)}>
                  <TbX size={24} />
                </button>

                <div className="modal-header">
                  <span className="amount-badge">{selectedScholar.amount}</span>
                  <h2>{selectedScholar.name}</h2>
                  <p><TbMapPin /> {selectedScholar.univ}, {selectedScholar.loc}</p>
                </div>

                <div className="modal-body-grid">
                  <div className="detail-item">
                    <h4><TbCheck /> Eligibility</h4>
                    <p>{selectedScholar.eligibility}</p>
                  </div>
                  <div className="detail-item">
                    <h4><TbTarget /> Benefits</h4>
                    <p>{selectedScholar.benefits}</p>
                  </div>
                  <div className="detail-item">
                    <h4><TbFileDescription /> Required Documents</h4>
                    <p>{selectedScholar.documents}</p>
                  </div>
                </div>

                <div className="modal-footer">
                  <a href={selectedScholar.applyLink} target="_blank" className="final-apply-btn">
                    Apply Now <TbLink />
                  </a>
                </div>
              </div>
            </div>
          )}
        </main>

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
      </div>
    </>
  );
}