import Image from "next/image";
// Timeline ডেটা array
const timelineData = [
    {
    text: "Ascend Money",
    role: "Head of Product",
    year: "Jun 2017 – Dec 2018 · 1 yr 6 mos",
  },
    {
    text: "TechNova",
    role: "Senior Product Manager",
    year: "Jun 2018 – Dec 2019 · 1 yr 6 mos",
   },
     {
    text: "FinTech Labs",
    role: "Product Strategy Lead",
    year: "Jan 2020 – Sep 2021 · 1 yr 9 mos",
  },
  {
    text: "CoiBoi",
    role: "Co-Founder & Head of Product",
    year: "Oct 2021 – Present · 7 mos",
  },
];

const careerData = [
  {
    id: 1,
    company: "CoiBoi",
    role: "Co-Founder & Head of Product",
    date: "Oct 2021 – Present · 7 mos",
    theme: "teal",
    topIcon: "/images/icons/topdv.svg",
    centerIcon: "/images/icons/mtr.svg",
  },
  {
    id: 2,
    company: "FinTech Labs",
    role: "Product Strategy Lead",
    date: "Jan 2020 – Sep 2021 · 1 yr 9 mos",
    theme: "black",
    topIcon: "/images/icons/toptv.svg",
    centerIcon: "/images/icons/dtt.svg",
  },
  {
    id: 3,
    company: "TechNova",
    role: "Senior Product Manager",
    date: "Jun 2018 – Dec 2019 · 1 yr 6 mos",
    theme: "black",
    topIcon: "/images/icons/toptv.svg",
    centerIcon: "/images/icons/grpp.svg",
  },
    {
    id: 4,
    company: "Ascend Money",
    role: "Head of Product",
    date: "Jun 2017 – Dec 2018 · 1 yr 6 mos",
    theme: "teal",
    topIcon: "/images/icons/topdv.svg",
    centerIcon: "/images/icons/prsttt.svg",
  },
  //     {
  //   id: 5,
  //   company: "TinyPlus",
  //   role: "Senior Business Manager",
  //   date: "Jun 2016 – Dec 2017 · 1 yr 6 mos",
  //   theme: "teal",
  //   topIcon: "/images/icons/topdv.svg",
  //   centerIcon: "/images/icons/fltt.svg",
  // },
  //   {
  //   id: 6,
  //   company: "TechNova",
  //   role: "Senior Product Manager",
  //   date: "Jun 2014 – Dec 2016 · 2 yr 6 mos",
  //   theme: "black",
  //   topIcon: "/images/icons/toptv.svg",
  //   centerIcon: "/images/icons/glbb.svg",
  // },
];

const truncateText = (text, maxLength = 35) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default function Career() {
  return (
<>
      <section className="exprnce-card">
                <h3 className="resrch-titl mb">Career</h3>
                <div className="experience-card">
                  {careerData.map((item) => (
                    <div className={`expp-card ${item.theme}`} key={item.id}>
                      <div className="top-decor">
                        <img
                          src={item.topIcon}
                          alt="top decor"
                          className="topdv"
                        />
                        <img
                          src={item.centerIcon}
                          alt="center icon"
                          className="mtr"
                        />
                      </div>

                      <div className="contnnt">
                        <h5>{item.company}</h5>
                        <p className="rlee">{item.role}</p>
                        <span className="date">{item.date}</span>
                      </div>
                    </div>
                  ))}
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
                          <div className="sch-text">
                            {" "}
                            {truncateText(item.text, 23)}
                          </div>
                          <div className="sch-year">{truncateText(item.role, 15)}</div>
                          <div className="sch-year">{truncateText(item.year, 20)}</div>
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
