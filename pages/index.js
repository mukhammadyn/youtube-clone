import Head from "next/head";
import Container from "../components/container";
import { HomeTemp } from "../components/templates/home";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>YouTube</title>
        <link rel="icon" href="/yt.ico" />
        <link rel="stylesheet" href="css/general.css" />
      </Head>
      <HomeTemp />
    </Container>
  );
}
