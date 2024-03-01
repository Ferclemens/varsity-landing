function Services() {
  const data = [
    {
      title: "Análisis de Negocio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Branding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Social Media",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-left py-12 pl-7">
        Servicios
      </h2>
      <div className="flex flex-col lg:flex-row bg-blue-950">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="m-10 px-6 py-5 text-gray-100 bg-gradient-to-br from-blue-900 to-slate-500 rounded-sm shadow-xl"
            >
              <h3 className="pb-6 font-bold tracking-wide text-3xl">
                {item.title}
              </h3>
              <p className="text-xl">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
