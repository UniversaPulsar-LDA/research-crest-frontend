import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  TbGridDots, TbMessagePlus, TbMessageCircle, TbTag, TbHome,
  TbUsers, TbSend, TbChevronUp, TbChevronDown, TbArrowBackUp, TbEye
} from "react-icons/tb";

export default function QnAPage() {
  const router = useRouter();
  const [viewDetail, setViewDetail] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const questions = [

    {
      id: 1,
      title: "How to implement federated learning in decentralized research networks?",
      description: "I am trying to build a system where data stays local but the model learns globally. Is there any specific framework for research-heavy environments? I've checked PySyft but need more options.",
      tags: ["machine-learning", "privacy"],
      votes: 12, answers: 3, views: 156,
      answerList: [
        { id: 101, name: "Dr. Sarah", text: "You can use TensorFlow Federated (TFF) for high-level research. It provides a great simulation environment for decentralized protocols.", time: "5 mins ago" },
        { id: 102, name: "Prof. Kabir", text: "Check out OpenMined's latest tutorials on peer-to-peer learning. Their architecture is very robust for academic setups.", time: "10 mins ago" },
        { id: 103, name: "Research_Dev", text: "Flower (flwr.dev) is another excellent option that is much lighter than TFF and works with both PyTorch and TensorFlow.", time: "1 hour ago" }
      ]
    },
    {
      id: 2,
      title: "Integrating ORCID API with Next.js for automatic publication sync?",
      description: "My goal is to fetch a researcher's publications directly using their ORCID iD and display them on a profile page. I am having issues with the OAuth2 callback and token persistence.",
      tags: ["nextjs", "orcid", "api"],
      votes: 8, answers: 3, views: 89,
      answerList: [
        { id: 201, name: "Engr. Tanvir", text: "Make sure your Redirect URI in the ORCID developer portal matches your Next.js API route exactly, including the trailing slash.", time: "2 hours ago" },
        { id: 202, name: "Dev_Rahat", text: "I recommend using the 'next-auth' library with a custom OAuth provider. It handles the session management much more cleanly.", time: "5 hours ago" },
        { id: 203, name: "Sarah J.", text: "Check if you are using the Public API or Member API. Public API doesn't always need full OAuth for basic publication fetching.", time: "Yesterday" }
      ]
    },
    {
      id: 3,
      title: "Best practices for managing large-scale genomic datasets in cloud storage?",
      description: "We are dealing with terabytes of VCF files. What is the most cost-effective way to store and query this data for real-time analysis without breaking the bank?",
      tags: ["bioinformatics", "cloud", "data"],
      votes: 15, answers: 3, views: 210,
      answerList: [
        { id: 301, name: "Dr. Watson", text: "Use AWS S3 Glacier for long-term storage and Parquet format with Amazon Athena for cost-efficient querying.", time: "4 hours ago" },
        { id: 302, name: "Bio_Expert", text: "Google Cloud Life Sciences API is specifically optimized for this. It handles batch processing of genomic data very well.", time: "6 hours ago" },
        { id: 303, name: "Admin_Gen", text: "Consider using compressed BCF instead of VCF. It can reduce your storage footprint by up to 40% while remaining searchable.", time: "2 days ago" }
      ]
    },
    {
      id: 4,
      title: "Challenges in verifying Smart Contracts for academic credentialing?",
      description: "I'm working on a blockchain system for PhD certificates. How do we ensure the smart contract logic is bug-free before deploying to Mainnet? Are there formal verification tools?",
      tags: ["blockchain", "solidity", "security"],
      votes: 22, answers: 3, views: 432,
      answerList: [
        { id: 401, name: "CryptoExpert", text: "Mythril and Slither are the industry standards for static analysis. Use them in your CI/CD pipeline.", time: "30 mins ago" },
        { id: 402, name: "Prof. Zaman", text: "For academic projects, consider formal verification using tools like Certora. It proves your logic against a specification.", time: "3 hours ago" },
        { id: 403, name: "Block_Dev", text: "Test extensively on Sepolia Testnet and run a bug bounty program. Nothing beats real-world stress testing.", time: "10 hours ago" }
      ]
    },
    {
      id: 5,
      title: "Applying Graph Neural Networks (GNN) for citation recommendation systems?",
      description: "I want to suggest relevant papers based on their citation graph. Should I use Node2Vec or something more modern like GraphSAGE or GCN?",
      tags: ["gnn", "deep-learning", "nlp"],
      votes: 30, answers: 3, views: 512,
      answerList: [
        { id: 501, name: "AI_Scholar", text: "GraphSAGE is better for inductive learning if your paper database is constantly growing with new nodes.", time: "1 hour ago" },
        { id: 502, name: "Dr. Emily", text: "Combine GNNs with BERT embeddings for the paper abstracts to get both structural and semantic recommendations.", time: "4 hours ago" },
        { id: 503, name: "DataSci_01", text: "Check out the DGL (Deep Graph Library). They have pre-built examples specifically for the Cora and Citeseer datasets.", time: "1 day ago" }
      ]
    }


  ];

  return (
    <>
      <Head>
        <title>TensorCrest – Q&A Page</title>
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
      <div className="qna-main-wrapper">
        <div className="tc-layout-container">
          {/* --- Sidebar --- */}
          <aside className="tc-sidebar">
            <nav className="tc-side-nav">
              <a href="#" className="active" onClick={() => setViewDetail(null)}><TbHome /> Home</a>
              <div className="tc-label">Public</div>
              <a href="#"><TbMessageCircle /> Questions</a>
              <a href="#"><TbTag /> Tags</a>
              <a href="#"><TbUsers /> Users</a>
            </nav>
          </aside>

          {/* --- Main Content Area --- */}
          <main className="tc-content">
            {!viewDetail ? (
              /* --- Question List View --- */
              <>
                <div className="tc-content-header">
                  <h1>All Questions</h1>
                  <button className="tc-ask-btn"><TbMessagePlus /> Ask Question</button>
                </div>
                <div className="tc-filter-bar">
                  <span>{questions.length} questions</span>
                  <div className="tc-tabs">
                    <button className="active">Newest</button>
                    <button>Unanswered</button>
                  </div>
                </div>
                <div className="tc-q-list">
                  {questions.map((q) => (
                    <div className="tc-q-card" key={q.id}>
                      <div className="tc-q-stats">
                        <div className="tc-stat"><strong>{q.votes}</strong> votes</div>
                        <div className={`tc-stat ${q.answers > 0 ? 'answered' : ''}`}>
                          <strong>{q.answers}</strong> answers
                        </div>
                        <div className="tc-stat grey"><TbEye /> {q.views}</div>
                      </div>
                      <div className="tc-q-info">
                        <h3 onClick={() => setViewDetail(q)} className="tc-q-title">{q.title}</h3>
                        <p className="tc-q-excerpt">{q.description.substring(0, 150)}...</p>
                        <div className="tc-q-footer">
                          <div className="tc-tags">
                            {q.tags.map(t => <span key={t} className="tc-tag">{t}</span>)}
                          </div>
                          <div className="tc-user">
                            <img src="https://i.pravatar.cc/24" alt="user" />
                            <span>Dr. Alex James</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* --- New Dedicated Answer & Reply Page --- */
              <div className="tc-detail-view">
                <button className="tc-back-btn" onClick={() => setViewDetail(null)}>← Back to Questions</button>

                <div className="tc-detail-header">
                  <h1>{viewDetail.title}</h1>
                  <div className="tc-detail-meta">
                    <span>Asked <b>today</b></span>
                    <span>Viewed <b>{viewDetail.views} times</b></span>
                  </div>
                </div>

                <div className="tc-detail-body">
                  <div className="tc-vote-side">
                    <button className="v-btn"><TbChevronUp size={24} /></button>
                    <span>{viewDetail.votes}</span>
                    <button className="v-btn"><TbChevronDown size={24} /></button>
                  </div>
                  <div className="tc-text-side">
                    <p>{viewDetail.description}</p>
                    <div className="tc-tags">
                      {viewDetail.tags.map((t: string) => <span key={t} className="tc-tag">{t}</span>)}
                    </div>
                  </div>
                </div>

                <div className="tc-answers-section">
                  <h3>{viewDetail.answers} Answers</h3>
                  {viewDetail.answerList.map((ans: any) => (
                    <div className="tc-ans-card" key={ans.id}>
                      <div className="tc-ans-user-info">
                        <strong>{ans.name}</strong> • <small>{ans.time}</small>
                      </div>
                      <p>{ans.text}</p>
                      <button className="tc-reply-btn"><TbArrowBackUp /> Reply</button>
                    </div>
                  ))}
                </div>

                <div className="tc-reply-box">
                  <h3>Your Answer</h3>
                  <textarea placeholder="Write your professional advice here..."></textarea>
                  <button className="tc-post-btn"><TbSend /> Post Answer</button>
                </div>
              </div>
            )}
          </main>
        </div>

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