import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import IrsLogoOnly from "../../elements/IrsLogoOnly";
import { useAtom } from "jotai";
import { RiMenu3Line } from "react-icons/ri";
import { isOpenDrawerHumMenuAtom } from "store/jotai/atoms";

export default function FixedHeader() {
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  const [_, setIsOpenDrawerHumMenu] = useAtom(isOpenDrawerHumMenuAtom);

  const showDrawer = () => {
    setIsOpenDrawerHumMenu(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", watchScroll);
    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  }, []);

  const watchScroll = () => {
    const basePosition = 800;
    const scrollPosition = window.scrollY;
    setShowFixedHeader(basePosition <= scrollPosition);
  };

  const [style, animate] = useSpring(() => ({ height: "0px" }), []);

  useEffect(() => {
    animate({
      height: (showFixedHeader ? 70 : 0) + "px",
    });
  }, [animate, showFixedHeader]);

  return (
    <animated.div
      className="z-[100] fixed top-0 w-full overflow-hidden bg-white"
      style={{ ...style }}
    >
      <div className="pt-3 pb-5 px-14 flex justify-between content-between">
        <div>
          <IrsLogoOnly height={45} width={45} />
        </div>
        <div
          onClick={showDrawer}
          className="w-[45px] h-[45px] cursor-pointer rounded-full p-2 hover:bg-slate-100 duration-300"
        >
          <RiMenu3Line className="text-[2rem] text-slate-900 duration-300" />
        </div>
      </div>
    </animated.div>
  );
}
