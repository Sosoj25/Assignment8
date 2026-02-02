import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("เข้าสู่ระบบสำเร็จ");
      navigate("/dashboard"); // ✅ ไปหน้า dashboard
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      } else {
        alert("ไม่สามารถเข้าสู่ระบบได้");
        console.error(error);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>เข้าสู่ระบบ</h2>
        <p className="subtitle">กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ</p>

        <input
          type="email"
          placeholder="อีเมล"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="รหัสผ่าน"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          เข้าสู่ระบบ
        </button>

        <button
          className="register-btn"
          onClick={() => navigate("/register")}
        >
          สร้างบัญชี
        </button>

        <p className="forgot">
          คุณลืมรหัสผ่านใช่ไหม? <span>รีเซ็ตรหัสผ่าน</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
