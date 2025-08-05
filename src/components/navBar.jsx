import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function Navbar() {
  const [isLoggedin, setloggedin] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const split = token.startsWith("Bearer");
      if (!split) setloggedin(false);
    } catch (err) {
      setloggedin(false);
    }
  }, []);

  const navigate = useNavigate();

  const handlelogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    setloggedin(false);
    if (confirmed) {
      localStorage.removeItem("token");
      navigate("/signway"); // or wherever your login page is
    }
  };
  const handleleadboard = async () => {
    navigate("/leaderboard");
  };
  const handledashboard = async () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className="w-1/1 px-8 py-4 bg-black text-white font-semibold flex justify-between border-b-1 border-b-white">
        <div className="text-2xl">SheCanFoundation</div>
        <div className=" font-semibold flex justify-start">
          <div className="px-4 pt-1 hover:cursor-pointer">About</div>
          <div className="px-4 pt-1 hover:cursor-pointer">Our Story</div>
          <div
            onClick={handledashboard}
            className="px-4 pt-1 hover:cursor-pointer"
          >
            Dashboard
          </div>
          <div
            onClick={handleleadboard}
            className="px-4 pt-1 hover:cursor-pointer"
          >
            Leaderboard
          </div>
          {!isLoggedin ? (
            <div
              onClick={handlelogout}
              className="px-4 pt-1 hover:cursor-pointer"
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
              className="px-4 pt-1 hover:cursor-pointer"
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
      </div>
    </>
  );
}
