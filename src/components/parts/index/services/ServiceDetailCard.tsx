import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CgInfinity } from "react-icons/cg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import React from "react";

interface Props {
  idx: number;
  title: string;
  description: string;
}

export default function ServiceDetail({ idx, title, description }: Props) {
  // const colSpanMap = {
  //     0: "col-span-6",
  //     1: "col-span-6",
  //     2: "col-span-6",
  //     3: "col-span-6",
  //     4: "col-span-6",
  // }

  // const colSpan = colSpanMap[idx]
  // const colSpan = idx <= 1 ? "col-span-3" : "col-span-3"
  const common = "h-full h-[250px] px-4 py-2";
  // const style = `${colSpan} ${common}`
  const subTitle = `case-${idx + 1}`;

  const Description = ({ text }: { text: string }) => {
    const texts = text.split(/(\n)/).map((item, idx) => {
      return (
        <React.Fragment key={idx}>
          {item.match(/\n/) ? <br /> : item}
        </React.Fragment>
      );
    });
    return <div>{texts}</div>;
  };

  return (
    <div className="flex h-80 py-7">
      <div className="basis-8/12 grid grid-rows-2">
        <div>
          <h2 className="h-[1.5rem] text-white font-sans font-medium text-sm bg-gray-900 rounded-full w-14 text-center">
            {subTitle}
          </h2>
          <h1 className="font-serif text-2xl text-grey-800 font-medium mt-2">
            {title}
          </h1>
        </div>
        {/* content-end self-end */}
        <div className="items-end text-base text-gray-600">
          <Description text={description} />
        </div>
      </div>
      {/* flex items-end */}
      <div className="basis-4/12 relative flex justify-center">
        <div className="w-24 h-8 absolute bottom-0 right-14 flex items-center border border-red-900 rounded-full justify-center">
          <p className="text-center text-red-900">More</p>
          {/* <div className="text-red-900 text-2xl">
                        <MdOutlineKeyboardArrowRight/>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
