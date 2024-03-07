import {
  ArrowPathIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Branding",
    description:
      "Potenciamos tu marca con identidad única y estrategias impactantes.",
    icon: LinkIcon,
  },
  {
    name: "Comunity Management",
    description:
      "Construimos y gestionamos comunidades en línea para maximizar tu alcance y compromiso.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Análisis de rendimientos",
    description:
      "Utilizamos datos detallados para identificar tendencias, mejorar estrategias y maximizar resultados.",
    icon: ArrowPathIcon,
  },
  {
    name: "Servicios web",
    description:
      "Creamos soluciones digitales personalizadas para tu éxito en línea.",
    icon: GlobeAltIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Crece rápido 🚀
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para hacer crecer tu empresa
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Armamos un plan de marketing que se ajuste a tus necesidades para
            tener una mayor presencia digital, afianzar clientes y aumentar
            ventas.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
