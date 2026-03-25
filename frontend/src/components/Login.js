import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <p style={styles.subtitle}>Enter your credentials to continue</p>

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={styles.options}>
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span style={styles.link}>Forgot password?</span>
        </div>

        <button style={styles.button} onClick={login}>
          Login
        </button>

        <p style={styles.footer}>
          Don't have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/register")}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#a1b4d9",
  },
  card: {
    background: "#15d4e1",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "5px",
  },
  subtitle: {
    marginBottom: "20px",
    color: "#6b7280",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    outline: "none",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  footer: {
    marginTop: "15px",
    fontSize: "13px",
  },
  link: {
    color: "#2563eb",
    cursor: "pointer",
    fontWeight: "500",
  },
};