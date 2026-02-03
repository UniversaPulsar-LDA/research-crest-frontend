import { useEffect } from "react";
import Image from "next/image";
// Timeline ডেটা array
const timelineData = [
  { text: "NSF Career Award", year: 1970 },
  { text: "Best Paper - CVPR", year: 1980 },
  { text: "Best Researchers Award", year: 1990 },
  { text: "Best Youth Award", year: 2000 },
];
const pData = [
  { title: "Quantum Computing", value: 20, color: "#041c4b" },
  { title: "Fingerprint", value: 15, color: "#13b7a6" },
  { title: "Data Science", value: 15, color: "#1f4ed8" },
  { title: "Cloud Computing", value: 20, color: "#0b6f6b" },
  { title: "HRM", value: 30, color: "#052e2b" },
];

const radius = 80;
const labelRadius = 105;
const cx = 150;
const cy = 120;

const polarToCartesian = (cx, cy, r, angle) => {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
};

const describeArc = (cx, cy, r, startAngle, endAngle) => {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return `
    M ${cx} ${cy}
    L ${start.x} ${start.y}
    A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}
    Z
  `;
};

export default function ResearchArea() {
    let current = 0;
  const gradient = pData
    .map((item) => {
      const start = current;
      current += item.value;
      return `${item.color} ${start}% ${current}%`;
    })
    .join(", ");
  let angle = 0;
  useEffect(() => {
    const tooltip = document.getElementById("pieTooltip");

    document.querySelectorAll(".pie-slice").forEach((slice) => {
      slice.addEventListener("mousemove", (e) => {
        tooltip.style.opacity = "1";
        tooltip.style.left = e.offsetX + 15 + "px";
        tooltip.style.top = e.offsetY + "px";
        tooltip.innerHTML = `
          <b>${slice.dataset.title}</b><br/>
          ${slice.dataset.value}
        `;
      });

      slice.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
      });
    });
  }, []);
  return (
    <>
      {/* Research Area Section */}
      <section className="resrch-section">
        <h4 className="resrch-titl">Research Area</h4>
        <div className="resrch-pie">
          <div className="pie-svg-wrap">
            <svg width="400" height="300" className="pie-svg">
              {pData.map((item, i) => {
                const startAngle = angle;
                const sliceAngle = (item.value / 100) * 360;
                const endAngle = angle + sliceAngle;
                const midAngle = startAngle + sliceAngle / 2;
                angle = endAngle;

                const labelPos = polarToCartesian(
                  cx,
                  cy,
                  labelRadius,
                  midAngle
                );

                return (
                  <g key={i}>
                    {/* PIE SLICE */}
                    <path
                      d={describeArc(cx, cy, radius, startAngle, endAngle)}
                      fill={item.color}
                      className="pie-slice"
                      data-title={item.title}
                      data-value={`${item.value}%`}
                    />

                    {/* LABEL */}
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      className="pie-label"
                      textAnchor={labelPos.x > cx ? "start" : "end"}
                    >
                      {item.title}
                      <tspan x={labelPos.x} dy="12">
                        {item.value}%
                      </tspan>
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="pie-tooltip" id="pieTooltip"></div>
          </div>
          <div className="pie-rght">
            <p className="pie-head-1">Research Area Chart</p>
            <p className="pie-head-2">Data Infographics</p>
            <p className="pie-head-desc">
              This infographic presents pie chart displaying research areas with
              titles and percentages.
            </p>
            {pData.map((item, i) => (
              <div className="pie-legend-row" key={i}>
                <span className="legend-title">{item.title}</span>

                <div className="legnd-bar-track">
                  <i
                    className="legnd-bar"
                    style={{
                      width: `${item.value}%`,
                      background: item.color,
                    }}
                  ></i>
                </div>

                <span className="legend-percent">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
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
