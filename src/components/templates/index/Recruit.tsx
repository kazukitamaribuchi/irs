import Image from "next/image";
import SidebarTitle from "../../parts/common/SidebarTitle";
import recruit from "pages/recruit";
import EntryBtn from "../../elements/EntryBtn";

export default function Recruit() {
  return (
    <div
      id="recruit"
      className="w-[full] my-32 h-[600px] border-t border-b bg-zinc-100"
    >
      <div className="h-full grid grid-cols-12">
        <div className="col-start-1 col-span-1 table">
          <div className="table-cell align-middle">
            <SidebarTitle title="03. Recruit" />
          </div>
        </div>
        <div className="col-span-5 h-full relative"></div>
        <div className="col-span-6 relative mr-32 py-20">
          <div className="text-right">
            <h1 className="text-4xl font-sans font-medium text-stone-700">
              Recruit
            </h1>
          </div>
          <div className="absolute bottom-20 right-0">
            <EntryBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
