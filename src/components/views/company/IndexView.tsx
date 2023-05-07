import BaseView from "../BaseView";
import Header from "../../templates/common/Header";
import Footer from "../../templates/common/Footer";
import Company from "../../templates/company/Company";

export default function IndexView() {
  return (
    <BaseView>
      <Header
        fontColor="text-black"
        position="relative"
        hum={true}
        humFontColor="text-black"
      />
      <Company />
      <Footer />
    </BaseView>
  );
}
