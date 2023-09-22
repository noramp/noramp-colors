import Head from "next/head";
import { NoRampOneClick } from "norampkit";
import useWindowSize from "@/hooks/useWindowSize";

export default function Home() {
  const { width } = useWindowSize();

  return (
    <>
      <Head>
        <title>NoRamp Colors</title>
        <meta name="description" content="NoRamp Colors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 mx-auto">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-5xl max-w-sm text-center text-white">
              ColorsOnChain
            </p>
          </div>

          <div className="flex items-center justify-center flex-1">
            <NoRampOneClick priceId="price_20iDZj5nETBUOi1i5kOqTa" />
          </div>
        </div>
      </main>
    </>
  );
}
