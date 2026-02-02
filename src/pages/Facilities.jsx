import { useNavigate } from "react-router-dom";
import "../styles/Facilities.css";

const Facilities = () => {
  const navigate = useNavigate();

  return (
    <div className="fac-page">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="logo">SPORTSBOOKING</div>

        <nav className="nav">
          <button onClick={() => navigate("/dashboard")}>Home</button>
          <button className="active">Facilities</button>
          <button onClick={() => navigate("/news")}>News</button>
          <button onClick={() => navigate("/booking")}>จองสนามกีฬา</button>
          <button onClick={() => navigate("/history")}>ประวัติการจอง</button>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section className="fac-hero">
        <div className="fac-hero-card">
          <span>SPB</span>
          <h1>FACILITIES</h1>
          <p>สิ่งอำนวยความสะดวกในการบริการ</p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="fac-body">
        <div className="fac-row">
          <div className="fac-text">
            <h3>SIDESBAR</h3>
            <p>
              ในสปอร์ตคลับของพวกเรามีโซนสิ่งอำนวยความสะดวกสบาย
              ยกตัวอย่างเช่นเป็นบาร์ SIDESBAR
            </p>
            <p>ตั้งอยู่ที่ โซนนั่งเล่นของพักผ่อน</p>
            <p>มีเมนูแนะนำอย่างเช่น Cocktail White Whiskey</p>
          </div>

          <img src="/bar.png" className="fac-img" />
        </div>

        <div className="fac-row reverse">
          <img src="/omakase.png" className="fac-img" />

          <div className="fac-text center">
            <h3>OMAKASE Restaurant Japan Import</h3>
            <p>
              ในสปอร์ตคลับของเราจะมีร้านอาหารญี่ปุ่นนำเข้ามา
              คือร้าน OMAKASE ที่นำเข้าวัตถุดิบจากญี่ปุ่นแท้ทุกวัน
            </p>
            <p>ตั้งอยู่ที่โซนชั้นในของห้องอาหาร</p>
            <p>มีเมนูแนะนำคือ Otoro Roll Uni Sauce</p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Facilities;
