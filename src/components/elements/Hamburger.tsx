import { RiMenu3Line } from "react-icons/ri";
import { isOpenDrawerHumMenuAtom } from "../../store/jotai/atoms";
import { useAtom } from "jotai";

interface Props {
  fontColor?: string;
}

export default function Hamburger({ fontColor = "text-white" }) {
  const [_, setIsOpenDrawerHumMenu] = useAtom(isOpenDrawerHumMenuAtom);

  const showDrawer = () => {
    setIsOpenDrawerHumMenu(true);
  };

  return (
    <RiMenu3Line
      onClick={showDrawer}
      className={`text-[2rem] ml-[2rem] cursor-pointer hover:text-slate-400 duration-300 ${fontColor}`}
    />
  );
}
