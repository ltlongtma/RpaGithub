import Head from "next/head";
import Image from "next/image";
import { HighLight, RpaProcess } from "../components/home";
import className from "classnames/bind";
import styles from "../styles/Home.module.scss";
import Overview from "../components/home/Overview";
import document from "../pages/_document";

const cx = className.bind(styles);
export default function Home() {
  return (
    <div>
      <Head>
        <title>RPA_TMA</title>
        <meta name="description" content="Generated by DC22" />
        <link rel="icon" href="/TmaLogo.png" />
      </Head>

      <main>
        <div>
          <HighLight />
          <Overview />
          <RpaProcess />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
