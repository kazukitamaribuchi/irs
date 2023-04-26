import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import DrawerHumMenuElement from "../../elements/DrawerHumMenuElement";
import getItem from "../../elements/DrawerHumMenuElement";
import { DrawerMenuItemConst } from "../../../const/drawerMenuItems";
import { MdHomeRepairService } from "react-icons/md";
import Link from "next/link";
import SubMenu from "antd/lib/menu/SubMenu";

export default function DrawerHumMenuItem() {
  const { t } = useTranslation();
  type MenuItem = Required<MenuProps>["items"][number];

  // const items: MenuItem[] = [];
  // for (const obj of DrawerMenuItemConst.ITEMS) {
  //   let child = [];

  //   items.push(
  //     DrawerHumMenuElement(
  //       t(`header.navigation.${obj.name}`),
  //       obj.key,
  //       obj.icon,
  //       [],
  //       "group"
  //     )
  //   );
  // }

  // const items: MenuItem[] = [
  //   DrawerHumMenuElement(
  //     t("header.navigation.Services"),
  //     1,
  //     <MdHomeRepairService />,
  //     [
  //       DrawerHumMenuElement(
  //         "Item 1",
  //         null,
  //         null,
  //         [DrawerHumMenuElement("Option 1", "1"), getItem("Option 2", "2")],
  //         "group"
  //       ),
  //       DrawerHumMenuElement(
  //         "Item 2",
  //         null,
  //         null,
  //         [
  //           DrawerHumMenuElement("Option 3", "3"),
  //           DrawerHumMenuElement("Option 4", "4"),
  //         ],
  //         "group"
  //       ),
  //     ]
  //   ),

  //   DrawerHumMenuElement(t("header.navigation.Team"), 2, <AppstoreOutlined />, [
  //     DrawerHumMenuElement("Option 5", "5"),
  //     DrawerHumMenuElement("Option 6", "6"),
  //     DrawerHumMenuElement("Submenu", "sub3", null, [
  //       DrawerHumMenuElement("Option 7", "7"),
  //       DrawerHumMenuElement("Option 8", "8"),
  //     ]),
  //   ]),

  //   DrawerHumMenuElement(t("header.navigation.Team"), 3, <SettingOutlined />, [
  //     DrawerHumMenuElement("Option 9", "9"),
  //     DrawerHumMenuElement("Option 10", "10"),
  //     DrawerHumMenuElement("Option 11", "11"),
  //     DrawerHumMenuElement("Option 12", "12"),
  //   ]),
  // ];

  // const onClick: MenuProps["onClick"] = (e) => {
  //   console.log("click", e);
  // };

  return (
    <>
      {/* <Menu mode="vertical"> */}
      {/* <SubMenu
          key="services"
          title={t("header.navigation.Services")}
          icon={<MdHomeRepairService />}
        >
          <Menu.Item key="sub1">
            <Link href="/sub1">Sub Menu 1</Link>
          </Menu.Item>
          <Menu.Item key="sub2">
            <Link href="/sub2">Sub Menu 2</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/team" icon={<MdHomeRepairService />}>
          <Link href="/team">{t("header.navigation.Team")}</Link>
        </Menu.Item>
        <Menu.Item key="/aboutus" icon={<MdHomeRepairService />}>
          <Link href="/aboutus">{t("header.navigation.Aboutus")}</Link>
        </Menu.Item>
        <Menu.Item key="/recriut" icon={<MdHomeRepairService />}>
          <Link href="/recriut">{t("header.navigation.Recruit")}</Link>
        </Menu.Item>
        <Menu.Item key="/contact" icon={<MdHomeRepairService />}>
          <Link href="/contact">{t("header.navigation.Contact")}</Link>
        </Menu.Item> */}
      {/* </Menu> */}
    </>
  );
}
