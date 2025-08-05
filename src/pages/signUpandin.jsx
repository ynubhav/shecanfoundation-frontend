import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Signway() {
  const [isUser, setisUser] = useState(true);
  const [isloading, setisloading] = useState(false);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setemail("");
    setname("");
    setpassword("");
    setphone("");
  }, [isUser]);

  const handlesignup = (e) => {
    e.preventDefault();
    if (!email || !name || !password || !phone) {
    toast.error("Please fill in all required fields.");
    return;
  }
    setisloading(true);
    axios
      .post("https://shecanfoundation-backend-p394.onrender.com/signup", {
        email: email,
        name: name,
        phone: phone,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.success('welcome to Dashboard')
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Make sure Your details are correct");
      })
      .finally(() => {
        setisloading(false);
      });
  };

  const handlesignin = (e) => {
    e.preventDefault();
    if (!email || !password ) {
    toast.error("Please fill in all required fields.");
    return;
  }
    setisloading(true);
    axios
      .put("https://shecanfoundation-backend-p394.onrender.com/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.success('welcome to Dashboard')
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Make sure Your details are correct");
      })
      .finally(() => {
        setisloading(false);
      });
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center">
        <div className="bg-black text-white font-semibold p-4 mt-4 mb-10 mx-2  rounded-2xl">
          {isUser ? (
            <form>
              <div className="p-1 text-2xl text-center flex justify-center m-2">
                SignIn
              </div>
              <div className="p-4 text-xl text-center flex justify-center text-gray-300">
                Enter Your Details To Access Your Account
              </div>
              <div className="p-1 font-semibold flex">
                Email<div className="text-red-300">*</div>
              </div>
              <input
                className="w-full border-1 text-left px-2 py-2 border-white rounded-md"
                type="text"
                placeholder="user@email.com"
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <div className="p-1 font-semibold flex">
                Password<div className="text-red-300">*</div>
              </div>
              <input
                className="w-full border-1 text-left px-2 py-2 border-white rounded-md"
                type="password"
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <button
                onClick={handlesignin}
                className="w-full p-2 mt-2 rounded-md bg-red-500 hover:bg-red-700 hover:cursor-pointer"
              >
                {!isloading ? (
                  <div>SignIn !</div>
                ) : (
                  <div role="status" className="flex justify-center">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              </button>
              <div className="p-1 font-semibold">
                {"Not A User? "}
                <span
                  onClick={() => {
                    setisUser((c) => !c);
                  }}
                  className="hover:cursor-pointer underline"
                >
                  {" "}
                  SignUp
                </span>
              </div>
            </form>
          ) : (
            <form>
              <div className="p-1 text-2xl text-center flex justify-center">
                SignUp
              </div>
              <div className="p-4 text-xl text-center flex justify-center text-gray-300">
                Enter Your Details To Create Your Account
              </div>
              <div className="p-1 font-semibold flex">
                Email<div className="text-red-300">*</div>
              </div>
              <input
                className="w-full border-1 text-left px-2 py-2 border-white rounded-md"
                type="text"
                placeholder="user@email.com"
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <div className="p-1 font-semibold flex">
                Name<div className="text-red-300">*</div>
              </div>
              <input
                className="w-full border-1 text-left px-2 py-2 border-white rounded-md"
                type="text"
                placeholder="Your Name"
                required
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <div className="p-1 font-semibold flex">
                Phone no.<div className="text-red-300">*</div>
              </div>
              <div className="flex">
                <select className="bg-white text-black rounded-l-md flex">
                  <option>+91</option>
                  <option>+92</option>
                  <option>+93</option>
                  <option>+01</option>
                </select>
                <input
                  className="w-full border-1 text-left px-2 py-2 border-white rounded-r-md"
                  type="text"
                  placeholder="9876543210"
                  required
                  onChange={(e) => {
                    setphone(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div className="p-1 font-semibold flex">
                Password<div className="text-red-300">*</div>
              </div>
              <input
                className="w-full border-1 text-left px-2 py-2 border-white rounded-md"
                type="password"
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <button
                onClick={handlesignup}
                className="w-full p-2 mt-2 rounded-md bg-red-500 hover:bg-red-700 hover:cursor-pointer"
              >
                {!isloading ? (
                  <div>SignUp !</div>
                ) : (
                  <div role="status" className="flex justify-center">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              </button>
              <div className="p-1 font-semibold">
                {"Already A User? "}
                <span
                  onClick={() => {
                    setisUser((c) => !c);
                  }}
                  className="hover:cursor-pointer underline"
                >
                  {" "}
                  SignIn
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
