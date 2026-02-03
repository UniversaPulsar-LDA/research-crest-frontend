import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { publications } from "@/data/publicaton";
import { TbGridDots } from "react-icons/tb";
import {
  IoIosArrowDown,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { Carousel } from "react-bootstrap";

export default function PaperPage() {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) return <div className="loading">Loading...</div>;
  const parts = (slug as string).split("-");
  const id = parseInt(parts[parts.length - 1], 10);
  const publication = publications.find((p) => p.id === id);
  if (!publication) {
    return <div className="error">Data not found!</div>;
  }
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
              <div className="badges">
                <div className={`pub-icon ${publication.color}`}>
                  <img src={publication.icon} alt="" className="pub-menu-logo" />
                </div>
                <span className="badge dynprint">{publication.publishType}</span>
                <span className="badge dynprint">File available</span>
              </div>
              <h1 className="title">{publication.title}</h1>
              <div className="meta">
                <span>{publication.year}</span>&nbsp;
                <span>•</span>&nbsp;
                <span>{publication.publishedJournal}</span>
              </div>
              <p className="authors">{publication.authors}</p>
            </div>
            {/* Right stats */}
            <div className="right">
              <div className="statakt">
                <span>Research Interest Score</span>
                <strong>3.4</strong>
              </div>
              <div className="statakt">
                <span>Citations</span>
                <strong>3</strong>
              </div>
              <div className="statakt">
                <span>Reads</span>
                <strong>114</strong>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="tabs">
            <button className="active">Overview</button>
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="dld-btn"
            >
              Download
            </a>
          </div>
          {/* Content */}
          <div className="content">
            <p>{publication.description}</p>
            {publication.images && (
              <div className="paper-slider">
                {publication.images.map((img, index) => (
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

            <p>{publication.meta}</p>
          </div>
        </div>
      </section>
    </>
  );
}