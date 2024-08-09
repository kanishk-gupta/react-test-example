import React, { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme => (theme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}

export default Theme;
