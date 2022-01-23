import React from "react";

export default function Header() {
  const headerStyles = {
    backgroundColor: "rgba(0,0,0 ,0.4)",
    color: "#ff6a95",
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Feedback UI</h2>
      </div>
    </header>
  );
}
