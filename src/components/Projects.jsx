import React from "react";
import appleclone from "../assets/appleclone.png";
import shoppinglist from "../assets/shoppinglist.png";
import pswgenerator from "../assets/pswGenerator.png";
import blackjackgame from "../assets/blackjackgame.png";
import scoreboard from "../assets/scoreboard.png";
import memepickker from "../assets/memepicker.png";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiSolidNavigation } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";

const Projects = () => {
  return (
    <div
      id="projects"
      className="text-5xl lg:text-7xl text-green-200 font-mono mt-32 pt-6 text-center"
    >
      <span className="overline">Proj</span>ects
      <div className="grid lg:grid-cols-2 md:grid-cols-2 place-items-center grid-cols-1 lg:gap-20 gap-10 mt-20">
        {/* Project 1 */}
        <div className="text-xl font-normal font-sans text-emerald-400 h-96 w-96 bg-slate-800 grid grid-cols-1 place-items-center">
          <img src={appleclone} alt="AppleClone" className="h-52 w-52" />
          <p className="font-sans text-sky-400 text-3xl">Apple Clone</p>
          <div className="flex justify-center">
            <p>Technologies Used:</p>
            <span className="px-2 text-cyan-400">
              <FaReact />
            </span>
            <span className="px-2 text-sky-300">
              <RiTailwindCssFill />
            </span>
          </div>
          <div className="flex">
            <a
              href="https://github.com/Saloni581/AppleClone_Using_React"
              className="pr-80 text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://papaya-daifuku-988013.netlify.app/"
              className="text-blue-600"
            >
              <BiSolidNavigation />
            </a>
          </div>
        </div>
        {/* Project 2 */}
        <div className="text-xl font-normal font-sans text-emerald-400 h-96 w-96 bg-slate-800 grid grid-cols-1 place-items-center">
          <img src={shoppinglist} alt="ShoppingList" className="h-52 w-52" />
          <p className="font-sans text-sky-400 text-3xl">Shopping List</p>
          <div className="flex justify-center">
            <p>Technologies Used:</p>
            <span className="px-2 text-orange-400">
              <FaHtml5 />
            </span>
            <span className="px-2 text-blue-400">
              <DiCss3 />
            </span>
            <span className="px-2 text-yellow-400">
              <SiJavascript />
            </span>
            <span className="px-2 text-yellow-300">
              <IoLogoFirebase />
            </span>
          </div>
          <div className="flex">
            <a
              href="https://github.com/Saloni581/ShoppingList"
              className="pr-80 text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://ornate-scone-5e4cfc.netlify.app/"
              className="text-blue-600"
            >
              <BiSolidNavigation />
            </a>
          </div>
        </div>
        {/* Project 3 */}
        <div className="text-xl font-normal font-sans text-emerald-400 h-96 w-96 bg-slate-800 grid grid-cols-1 place-items-center">
          <img
            src={pswgenerator}
            alt="Password Generator"
            className="h-52 w-52"
          />
          <p className="font-sans text-sky-400 text-3xl">
            Random Password Generator
          </p>
          <div className="flex justify-center">
            <p>Technologies Used:</p>
            <span className="px-2 text-orange-400">
              <FaHtml5 />
            </span>
            <span className="px-2 text-blue-400">
              <DiCss3 />
            </span>
            <span className="px-2 text-yellow-400">
              <SiJavascript />
            </span>
          </div>
          <div className="flex">
            <a
              href="https://github.com/Saloni581/PassWordGenerator?tab=readme-ov-file"
              className="pr-80 text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://657ad6917f3dd205e6d0b0a5--transcendent-maamoul-a89b28.netlify.app/"
              className="text-blue-600"
            >
              <BiSolidNavigation />
            </a>
          </div>
        </div>
        {/* Project 4 */}
        <div className="text-xl font-normal font-sans text-emerald-400 h-96 w-96 bg-slate-800 grid grid-cols-1 place-items-center">
          <img src={blackjackgame} alt="BlackJackGame" className="h-52 w-52" />
          <p className="font-sans text-sky-400 text-3xl">BlackJack Game</p>
          <div className="flex justify-center">
            <p>Technologies Used:</p>
            <span className="px-2 text-orange-400">
              <FaHtml5 />
            </span>
            <span className="px-2 text-blue-400">
              <DiCss3 />
            </span>
            <span className="px-2 text-yellow-400">
              <SiJavascript />
            </span>
          </div>
          <div className="flex">
            <a
              href="https://github.com/Saloni581/JavaScriptTasks/tree/main/BlackJackGame"
              className="pr-80 text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://6579988121fd831352c486f5--ubiquitous-daifuku-cc472e.netlify.app/"
              className="text-blue-600"
            >
              <BiSolidNavigation />
            </a>
          </div>
        </div>
        {/* Project 5 */}
        <div className="text-xl font-normal font-sans text-emerald-400 h-96 w-96 bg-slate-800 grid grid-cols-1 place-items-center">
          <img src={scoreboard} alt="Score Board" className="h-52 w-52" />
          <p className="font-sans text-sky-400 text-3xl">Score Board</p>
          <div className="flex justify-center">
            <p>Technologies Used:</p>
            <span className="px-2 text-orange-400">
              <FaHtml5 />
            </span>
            <span className="px-2 text-blue-400">
              <DiCss3 />
            </span>
            <span className="px-2 text-yellow-400">
              <SiJavascript />
            </span>
          </div>
          <div className="flex">
            <a
              href="https://github.com/Saloni581/JavaScriptTasks/tree/main/ScoreBoard"
              className="pr-80 text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://65784571294e944bd3d96946--majestic-salmiakki-77b503.netlify.app/"
              className="text-blue-600"
            >
              <BiSolidNavigation />
            </a>
          </div>
        </div>
        {/* Project 6 */}
        <div className="text-xl font-normal font-sans text-emerald-400 h-96 w-96 bg-slate-800 grid grid-cols-1 place-items-center">
          <img src={memepickker} alt="memepicker" className="h-52 w-52" />
          <p className="font-sans text-sky-400 text-3xl">Meme Picker</p>
          <div className="flex justify-center">
            <p>Technologies Used:</p>
            <span className="px-2 text-orange-400">
              <FaHtml5 />
            </span>
            <span className="px-2 text-blue-400">
              <DiCss3 />
            </span>
            <span className="px-2 text-yellow-400">
              <SiJavascript />
            </span>
          </div>
          <div className="flex">
            <a
              href="https://github.com/Saloni581/JavaScriptTasks/tree/main/MemePicker"
              className="pr-80 text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://melodic-cheesecake-2cf744.netlify.app/"
              className="text-blue-600"
            >
              <BiSolidNavigation />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
