import React from "react";

export default function ChatButton() {
  const buttonStyles = {
    container: {
      width: "fit-content",
      height: "fit-content",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    text: {
      backgroundColor: "#06b6d4", // Cyan-500
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "9999px",
      fontSize: "0.875rem",
      fontWeight: "500",
      whiteSpace: "nowrap",
    },
    button: {
      height: "3.5rem",
      width: "3.5rem",
      borderRadius: "9999px",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      border: "none",
      cursor: "pointer",
    },
    icon: {
      height: "1.5rem",
      width: "1.5rem",
      fill: "#06b6d4", // Cyan-500
    },
  };

  return (
    <div style={buttonStyles.container}>
      <div style={buttonStyles.text}>Let&apos;s have a chat</div>
      <button style={buttonStyles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={buttonStyles.icon}
        >
          <path
            d="M21 15a2 2 0 0 0-2-2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
