import Grids from "@/packages/utils/grids";
import countries from "@/packages/utils/countries";
import * as React from "react";
import marker from "./marker.svg";

export default function RMap(props : any){
  const {
    border,
    borderColor,
    grid,
    gridColor,
    gridBoldAfterEach,
    gridBoldDepth,
    defaultColor,
    countryOnly,
    highLightedCountry
  } = props;
  const [showAbleCountries, setShowAbleCountries] = React.useState([]);
  React.useEffect(() => {
    const paths : any = [];
    countries.map((item, index) => {
      paths.push({
        name: item.name,
        path: <path
          d={`${item.path}`}
          id={item.id}
          className={`rmap-country ${item.classnames}`}
          key={index}
          fill={`${item.fill}`}
        />
      });
    })
    if(highLightedCountry?.length){
      paths.map((item : any, index: number) => {
        if (highLightedCountry.some((val : any) => val.name === item.name)){
          const replace = highLightedCountry.find((val : any) => val.name === item.name);
          paths[index].path = <path
            d={`${countries[index].path}`}
            id={replace.id ?? countries[index].id}
            className={`rmap-country ${replace.classnames ?? countries[index].classnames}`}
            key={index}
            fill={`${replace.fill ?? countries[index].fill}`}
            onClick={replace.clickHandler}
          />
        }
      });
    }
    // if(countryOnly?.length){
    //   paths.map((item) => {
    //     if (countryOnly.some((val : any) => val.name === item.name)){
    //       const replace = countryOnly.find((val : any) => val.name === item.name);
    //       allCountries.push({...item, ...replace});
    //     }
    //   });
    // }

    setShowAbleCountries(paths)
  },[highLightedCountry])
  return (<>
    <svg
      version="1.2"
      viewBox="0 0 2000 900"
      fill={defaultColor??'transparent'}
      stroke={borderColor}
      strokeWidth={border}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/*<rect x={0} y={0} height="900" width="2000" fill="rbg(0,0,0)" />*/}
        { grid? <Grids
          color={gridColor}
          gridBoldAfterEach={gridBoldAfterEach}
          gridBoldDepth={gridBoldDepth}
        /> : null }
      {showAbleCountries.map((item : any, index) => item.path)}
      <g className="svg-li">
        {/*<image className={'rmap-country'} onClick={highLightedCountry[0]?.clickHandler} href={marker.src} height={100} width={100} x="350" y="200" />*/}
        <image className={'rmap-country'} onClick={highLightedCountry[1]?.clickHandler} href={marker.src} height={100} width={100} x="560" y="130" />
        <image className={'rmap-country'} onClick={highLightedCountry[2]?.clickHandler} href={marker.src} height={100} width={100} x="905" y="180" />
        <image className={'rmap-country'} onClick={highLightedCountry[3]?.clickHandler} href={marker.src} height={100} width={100} x="1000" y="100" />
        {/*<image className={'rmap-country'} onClick={highLightedCountry[4]?.clickHandler} href={marker.src} height={100} width={100} x="1065" y="60" />*/}
        <image className={'rmap-country'} onClick={highLightedCountry[5]?.clickHandler} href={marker.src} height={100} width={100} x="1110" y="180" />
        {/*<image className={'rmap-country'} onClick={highLightedCountry[6]?.clickHandler} href={marker.src} height={100} width={100} x="1255" y="275" />*/}
        <image className={'rmap-country'} onClick={highLightedCountry[7]?.clickHandler} href={marker.src} height={100} width={100} x="1450" y="280" />
        <image className={'rmap-country'} onClick={highLightedCountry[8]?.clickHandler} href={marker.src} height={100} width={100} x="1630" y="200" />
        <image className={'rmap-country'} onClick={highLightedCountry[9]?.clickHandler} href={marker.src} height={100} width={100} x="1690" y="190" />
        <image className={'rmap-country'} onClick={highLightedCountry[10]?.clickHandler} href={marker.src} height={100} width={100} x="1539" y="423" />
        <image className={'rmap-country'} onClick={highLightedCountry[11]?.clickHandler} href={marker.src} height={100} width={100} x="1755" y="643" />
      </g>

    </svg>
  </>)
}