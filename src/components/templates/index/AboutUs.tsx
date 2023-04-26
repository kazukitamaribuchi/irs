import { useInView } from "react-intersection-observer";
import SidebarTitle from "../../parts/common/SidebarTitle";
import Image from "next/image";
import IrsLogoOnly from "components/elements/IrsLogoOnly";
import { HiArrowLongRight } from "react-icons/hi2";
import { SiGooglemaps } from "react-icons/si";

export default function AboutUs() {
  const { ref, inView } = useInView({
    rootMargin: "200px 0px",
    triggerOnce: false,
    threshold: 0.2,
  });

  // const stickyStile = inView ? "sticky top-[15%]" : "static mt-[50%]";
  const bgColor = inView
    ? "bg-gray-900 translate-y-0"
    : "bg-gray-0 translate-y-[-50px]";

  return (
    <div id="aboutus" ref={ref} className="my-44 relative">
      <div className="w-[1300px] h-[650px] mx-auto">
        <div className="overflow-hidden h-full w-full rounded-3xl">
          {/* src={require("public/movies/movie7.mov")} */}
          {/* src={require("https://inter-tech-security.s3.ap-northeast-1.amazonaws.com/movie7.mov")} */}
          {/* src="https://inter-tech-security.s3.ap-northeast-1.amazonaws.com/movie7.mov" */}
          <video
            className="-z-[1] object-fill"
            src="https://res.cloudinary.com/drv9u4rwb/video/upload/v1682427073/movie7_AdobeExpress_wceuw5.mp4"
            autoPlay
            muted
            loop
          />
          {/* <div className="z-[1] h-full w-full bg-slate-200/20 absolute top-0 rounded-3xl"></div> */}
        </div>
        <div className="z-[2] grid grid-cols-5 h-full rounded-3xl absolute top-0 text-white">
          <div className="col-span-2 h-full rounded-tl-3xl rounded-bl-3xl">
            <div className="grid grid-cols-5 h-full items-center">
              <div className="col-span-1">
                <SidebarTitle title="02. About us" />
              </div>
              <div className="col-start-2 col-span-4 grid-flow-col gap-4">
                <div className="text-6xl text-center">About us</div>
              </div>
            </div>
          </div>
          <div className="h-[100%] col-span-3">
            <div className="divide-y divide-gray-200">
              <div className="h-full w-[80%] mx-auto py-12 px-12 mt-40">
                <p className="inline-block">
                  <IrsLogoOnly height={45} width={45} />
                </p>
                <div className="">
                  <div className="text-3xl font-serif tracking-wide pb-8">
                    Intelligence Research Service Inc.
                  </div>
                  <div className="text-base font-sans mt-20">
                    <p>
                      2-2-15
                      <br />
                      Minamiaoyama, Minato-ku, Tokyo-to
                      <br />
                      107-0062 Japan
                      <br />
                    </p>
                    <SiGooglemaps className="cursor-pointer text-3xl mt-3" />
                  </div>
                </div>
                <div className="flex float-right">
                  <div className="w-[3rem] h-[3rem] flex border justify-center items-center rounded-full">
                    <p className="text-white text-xl">
                      <HiArrowLongRight />
                    </p>
                  </div>
                  <div className="self-end font-sans ml-4 text-lg font-bold">
                    To About US
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
