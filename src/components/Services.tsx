import {
  ArrowPathIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const features = [
    {
      name: t("servicesFeaturename1"),
      description: t("serviceFeatureDescription1"),
      icon: LinkIcon,
    },
    {
      name: t("servicesFeaturename2"),
      description: t("serviceFeatureDescription2"),
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: t("servicesFeaturename3"),
      description: t("serviceFeatureDescription3"),
      icon: ArrowPathIcon,
    },
    {
      name: t("servicesFeaturename4"),
      description: t("serviceFeatureDescription4"),
      icon: GlobeAltIcon,
    },
  ];
  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            {t("servicesFirst")}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
            {t("servicesTitle")}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {t("servicesDescription")}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
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
