const logos = [
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
    alt: "Reactivar",
    img: "./cl-5.webp",
  },
  {
    alt: "SolTec",
    img: "./cl-6.webp",
  },
  {
    alt: "Resi-pack",
    img: "./cl-7.webp",
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
    alt: "M",
    img: "./cl-10.webp",
  },
  {
    alt: "Carniceria La Taba",
    img: "./cl-11.webp",
  },
  {
    alt: "AN Express reparaciones",
    img: "./cl-12.webp",
  },
];

export default function Clients() {
  return (
    <div className="bg-white py-24 sm:py-32" id="clients">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900 pb-12">
          Clientes que trabajan con nosotros
        </h2>
        <div className="flex flex-wrap p-4 gap-10 sm:gap-16 justify-center">
          {logos.map((item, index) => {
            return (
              <div key={index}>
                <img
                  className="col-span-2 h-16 w-36 sm:h-24 sm:w-44 object-contain lg:col-span-1"
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
