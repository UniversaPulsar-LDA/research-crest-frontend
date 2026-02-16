import Head from "next/head";
import { TbGridDots, TbSend, TbInfoCircle, TbBulb, TbPencil } from "react-icons/tb";

export default function AskQuestion() {
  return (
    <div className="ask-q-wrapper">
      <Head>
        <title>Ask a Question | TensorCrest</title>
      </Head>

      {/* --- আপনার হুবহু সেই হেডার (Image 4 & 6) --- */}
      <header className="navbar-fixed">
        <div className="nav-container">
          <div className="logo-section">
            <h2 className="brand-logo">Tensor<span>Crest</span></h2>
          </div>
          <nav className="nav-links-right">
            <a href="#">App</a>
            <a href="#">Join</a>
            <a href="#">Sign in</a>
            <a href="#" className="nav-active">Q&A</a>
            <button className="grid-icon-btn"><TbGridDots size={24} /></button>
          </nav>
        </div>
      </header>

      <main className="ask-container">
        <div className="ask-layout">
          {/* --- বামপাশ: প্রশ্ন লেখার ফরম --- */}
          <section className="form-section">
            <h1 className="page-title">Ask a public question</h1>
            
            {/* ইনস্ট্রাকশন বক্স */}
            <div className="notice-card">
              <h3>Writing a good question</h3>
              <p>You’re ready to ask a research-centric question. Please follow these steps:</p>
              <ul>
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>Add “tags” which help help others find your question.</li>
              </ul>
            </div>

            <div className="bs-input-group">
              <label>Title</label>
              <p>Be specific and imagine you’re asking a question to another researcher.</p>
              <input type="text" placeholder="e.g. How to optimize GPT-4 for academic citation analysis?" />
            </div>

            <div className="bs-input-group">
              <label>What are the details of your problem?</label>
              <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
              <div className="editor-placeholder">
                <textarea rows={10} placeholder="Write your research problem here..."></textarea>
              </div>
            </div>

            <div className="bs-input-group">
              <label>Tags</label>
              <p>Add up to 5 tags to describe what your question is about.</p>
              <input type="text" placeholder="e.g. (machine-learning python research)" />
            </div>

            <button className="post-btn">Post your question</button>
          </section>

          {/* --- ডানপাশ: টিপস উইজেট (StackOverflow Style) --- */}
          <aside className="tips-sidebar">
            <div className="tips-card">
              <div className="t-head"><TbPencil /> Step 1: Draft your question</div>
              <div className="t-body">
                <p>The community is here to help you with specific research or technical problems.</p>
                <div className="tip-item"><TbBulb className="icon" /> Avoid asking opinion-based questions.</div>
              </div>
            </div>

            <div className="tips-card">
              <div className="t-head"><TbInfoCircle /> Have a non-technical issue?</div>
              <div className="t-body">
                <p>Check our <a href="#">Help Center</a> for account related issues.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* --- আপনার হুবহু সেই ফুটার (Image 7) --- */}
      <footer className="footer-main">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="brand-logo">Tensor<span>Crest</span></h2>
            <p>Stay in the know by subscribing to our newsletter below</p>
            <div className="newsletter-input-group">
              <input type="email" placeholder="Enter your email address" />
              <button className="send-btn"><TbSend /></button>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="link-col">
              <h4>Contact</h4>
              <a href="#">Contact Form</a><a href="#">FAQ</a><a href="#">Privacy Policy</a><a href="#">T&C</a>
            </div>
            <div className="link-col">
              <h4>Social</h4>
              <a href="#">Facebook</a><a href="#">Youtube</a><a href="#">Twitter</a><a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© ResearhCrest. All Rights Reserved 2026</p>
          <a href="#">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
}