import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="mt-32 pt-6 text-center font-mono">
      <span className="text-5xl lg:text-7xl text-green-200">
        {/* overline effect */}
        <span className="overline">Expe</span>rience
      </span>
      <div className="flex-col justify-center text-white">
        <div>
          <h1 className="text-emerald-400 text-3xl fontbold my-12">
            Open Source Contributor - GirlScript Summer of Code (GSSoC) 2023,
            2024
          </h1>
          <ul className="text-white font-semibold text-xl">
            <li>Contributed to multiple open-source projects.</li>
            <li>Enhanced skills in Frontend Web Development.</li>
            <li>Collaborated with developers worldwide.</li>
          </ul>
        </div>
        <div>
          <h1 className="text-emerald-400 text-3xl fontbold my-12">
            Web Developer Intern - CodersCave Remote | [May, 2024] - Present
          </h1>
          <ul className="text-white font-semibold text-xl">
            <li>Developing and maintaining web applications.</li>
            <li>Gaining practical experience in Full Stack Web Development.</li>
            <li>
              Collaborating with a remote team to deliver high-quality software
              solutions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
