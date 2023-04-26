import { useInView } from "react-intersection-observer";
import ViewAllServicesBtn from "../../elements/ViewAllServicesBtn";
import SidebarTitle from "../../parts/common/SidebarTitle";
import { CiMail } from "react-icons/ci";
import { GiSmartphone } from "react-icons/gi";
import { UtilsConst } from "../../../const/utils";
import { isMobile } from "react-device-detect";

export default function Contact() {
  const toTel = () => {
    if (isMobile) {
      window.location.href = `tel:${UtilsConst.CompanyTelNumber}`;
    }
  };

  const toContactForm = () => {
    const url = UtilsConst.GoogleForm;
    window.open(url, "_blank");
  };

  return (
    <div id="contact" className="h-[400px] mt-20 mb-7">
      <div className="grid grid-cols-12">
        <div className="col-span-5 ml-20">
          <h1 className="text-8xl font-sans font-bold text-stone-700">
            Contact
          </h1>
          <h2 className="text-4xl font-sans text-slate-300 mt-32 leading-[3rem]">
            We welcome any <br />
            questions you may have <br />
            about our services.
          </h2>
        </div>
        <div
          onClick={toTel}
          className="col-span-3 border-l border-r hover:bg-slate-300 cursor-pointer duration-200 shadow-slate-300 shadow-sm"
        >
          <div className="bg-gray-900 p-8 rounded-full table mx-auto mt-28">
            <div className="text-white table-cell align-middle text-center">
              <GiSmartphone className="text-6xl" />
            </div>
          </div>
          <div className="text-center text-gray-700 mt-5">
            <p className="text-3xl text-gray-700 mt-5 font-medium">
              {UtilsConst.CompanyTelNumber}
            </p>
            <p className="text-xl text-gray-500 mt-2">Open 24 hours</p>
          </div>
        </div>
        <div
          onClick={toContactForm}
          className="col-span-3 hover:bg-slate-300 cursor-pointer duration-200 shadow-slate-300 shadow-sm"
        >
          <div className="bg-gray-900 p-8 rounded-full table mx-auto mt-28">
            <div className="text-white table-cell align-middle text-center">
              <CiMail className="text-6xl inline-block mt-2" />
            </div>
          </div>
          <div className="text-center text-3xl text-gray-700 mt-5 font-medium">
            Contact Form
          </div>
        </div>
        <div className="col-span-1 table">
          <div className="table-cell align-middle">
            <SidebarTitle title="04. Contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
