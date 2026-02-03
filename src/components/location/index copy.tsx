// import {FaCircleXmark, FaPhone, FaEnvelope, FaUserTie } from "react-icons/fa6";
// import map from "./map.png";
// import marker from "./marker.png";
// import {useState} from "react";
// // import Schedule from "@/components/header/navbar/schedule";
// import RMap from "@/packages";
// export default function Locations(){
//   const [showCountry, setShowCountry] = useState(false);
//     const PRIMARY_COUNTRY = "usa";
//   const countries:any = {
//     bd: {
//       cName: "Oscar",
//       name: 'Bangladesh',
//       phone: '+880 1234-567890',
//       email: 'oscar@gmail.com',
//       address: 'Level 4, House 1259, Road 10, Avenue 2, Mirpur DOHS, Dhaka'
//     },
//     usa: {
//       cName: "Oscar",
//       name: 'United States',
//       phone: '+880 1234-567890',
//       email: 'usa@oscar.com',
//       address: 'USA office address'
//     },
//     cad: {
//       cName: "Muhammad Muhaiminul Islam",
//       name: 'Canada',
//       phone: '+1 519 731 5473',
//       email: 'muhaiminul0402@gmail.com',
//       address: 'Canada office address'
//     },
//     est: {
//       cName: "Oscar",
//       name: 'Estonia',
//       phone: '+352 5387 4150',
//       email: 'oscar@gmail.com',
//       address: 'Tedre 73, 647'
//     },
//     ger: {
//       cName: "Oscar",
//       name: 'Germany',
//       phone: '+8801329728656',
//       email: 'cto@oscar.com',
//       address: 'Germany office address'
//     },
//     pg: {
//       cName: "Oscar",
//       name: 'Portugal',
//       phone: '+351 920 413 407',
//       email: 'aj@neuralsolar.pt',
//       address: 'Portugal office address'
//     },
//     tk: {
//       cName: "Fahad Arefin",
//       name: 'Turkiye',
//       phone: '+90 539 366 9872',
//       email: 'tr@oscar.com',
//       address: 'Turkiye office address'
//     },
//     uae: {
//       cName: "Oscar",
//       name: 'Dubai',
//       phone: '+8801329728656',
//       email: 'uae@oscar.com',
//       address: 'Dubai office address'
//     },
//     sg: {
//       cName: "Mostafizur Rahman",
//       name: 'Singapore',
//       phone: '+65 8485 1314',
//       email: 'sg@oscar.com',
//       address: 'Singapore office address'
//     },
//     sk: {
//       cName: "Ali Fahad",
//       name: 'South Korea',
//       phone: '+8210 7362 6533',
//       email: 'kr@oscar.com',
//       address: 'Singapore office address'
//     },
//     jp: {
//       cName: "Mehedi Hassan Rajin",
//       name: 'Japan',
//       phone: '+8801329728656',
//       email: 'jp@oscar.com',
//       address: 'Japan office address'
//     },
//     aus: {
//       cName: "Atif Jubayer",
//       name: 'Australia',
//       phone: '+61 482 713 622',
//       email: 'au@oscar.com',
//       address: 'Australia office address'
//     }
//   };

//   const [selected, setSelected] = useState(countries.bd);
//   const switchCountry = (country: any) => {
//     setSelected(countries[country]);
//     setShowCountry(true);
//   }
//   const highLightedCountry = [
//     {
//       name: "",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('usa')
//       }
//     },
//     {
//       name: "Canada",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('cad')
//       }
//     },
//     {
//       name: "Portugal",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('pg')
//       }
//     },
//     {
//       name: "Germany",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('ger')
//       }
//     },
//     {
//       name: "",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('est')
//       }
//     },
//     {
//       name: "Turkiye",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('tk')
//       }
//     },
//     {
//       name: "",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('uae')
//       }
//     },
//     {
//       name: "Bangladesh",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('bd')
//       }
//     },
//     {
//       name: "Republic of Korea",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('sk')
//       }
//     },
//     {
//       name: "Japan",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('jp')
//       }
//     },
//     {
//       name: "Singapore",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('sg')
//       }
//     },
//     {
//       name: "Australia",
//       fill: '#ff863f',
//       clickHandler: () => {
//         switchCountry('aus')
//       }
//     },
//   ]
//   return (<>
//     <div className="locations">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             {/* <h3 className="section-title loc-title">
//               <span className="text--blue">Locate Us</span> <span className={'text--regular'}>across the globe</span>
//             </h3> */}
//           </div>
//         </div>
//       </div>
//       <div className="container svg-map-holder">
//         <RMap
//           // grid={true}
//           // gridColor="#000"
//           // gridBoldAfterEach={50}
//           // gridBoldDepth={0.3}
//           border={.15}
//           borderColor="#000"
//           highLightedCountry={highLightedCountry}
//         />
//         {showCountry? <div className="location-info">
//           <button className="btn location-info-close" onClick={()=>{setShowCountry(false)}}>
//             <FaCircleXmark className={'close-fa'} />
//           </button>
//           <div className="location-info-wrapper">
//             <h3 className="location-country">Local Contact ({selected.name})</h3>
//             <div className="loc-info-deep">
//               <FaUserTie className={'info-icon'} />
//               <a href="tel:+8801345728656" className="info-link">{selected.cName}</a>
//             </div>
//             {/*<div className="loc-info-deep">*/}
//             {/*  <FaPhone className={'info-icon'} />*/}
//             {/*  <a href="tel:+8801329728656" className="info-link">{selected.phone}</a>*/}
//             {/*</div>*/}
//             <div className="loc-info-deep">
//               <FaEnvelope className={'info-icon'} />
//               <a href="mailto:+country@oscar.com" className="info-link">{selected.email}</a>
//             </div>
//             {/*<div className="loc-info-deep">*/}
//             {/*    <FaLocationDot  className={'info-icon'} />*/}
//             {/*    <span className="info-link">{selected.address}</span>*/}
//             {/*</div>*/}
//             {/* <Schedule /> */}
//           </div>
//         </div> : null}
//       </div>
//     </div>
//   </>);
// }