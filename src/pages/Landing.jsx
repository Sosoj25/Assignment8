import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="logo">SPORTSBOOKING</div>

        <nav className="nav">
          <button onClick={goLogin}>Home</button>
          <button onClick={goLogin}>Facilities</button>
          <button onClick={goLogin}>News</button>
          <button onClick={goLogin}>จองสนามกีฬา</button>
          <button onClick={goLogin}>ประวัติการจอง</button>
        </nav>

        <button className="login-btn" onClick={goLogin}>
          เข้าสู่ระบบ
        </button>
      </header>

      {/* Hero */}
      <main className="hero">
        <div className="hero-card">
          <img
            src="logo.png"
            alt="logo"
            className="hero-logo"
          />

          <h1>จองสนามกีฬาง่ายๆ กับเรา</h1>
          <p>SPORTSBOOKING.com</p>

          <button className="cta-btn" onClick={goLogin}>
            จองสนามตอนนี้
          </button>
        </div>
      </main>
    </div>
  );
};

export default Landing;
