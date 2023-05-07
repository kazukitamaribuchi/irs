import BaseView from "../../BaseView";
import Header from "../../../templates/common/Header";
import Footer from "../../../templates/common/Footer";
import AllServices from "../../../templates/services/AllServices";

export default function IndexView() {
  return (
    <BaseView>
      <Header
        fontColor="text-black"
        position="relative"
        hum={true}
        humFontColor="text-black"
      />
      <AllServices />
      <Footer />
    </BaseView>
  );
}
