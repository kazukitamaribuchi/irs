import Navigation from "../../parts/common/Navigation";
import IrsLogoOnly from "../../elements/IrsLogoOnly";
import styles from "styles/components/templates/header.module.scss";
import { useAtom } from "jotai";
import { viewportTopAtom } from "store/jotai/atoms";
import Hamburger from "components/elements/Hamburger";

interface Props {
  fontColor?: string;
  position?: string;
  bgColor?: string;
  hum?: boolean;
  humFontColor?: string;
}

export default function Header({
  fontColor = "text-white",
  position = "absolute",
  bgColor = "",
  hum = false,
  humFontColor = "text-white",
}: Props) {
  const [viewportTop, setViewportTop] = useAtom(viewportTopAtom);
  // const wrapStyle = viewportTop >= -500 ? "absolute z-[50]" : "fixed z-[100]";

  const wrapStyle = `${position} z-[50]`;

  return (
    <header
      className={`${wrapStyle} ${fontColor} ${bgColor} w-full duration-[1s]`}
    >
      <div className={styles.top_area}>
        <div className={styles.top_left_area}>
          <IrsLogoOnly height={45} width={45} />
        </div>
        <div className={styles.top_right_area}>
          <nav className={styles.navi_area}>
            <Navigation fontColor={fontColor} />
          </nav>

          {hum && (
            <div className="absolute w-24 right-0 top-10">
              <Hamburger fontColor={humFontColor} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
