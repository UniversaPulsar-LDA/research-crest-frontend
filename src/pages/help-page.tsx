import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  TbGridDots, TbSearch, TbLayoutGrid, TbMessageDots,
  TbBook, TbShieldCheck, TbArrowRight, TbSend
} from "react-icons/tb";
import { useRef, useState } from "react";

export default function HelpPage() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
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
      <div className="help-page-wrapper">
        <main>
          {/* --- Image 3 থিমে সার্চ সেকশন --- */}
          <section className="help-hero">
            <div className="hero-content">
              <h1>How can we help you?</h1>
              <p>Search for research guides, account help, and platform features.</p>
              <div className="search-pill-box">
                <TbSearch className="s-icon" />
                <input type="text" placeholder="Search for articles, keywords..." />
                <button>Search</button>
              </div>
            </div>
          </section>

          <div className="help-content-container">
            {/* --- ক্যাটাগরি কার্ড --- */}
            <div className="category-grid">
              {[
                { icon: <TbLayoutGrid />, title: "Getting Started", desc: "Learn how to build your profile and join the academic community." },
                { icon: <TbMessageDots />, title: "Communication", desc: "Manage your messages, networking, and expert collaborations." },
                { icon: <TbBook />, title: "Publications", desc: "Guide on uploading papers and tracking research impact stats." },
                { icon: <TbShieldCheck />, title: "Privacy & Safety", desc: "How to manage your account settings and research data security." }
              ].map((item, idx) => (
                <div className="help-card-premium" key={idx}>
                  <div className="icon-wrapper">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="#" className="learn-more">Learn more <TbArrowRight /></a>
                </div>
              ))}
            </div>
          </div>
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