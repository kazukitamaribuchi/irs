import BaseView from "./BaseView";
import Header from "../templates/common/Header";
import Sidebar from "../templates/index/Sidebar";
import Services from "../templates/index/Services";
import OurPolicy from "../templates/index/OurPolicy";
import AboutUs from "../templates/index/AboutUs";
import Contact from "../templates/index/Contact";
import Recruit from "../templates/index/Recruit";
import HeroHeaderMenu from "../templates/index/HeroHeaderMenu";
import HeroHeaderImage from "../templates/index/HeroHeaderImage";

import Footer from "../templates/common/Footer";
import FadeIn from "../animations/scroll/FadeIn";
import { useRef, useEffect } from "react";
import { useOffsetTop } from "hooks/useOffsetTop";

export default function IndexView() {
  const targetRef = useRef(null);
  const { pageOffsetTop, viewportTop } = useOffsetTop(targetRef);

  // console.log(pageOffsetTop, viewportTop);

  return (
    <BaseView title="index">
      <div ref={targetRef} className="relative">
        <Header />
        <Sidebar />
        <HeroHeaderImage />
        <HeroHeaderMenu />
      </div>
      <Services />
      <FadeIn>
        <OurPolicy />
      </FadeIn>
      <FadeIn>
        <AboutUs />
      </FadeIn>
      {/* <FadeIn>
        <Recruit />
      </FadeIn> */}
      <FadeIn>
        <Contact />
      </FadeIn>
      <Footer />
    </BaseView>
  );
}
