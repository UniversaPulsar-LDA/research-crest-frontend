import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { publications } from "@/data/publicaton";
import { TbGridDots } from "react-icons/tb";
import {
  IoIosArrowDown,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { RiNextjsLine, RiJavaLine, RiReactjsFill, RiFlutterFill } from "react-icons/ri";
import { Carousel } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const projectsData = [
  {
    id: 1,
    title: "Next.Js Project",
    desc: "A modern, high-performance web application built with server-side rendering and optimized routing.",
    percent: 100,
    tech: "Completion Date: 18 Mar 2021",
    type: "Completed",
    startDate: "2021-03-18",
    barClass: "bar-tal",
    topIcon: "/images/icons/topdvlfttl.svg",
    centerIcon: RiNextjsLine,
    theme: "teal",
    images: [
      "/images/ppr/pp.png",
      "/images/ppr/pn.png",
    ],
    description: "In smart cities, AI‐driven traffic flow prediction and anomaly detection play a crucial role in optimizing urban mobility and reducing congestion. Traditional traffic management systems (TMS) often struggle with real‐time adaptability, leading to inefficiencies in traffic prediction and failure to detect anomalies accurately. To address these limitations, we propose the Traffic Flow Prediction using Multi‐Agent Approach (TFP‐MAA) framework, which leverages multiple intelligent agents to analyze real‐time traffic data, predict congestion patterns, and detect anomalies with high precision. The framework integrates deep learning models with a decentralized multi‐agent system to enhance prediction accuracy and response efficiency. The proposed method enables adaptive decision‐making for traffic authorities by providing real‐time congestion forecasts and identifying unusual traffic patterns, such as accidents or roadblocks. This enhances proactive traffic management and reduces delays. Experimental results demonstrate that TFP‐MAA significantly outperforms existing models in terms of accuracy (94.7%), response time (96.2%), and anomaly detection efficiency (95.9%). The findings suggest that integrating multi‐agent AI systems into smart city infrastructure can lead to improved traffic flow (97.5%), reduced congestion (28.6%), and enhanced road safety.",
  },
  {
    id: 2509824,
    title: "Kleon – Data Science Project",
    desc: "A data-driven research project focused on statistical analysis and insight extraction.",
    percent: 80,
    tech: "02 Jul 2022",
    type: "Ongoing",
    startDate: "2022-07-02",
    barClass: "bar-blu",
    topIcon: "/images/icons/topdvlft.svg",
    centerIcon: RiNextjsLine,
    theme: "black",
    images: [
      "/images/ppr/aas.png",
      "/images/ppr/af.png",
    ],
    description: "In smart cities, AI‐driven traffic flow prediction and anomaly detection play a crucial role in optimizing urban mobility and reducing congestion. Traditional traffic management systems (TMS) often struggle with real‐time adaptability, leading to inefficiencies in traffic prediction and failure to detect anomalies accurately. To address these limitations, we propose the Traffic Flow Prediction using Multi‐Agent Approach (TFP‐MAA) framework, which leverages multiple intelligent agents to analyze real‐time traffic data, predict congestion patterns, and detect anomalies with high precision. The framework integrates deep learning models with a decentralized multi‐agent system to enhance prediction accuracy and response efficiency. The proposed method enables adaptive decision‐making for traffic authorities by providing real‐time congestion forecasts and identifying unusual traffic patterns, such as accidents or roadblocks. This enhances proactive traffic management and reduces delays. Experimental results demonstrate that TFP‐MAA significantly outperforms existing models in terms of accuracy (94.7%), response time (96.2%), and anomaly detection efficiency (95.9%). The findings suggest that integrating multi‐agent AI systems into smart city infrastructure can lead to improved traffic flow (97.5%), reduced congestion (28.6%), and enhanced road safety.",

  },
  {
    id: 3,
    title: "Admin Portal",
    desc: "A role-based admin dashboard for managing users, content, and system analytics.",
    percent: 38,
    tech: "Start Date: 09 Sep 2023",
    type: "Ongoing",
    startDate: "2023-09-09",
    barClass: "bar-blk",
    topIcon: "/images/icons/topdvlft.svg",
    centerIcon: RiReactjsFill,
    theme: "black",
    description: "In smart cities, AI‐driven traffic flow prediction and anomaly detection play a crucial role in optimizing urban mobility and reducing congestion. Traditional traffic management systems (TMS) often struggle with real‐time adaptability, leading to inefficiencies in traffic prediction and failure to detect anomalies accurately. To address these limitations, we propose the Traffic Flow Prediction using Multi‐Agent Approach (TFP‐MAA) framework, which leverages multiple intelligent agents to analyze real‐time traffic data, predict congestion patterns, and detect anomalies with high precision. The framework integrates deep learning models with a decentralized multi‐agent system to enhance prediction accuracy and response efficiency. The proposed method enables adaptive decision‐making for traffic authorities by providing real‐time congestion forecasts and identifying unusual traffic patterns, such as accidents or roadblocks. This enhances proactive traffic management and reduces delays. Experimental results demonstrate that TFP‐MAA significantly outperforms existing models in terms of accuracy (94.7%), response time (96.2%), and anomaly detection efficiency (95.9%). The findings suggest that integrating multi‐agent AI systems into smart city infrastructure can lead to improved traffic flow (97.5%), reduced congestion (28.6%), and enhanced road safety.",
  },
  {
    id: 4,
    title: "Backend API",
    desc: "A scalable RESTful API handling authentication, data processing, and integrations.",
    percent: 100,
    tech: "Completion Date: 09 Nov 2024",
    type: "Completed",
    startDate: "2024-09-09",
    barClass: "bar-tal",
    topIcon: "/images/icons/topdvlfttl.svg",
    centerIcon: RiJavaLine,
    theme: "teal",
    description: "In smart cities, AI‐driven traffic flow prediction and anomaly detection play a crucial role in optimizing urban mobility and reducing congestion. Traditional traffic management systems (TMS) often struggle with real‐time adaptability, leading to inefficiencies in traffic prediction and failure to detect anomalies accurately. To address these limitations, we propose the Traffic Flow Prediction using Multi‐Agent Approach (TFP‐MAA) framework, which leverages multiple intelligent agents to analyze real‐time traffic data, predict congestion patterns, and detect anomalies with high precision. The framework integrates deep learning models with a decentralized multi‐agent system to enhance prediction accuracy and response efficiency. The proposed method enables adaptive decision‐making for traffic authorities by providing real‐time congestion forecasts and identifying unusual traffic patterns, such as accidents or roadblocks. This enhances proactive traffic management and reduces delays. Experimental results demonstrate that TFP‐MAA significantly outperforms existing models in terms of accuracy (94.7%), response time (96.2%), and anomaly detection efficiency (95.9%). The findings suggest that integrating multi‐agent AI systems into smart city infrastructure can lead to improved traffic flow (97.5%), reduced congestion (28.6%), and enhanced road safety.",
  },
  {
    id: 5,
    title: "Flutter Mobile App",
    desc: "A cross-platform mobile application with smooth UI and consistent performance.",
    percent: 54,
    tech: "Start Date: 27 May 2025",
    type: "Ongoing",
    startDate: "2025-05-27",
    barClass: "bar-blk",
    topIcon: "/images/icons/topdvlft.svg",
    centerIcon: RiFlutterFill,
    theme: "black",
    description: "In smart cities, AI‐driven traffic flow prediction and anomaly detection play a crucial role in optimizing urban mobility and reducing congestion. Traditional traffic management systems (TMS) often struggle with real‐time adaptability, leading to inefficiencies in traffic prediction and failure to detect anomalies accurately. To address these limitations, we propose the Traffic Flow Prediction using Multi‐Agent Approach (TFP‐MAA) framework, which leverages multiple intelligent agents to analyze real‐time traffic data, predict congestion patterns, and detect anomalies with high precision. The framework integrates deep learning models with a decentralized multi‐agent system to enhance prediction accuracy and response efficiency. The proposed method enables adaptive decision‐making for traffic authorities by providing real‐time congestion forecasts and identifying unusual traffic patterns, such as accidents or roadblocks. This enhances proactive traffic management and reduces delays. Experimental results demonstrate that TFP‐MAA significantly outperforms existing models in terms of accuracy (94.7%), response time (96.2%), and anomaly detection efficiency (95.9%). The findings suggest that integrating multi‐agent AI systems into smart city infrastructure can lead to improved traffic flow (97.5%), reduced congestion (28.6%), and enhanced road safety.",
  },
];

export default function ProjectPage() {
  const [requestSent, setRequestSent] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const project = projectsData.find((p) => p.id === Number(id));
  if (!project) return <p>Project not found</p>;
  const CenterIcon = project.centerIcon;
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
          <a>Home</a>
          <a>Q&amp;A</a>
          <a>Network</a>
          <a>Career</a>
          <a>Scholarship</a>
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
      <section className="profile-wrap">
        <section className="pdng-hero"></section>
        <div className="paper-container">
          <div className="paper-header">
            <div className="left">
              {/* <div className="badges">
                <div className={`pub-icon adf`}>
                </div>
                <span className="badge dynprint">asdfa</span>
                <span className="badge dynprint">File available</span>
              </div> */}
              <h1 className="title">{project.title}</h1>
              <div className="meta">
                <span>2024</span>&nbsp;
                <span>•</span>&nbsp;
                <span>Ongoing</span>
              </div>
              <p className="authors">Python, Next.js, R</p>
            </div>
            {/* Right stats */}
            <div className="right">
              <div className="statakt">
                <span>Starting Date</span>
                <strong>{project.tech}</strong>
              </div>
              <div className="statakt">
                <span>Project Completed</span>
                <strong>80%</strong>
              </div>
              <div className="statakt">
                <span>Total Collaborators</span>
                <strong>07</strong>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="tabs">
            <button className="active">Overview</button>
            <button
              className={`txca dld-btn ${requestSent ? "sent" : ""}`}
              disabled={requestSent}
              onClick={() => {
                setRequestSent(true);
                toast.success("Request sent", {
                  position: "top-right",
                  autoClose: 2500,
                });
              }}
            >
              {requestSent ? "Request sent" : "Join"}
            </button>
          </div>
          {/* Content */}
          <div className="content">
            <p>{project.description}</p>
            {project.images && (
              <div className="paper-slider">
                {project.images.map((img, index) => (
                  <div key={index} className="slide">
                    <Image
                      src={img}
                      alt={`paper-image-${index}`}
                      width={300}
                      height={180}
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </div>
                ))}
              </div>
            )}
            {/* <p>{publication.meta}</p> */}
          </div>
          {/* GitHub Contributions Section */}
          <div className="gh-contributions">
            <div className="gh-header">
              <span className="gh-title">07 contributions in the last month</span>
            </div>

            <div className="gh-body">
              {/* Months */}
              <div className="gh-months">
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
              </div>

              {/* Grid */}
              <div className="gh-grid">
                {Array.from({ length: 7 }).map((_, row) => (
                  <div key={row} className="gh-column">
                    {Array.from({ length: 7 }).map((_, col) => (
                      <span
                        key={col}
                        className={`gh-day level-${Math.floor(
                          Math.random() * 5
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="gh-footer">
              <span>Less</span>
              <div className="gh-legend">
                <span className="level-0" />
                <span className="level-1" />
                <span className="level-2" />
                <span className="level-3" />
                <span className="level-4" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}