import BaseView from "./BaseView";
import Header from "../templates/common/Header";
import Sidebar from "../templates/index/Sidebar";
import Footer from "../templates/common/Footer";

export default function RecruitView() {
  return (
    <BaseView>
      <div className="relative h-[112px]">
        <Header fontColor="text-white" bgColor="bg-gray-900" />
        <Sidebar fixed={true} />
      </div>
      <div>recruit</div>
      <Footer />
    </BaseView>
  );
}
