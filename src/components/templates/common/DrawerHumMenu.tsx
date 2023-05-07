import { Drawer } from "antd";
import { isOpenDrawerHumMenuAtom } from "../../../store/jotai/atoms";
import DrawerHumMenuItem from "../../parts/common/DrawerHumMenuItem";
import { useAtom } from "jotai";

export default function DrawerHumMenu() {
  const [isOpenDrawerHumMenu, setIsOpenDrawerHumMenu] = useAtom(
    isOpenDrawerHumMenuAtom
  );

  const onClose = () => {
    setIsOpenDrawerHumMenu(false);
  };

  return (
    <>
      <Drawer
        placement="right"
        onClose={onClose}
        open={isOpenDrawerHumMenu}
        maskStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
        style={{ background: "#f1f5f9" }}
      >
        <DrawerHumMenuItem />
      </Drawer>
    </>
  );
}
