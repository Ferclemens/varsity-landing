import "@/index.css";

function About() {
  return (
    <section className="bg-">
      <h2 className="py-12 pl-7 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Acerca de Nosotros
      </h2>

      <div className="flex flex-col justify-center items-center gap-2 lg:flex-row">
        <div className="w-auto h-96">
          <img
            className="w-auto h-96 object-cover"
            src="./team.png"
            alt="Ilustración de marketing digital"
          />
        </div>
        <div className="max-w-lg py-14 lg:py-50">
          <h3 className="font-bold tracking-wide text-3xl px-4">
            Un equipo dedicado a ayudarte.
          </h3>
          <p className="text-xl text-left p-4 leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </section>
  );
}

export default About;
