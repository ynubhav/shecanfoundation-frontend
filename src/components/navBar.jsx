import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";

export default function Navbar() {
  const [isLoggedin, setloggedin] = useState(true);
  const [change, setchange] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const split = token.startsWith("Bearer");
      if (!split) setloggedin(false);
    } catch (err) {
      setloggedin((c) => !c);
    }
  }, [change]);

  const navigate = useNavigate();

  const handlelogout = () => {
    setchange((c) => !c);
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      localStorage.removeItem("token");
      navigate("/signway"); // or wherever your login page is
    }
  };
  const handlelogin = () => {
    setchange((c) => !c);
    navigate("/signway"); // or wherever your login page is
  };
  const handleleadboard = async () => {
    setchange((c) => !c);
    navigate("/leaderboard");
  };
  const handledashboard = async () => {
    setchange((c) => !c);
    navigate("/dashboard");
  };
  return (
    <div className="fixed top-0 right-0 left-0 px-8 py-4 bg-black text-white font-semibold grid grid-cols-2  border-b-1 border-b-white items-center">
      <div className="text-2xl">SheCanFoundation</div>
      {isMobile ? (
        <button
          onClick={() => setOpen(!open)}
          className="text-white flex justify-end"
        >
          {/* Hamburger SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {open && (
            <div className="absolute right-5 top-10 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
              <div
                onClick={handledashboard}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Dashboard
              </div>
              <div
                onClick={handleleadboard}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Leaderboard
              </div>
              {!isLoggedin ? (
                <div
                  onClick={() => navigate("/signway")}
                  className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                >
                  Login
                </div>
              ) : (
                <div
                  onClick={handlelogout}
                  className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </div>
              )}
            </div>
          )}
        </button>
      ) : (
        <div className="flex gap-6 justify-end justify-items-end font-semibold ">
          <div className=" text-center hover:cursor-pointer">About</div>
          <div className=" text-center hover:cursor-pointer w-max">
            Our Story
          </div>
          <div
            onClick={handledashboard}
            className=" hover:cursor-pointer text-center"
          >
            Dashboard
          </div>
          <div
            onClick={handleleadboard}
            className=" hover:cursor-pointer text-center"
          >
            Leaderboard
          </div>
          {!isLoggedin ? (
            <div
              onClick={handlelogin}
              className=" hover:cursor-pointer text-center"
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          ) : (
            <div
              onClick={handlelogout}
              className="hover:cursor-pointer text-center"
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
