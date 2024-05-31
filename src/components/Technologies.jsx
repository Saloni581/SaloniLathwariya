import React from "react";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";

const Technologies = () => {
  return (
    <div id="tech">
      <div className="mt-32 pt-6 text-center font-mono">
        <span className="text-5xl lg:text-7xl text-green-200">
          {/* overline effect */}
          <span className="overline">Tech</span>nologies
        </span>

        {/*  Tech Stack */}
        <div className="mt-24 text-2xl lg:text-5xl flex justify-center font-sans">
          <p className="text-emerald-400">Tech-Stack:</p>
          <p className="px-4 text-emerald-400">
            <DiMongodb />
          </p>
          <p className="px-4 text-slate-600">
            <SiExpress />
          </p>
          <p className="px-4 text-cyan-400">
            <FaReact />
          </p>
          <p className="px-4 text-green-600">
            <TbBrandNodejs />
          </p>
        </div>
      </div>
      {/*  Programming Languages */}
      <div className="mt-14 text-5xl text-center font-sans">
        <div className="text-2xl lg:text-5xl flex justify-center">
          <p className="text-emerald-400">Programming Languages:</p>
          <p className="px-4 text-yellow-500">
            <SiJavascript />
          </p>
          {/*  Java  */}
          <p className="px-4 text-blue-600">
            <FaJava />
          </p>
          {/* C */}
          <p className="px-4">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMyODM1OTMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjkwMywzLjI4NmMwLjY3OS0wLjM4MSwxLjUxNS0wLjM4MSwyLjE5MywwIGMzLjM1NSwxLjg4MywxMy40NTEsNy41NTEsMTYuODA3LDkuNDM0QzQyLjU4MiwxMy4xLDQzLDEzLjgwNCw0MywxNC41NjZjMCwzLjc2NiwwLDE1LjEwMSwwLDE4Ljg2NyBjMCwwLjc2Mi0wLjQxOCwxLjQ2Ni0xLjA5NywxLjg0N2MtMy4zNTUsMS44ODMtMTMuNDUxLDcuNTUxLTE2LjgwNyw5LjQzNGMtMC42NzksMC4zODEtMS41MTUsMC4zODEtMi4xOTMsMCBjLTMuMzU1LTEuODgzLTEzLjQ1MS03LjU1MS0xNi44MDctOS40MzRDNS40MTgsMzQuODk5LDUsMzQuMTk2LDUsMzMuNDM0YzAtMy43NjYsMC0xNS4xMDEsMC0xOC44NjcgYzAtMC43NjIsMC40MTgtMS40NjYsMS4wOTctMS44NDdDOS40NTEsMTAuODM3LDE5LjU0OSw1LjE2OSwyMi45MDMsMy4yODZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48cGF0aCBmaWxsPSIjNWM2YmMwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjMwNCwzNC40MDRDNS4wMzgsMzQuMDQ4LDUsMzMuNzEsNSwzMy4yNTUgYzAtMy43NDQsMC0xNS4wMTQsMC0xOC43NTljMC0wLjc1OCwwLjQxNy0xLjQ1OCwxLjA5NC0xLjgzNmMzLjM0My0xLjg3MiwxMy40MDUtNy41MDcsMTYuNzQ4LTkuMzggYzAuNjc3LTAuMzc5LDEuNTk0LTAuMzcxLDIuMjcxLDAuMDA4YzMuMzQzLDEuODcyLDEzLjM3MSw3LjQ1OSwxNi43MTQsOS4zMzFjMC4yNywwLjE1MiwwLjQ3NiwwLjMzNSwwLjY2LDAuNTc2TDUuMzA0LDM0LjQwNHoiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LDEwYzcuNzI3LDAsMTQsNi4yNzMsMTQsMTRzLTYuMjczLDE0LTE0LDE0IHMtMTQtNi4yNzMtMTQtMTRTMTYuMjczLDEwLDI0LDEweiBNMjQsMTdjMy44NjMsMCw3LDMuMTM2LDcsN2MwLDMuODYzLTMuMTM3LDctNyw3cy03LTMuMTM3LTctN0MxNywyMC4xMzYsMjAuMTM2LDE3LDI0LDE3eiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZmlsbD0iIzM5NDlhYiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNDIuNDg1LDEzLjIwNWMwLjUxNiwwLjQ4MywwLjUwNiwxLjIxMSwwLjUwNiwxLjc4NCBjMCwzLjc5NS0wLjAzMiwxNC41ODksMC4wMDksMTguMzg0YzAuMDA0LDAuMzk2LTAuMTI3LDAuODEzLTAuMzIzLDEuMTI3TDIzLjU5MywyNEw0Mi40ODUsMTMuMjA1eiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+Cjwvc3ZnPg=="
            />
          </p>
          {/*  C++  */}
          <p className="px-4">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMDU0OWQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjkwMywzLjI4NmMwLjY3OS0wLjM4MSwxLjUxNS0wLjM4MSwyLjE5MywwIGMzLjM1NSwxLjg4MywxMy40NTEsNy41NTEsMTYuODA3LDkuNDM0QzQyLjU4MiwxMy4xLDQzLDEzLjgwNCw0MywxNC41NjZjMCwzLjc2NiwwLDE1LjEwMSwwLDE4Ljg2NyBjMCwwLjc2Mi0wLjQxOCwxLjQ2Ni0xLjA5NywxLjg0N2MtMy4zNTUsMS44ODMtMTMuNDUxLDcuNTUxLTE2LjgwNyw5LjQzNGMtMC42NzksMC4zODEtMS41MTUsMC4zODEtMi4xOTMsMCBjLTMuMzU1LTEuODgzLTEzLjQ1MS03LjU1MS0xNi44MDctOS40MzRDNS40MTgsMzQuODk5LDUsMzQuMTk2LDUsMzMuNDM0YzAtMy43NjYsMC0xNS4xMDEsMC0xOC44NjcgYzAtMC43NjIsMC40MTgtMS40NjYsMS4wOTctMS44NDdDOS40NTEsMTAuODM3LDE5LjU0OSw1LjE2OSwyMi45MDMsMy4yODZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA4NmQ0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjMwNCwzNC40MDRDNS4wMzgsMzQuMDQ4LDUsMzMuNzEsNSwzMy4yNTUgYzAtMy43NDQsMC0xNS4wMTQsMC0xOC43NTljMC0wLjc1OCwwLjQxNy0xLjQ1OCwxLjA5NC0xLjgzNmMzLjM0My0xLjg3MiwxMy40MDUtNy41MDcsMTYuNzQ4LTkuMzggYzAuNjc3LTAuMzc5LDEuNTk0LTAuMzcxLDIuMjcxLDAuMDA4YzMuMzQzLDEuODcyLDEzLjM3MSw3LjQ1OSwxNi43MTQsOS4zMzFjMC4yNywwLjE1MiwwLjQ3NiwwLjMzNSwwLjY2LDAuNTc2TDUuMzA0LDM0LjQwNHoiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LDEwYzcuNzI3LDAsMTQsNi4yNzMsMTQsMTRzLTYuMjczLDE0LTE0LDE0IHMtMTQtNi4yNzMtMTQtMTRTMTYuMjczLDEwLDI0LDEweiBNMjQsMTdjMy44NjMsMCw3LDMuMTM2LDcsN2MwLDMuODYzLTMuMTM3LDctNyw3cy03LTMuMTM3LTctN0MxNywyMC4xMzYsMjAuMTM2LDE3LDI0LDE3eiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwNzVjMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNDIuNDg1LDEzLjIwNWMwLjUxNiwwLjQ4MywwLjUwNiwxLjIxMSwwLjUwNiwxLjc4NCBjMCwzLjc5NS0wLjAzMiwxNC41ODksMC4wMDksMTguMzg0YzAuMDA0LDAuMzk2LTAuMTI3LDAuODEzLTAuMzIzLDEuMTI3TDIzLjU5MywyNEw0Mi40ODUsMTMuMjA1eiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzEgMjFIMzNWMjdIMzF6TTM4IDIxSDQwVjI3SDM4eiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjkgMjNIMzVWMjVIMjl6TTM2IDIzSDQyVjI1SDM2eiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+Cjwvc3ZnPg=="
            />
          </p>
          {/* Python */}
          <p className="px-4">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ29xZnUxWk5tRW5VclFESkVRMWJVYV9sNzVPRVVKa1BBazRfZ3IxIiB4MT0iMTAuNDU4IiB4Mj0iMjYuMzE0IiB5MT0iMTIuOTcyIiB5Mj0iMjYuMjc3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjZhYmU3Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDg2ZGJmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2dvcWZ1MVpObUVuVXJRREpFUTFiVWFfbDc1T0VVSmtQQWs0X2dyMSkiIGQ9Ik0yNC4wNDcsNWMtMS41NTUsMC4wMDUtMi42MzMsMC4xNDItMy45MzYsMC4zNjdjLTMuODQ4LDAuNjctNC41NDksMi4wNzctNC41NDksNC42N1YxNGg5djIgSDE1LjIyaC00LjM1Yy0yLjYzNiwwLTQuOTQzLDEuMjQyLTUuNjc0LDQuMjE5Yy0wLjgyNiwzLjQxNy0wLjg2Myw1LjU1NywwLDkuMTI1QzUuODUxLDMyLjAwNSw3LjI5NCwzNCw5LjkzMSwzNGgzLjYzMnYtNS4xMDQgYzAtMi45NjYsMi42ODYtNS44OTYsNS43NjQtNS44OTZoNy4yMzZjMi41MjMsMCw1LTEuODYyLDUtNC4zNzd2LTguNTg2YzAtMi40MzktMS43NTktNC4yNjMtNC4yMTgtNC42NzIgQzI3LjQwNiw1LjM1OSwyNS41ODksNC45OTQsMjQuMDQ3LDV6IE0xOS4wNjMsOWMwLjgyMSwwLDEuNSwwLjY3NywxLjUsMS41MDJjMCwwLjgzMy0wLjY3OSwxLjQ5OC0xLjUsMS40OTggYy0wLjgzNywwLTEuNS0wLjY2NC0xLjUtMS40OThDMTcuNTYzLDkuNjgsMTguMjI2LDksMTkuMDYzLDl6Ij48L3BhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJnb3FmdTFaTm1FblVyUURKRVExYlViX2w3NU9FVUprUEFrNF9ncjIiIHgxPSIzNS4zMzQiIHgyPSIyMy41MTciIHkxPSIzNy45MTEiIHkyPSIyMS4wMzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZWI3MDUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmRhMWMiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjZ29xZnUxWk5tRW5VclFESkVRMWJVYl9sNzVPRVVKa1BBazRfZ3IyKSIgZD0iTTIzLjA3OCw0M2MxLjU1NS0wLjAwNSwyLjYzMy0wLjE0MiwzLjkzNi0wLjM2N2MzLjg0OC0wLjY3LDQuNTQ5LTIuMDc3LDQuNTQ5LTQuNjdWMzRoLTl2LTIgaDkuMzQzaDQuMzVjMi42MzYsMCw0Ljk0My0xLjI0Miw1LjY3NC00LjIxOWMwLjgyNi0zLjQxNywwLjg2My01LjU1NywwLTkuMTI1QzQxLjI3NCwxNS45OTUsMzkuODMxLDE0LDM3LjE5NCwxNGgtMy42MzJ2NS4xMDQgYzAsMi45NjYtMi42ODYsNS44OTYtNS43NjQsNS44OTZoLTcuMjM2Yy0yLjUyMywwLTUsMS44NjItNSw0LjM3N3Y4LjU4NmMwLDIuNDM5LDEuNzU5LDQuMjYzLDQuMjE4LDQuNjcyIEMxOS43MTksNDIuNjQxLDIxLjUzNiw0My4wMDYsMjMuMDc4LDQzeiBNMjguMDYzLDM5Yy0wLjgyMSwwLTEuNS0wLjY3Ny0xLjUtMS41MDJjMC0wLjgzMywwLjY3OS0xLjQ5OCwxLjUtMS40OTggYzAuODM3LDAsMS41LDAuNjY0LDEuNSwxLjQ5OEMyOS41NjMsMzguMzIsMjguODk5LDM5LDI4LjA2MywzOXoiPjwvcGF0aD4KPC9zdmc+"
            />
          </p>
        </div>
      </div>
      {/* FrameWork, Library & Markups */}
      <div className="mt-14 text-5xl text-center font-sans">
        <div className="text-2xl lg:text-5xl flex justify-center">
          <p className="text-emerald-400">Others:</p>
          {/* HTML */}
          <p className="px-4 text-orange-400">
            <FaHtml5 />
          </p>
          {/* CSS */}
          <p className="px-4 text-blue-400">
            <DiCss3 />
          </p>
          {/* TailwindCSS */}
          <span className="px-4 text-sky-300">
            <RiTailwindCssFill />
          </span>
          {/* BootStrap */}
          <p className="px-4">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiM3YzRkZmYiIGQ9Ik03LjM3MywxMS40NDNDNy4yOTMsOS4xMzIsOS4wOTQsNywxMS41MjksN2gyNC45NDZjMi40MzUsMCw0LjIzNiwyLjEzMiw0LjE1NSw0LjQ0MwljLTAuMDc3LDIuMjIxLDAuMDIzLDUuMDk3LDAuNzQ3LDcuNDQzYzAuNzI2LDIuMzUzLDEuOTUxLDMuODQsMy45NTcsNC4wMzF2Mi4xNjdjLTIuMDA2LDAuMTkxLTMuMjMsMS42NzgtMy45NTcsNC4wMzEJYy0wLjcyNCwyLjM0NS0wLjgyNCw1LjIyMi0wLjc0Nyw3LjQ0M0M0MC43MSwzOC44NjgsMzguOTA5LDQxLDM2LjQ3NSw0MUgxMS41MjljLTIuNDM0LDAtNC4yMzYtMi4xMzItNC4xNTUtNC40NDMJYzAuMDc3LTIuMjIxLTAuMDIzLTUuMDk3LTAuNzQ3LTcuNDQzYy0wLjcyNi0yLjM1My0xLjk1NC0zLjg0LTMuOTYtNC4wMzF2LTIuMTY3YzIuMDA2LTAuMTkxLDMuMjMzLTEuNjc4LDMuOTYtNC4wMzEJQzcuMzUsMTYuNTQsNy40NTEsMTMuNjY0LDcuMzczLDExLjQ0M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjcuMDczLDIzLjQ2NHYtMC4wMjhjMS44NTMtMC4zMiwzLjI5OS0yLjA1NywzLjI5OS0zLjk3YzAtMS4zNTItMC41Mi0yLjQ5OC0xLjUwNC0zLjMxMgljLTAuOTgxLTAuODEyLTIuMzU3LTEuMjQxLTMuOTgxLTEuMjQxSDE3LjQ1VjMzLjA4aDcuNDc1YzEuOTQyLDAsMy41NTUtMC40NzQsNC42NjMtMS4zNzJjMS4xMDktMC44OTksMS42OTYtMi4yMDcsMS42OTYtMy43ODMJQzMxLjI4MywyNS41NDQsMjkuNTkzLDIzLjc1NiwyNy4wNzMsMjMuNDY0eiBNMjMuNTksMjIuNjA4aC0zLjE4MVYxNy4yOWgzLjc4NGMyLjA3NiwwLDMuMjE5LDAuOTExLDMuMjE5LDIuNTY1CUMyNy40MTMsMjEuNjMsMjYuMDU1LDIyLjYwOCwyMy41OSwyMi42MDh6IE0yMC40MDksMjQuODM0aDMuNzU5YzIuNzE2LDAsNC4wOTIsMC45ODEsNC4wOTIsMi45MTZjMCwxLjkzMi0xLjM1NywyLjk1My0zLjkyNSwyLjk1MwloLTMuOTI2VjI0LjgzNHoiPjwvcGF0aD4KPC9zdmc+"
            />
          </p>
          {/* Firebase */}
          <p className="px-4">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmZjhmMDAiIGQ9Ik04LDM3TDIzLjIzNCw4LjQzNmMwLjMyMS0wLjYwMiwxLjE4OS0wLjU5MSwxLjQ5NCwwLjAyTDMwLDE5TDgsMzd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmYTAwMCIgZD0iTTgsMzYuOTkybDUuNTQ2LTM0LjE5OWMwLjE0NS0wLjg5NSwxLjM0Ny0xLjA4OSwxLjc2Ny0wLjI4NUwyNiwyMi45OTJMOCwzNi45OTJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmNmYwMCIgZD0iTTguMDA4IDM2Ljk4Nkw4LjIwOCAzNi44MjkgMjUuNzM3IDIyLjQ4OCAyMC43OTMgMTMuMDEyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmM0MDAiIGQ9Ik04LDM3bDI2LjY2Ni0yNS43MTNjMC41NTktMC41MzksMS40OTItMC4yMjEsMS42MDYsMC41NDdMNDAsMzdsLTE1LDguNzQzIGMtMC42MDksMC4zNDItMS4zNTIsMC4zNDItMS45NjEsMEw4LDM3eiI+PC9wYXRoPgo8L3N2Zz4="
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
