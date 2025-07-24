import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
	{
		id: "skills",
		title: "Skills",
		content: [
			{ label: "Frontend", detail: "Html, Css, Javascript, React js, Tailwind, Bootstrap" },
			{ label: "Backend", detail: "Express Js, Node Js" },
			{ label: "Database", detail: "Mongo Db" },
      { label: "Good In", detail: "Wordpress" },
			{ label: "Other basic knowledge", detail: "MY SQL, C, C++" },
		],
	},
  {
    id: "experience",
    title: "Experience",
    content: [
      {
        label: "May 2025 - Present",
        detail:
          "Currently doing an internship as a MERN Stack Developer at Gmark Technologies, Panchkula.",
      },
      {
        label: "2023 - 2024",
        detail:
          "Successfully completed Full Stack Developer training at Edureka, earning a certification with a strong grade.",
      },
    ],
  },
  
	{
		id: "education",
		title: "Education",
		content: [
			{ label: "2023 - 2025", detail: "MCA at CU [Result Not Declare yet]" },
			{ label: "2020 - 2023", detail: "BSC CS at SD College (Ambala) with [81%]" },
			{ label: "2019 - 2020", detail: "Non-Med at SMS School (Barara, Ambala) with [85%]" },
		],
	},
  {
    id: "softskills",
    title: "Soft Skills",
    content: [
      { label: "Good Communication", detail: "" },
      { label: "Team Work", detail: "" },
      { label: "Quick Learner", detail: "" },
      { label: "Adaptive", detail: "" },
      { label: "Problem Solving", detail: "" },
    ],
  },
  {
    id: "certificates",
    title: "Certificates",
    content: [
      {
        label: "Python Full Stack Web Development",
        detail: "Edureka (2024 - 2025) — 1-year training covering MERN stack (MongoDB, Express.js, React.js, Node.js)",
      },
      {
        label: "Postman API Fundamentals Student Expert",
        detail: "Completed the Postman API Fundamentals course and received a Certificate of Completion.",
      },
      {
        label: "JavaScript Practical Course",
        detail: "Completed JavaScript Practicals Crash Course in 2024 at Udemy",
      },
    ],
  },
];

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  
  const [activeTab, setActiveTab] = useState("skills");
  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </div>

      <p ref={paragraphRef} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Hi,I am Piyush Kaushal, Motivated and detail-oriented Full Stack Web Developer with hands-on experience
in building responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
Skilled in REST APIs,responsive design, and version control systems. Currently pursuing MCA in AI & ML,
with strong foundational knowledge in data structures and algorithms. Passionate about learning, problemsolving, and delivering high-quality code in collaborative environments.
      </p>
      <section className="mt-16">
			<div className="max-w-6xl mx-auto bg-[#262626] p-6 rounded-lg text-white shadow-md">
				{/* Tab Buttons */}
				<div className="flex flex-wrap justify-center gap-6 mb-6">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`text-lg font-semibold relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#915EFF] after:transition-all after:duration-300 ${
								activeTab === tab.id ? "text-[#915EFF] after:w-1/2" : "after:w-0"
							}`}
						>
							{tab.title}
						</button>
					))}
				</div>

				{/* Tab Content */}
        <div className="space-y-4">
  {tabs
    .find((tab) => tab.id === activeTab)
    .content.map((item, idx) => (
      <div
        key={idx}
        className="bg-[#1c1c1c] p-4 rounded-md transition hover:bg-[#915EFF] group"
      >
        {item.label && (
          <span className="text-[#915EFF] block text-sm font-bold mb-1 group-hover:text-black">
            {item.label}
          </span>
        )}
        <p className="text-gray-300 text-sm">{item.detail}</p>
      </div>
    ))}
</div>

			</div>
		</section>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
