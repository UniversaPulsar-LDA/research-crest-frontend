import Grids from "./utils/grids";
import countries from "./utils/countries";
import * as React from "react";
import marker from "./marker.svg";

export default function RMap(props: any) {
  const {
    border,
    borderColor,
    grid,
    gridColor,
    gridBoldAfterEach,
    gridBoldDepth,
    defaultColor,
    highLightedCountry
  } = props;

  const [showAbleCountries, setShowAbleCountries] = React.useState([]);

  React.useEffect(() => {
    const paths: any = [];

    countries.map((item, index) => {
      paths.push({
        name: item.name,
        path: (
          <path
            d={item.path}
            id={item.id}
            className={`rmap-country ${item.classnames}`}
            key={index}
            fill={item.fill}
          />
        ),
      });
    });

    if (highLightedCountry?.length) {
      paths.map((item: any, index: number) => {
        if (highLightedCountry.some((val: any) => val.name === item.name)) {
          const replace = highLightedCountry.find(
            (val: any) => val.name === item.name
          );

          paths[index].path = (
            <path
              d={countries[index].path}
              id={replace.id ?? countries[index].id}
              className={`rmap-country ${
                replace.classnames ?? countries[index].classnames
              }`}
              key={index}
              fill={replace.fill ?? countries[index].fill}
              onClick={replace.clickHandler}
            />
          );
        }
      });
    }

    setShowAbleCountries(paths);
  }, [highLightedCountry]);

  /** =========================
   * Marker Positions
   ========================== */

  // USA (Main)
  const usa = { x: 350, y: 200 };

  // Other countries
  const markers = [
    { x: 560, y: 130, onClick: highLightedCountry[1]?.clickHandler }, // Canada
    { x: 905, y: 180, onClick: highLightedCountry[2]?.clickHandler }, // Portugal
    { x: 1000, y: 100, onClick: highLightedCountry[3]?.clickHandler }, // Germany
    { x: 1110, y: 180, onClick: highLightedCountry[5]?.clickHandler }, // Turkiye
    { x: 1450, y: 280, onClick: highLightedCountry[7]?.clickHandler }, // Bangladesh
    { x: 1630, y: 200, onClick: highLightedCountry[8]?.clickHandler }, // Korea
    { x: 1690, y: 190, onClick: highLightedCountry[9]?.clickHandler }, // Japan
    { x: 1539, y: 423, onClick: highLightedCountry[10]?.clickHandler }, // Singapore
    { x: 1755, y: 643, onClick: highLightedCountry[11]?.clickHandler }, // Australia
  ];

  return (
    <svg
      viewBox="0 0 2000 900"
      fill={defaultColor ?? "transparent"}
      stroke={borderColor}
      strokeWidth={border}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {grid && (
        <Grids
          color={gridColor}
          gridBoldAfterEach={gridBoldAfterEach}
          gridBoldDepth={gridBoldDepth}
        />
      )}

      {showAbleCountries.map((item: any) => item.path)}

      {/* =========================
          Connection Lines
         ========================= */}
      <g stroke="#000" strokeWidth="1">
        {markers.map((m, i) => (
          <line
            key={i}
            x1={usa.x + 50}
            y1={usa.y + 50}
            x2={m.x + 50}
            y2={m.y + 50}
          />
        ))}
      </g>

      {/* =========================
          Markers
         ========================= */}
      <g className="svg-li">
        {/* USA Main Marker */}
        <image
          className="rmap-country"
          onClick={highLightedCountry[0]?.clickHandler}
          href={marker.src}
          height={100}
          width={100}
          x={usa.x}
          y={usa.y}
        />

        {/* Other Markers */}
        {markers.map((m, i) => (
          <image
            key={i}
            className="rmap-country"
            onClick={m.onClick}
            href={marker.src}
            height={100}
            width={100}
            x={m.x}
            y={m.y}
          />
        ))}
      </g>
    </svg>
  );
}