import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const logos = [
  {
    alt: "SolTec",
    img: "./cl-6.webp",
  },
  {
    alt: "Resi-pack",
    img: "./cl-7.webp",
  },
  {
    alt: "Reactivar",
    img: "./cl-5.webp",
  },
  {
    alt: "Planeta Sport Gym",
    img: "./cl-8.webp",
  },
  {
    alt: "Carniceria Argentina",
    img: "./cl-9.webp",
  },
  {
    alt: "Estudio juridico Sinkovich - Siebold - López",
    img: "./cl-1.webp",
  },
  {
    alt: "Diego Coronel entrenador",
    img: "./cl-2.webp",
  },
  {
    alt: "Nazer Producciones",
    img: "./cl-3.webp",
  },
  {
    alt: "Luis M. Perez Diaz kinesiologia",
    img: "./cl-4.webp",
  },
  {
    alt: "M",
    img: "./cl-10.webp",
  },
  {
    alt: "AN Express reparaciones",
    img: "./cl-12.webp",
  },
  {
    alt: "Tri Nea turismo de pesca",
    img: "./cl-11.webp",
  },
];

export default function Clients() {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 py-20 sm:py-28" id="clients">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-center pb-20">
          {t("clientsTitle")}
        </h2>
        <div className="flex flex-wrap p-4 gap-10 sm:gap-16 justify-center">
          {logos.map((item, index) => {
            return (
              <div key={index} className="logo" id="img">
                <img
                  className="col-span-2 h-16 w-36 sm:h-24 sm:w-44 object-contain lg:col-span-1 opacity-60 dark:invert"
                  src={item.img}
                  alt={item.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
