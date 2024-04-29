import { useState } from "react";
import { useTranslation } from "react-i18next";

function LangSwitch() {
  const [btnName, setBtnName] = useState("Ingles");
  const { i18n } = useTranslation();

  function changeLanguage() {
    let lang = localStorage.getItem("i18nextLng");
    if (lang === "es") {
      i18n.changeLanguage("en");
      setBtnName("Español");
    } else {
      i18n.changeLanguage("es");
      setBtnName("Ingles");
    }
  }
  return (
    <div>
      <button
        className="text-sm font-bold leading-6 text-gray-900 hover:text-blue-800 
        transition-colors text-shadow border border-blue-300 rounded-sm px-3"
        onClick={() => changeLanguage()}
      >
        {btnName}
      </button>
    </div>
  );
}

export default LangSwitch;
