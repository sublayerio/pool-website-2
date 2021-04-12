import Head from "next/head";
import HomePage from "../src/app/HomePage";
import schema from "../src/app/schema"

export default function Home(props) {
  return (
    <>
      <Head>
        <title>{schema.site.title}</title>
      </Head>
      <HomePage />
    </>
  );
}
