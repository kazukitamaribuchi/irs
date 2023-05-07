import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/templates/header.module.scss";

interface Props {
  height?: number;
  width?: number;
}

export default function IrsLogoOnly({ height = 45, width = 45 }: Props) {
  return (
    <Link href="/">
      <Image
        className={styles.logo}
        src="/images/logo1.png"
        height={height}
        width={width}
        alt="IRS Logo"
      />
    </Link>
  );
}
