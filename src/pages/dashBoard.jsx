import { useState } from "react";
import Progress from "../components/progressBar";
import Achievments from "../components/achievmentcard";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { hover, motion } from "framer-motion";

export default function Dashboard() {
  const [userdetails, setuserdetails] = useState({});
  const [name, setname] = useState("User");
  const [raisedamount, setraised] = useState(0);
  const [refcode, setrefcode] = useState("SHE2025");
  const [Loading, setloading] = useState(true);
  const navigate = useNavigate();
  // get the user details
  useEffect(() => {
    axios
      .get("https://shecanfoundation-backend-p394.onrender.com/me", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const data = response.data.me;
        setuserdetails(data);
        setname(data.name);
        setrefcode(data.referralcode);
        setraised(data.amountraised);

        console.log(data);
        setloading(false);
      })
      .catch((err) => {
        navigate("/signway");
        toast.error("error loading the user informations");
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  return (
    <div className="text-white min-h-screen bg-black p-10 py-6 space-y-6">
      {/* Header */}
      <div
        className="text-center items-center rounded-md p-4 shadow-lg"
        style={{
          background:
            "linear-gradient(47deg, rgba(63,144,251,1) 0%, rgba(252,70,107,1) 100%)",
        }}
      >
        <h1 className="text-3xl font-bold">Intern Dashboard</h1>
        <p className="text-sm pt-4">Intern dashboard to track tasks, funds raised, referral code, and progress in one place.</p>
      </div>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Intro Section */}
        {!Loading ? (
          <>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center">
              {/* Profile Image */}
              <div className="flex justify-center md:justify-start">
                <img
                  src="putin.png"
                  className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-full border-2 border-white object-cover"
                  alt="profile"
                />
              </div>

              {/* Welcome Text */}
              <div className="text-center md:text-left text-xl font-semibold">
                Welcome back, {name}
              </div>

              {/* Referral Code */}
              <div className="flex items-center border border-white rounded-md overflow-hidden w-max mx-auto md:ml-auto">
                <p className="px-3 py-2 border-r border-white text-sm md:text-base">
                  REFERRAL CODE
                </p>
                <code className="px-3 py-2 bg-gray-700 border-r border-white text-sm md:text-base">
                  {refcode}
                </code>
                <button
                  className="px-3 py-2 hover:bg-red-900 text-sm md:text-base hover:cursor-pointer"
                  onClick={async () => {
                    await navigator.clipboard.writeText(refcode);
                    toast.success("copied refferal code to clipboard");
                  }}
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
                      d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Donation Stats */}
            <div className="border border-white rounded-lg p-4 hover:bg-[linear-gradient(47deg,_rgba(30,70,130,1)_0%,_rgba(130,30,50,1)_100%)] transition"
            >
              <p className="text-2xl font-semibold mb-2 flex items-center">
                You have Raised Amount:
                <span className="ml-2 px-2 py-1 bg-lime-700 rounded-md text-white hover:bg-black transition cursor-pointer flex w-max items-center gap-1">
                  Rs. {raisedamount}
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
                      d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                    />
                  </svg>
                </span>
              </p>
              <div className="mt-4">
                <p className="text-xl font-bold mb-1">Badges</p>
                <ul className="list-disc list-inside space-y-1 text-md">
                  <li>You are in the top 2% of Interns</li>
                  <li>You are in the top 2% of Interns</li>
                  <li>You are in the top 2% of Interns</li>
                  <li>You are in the top 2% of Interns</li>
                  <li>You are in the top 2% of Interns</li>
                </ul>
                <button className="text-pink-200 mt-2 hover:underline hover:text-pink-300">
                  Share &gt;
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid lg:grid-cols-2 gap-6 border-t border-white pt-6">
              {/* Progress Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">Progress</h2>
                <div className="space-y-3 border border-white rounded-md p-4">
                  <Progress value={85} label={"₹42,600 / ₹50,000"} />
                  <Progress value={26} label={"₹42,600 / ₹50,000"} />
                  <Progress value={75} label={"₹750 / 1000"} />
                  <Progress value={100} label={"₹100 / ₹100"} />
                </div>
              </div>

              {/* Achievements Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  Achievement Cards
                </h2>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  <Achievments
                    title={"Title"}
                    description={"THIS IS THE DESCRIPTION PART"}
                    unlocked={true}
                  />
                  <Achievments
                    title={"Title"}
                    description={"THIS IS THE DESCRIPTION PART"}
                    unlocked={true}
                  />
                  <Achievments
                    title={"Title"}
                    description={"THIS IS THE DESCRIPTION PART"}
                    unlocked={false}
                  />
                  <Achievments
                    title={"Title"}
                    description={"THIS IS THE DESCRIPTION PART"}
                    unlocked={false}
                  />
                  <Achievments
                    title={"Title"}
                    description={"THIS IS THE DESCRIPTION PART"}
                    unlocked={false}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div role="status" className="flex justify-center pt-4">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
