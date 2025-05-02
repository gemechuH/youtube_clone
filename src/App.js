import React, {useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import Video from './pages/video/Video';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'


const App = () => {
  useEffect(() => {
    toast.info(
      <div>
        <h4 style={{ fontWeight: "bold", marginBottom: "5px" }}>🎉 Welcome vidtube!</h4>
        <p>
          This site was built by <h3>Gemechu Hunduma</h3>
        </p>
        <p>Enjoy more click more!</p>
      </div>,
      {
        position: "top-center",
        autoClose: 5000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "🚀",
      }
    );
  }, []);

  const [sidebar, setSidebar ] = useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        toastClassName="red-toast"
        limit={1}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App

