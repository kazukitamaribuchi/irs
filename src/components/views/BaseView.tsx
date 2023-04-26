import { ReactNode } from "react";
import Head from "next/head";
import styles from "styles/components/view/baseview.module.scss";
import ToTopBtn from "../elements/ToTopBtn";
import FixedHeader from "../templates/common/FixedHeader";
import DrawerHumMenu from "../templates/common/DrawerHumMenu";

interface Props {
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function BaseView({
  title,
  description,
  children,
  ...props
}: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>{children}</div>

      <FixedHeader />
      <ToTopBtn />
      <DrawerHumMenu />
    </div>
  );
}

export async function getStaticProps() {
  const configData = await import(`../../siteconfig.json`);
  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
