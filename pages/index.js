import Head from "next/head";
import { HomeTemp } from "../components/templates/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>YouTube</title>
        <link rel="icon" href="/yt.ico" />
        <link rel="stylesheet" href="css/general.css" />
      </Head>
      <HomeTemp />
    </>
  );
}
