import { useScroll, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

export default function OurPolicyBottom() {
  // const { ref, inView } = useInView();

  const containerRef = useRef<HTMLDivElement>(null!);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    default: {
      immediate: true,
    },
  });

  console.log(scrollYProgress);
  console.log(scrollYProgress.to);

  return (
    <div ref={containerRef} className="h-[1000px] px-24">
      <div className="text-5xl text-right pr-32 font-sans pt-12 mb-24">
        Meeting the Needs of Our Clients
      </div>
      <div>
        <div className="grid grid-cols-5 mt-10 mb-8">
          <div className="col-span-3 py-8 px-12">
            <h1 className="text-3xl mb-8">Custom Research</h1>
            <p className="text-lg">
              we specialize in custom research solutions that are tailored to
              meet the specific needs of our clients.
              <br />
              Our experienced researchers work closely with you to understand
              your unique research requirements and design a comprehensive
              research plan that provides the insights and data you need to
              succeed.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 my-8">
          <div className="col-span-3 col-start-1 py-8 px-12">
            <h1 className="text-4xl mb-8">Client-Centered Research</h1>
            <p className="text-lg">
              our research approach is centered around our clients. We
              prioritize your needs and work closely with you to understand your
              research objectives and design a research plan that meets your
              unique requirements.
              <br />
              Our experienced researchers provide expert guidance and support
              throughout the research process, ensuring that you receive the
              insights and data you need to make informed decisions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 my-8">
          <div className="col-span-3 col-start-1 py-8 px-12">
            <h1 className="text-3xl mb-8">
              Research Solutions for Your Business
            </h1>
            <p className="text-lg">
              we offer a range of research solutions that are specifically
              designed to help businesses succeed. Whether you need market
              research, customer research, or any other type of research, our
              team of experienced researchers can provide the insights and data
              you need to make informed decisions and achieve your goals.
              <br />
              We work closely with you to understand your unique requirements
              and develop a research plan that meets your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
