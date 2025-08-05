import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";

export default function Navbar() {
  const [isLoggedin, setloggedin] = useState(false);
  
  useEffect(() => {
    try
    {
    const token=localStorage.getItem("token");
    const split=token.startsWith('Bearer');
    if(!split)
      setloggedin(false);
    }
    catch(err){
      setloggedin(false);
    }
  }, []);
  

  const navigate = useNavigate();

  const handlelogout=()=>{
    const confirmed = window.confirm("Are you sure you want to log out?");
  if (confirmed) {
    localStorage.removeItem("token");
    navigate("/signway"); // or wherever your login page is
  }
  }
  const handleleadboard=async()=>{
    navigate('/leaderboard')
  }
  const handledashboard=async()=>{
    navigate('/dashboard')
  }
  return (
    <>
      <div className="w-1/1 px-8 py-4 bg-black text-white font-semibold flex justify-between border-b-1 border-b-white">
        <div className="text-2xl">SheCanFoundation</div>
        <div className=" font-semibold flex justify-start">
          <div className="px-4 pt-1 hover:cursor-pointer">About</div>
          <div className="px-4 pt-1 hover:cursor-pointer">Our Story</div>
          <div onClick={handledashboard} className="px-4 pt-1 hover:cursor-pointer">Dashboard</div>
          <div onClick={handleleadboard} className="px-4 pt-1 hover:cursor-pointer">Leaderboard</div>
          {!isLoggedin? (
            <div
              onClick={() => {
                navigate("/signway");
              }}
              className="px-4 pt-1 hover:cursor-pointer"
            >
              Login
            </div>
          ):(<div
              onClick={handlelogout}
              className="px-4 pt-1 hover:cursor-pointer"
            >
              Logout
            </div>)}
        </div>
      </div>
    </>
  );
}
