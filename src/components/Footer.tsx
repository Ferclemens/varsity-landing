import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full h-20 p-4">
      <div className="flex flex-col-reverse justify-between py-6 gap-4 md:pb-4 md:pt-6 md:flex-row sm:px-10 items-center border-t text-xs text-slate-500 dark:text-slate-200">
        <p className="text-center">
          {t("footerDetail")}{" "}
          <a href="https://www.linkedin.com/in/foclemens/" target="_blank">
            Fer Clemens
          </a>
        </p>
        <div className="flex gap-5 lg:pr-48">
          <a href="https://www.facebook.com/VarsityRaptor/" target="_blank">
            <img
              src="./facebook.png"
              alt="Facebook logo"
              className="w-8 h-8 hover:w-9 hover:h-9 transition-all"
            />
          </a>
          <a href="https://www.instagram.com/varsityraptor/" target="_blank">
            <img
              src="./instagram.png"
              alt="Instagram logo"
              className="w-8 h-8 hover:w-9 hover:h-9 transition-all"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=543624633517&text="
            target="_blank"
          >
            <img
              src="./whatsapp.png"
              alt="Whatsapp logo"
              className="w-8 h-8 hover:w-9 hover:h-9 transition-all"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
