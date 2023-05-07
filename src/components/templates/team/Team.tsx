import CommonBreadcrumb from "../common/CommonBreadcrumb";
import { t } from "i18next";
import Link from "next/link";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

export default function AllServices() {
  const items: ItemType[] = [
    {
      title: <Link href="/">{t("breadcrumb.home")}</Link>,
    },
    {
      title: t("breadcrumb.team"),
    },
  ];

  return (
    <div className="h-[1000px]">
      <CommonBreadcrumb items={items} />
      <div className="px-16">
        <h1 className="text-5xl pl-12 mt-14 font-extrabold">Team</h1>
        <div className="grid grid-cols-3 gap-14 mt-40"></div>
      </div>
    </div>
  );
}
