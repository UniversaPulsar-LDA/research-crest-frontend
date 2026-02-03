// import { FaCircleXmark, FaEnvelope, FaUserTie } from "react-icons/fa6";
// import { useState } from "react";
// import RMap from "@/packages";

// export default function Locations() {

//   /** PRIMARY COUNTRY (Dynamic Hub) */
//   const PRIMARY_COUNTRY = "usa";

//   const countries: any = {
//     usa: {
//       key: "usa",
//       name: "United States",
//       cName: "Oscar",
//       email: "usa@oscar.com",
//     },
//     bd: {
//       key: "bd",
//       name: "Bangladesh",
//       cName: "Oscar",
//       email: "oscar@gmail.com",
//     },
//     cad: {
//       key: "cad",
//       name: "Canada",
//       cName: "Muhammad Muhaiminul Islam",
//       email: "muhaiminul0402@gmail.com",
//     },
//     ger: {
//       key: "ger",
//       name: "Germany",
//       cName: "Oscar",
//       email: "cto@oscar.com",
//     },
//     pg: {
//       key: "pg",
//       name: "Portugal",
//       cName: "Oscar",
//       email: "aj@neuralsolar.pt",
//     },
//     tk: {
//       key: "tk",
//       name: "Turkiye",
//       cName: "Fahad Arefin",
//       email: "tr@oscar.com",
//     },
//     uae: {
//       key: "uae",
//       name: "Dubai",
//       cName: "Oscar",
//       email: "uae@oscar.com",
//     },
//     sg: {
//       key: "sg",
//       name: "Singapore",
//       cName: "Mostafizur Rahman",
//       email: "sg@oscar.com",
//     },
//     sk: {
//       key: "sk",
//       name: "South Korea",
//       cName: "Ali Fahad",
//       email: "kr@oscar.com",
//     },
//     jp: {
//       key: "jp",
//       name: "Japan",
//       cName: "Mehedi Hassan Rajin",
//       email: "jp@oscar.com",
//     },
//     aus: {
//       key: "aus",
//       name: "Australia",
//       cName: "Atif Jubayer",
//       email: "au@oscar.com",
//     },
//   };

//   const [selected, setSelected] = useState(countries[PRIMARY_COUNTRY]);
//   const [showCountry, setShowCountry] = useState(false);

//   const switchCountry = (key: string) => {
//     setSelected(countries[key]);
//     setShowCountry(true);
//   };

//   /** 🌍 Highlighted countries (clickable) */
//   const highLightedCountry = Object.values(countries).map((item: any) => ({
//     name: item.name,
//     fill: "#ff863f",
//     clickHandler: () => switchCountry(item.key),
//   }));

//   return (
//     <div className="locations">
//       <div className="container svg-map-holder">
//         <RMap
//           border={0.15}
//           borderColor="#000"
//           highLightedCountry={highLightedCountry}
//           primaryCountryKey={PRIMARY_COUNTRY}
//         />

//         {showCountry && (
//           <div className="location-info">
//             <button
//               className="btn location-info-close"
//               onClick={() => setShowCountry(false)}
//             >
//               <FaCircleXmark />
//             </button>

//             <h3>Local Contact ({selected.name})</h3>

//             <div className="loc-info-deep">
//               <FaUserTie />
//               <span>{selected.cName}</span>
//             </div>

//             <div className="loc-info-deep">
//               <FaEnvelope />
//               <span>{selected.email}</span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
