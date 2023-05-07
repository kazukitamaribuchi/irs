import CommonBreadcrumb from "../common/CommonBreadcrumb";
import { t } from "i18next";
import Link from "next/link";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import AllServicesCard from "../../parts/services/AllServicesCard";
import { ServicesConst } from "../../../const/services";
import { ReactNode } from "react";
import { RiHome8Line } from "react-icons/ri";
import { title } from "process";
import { Space } from "antd";

export default function AllServices() {
  const items: ItemType[] = [
    {
      title: (
        <>
          <RiHome8Line className="inline-block" /> <Space />
          <Link href="/">{t("breadcrumb.home")}</Link>
        </>
      ),
    },
    {
      title: t("breadcrumb.services"),
    },
    {
      title: t("breadcrumb.allServices"),
    },
  ];

  let allServicesItems: ReactNode[] = [];

  ServicesConst.AllServices.map((obj) => {
    console.log(obj);
    allServicesItems.push(<AllServicesCard index={obj.id} />);
  });

  return (
    <div className="h-[1000px]">
      <CommonBreadcrumb items={items} />
      <div className="px-16">
        <h1 className="text-5xl pl-12 mt-14 font-extrabold">All Services</h1>
        <div className="grid grid-cols-3 gap-14 mt-40">{allServicesItems}</div>
      </div>
    </div>
  );
}
