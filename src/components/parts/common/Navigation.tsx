import { Menu, MenuProps, Space } from "antd";
import Link from "next/link";
import { t } from "i18next";
import { Link as Scroll } from "react-scroll";
import { UtilsConst } from "../../../const/utils";
import React from "react";
import {
  RiTeamLine,
  RiBuildingLine,
  RiBriefcase3Line,
  RiBriefcase3Fill,
  RiPhoneFill,
} from "react-icons/ri";
import { type } from "os";

interface Props {
  fontColor?: string;
}

const changeLang = (value: string) => {};

export default function Navigation({ fontColor = "text-white" }: Props) {
  const items: MenuProps["items"] = [
    {
      label: (
        <Scroll to="services" smooth={true} offset={-20}>
          {t("header.navigation.services.title")}
        </Scroll>
      ),
      key: "0",
      children: [
        {
          label: (
            <>
              <RiBriefcase3Line className="inline-block" /> <Space />
              <Link href="/services/all/">
                {t("header.navigation.services.allServices")}
              </Link>
            </>
          ),
          key: "0-1",
        },
        {
          type: "divider",
        },
        {
          label: (
            <>
              {/* <RiBriefcase3Fill className="inline-block" /> <Space /> */}
              Executive Protection Services
            </>
          ),
          key: "",
        },
        {
          label: (
            <>
              {/* <RiBriefcase3Fill className="inline-block" /> <Space /> */}
              Background Screening Services
            </>
          ),
          key: "",
        },
      ],
    },
    {
      label: (
        <Scroll to="ourpolicy" smooth={true}>
          {t("header.navigation.team.title")}
        </Scroll>
      ),
      key: "1",
      children: [
        {
          label: (
            <>
              <RiTeamLine className="inline-block" /> <Space />
              <Link href="/team/">{t("header.navigation.team.title")}</Link>
            </>
          ),
          key: "1-1",
        },
      ],
    },
    {
      label: (
        <Scroll to="aboutus" smooth={true} offset={-100}>
          {t("header.navigation.aboutus.title")}
        </Scroll>
      ),
      key: "2",
      children: [
        {
          label: (
            <>
              <RiBuildingLine className="inline-block" /> <Space />
              <Link href="/company/">
                {t("header.navigation.aboutus.company")}
              </Link>
            </>
          ),
          key: "2-1",
        },
      ],
    },
    {
      label: (
        <Scroll to="contact" smooth={true} offset={0}>
          <p className="text-red-600 font-bold">
            {t("header.navigation.contact.title")}
          </p>
        </Scroll>
      ),
      key: "3",
      children: [
        {
          label: (
            <>
              <RiPhoneFill className="inline-block" /> <Space />
              <a href={UtilsConst.GoogleForm} target="_black">
                Contact Form
              </a>
            </>
          ),
          key: "3-1",
        },
      ],
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        mode="horizontal"
        items={items}
        className={`font-sans font-bold ${fontColor}`}
        style={{
          background: "none",
          marginLeft: "41%",
          border: "none",
          fontSize: "16px",
        }}
      />
    </>
  );
}
