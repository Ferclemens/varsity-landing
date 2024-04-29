import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const steps = [
    { name: t("aboutStep1") },
    { name: t("aboutStep2") },
    { name: t("aboutStep3") },
    { name: t("aboutStep4") },
  ];
  return (
    <div
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 parallax"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {t("aboutTitle")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t("aboutDescription1")}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t("aboutDescription2")}
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
