const steps = [
  { name: "Análisis" },
  { name: "Planificación" },
  { name: "Plan de acción" },
  { name: "Seguimiento" },
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 parallax">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Trabaja con nosotros
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Somos un equipo conformado por profesionales en distintas areas que
            se mantien enfocado en lograr que tu empresa alcance los objetivos
            propuestos y se posicione como lider en su segmento.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Proponemos un plan de acción que se ajusta a las necesidades de cada
            uno de nuestros clientes.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-16">
            {steps.map((step) => (
              <h4 key={step.name} className="text-xl">
                {step.name} <span aria-hidden="true">&rarr;</span>
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
