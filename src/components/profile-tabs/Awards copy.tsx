import Image from "next/image";
import AwardModal from "@/components/AwardModal";

import { useState } from "react";
// Timeline ডেটা array
const timelineData = [
  {
    text: "Best Employee Award",
    year: "2/05/2018",
  },
  {
    text: "Uber tenlet hub",
    year: "1/04/2019",
  },
  {
    text: "Best Leadership Award",
    year: "12/03/2020",
  },
  {
    text: "Javascript Course Competition",
    year: "22/02/2021",
  }
];

const truncateText = (text, maxLength = 35) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default function Awards() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  return (
    <>
      <section className="awrrd-card">
        {/* <div className="ad-awards-wrapper"> */}
        <div className="ad-header">
          <h2 className="ad-title">Awards and Rewards</h2>
          <div className="ad-dots">•••</div>
        </div>
        <div className="ad-awards-grid">
          <div
            className="ad-award-item"
            onClick={() => {
              setActiveProject({
                title: "Best Employee Award",
              });
              setShowUploadModal(true);
            }}
          >
            <div className="ad-icon-box adgreen">
              <img
                src="https://img.icons8.com/ios-filled/100/ffffff/trophy.png"
              />
            </div>
            <p>Best employee</p>
          </div>
          <div
            className="ad-award-item"
            onClick={() => {
              setActiveProject({
                title: "Best Employee Award",
              });
              setShowUploadModal(true);
            }}
          >
            <div className="ad-icon-box adorange">
              <img src="https://img.icons8.com/ios-filled/100/ffffff/trophy.png" />
            </div>
            <p>Best project</p>
          </div>
          <div
            className="ad-award-item"
            onClick={() => {
              setActiveProject({
                title: "Best Employee Award",
              });
              setShowUploadModal(true);
            }}
          >
            <div className="ad-icon-box adred">
              <img src="https://img.icons8.com/ios-filled/100/ffffff/trophy.png" />
            </div>
            <p>Basis best company</p>
          </div>
          <div
            className="ad-award-item"
            onClick={() => {
              setActiveProject({
                title: "Best Employee Award",
              });
              setShowUploadModal(true);
            }}
          >
            <div className="ad-icon-box adblue">
              <img src="https://img.icons8.com/ios-filled/100/ffffff/trophy.png" />
            </div>
            <p>golden volenteer</p>
          </div>
        </div>
        {/* </div> */}
      </section>
      <section className="tmln-card">
        {/* Header */}
        <div className="header-row">
          <h4 className="resrch-titl">Timeline</h4>
          <div className="tmln-img">
            <Image
              src="/images/icons/aiimg.svg"
              alt="ai image"
              width={30}
              height={30}
            />
          </div>
        </div>
        {/* Timeline */}
        <div className="sch-style-2">
          <div className="sch-timeline-content">
            {timelineData.map((item, index) => (
              <div className="sch-content" key={index}>
                {/* Text + Year */}
                <div className="sch-data">
                  <div className="sch-text"> {truncateText(item.text, 23)}</div>
                  <div className="sch-year">{item.year}</div>
                </div>
                {/* Button */}
                <button className="btn-right"></button>
                {/* Odd → sch-down, Even → sch-up */}
                {index % 2 === 0 ? (
                  <div className="sch-down">
                    <div className="sch-icon">
                      <i>{index + 1}</i>
                    </div>
                  </div>
                ) : (
                  <div className="sch-up">
                    <div className="sch-icon">
                      <i>{index + 1}</i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <AwardModal
        open={showUploadModal}
        project={activeProject}
        onClose={() => setShowUploadModal(false)}
      />
    </>
  );
}
