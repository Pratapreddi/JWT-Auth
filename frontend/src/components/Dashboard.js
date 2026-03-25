import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>✔️</div>

        <h2 style={styles.title}>Successfully</h2>
        <p style={styles.subtitle}>You are logged in successfully</p>

        <button style={styles.button} onClick={() => navigate("/")}>
          Continue
        </button>
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
    background: "#15d4e1",
  },
  card: {
    background: "#a1b4d9",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  icon: {
    fontSize: "40px",
    marginBottom: "15px",
    color: "#2563eb",
  },
  title: {
    marginBottom: "10px",
  },
  subtitle: {
    color: "#6b7280",
    fontSize: "14px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
  },
};