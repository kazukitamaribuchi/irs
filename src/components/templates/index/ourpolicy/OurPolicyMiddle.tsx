import { useInView } from "react-intersection-observer";
import {
  useSpring,
  useSprings,
  animated,
  AnimatedComponent,
  WithAnimated,
} from "@react-spring/web";

export default function OurPolicyMiddle() {
  const { ref, inView } = useInView({});

  const props1 = useSpring({
    config: { mass: 3, tension: 600, friction: 200 },
    from: {
      opacity: inView ? 0 : 1,
      transform: inView ? "translate3d(100%,0,0)" : "translate3d(0%,0,0)",
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translate3d(0%,0,0)" : "translate3d(100%,0,0)",
    },
  });
  const props2 = useSpring({
    config: { mass: 3, tension: 500, friction: 200 },
    from: {
      opacity: inView ? 0 : 1,
      transform: inView ? "translate3d(80%,0,0)" : "translate3d(0%,0,0)",
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translate3d(0%,0,0)" : "translate3d(80%,0,0)",
    },
  });
  const props3 = useSpring({
    config: { mass: 3, tension: 400, friction: 200 },
    from: {
      opacity: inView ? 0 : 1,
      transform: inView ? "translate3d(60%,0,0)" : "translate3d(0%,0,0)",
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translate3d(0%,0,0)" : "translate3d(60%,0,0)",
    },
  });
  const props4 = useSpring({
    config: { mass: 2, tension: 600, friction: 300 },
    from: {
      opacity: inView ? 0 : 1,
      transform: inView ? "translate3d(40%,0,0)" : "translate3d(0%,0,0)",
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translate3d(0%,0,0)" : "translate3d(40%,0,0)",
    },
  });

  const commonWrapStyle = "py-12 px-12 rounded-3xl";
  const commonTitleStyle = "text-4xl text-serif pb-16";
  const commonDescStyle = "text-xl text-sans py-4";

  return (
    <div ref={ref} className="w-full px-24 text-white py-12 overflow-hidden">
      <animated.div
        className="text-6xl font-bold text-slate-200 font-sans text-center pb-16"
        style={props4}
      >
        our strengths
      </animated.div>
      <div className="grid grid-cols-2 gap-7 pt-4">
        <animated.div className={commonWrapStyle} style={props1}>
          <div className={commonTitleStyle}>Expertise</div>
          <div className={commonDescStyle}>
            Our team is composed of highly experienced and skilled professionals
            who are experts in their respective fields.
            <br />
            <br />
            With their in-depth knowledge and analytical prowess,
            <br />
            they are capable of addressing the most complex research challenges
            and delivering high-quality insights to our clients.
          </div>
        </animated.div>
        <animated.div className={commonWrapStyle} style={props2}>
          <div className={commonTitleStyle}>Global Reach</div>
          <div className={commonDescStyle}>
            Our team operates globally and is well-equipped to provide research
            services across diverse cultures and geographies.
            <br />
            <br />
            With our extensive experience conducting research in various
            countries, we offer our clients a truly global perspective on their
            business and industry.
          </div>
        </animated.div>
        <animated.div className={commonWrapStyle} style={props3}>
          <div className={commonTitleStyle}>Client Focus</div>
          <div className={commonDescStyle}>
            We use the latest research methods and technologies to ensure that
            we deliver the highest-quality data and insights to our clients.
            <br />
            <br />
            Our team stays up-to-date with the latest trends and innovations in
            research methodology and leverages these tools to provide our
            clients with the most accurate and relevant information possible.
          </div>
        </animated.div>
      </div>
    </div>
  );
}
