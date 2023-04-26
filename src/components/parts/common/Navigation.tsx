import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { t } from "i18next";
import { Link as Scroll } from "react-scroll";

export default function Navigation() {
  const items: MenuProps["items"] = [
    {
      label: (
        <Scroll to="services" smooth={true} offset={-20}>
          {t("header.navigation.services.title")}
        </Scroll>
      ),
      key: "1",
      children: [
        {
          type: "group",
          label: t("header.navigation.services.allServices"),
          children: [
            {
              label: t("header.navigation.services.allServices"),
              key: "1-1",
            },
          ],
        },
        {
          type: "divider",
        },
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
      ],
    },
    {
      label: (
        <Scroll to="ourpolicy" smooth={true}>
          {t("header.navigation.team.title")}
        </Scroll>
      ),
      key: "2",
    },
    {
      label: (
        <Scroll to="aboutus" smooth={true} offset={-100}>
          {t("header.navigation.aboutus.title")}
        </Scroll>
      ),
      key: "3",
    },
    // {
    //   label: (
    //     <Scroll to="recruit" smooth={true}>
    //       {t("header.navigation.recruit.title")}
    //     </Scroll>
    //   ),
    //   key: "4",
    // },
    {
      label: (
        <Scroll to="contact" smooth={true} offset={0}>
          <p className="text-red-600 font-bold">
            {t("header.navigation.contact.title")}
          </p>
        </Scroll>
      ),
      key: "5",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      mode="horizontal"
      items={items}
      className="text-base"
      style={{
        background: "none",
        color: "white",
        marginLeft: "42%",
      }}
    />
  );
}
