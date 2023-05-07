import { t } from "i18next";

interface Props {
  index: number;
}

export default function AllServicesCard({ index }: Props) {
  return (
    <div className="py-6 border-t border-gray-200">
      <h1 className="font-bold text-xl mb-14">
        {t(`services.allServicesCard.${index}.title`)}
      </h1>
      <p className="text-lg text-slate-500">
        {t(`services.allServicesCard.${index}.desc`)}
      </p>
    </div>
  );
}
