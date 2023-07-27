import Head from "next/head";
import Home from "./home";
import Header from "@/components/layout/Header";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Food Order</title>
        <meta name="description" content="Food Order" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Home />
    </div>
  );
}
