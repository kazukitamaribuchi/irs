import React from "react";
import Hamburger from "../../elements/Hamburger";

interface Props {
  fixed?: boolean;
}

export default function Sidebar({ fixed = false }: Props) {
  var getCopyRight = () => {
    let st = "© intteligence research service inc.";
    let items = [];
    for (let i = 0; i < st.length; i++) {
      items.push(
        <p
          key={i}
          className="text-white rotate-90 text-[0.8rem] h-[10px] w-[110px]"
        >
          {st[i]}
        </p>
      );
    }
    return <div className="text-center">{items}</div>;
  };

  const copyRight = getCopyRight();

  const wrapStyle = fixed ? "fixed h-full" : "absolute h-[100%]";

  return (
    <>
      <div className={`${wrapStyle} top-0 right-0 w-24 z-[50] bg-[#192346]`}>
        <div className="pt-[40%] h-[30%]">
          <Hamburger />
        </div>
        {copyRight}
      </div>
    </>
  );
}
