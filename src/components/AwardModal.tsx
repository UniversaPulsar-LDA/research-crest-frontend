// "use client";

// import { useEffect, useRef } from "react";
// import DonutChart from "@/components/DonutChart";
// interface Project {
//   title: string;
//   desc?: string;
// }

// interface ProjectModalProps {
//   open: boolean;
//   onClose: () => void;
//   project: Project | null;
// }

// const paperImages = [
//   "/images/ppr/aas.png",
//   "/images/ppr/af.png",
// ];

// export default function AwardModal({
//   open,
//   onClose,
//   project,
// }: ProjectModalProps) {
//   const modalRef = useRef<HTMLDivElement>(null);
//   const modalInstance = useRef<any>(null);

//   useEffect(() => {
//     if (!modalRef.current) return;

//     // ✅ client-side only Bootstrap JS
//     import("bootstrap/dist/js/bootstrap.bundle.min.js").then(
//       ({ Modal }) => {
//         modalInstance.current = new Modal(modalRef.current, {
//           backdrop: "static",
//           keyboard: true,
//         });

//         if (open) modalInstance.current.show();
//       }
//     );
//   }, []);

//   useEffect(() => {
//     if (!modalInstance.current) return;

//     open
//       ? modalInstance.current.show()
//       : modalInstance.current.hide();
//   }, [open]);

//   return (
//     <div className="modal fade" ref={modalRef} tabIndex={-1}>
//       <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h3 className="pj-modal-title">
//               Award Title: <span>Best Employee Award</span>
//             </h3>
//             <button className="btn-close" onClick={onClose} />
//           </div>
//           <div className="modal-body">
//             <div className="pj-top-content">
//               <h4 className="pj-label">Description:</h4>
//               <p className="pj-tagline-textt">
//                 Presented for exceptional commitment and
//                 proactive approach to problem-solving.
//                 This award reflects dedication to
//                 professional excellence. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
//               </p>
//             </div>
//             <div>
//             <div>
//             <div className="pj-top-content">
//               <h4 className="pj-label">Category / Topic:</h4>
//               <p className="pj-tagline-textt">
//                 Performance Excellence & Team Contribution
//               </p>
//             </div>
//             <div className="pj-top-content">
//               <h4 className="pj-label">Date:</h4>
//               <p className="pj-tagline-textt">
//                 17 March, 2023
//               </p>
//             </div>
//             </div>
//             <div>
              
//             </div>
//             </div>
//           </div>
//           <div className="modal-footer">
//             <button className="btn btn-secondary" onClick={onClose}>
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }