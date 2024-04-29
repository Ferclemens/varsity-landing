import i18n from "i18next";
import LanguageDetecor from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetecor)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "es",
    resources: {
      es: {
        translation: {
          navigationServices: "Servicios",
          navigationAbout: "Nosotros",
          navigationCustomers: "Cliente",
          navigationContact: "Contacto",
          heroSlogan: "Da ese impulso que tu marca necesita",
          heroSloganDetail:
            "Creamos el plan de contenidos que mejor se adapte a tu comercio para incrementar tu presencia digital y aumentar tus ventas.",
          heroContactButton: "Contactanos",
          heroMoreButton: "Saber más",
        },
      },
      en: {
        translation: {
          navigationServices: "Services",
          navigationAbout: "About",
          navigationCustomers: "Customers",
          navigationContact: "Contact",
          heroSlogan: "Give that boost that your brand needs",
          heroSloganDetail:
            "We create the content plan that best suits your business to increase your digital presence and increase your sales.",
          heroContactButton: "Contact us",
          heroMoreButton: "Know more",
        },
      },
    },
  });
