import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

function ThemeButton() {
  let themeSelected = document
    .querySelector("html")
    ?.classList.contains("dark");
  let defaultTheme = "";
  if (themeSelected) {
    defaultTheme = "dark";
  } else {
    defaultTheme = "light";
  }
  const [theme, setTheme] = useState(defaultTheme);

  function changeTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div>
      <button
        className="text-sm font-bold leading-6 text-gray-900 dark:text-gray-200 hover:text-blue-800 
        transition-colors border border-blue-300 rounded-sm p-1"
        onClick={() => changeTheme()}
      >
        {theme === "dark" ? (
          <SunIcon className="size-4" />
        ) : (
          <MoonIcon className="size-4" />
        )}
      </button>
    </div>
  );
}

export default ThemeButton;
