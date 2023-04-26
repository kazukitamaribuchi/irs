import { NavigationsConst } from "../../../const/navigations";
import Link from "next/link";
import IrsLogoOnly from "../../elements/IrsLogoOnly";
import ContactIndividualsBtn from "../../elements/ContactIndividualsBtn";
import ContactCorporateBtn from "../../elements/ContactCorporateBtn";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="h-[270px] py-8 mx-10 px-12 rounded-tl-3xl rounded-tr-3xl bg-stone-900 text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div className="">
            <h1 className="text-xl font-sans font-bold mt-5">
              Intelligence Research Service
            </h1>
            <h2></h2>
          </div>
        </div>
        <div className="col-span-4 row-span-4">
          <div className="grid grid-cols-2">
            {NavigationsConst.Navi.ITEMS.map((obj) => (
              <p className="font-sans text-xl mt-3 col-span-1" key={obj.slug}>
                {/* <Link href={obj.slug}>{obj.disp_name}</Link> */}
                {obj.disp_name}
              </p>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex gap-3 text-white mt-4 text-2xl">
            <FaFacebookSquare className="cursor-pointer" />
            {/* <SiTwitter className="cursor-pointer" /> */}
          </div>
        </div>
      </div>
      <div className="border-t mt-20 font-sans text-stone-500">
        <small>©2023 MORIKAWA All Rights Reserved.</small>
      </div>
    </footer>
  );
}
