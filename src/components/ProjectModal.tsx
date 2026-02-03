"use client";

import { useEffect, useRef } from "react";
import DonutChart from "@/components/DonutChart";
interface Project {
  title: string;
  desc?: string;
}

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}

const paperImages = [
  "/images/ppr/aas.png",
  "/images/ppr/af.png",
];

export default function ProjectModal({
  open,
  onClose,
  project,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalInstance = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) return;
    // ✅ client-side only Bootstrap JS
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(
      ({ Modal }) => {
        modalInstance.current = new Modal(modalRef.current, {
          backdrop: "static",
          keyboard: true,
        });

        if (open) modalInstance.current.show();
      }
    );
  }, []);

  useEffect(() => {
    if (!modalInstance.current) return;

    open
      ? modalInstance.current.show()
      : modalInstance.current.hide();
  }, [open]);

  return (
    <div className="modal fade" ref={modalRef} tabIndex={-1}>
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="pj-modal-title">
              Project Title: <span>Basis Election Data Analysis</span>
            </h3>
            <button className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <div className="pj-top-content">
              <h4 className="pj-label">Abstruct:</h4>
              <p className="pj-tagline-textt">
                It has a meaningful content—its purpose is to fill space so
                people can focus on layout, typography, visuals.It has a meaningful content—its purpose is to fill space so
                people can focus on layout, typography, visuals.
              </p>
              {/* Chart */}
              {/*<div className="pj-chart-container">
             <div className="pj-chart-legend">
              <span>
                <i style={{ background: "#00e5ff" }}></i> Operating Expenses
              </span>
              <span>
                <i style={{ background: "#001a4d" }}></i> Difference
              </span>
            </div>
            {/* <div className="pj-bar-chart-visual">
              {[
                ["January", 60, 10],
                ["February", 65, 15],
                ["March", 70, 5],
                ["April", 75, 20],
                ["May", 65, 8],
                ["June", 68, 12],
              ].map(([month, light, dark]) => (
                <div className="pj-month-group" key={month}>
                  <div className="pj-bars">
                    <div
                      className="pj-bar-light"
                      style={{ height: `${light}%` }}
                    ></div>
                    <div
                      className="pj-bar-dark"
                      style={{ height: `${dark}%` }}
                    ></div>
                  </div>
                  <span className="pj-month-label">{month}</span>
                </div>
              ))}
            </div> 
          </div>*/}
            </div>
            {/* Meta info */}
            <div className="pj-info-meta">
              <p>
                <span className="pj-label">Language :</span>{" "}
                <span className="pj-val">R language, Python</span>
              </p>
              <p>
                <span className="pj-label">Basic libraries :</span>
                <span className="pj-lib-dot dark-teal">● pandas</span>
                <span className="pj-lib-dot green">● numpy</span>
                <span className="pj-lib-dot dark-teal">● matplotlib</span>
                <span className="pj-lib-dot blue">● seaborn</span>
              </p>
              <p>
                <span className="pj-label">Date :</span>{" "}
                <span className="pj-val">12/08/2025</span>
              </p>
            </div>
            <h4 className="pj-label">Project Images:</h4>
            <div className="pj-paper-images">
              {paperImages.map((img, index) => (
                <div key={index} className="pj-paper-slide">
                  <img
                    src={img}
                    alt={`paper-image-${index + 1}`}
                  />
                </div>
              ))}
            </div>
            {/* <div className="pj-paper-images">
              {[1, 2].map((i) => (
                <div key={i} className="pj-paper-slide">
                  <img
                    //src={`https://picsum.photos/300/180?random=${i}`}
                    src={`https://picsum.photos/300/180?random=${i}`}
                    alt={`paper-image-${i}`}
                  />
                </div>
              ))}
            </div> */}
            {/* Bottom */}
            <div className="pj-bottom-container">
              <div className="pj-donut-side">
                <div className="pj-hed-br">
                  <h3 className="pj-modal-title">
                    Collaboration Percentage
                  </h3>
                </div>
                <div className="pj-donut-flx">
                  <div className="pj-donut-stats">
                    <div className="pj-stat-item">
                      <div className="pj-stat-head">
                        <span className="pj-stat-label">Collaboration</span>
                        <span className="pj-stat-box collab"></span>
                      </div>
                      <div className="pj-stat-value">20%</div>
                    </div>

                    <div className="pj-stat-item">
                      <div className="pj-stat-head">
                        <span className="pj-stat-label">Self contribution</span>
                        <span className="pj-stat-box self"></span>
                      </div>
                      <div className="pj-stat-value">80%</div>
                    </div>
                  </div>
                  {/* <div className="pj-donut-stats">
                    <p>
                      <span className="pj-stat-box ttl"></span>
                      Collaboration <b>20%</b>
                    </p>
                    <p>
                      <span className="pj-stat-box dark"></span>
                      Self contribution <b>80%</b>
                    </p>
                  </div> */}
                  <DonutChart collaboration={40} self={80} />
                </div>
              </div>
              {/* <div className="pj-donut-side">
             <div className="pj-donut-stats">
              <p>
                <span className="pj-stat-box ttl"></span> Collaboration <b>20%</b>
              </p>
              <p>
                <span className="pj-stat-box dark"></span> Self contribution{" "} <b>60%</b>
              </p>
            </div>
            <div className="pj-donut-visual-css"></div>
          </div> */}
              <div className="pj-collab-side">
                <div className="pj-hed-br">
                  <h3 className="pj-title">
                    Project Collaboration
                  </h3>
                </div>
                <div className="pj-user-list">
                  <div className="pj-user-row">
                    <img
                      src="https://i.pravatar.cc/50?img=1"
                      className="pj-avatar"
                      alt="user"
                    />
                    <div className="pj-u-meta">
                      <h6>Kindness</h6>
                      <p>Lecturer</p>
                    </div>
                    <div className="pj-purple-arrow">{">"}</div>
                  </div>
                  <div className="pj-user-row">
                    <img
                      src="https://i.pravatar.cc/50?img=43"
                      className="pj-avatar"
                      alt="user"
                    />
                    <div className="pj-u-meta">
                      <h6>Rain Whells</h6>
                      <p>Professor, University of Torento</p>
                    </div>
                    <div className="pj-purple-arrow">{">"}</div>
                  </div>
                  <div className="pj-user-row">
                    <img
                      src="https://i.pravatar.cc/50?img=9"
                      className="pj-avatar"
                      alt="user"
                    />
                    <div className="pj-u-meta">
                      <h6>Beautiful</h6>
                      <p>Professor</p>
                    </div>
                    <div className="pj-purple-arrow">{">"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}