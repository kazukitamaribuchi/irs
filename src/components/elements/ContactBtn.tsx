import { UtilsConst } from "../../const/utils";

export default function ContactBtn() {
  return (
    <a
      href={UtilsConst.GoogleForm}
      target="_black"
      className="block text-white bg-[#192346] w-[180px] px-6 py-4 text-center z-[100] opacity-100 rounded-xl hover:bg-red-900 duration-300 hover:text-neutral-200 cursor-pointer"
    >
      Contact Us
    </a>
  );
}
