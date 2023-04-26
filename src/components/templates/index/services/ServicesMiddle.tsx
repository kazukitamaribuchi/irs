import ServiceDetailCard from "../../../parts/index/services/ServiceDetailCard";
import { ServicesConst } from "../../../../const/services";
import React, { forwardRef, ReactNode } from "react";

interface Props {
  ref?: any;
}

export default forwardRef<HTMLDivElement>(function ServicesMiddle(props, ref) {
  let items: ReactNode[] = [];

  ServicesConst.ServicesMiddle.map((obj) => {
    items.push(
      <ServiceDetailCard
        key={obj.id}
        idx={obj.id}
        title={obj.title}
        description={obj.description}
      />
    );
  });

  return (
    <div ref={ref} className="">
      <div className="px-12 pt-8">
        <h2 className="pt-10 font-sans text-sm font-bold text-red-500">
          Investigation
        </h2>
        <h1 className="text-5xl mb-36 font-sans font-bold text-stone-700">
          Background Investigation Services
        </h1>
      </div>
      <div className="px-12">
        <div className="grid">
          {items.map((detail) => {
            return detail;
          })}
        </div>
      </div>
    </div>
  );
});
