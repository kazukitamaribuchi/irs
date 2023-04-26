import BaseView from "./BaseView";
import Header from "../templates/common/Header";
import Sidebar from "../templates/index/Sidebar";
import Footer from "../templates/common/Footer";
import ServicesTop from "../templates/services/ServicesTop";

export default function ServicesView() {
  return (
    <BaseView>
      <div className="relative h-[112px]">
        <Header fontColor="text-black" />
        <Sidebar fixed={true} />
      </div>
      <ServicesTop />
      <Footer />
    </BaseView>
  );
}
