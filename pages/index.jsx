import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Food Order</title>
        <meta name="description" content="Food Order" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center h-screen bg-primary">Food Order</h1>
    </div>
  );
}
