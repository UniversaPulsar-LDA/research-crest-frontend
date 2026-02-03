"use client";

interface DonutProps {
  collaboration: number;
  self: number;
}

export default function DonutChart({
  collaboration,
  self,
}: DonutProps) {
  const total = collaboration + self;
  const collabDeg = (collaboration / total) * 360;

  return (
    <div
      className="pj-donut-visual-css"
      style={{
        background: `conic-gradient(
          #009299 0deg ${collabDeg}deg,
          #00063D ${collabDeg}deg 360deg
        )`,
      }}
    >
      {/* <div className="pj-donut-center">
        <span>{collaboration}%</span>
      </div> */}
    </div>
  );
}