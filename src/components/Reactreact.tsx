import { useState, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

const Reactreact: React.FC = () => {
  const navigate = useNavigate();
  const [noStyle, setNoStyle] = useState<CSSProperties>({});

  const moveNoButton = (): void => {
    const padding = 100;

    const x =
      Math.random() * (window.innerWidth - padding * 2) -
      window.innerWidth / 2 +
      padding;

    const y =
      Math.random() * (window.innerHeight - padding * 2) -
      window.innerHeight / 2 +
      padding;

    setNoStyle({
      position: "fixed",
      transform: `translate(${x}px, ${y}px)`,
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Will you be my Valentine? 🌹</h1>
        <p style={styles.subtitle}>
          I promise snacks, laughs, and dramatic eye contact 💕
        </p>

        <div style={styles.buttons}>
          <button style={styles.yes} onClick={() => navigate("/yes")}>
            Yes 💖
          </button>

          <button
            style={{ ...styles.no, ...noStyle }}
            onMouseEnter={moveNoButton}
          >
            No 😏
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
    fontFamily: "sans-serif",
  },
  card: {
    background: "white",
    padding: "3rem",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "2.5rem",
  },
  subtitle: {
    margin: "1rem 0 2rem",
    color: "#555",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
  },
  yes: {
    padding: "0.8rem 2rem",
    fontSize: "1.2rem",
    backgroundColor: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  // no: {
  //   padding: "0.8rem 2rem",
  //   fontSize: "1.2rem",
  //   backgroundColor: "#adb5bd",
  //   color: "white",
  //   border: "none",
  //   borderRadius: "10px",
  //   cursor: "pointer",
  //   position: "fixed",
  //   transition: "transform 0.2s ease",
  //   zIndex: 1000,
  // },
  no: {
    padding: "0.8rem 2rem",
    fontSize: "1.2rem",
    backgroundColor: "#adb5bd",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
};

export default Reactreact;
