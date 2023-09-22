import Head from "next/head";
import { NoRampOneClick } from "norampkit";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import { SiOpensea } from "react-icons/si";

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
            <div className="p-4">
              <Link
                target="_blank"
                href="https://opensea.io/collection/no-ramp-colors-on-chain"
              >
                <SiOpensea className="text-4xl text-white" />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center flex-1">
            <NoRampOneClick priceId="price_20iDZj5nETBUOi1i5kOqTa" />
          </div>
        </div>
      </main>
    </>
  );
}
