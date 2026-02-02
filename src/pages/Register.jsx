import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const userCredential =
        await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        role: "user",
      });

      alert("สมัครสมาชิกสำเร็จ");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("อีเมลนี้ถูกใช้งานแล้ว");
        navigate("/login");
      } else if (error.code === "auth/weak-password") {
        alert("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      } else {
        alert("เกิดข้อผิดพลาด");
        console.error(error);
      }
    }
  };

  return (
    <div className="register-page">
  
      {/* card */}
      <div className="register-card">
        <h2>สร้างบัญชีผู้ใช้</h2>
        <p className="subtitle">กรุณากรอกข้อมูลของคุณ</p>

        <input
          placeholder="ชื่อผู้ใช้"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="รหัสผ่าน"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="ยืนยันรหัสผ่าน"
        />

        <input
          type="email"
          placeholder="อีเมล"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleRegister}>สร้างบัญชี</button>

        <p className="login-link">
          คุณมีบัญชีอยู่แล้วใช่ไหม?{" "}
          <span onClick={() => navigate("/login")}>เข้าสู่ระบบ</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
