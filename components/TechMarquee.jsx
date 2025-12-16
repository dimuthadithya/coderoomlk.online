"use client";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiRedux, SiGraphql } from "react-icons/si";

const techs = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaGitAlt />, name: "Git" }
];

export default function TechMarquee() {
  return (
    <div className="py-12 bg-base-100 border-y border-base-200">
        <div className="text-center mb-8">
            <p className="font-bold text-sm tracking-widest uppercase opacity-50">Master the Modern Stack</p>
        </div>
      <Marquee gradient={true} gradientColor="hsl(var(--b1))" speed={40}>
        {techs.map((tech, index) => (
          <div key={index} className="flex items-center gap-3 mx-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer">
            <span className="text-4xl">{tech.icon}</span>
            <span className="text-lg font-bold hidden md:block">{tech.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
