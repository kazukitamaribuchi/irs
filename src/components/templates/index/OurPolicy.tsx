import { useInView } from "react-intersection-observer";
import OurPolicyBottom from "./ourpolicy/OurPolicyBottom";
import OurPolicyMiddle from "./ourpolicy/OurPolicyMiddle";
import OurPolicyTop from "./ourpolicy/OurPolicyTop";

export default function OurPolicy() {
  const { ref, inView } = useInView({
    rootMargin: "200px 0px",
  });

  const bgStyle = inView ? "sticky top-0" : "static";

  return (
    <div id="ourpolicy" ref={ref} className={`h-[2000px] relative max-w-full`}>
      <div className={`-z-[1] ${bgStyle}`}>
        {/* src={require("public/movies/movie3.mov")} */}
        {/* src={require("https://inter-tech-security.s3.ap-northeast-1.amazonaws.com/movie3.mov")} */}
        {/* src="https://inter-tech-security.s3.ap-northeast-1.amazonaws.com/movie3.mov" */}
        <video
          src="https://res.cloudinary.com/drv9u4rwb/video/upload/v1682427078/movie3_AdobeExpress_hpvaga.mp4"
          autoPlay
          muted
          loop
          className="w-[100vw]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60">
        <OurPolicyTop />
        <OurPolicyMiddle />
        {/* <OurPolicyBottom /> */}
      </div>
    </div>
  );
}
