import BaseView from "../BaseView";
import Header from "../../templates/common/Header";
import Footer from "../../templates/common/Footer";
import Team from "../../templates/team/Team";

export default function IndexView() {
  return (
    <BaseView>
      <Header
        fontColor="text-black"
        position="relative"
        hum={true}
        humFontColor="text-black"
      />
      <Team />
      <Footer />
    </BaseView>
  );
}
