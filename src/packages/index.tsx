import * as React from "react";
import countries from "@/packages/utils/countries";
import marker from "./marker.svg";

export default function RMap(props: any) {
  const {
    border,
    borderColor,
    highLightedCountry,
    primaryCountryKey,
  } = props;

  /** 📍 Marker Positions */
  const MARKERS: any = {
    usa: { x: 350, y: 200 },
    cad: { x: 560, y: 130 },
    pg: { x: 905, y: 180 },
    ger: { x: 1000, y: 100 },
    tk: { x: 1110, y: 180 },
    bd: { x: 1450, y: 280 },
    sk: { x: 1630, y: 200 },
    jp: { x: 1690, y: 190 },
    sg: { x: 1539, y: 423 },
    aus: { x: 1755, y: 643 },
    uae: { x: 1255, y: 275 },
  };

  const primary = MARKERS[primaryCountryKey];

  return (
    <svg
      viewBox="0 0 2000 900"
      fill="transparent"
      stroke={borderColor}
      strokeWidth={border}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 🌍 Countries */}
      {countries.map((item: any, index: number) => (
        <path
          key={index}
          d={item.path}
          className="rmap-country"
          fill={item.fill}
        />
      ))}

      {/* 🔗 Connection Lines */}
      {Object.keys(MARKERS).map((key) =>
        key !== primaryCountryKey ? (
          <line
            key={key}
            x1={primary.x + 50}
            y1={primary.y + 50}
            x2={MARKERS[key].x + 50}
            y2={MARKERS[key].y + 50}
            stroke="black"
            strokeWidth="1"
            opacity="0.6"
          />
        ) : null
      )}

      {/* 📍 Markers */}
      {Object.entries(MARKERS).map(([key, pos]: any, index) => (
        <image
          key={index}
          href={marker.src}
          x={pos.x}
          y={pos.y}
          width={100}
          height={100}
          className="rmap-country"
          onClick={highLightedCountry[index]?.clickHandler}
        />
      ))}
    </svg>
  );
}
