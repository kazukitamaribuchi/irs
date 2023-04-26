import { useTrail, animated as a } from "react-spring";
import { useInView } from "react-intersection-observer";
import ServiceDetail from "../../../parts/index/services/ServiceDetail";
import { ServicesConst } from "../../../../const/services";
import { ReactNode } from "react";

export default function ServicesTop() {
  let items: ReactNode[] = [];

  ServicesConst.ServicesTop.map((obj) => {
    items.push(
      <ServiceDetail
        key={obj.title}
        title={obj.title}
        description={obj.description}
      />
    );
  });

  const config = { mass: 4, tension: 2000, friction: 500 };

  const trail = useTrail(items.length, {
    config,
    // x: inView ? 0 : 200,
    // height: inView ? 100 : 0,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div className="px-12 py-8 h-full">
      <h2 className="pt-10 font-sans text-sm font-bold text-red-500">
        Consulting
      </h2>
      <h1 className="text-5xl mb-20 font-sans font-bold text-stone-700">
        Research Advisory Services
      </h1>
      <div className="divide-y">
        {trail.map(({ ...props }, i) => (
          <a.div
            key={items[i].key}
            style={{
              ...props,
            }}
            className="trails-text"
          >
            <a.div>{items[i]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}
