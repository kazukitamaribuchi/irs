import BaseView from "./BaseView";
import Header from "../templates/common/Header";
import Sidebar from "../templates/index/Sidebar";
import Footer from "../templates/common/Footer";

export default function ContactView() {
  return (
    <BaseView>
      {/* <div className="relative h-[112px]">
        <Header fontColor="text-gray-900" />
      </div> */}
      <div>contact</div>
      <Footer />
    </BaseView>
  );
}
