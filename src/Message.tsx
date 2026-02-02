import { CSSProperties } from "react";

const Message: React.FC = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>YAY!!! 💘🥰</h1>
      <p style={styles.text}>
        You just made this the best Valentine’s Day ever 🌹
      </p>
      <Confetti />
    </div>
  );
};

const Confetti: React.FC = () => {
  return (
    <div style={styles.confetti}>
      {Array.from({ length: 40 }).map((_, i) => (
        <span key={i} style={styles.heart}>💖</span>
      ))}
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: "3rem",
    color: "#ff4d6d",
  },
  text: {
    fontSize: "1.2rem",
    marginTop: "1rem",
  },
  confetti: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  heart: {
    fontSize: "1.5rem",
    margin: "0.3rem",
  },
};

export default Message;
