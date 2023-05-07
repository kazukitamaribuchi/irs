import { Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function SelectLanguage() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div>日本語</div>,
    },
    {
      key: "2",
      label: <div>English</div>,
      disabled: true,
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Space>
        Lang: en
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}
