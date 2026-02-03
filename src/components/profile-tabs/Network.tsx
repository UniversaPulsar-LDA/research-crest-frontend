// import Locations from "@/components/location/index";
import SvgMap from "@/components/SvgMap";
import Image from "next/image";

const timelineData = [
  { text: "NSF Career Award", year: 1970 },
  { text: "Best Paper - CVPR", year: 1980 },
  { text: "Best Researchers Award", year: 1990 },
  { text: "Best Youth Award", year: 2000 },
];

export default function Network() {
  return (
    <>
      <section className="netwwrk-card">
        <h4 className="resrch-titl">Network</h4>
        <SvgMap />
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
                  <div className="sch-text">{item.text}</div>
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
    </>
  );
}
