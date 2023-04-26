import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { isOpenDrawerHumMenuAtom } from "../../../store/jotai/atoms";
import { useAtom } from "jotai";

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

  const [_, setIsOpenDrawerHumMenu] = useAtom(isOpenDrawerHumMenuAtom);

  const copyRight = getCopyRight();

  const showDrawer = () => {
    setIsOpenDrawerHumMenu(true);
  };

  const wrapStyle = fixed ? "fixed h-full" : "absolute h-[100%]";

  return (
    <>
      <div className={`${wrapStyle} top-0 right-0 w-24 z-[50] bg-[#192346]`}>
        <div className="text-[2rem] pt-[40%] h-[30%]">
          <RiMenu3Line
            onClick={showDrawer}
            className="ml-[2rem] cursor-pointer hover:text-slate-400 text-white duration-300"
          />
        </div>
        {copyRight}
      </div>
    </>
  );
}
