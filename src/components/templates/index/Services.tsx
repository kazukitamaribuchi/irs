import { useInView } from "react-intersection-observer";
import ViewAllServicesBtn from "../../elements/ViewAllServicesBtn";
import SidebarTitle from "../../parts/common/SidebarTitle";
import ServicesTop from "./services/ServicesTop";
import ServicesMiddle from "./services/ServicesMiddle";
import ServicesBottom from "./services/ServicesBottom";
import { useRef, useState } from "react";
import { intersectionObserver } from "hooks/intersectionObserver";

export default function Services() {
  const { ref, inView } = useInView({
    rootMargin: "200px 0px",
    triggerOnce: false,
    threshold: 0.2,
  });

  const [inMiddle, setInMiddle] = useState(false);

  const changeSideBgColor = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInMiddle(true);
      } else {
        setInMiddle(false);
      }
    });
  };

  const stickyStile =
    inView && !inMiddle ? "sticky top-[20%] opacity-1" : "relative opacity-0";
  // const bgColor = inView ? "bg-gray-900 translate-y-0" : "bg-gray-0 translate-y-[-50px]"

  let bgColor: string;
  bgColor =
    inView && !inMiddle
      ? "bg-gray-900 translate-y-0 pt-40"
      : "bg-gray-0 translate-y-[-50px] pt-40";

  const ref1 = useRef(null);
  const options = {
    rootMargin: "-50px",
  };
  intersectionObserver([ref1], changeSideBgColor, options);

  return (
    <div id="services" ref={ref} className="h-[1500px] bg-neutral-50">
      <div className="float-left h-[100%] w-[65%] px-6">
        <ServicesTop />
        <div ref={ref1}></div>
        {/* <ServicesMiddle ref={ref1} /> */}
        {/* <ServicesBottom /> */}
      </div>
      <div className={`float-right h-[100%] w-[35%] duration-[1s] ${bgColor}`}>
        <div
          className={`${stickyStile} float-right grid grid-cols-5 duration-[1s] w-full`}
        >
          <div className="col-start-1 col-span-4 grid-flow-col gap-4">
            <div className="table w-[100%]">
              <h1 className="py-28 table-cell align-middle text-5xl text-center text-white">
                Our Services.
              </h1>
            </div>
            <div className="">
              <ViewAllServicesBtn />
            </div>
          </div>
          <div className="col-start-5 col-span-1">
            <div className="relative top-[15rem]">
              <SidebarTitle title="01. Services" textwhite={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
