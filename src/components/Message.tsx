import { CSSProperties } from "react";

const Message: React.FC = () => {
  return (
    <div style={messageStyles.container}>
      <h2 style={messageStyles.title}>YAY!!! 💘🥰</h2>
      <p style={messageStyles.text}>
        You just made this the best Valentine’s Day ever 🌹
      </p>
      <Confetti />
    </div>
  );
};

const messageStyles: Record<string, CSSProperties> = {
  container: {
    marginTop: "1.5rem",
  },
  title: {
    fontSize: "2rem",
    color: "#ff4d6d",
  },
  text: {
    fontSize: "1.1rem",
    marginTop: "0.5rem",
  },
};

export default Message;
