function Clients() {
  const data = [
    {
      alt: "Análisis de Negocio",
      img: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      alt: "Branding",
      img: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      alt: "Social Media",
      img: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center py-20">
        Clientes que confian en nosotros
      </h2>
      <div className="flex flex-col  lg:flex-row bg-blue-950">
        {data.map((item) => {
          return (
            <div className="m-10 px-6 py-5 text-gray-100 bg-gradient-to-br from-blue-900 to-slate-500 rounded-sm">
              <h3 className="pb-6 font-bold tracking-wide text-3xl">
                {item.alt}
              </h3>
              <p className="text-xl">{item.img}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Clients;
