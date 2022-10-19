import Head from "next/head";
import { HighLight } from './components/HighLight/index';
import { Overview } from './components/Overview/index';
import { AIML } from './components/AIML/index';
import { RpaProcess } from './components/Process/index';
import { Solutions } from './components/Solutions/index';
import { CaseStudy } from './components/CaseStudy/index';
import { Contact } from './components/Contact/index';
import styles from "./home.module.scss"

export default function Home() {
  return (
    <div>
      <Head>
        <title>RPA_TMA</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <main>
        <div className={styles.container}>
          <HighLight />
          {/* <Overview />
          <AIML />
          <RpaProcess />
          <Solutions />
          <CaseStudy />
          <Contact /> */}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
