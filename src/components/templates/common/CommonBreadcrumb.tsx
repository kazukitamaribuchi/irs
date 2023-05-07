import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

interface Props {
  items: ItemType[];
}

export default function CommonBreadcrumb({ items = [] }: Props) {
  return <Breadcrumb items={items} className="pl-20 mt-2"></Breadcrumb>;
}
