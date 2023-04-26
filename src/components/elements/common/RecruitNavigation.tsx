import { Dropdown, MenuProps, Space } from "antd";
import { useTranslation } from "react-i18next";

export default function RecruitNavigation() {
  const { t } = useTranslation();

  const items: MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: t("header.navigation.Services"),
      children: [
        {
          key: "1-1",
          label: "1st menu item",
        },
        {
          key: "1-2",
          label: "2nd menu item",
        },
      ],
    },
    {
      key: "2",
      label: "sub menu",
      children: [
        {
          key: "2-1",
          label: "3rd menu item",
        },
        {
          key: "2-2",
          label: "4th menu item",
        },
      ],
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} placement="bottom">
        <a onClick={(e) => e.preventDefault()}>
          <Space>Recruit</Space>
        </a>
      </Dropdown>
    </>
  );
}
