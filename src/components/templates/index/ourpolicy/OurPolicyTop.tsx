import { useRef, useState } from "react";
import { intersectionObserver } from "hooks/intersectionObserver";
import { useTrail, animated, SpringValue } from "@react-spring/web";
import { OurPolicyConst } from "../../../../const/ourpolicies";

export default function OurPolicyTop() {
  const [inTop, setInTop] = useState(false);

  const changeTopFlg = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInTop(true);
      } else {
        setInTop(false);
      }
    });
  };
  const ref1 = useRef(null);
  const options = {
    rootMargin: "200px",
    threshold: 0.3,
  };
  intersectionObserver([ref1], changeTopFlg, options);

  const titleItems = Array.from("PROFFESSIONAL")
    .concat([""])
    .concat(Array.from("TEAM"));
  // console.log(titleItems);
  const titleTrail = useTrail(titleItems.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: inTop ? 1 : 0,
    height: inTop ? 100 : 0,
    from: { opacity: 0, height: 0 },
  });

  const middleItems = OurPolicyConst.OurPolicyTopDesc;

  const descTrail = useTrail(middleItems.length, {
    config: { mass: 1, tension: 500, friction: 100 },
    opacity: inTop ? 1 : 0,
    x: inTop ? 0 : 30,
    height: inTop ? 40 : 0,
    from: { opacity: 0, x: 30, height: 0 },
  });

  return (
    <div className="w-full h-[900px]">
      <div className="px-24 pt-60 overflow-hidden" ref={ref1}>
        <div className="pl-2 text-red-700 text-xl font-sans font-extrabold">
          Our Team
        </div>
        {titleTrail.map(({ opacity, height, ...style }, index) => {
          const actualW = titleItems[index] == "" ? "w-[50px]" : "w-auto";
          return (
            <animated.span
              className={`text-8xl inline-block text-white ${actualW}`}
              style={style}
              key={index}
            >
              <animated.span style={{ opacity }} className="font-sans">
                {titleItems[index]}
              </animated.span>
            </animated.span>
          );
        })}
      </div>
      <div className="px-24 text-white grid grid-cols-2">
        <div className="pt-36">
          {descTrail.map(({ height, ...style }, index) => (
            <animated.div
              key={index}
              className="overflow-hidden h-50"
              style={style}
            >
              <animated.div style={{ height }} className="font-sans text-lg">
                {middleItems[index]}
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
}
