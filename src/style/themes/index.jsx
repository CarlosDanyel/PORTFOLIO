import { useCallback, useEffect } from "react";

const Darkmode = () => {
  const toggleDarkMode = useCallback(() => {
    const htmlElement = document.querySelector("html");
    htmlElement?.classList.toggle("dark");
    const isDarkMode = htmlElement?.classList.contains("dark");
    localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
  }, []);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    const htmlElement = document.querySelector("html");

    if (isDarkMode) {
      htmlElement?.classList.add("dark");
      document.querySelector("#darkModeToggle")?.setAttribute("checked", "checked");
    } else {
      htmlElement?.classList.remove("dark");
    }
  }, []);

  return (
    <div>
      <label className="switch">
        <input id="darkModeToggle" type="checkbox" onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Darkmode;