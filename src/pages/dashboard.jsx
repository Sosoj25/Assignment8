import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import "../styles/Landing.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/dashboard");
  const goFacilities = () => navigate("/Facilities");
  const goNews = () => navigate("/news");
  const goBooking = () => navigate("/booking");
  const goHistory = () => navigate("/history");

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="logo">SPORTSBOOKING</div>

        <nav className="nav">
          <button onClick={goHome}>Home</button>
          <button onClick={goFacilities}>Facilities</button>
          <button onClick={goNews}>News</button>
          <button onClick={goBooking}>จองสนามกีฬา</button>
          <button onClick={goHistory}>ประวัติการจอง</button>
        </nav>

        <button className="login-btn" onClick={handleLogout}>
          ออกจากระบบ
        </button>
      </header>

      {/* Hero */}
      <main className="hero">
        <div className="hero-card">
          <img
            src="/logo.png"
            alt="logo"
            className="hero-logo"
          />

          <h1>ยินดีต้อนรับสู่ระบบจองสนามกีฬา</h1>
          <p>SPORTSBOOKING.com</p>

          <button className="cta-btn" onClick={goBooking}>
            จองสนามตอนนี้
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
