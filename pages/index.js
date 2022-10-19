import Head from "next/head";
import {
  HighLight,
  RpaProcess,
  Solutions,
  Overview,
  CaseStudy,
  Contact,
  AIML,
} from "../components/home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>RPA_TMA</title>
      </Head>
      <main>
        <div>
          <HighLight />
          <Overview />
          <AIML />
          <RpaProcess />
          <Solutions />
          <CaseStudy />
          <Contact />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
