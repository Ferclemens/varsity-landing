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
          servicesFirst: "Crece rápido 🚀",
          servicesTitle: "Todo lo que necesitas para hacer crecer tu empresa",
          servicesDescription:
            "Armamos un plan de marketing que se ajuste a tus necesidades para tener una mayor presencia digital, afianzar clientes y aumentar ventas.",
          servicesFeaturename1: "Branding",
          serviceFeatureDescription1:
            "Potenciamos tu marca con identidad única y estrategias impactantes.",
          servicesFeaturename2: "Comunity Management",
          serviceFeatureDescription2:
            "Construimos y gestionamos comunidades en línea para maximizar tu alcance y compromiso.",
          servicesFeaturename3: "Análisis de Rendimientos",
          serviceFeatureDescription3:
            "Utilizamos datos detallados para identificar tendencias, mejorar estrategias y maximizar resultados.",
          servicesFeaturename4: "Servicios Web",
          serviceFeatureDescription4:
            "Creamos soluciones digitales personalizadas para tu éxito en línea.",
          aboutTitle: "Trabaja con nosotros",
          aboutDescription1:
            " Somos un equipo conformado por profesionales en distintas areas que se mantien enfocado en lograr que tu empresa alcance los objetivos propuestos y se posicione como lider en su segmento.",
          aboutDescription2:
            "Proponemos un plan de acción que se ajusta a las necesidades de cada uno de nuestros clientes.",
          aboutStep1: "Análisis",
          aboutStep2: "Planificación",
          aboutStep3: "Plan de acción",
          aboutStep4: "Seguimiento",
          clientsTitle: "Marcas que confiaron en nosotros",
          contactTitle: "Contactanos",
          contactDescription: "Respondemos todas tus consultas.",
          contactFormLabel1: "Nombre",
          contactFormLabel2: "Empresa",
          contactFormLabel3: "Email",
          contactFormLabel4: "Teléfono",
          contactFormLabel5: "Mensaje",
          contactButton: "Enviar",
          footer:
            "2024 Varsity Raptor, Todos los derechos reservados. | Desarrollado por Fer Clemens",
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
          servicesFirst: "Grow fast 🚀",
          servicesTitle: "Everything you need to grow your business",
          servicesDescription:
            "We put together a marketing plan that fits your needs to have a greater digital presence, strengthen clients and increase sales.",
          servicesFeaturename1: "Branding",
          serviceFeatureDescription1:
            "We enhance your brand with unique identity and impactful strategies.",
          servicesFeaturename2: "Comunity Management",
          serviceFeatureDescription2:
            "We build and manage online communities to maximize your reach and engagement.",
          servicesFeaturename3: "Performance Analysis",
          serviceFeatureDescription3:
            "We use detailed data to identify trends, improve strategies and maximize results.",
          servicesFeaturename4: "Web services",
          serviceFeatureDescription4:
            "We create customized digital solutions for your online success.",
          aboutTitle: "Work with us",
          aboutDescription1:
            "We are a team made up of professionals in different areas who remain focused on ensuring that your company achieves the proposed objectives and positions itself as a leader in its segment.",
          aboutDescription2:
            "We propose an action plan that adjusts to the needs of each of our clients.",
          aboutStep1: "Analysis",
          aboutStep2: "Planning",
          aboutStep3: "Action plan",
          aboutStep4: "Follow-up",
          clientsTitle: "Brands that trusted us",
          contactTitle: "Contact us",
          contactDescription: "We answer all your queries.",
          contactFormLabel1: "Name",
          contactFormLabel2: "Company",
          contactFormLabel3: "Email",
          contactFormLabel4: "Phone",
          contactFormLabel5: "Message",
          contactButton: "Send",
          footer:
            "© 2024 Varsity Raptor, All rights reserved. | Developed by Fer Clemens",
        },
      },
    },
  });
