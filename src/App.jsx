import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navBar";
import Dashboard from "./pages/dashBoard";
import Signway from "./pages/signUpandin";
import { Toaster } from 'sonner';
import Leaderboard from "./pages/leaderBoard";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Navbar />
          <div className="bg-gray-900 min-h-screen">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Routes>
                <Route path="/" element={<Signway />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signway" element={<Signway />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
              </Routes>
            </motion.div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
      <Toaster position="bottom-right" richColors theme="dark"/>
    </>
  );
}

export default App;
