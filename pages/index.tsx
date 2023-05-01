import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { CustomConnectButton } from "@/components/CustomConnectButton";
import { NoRampOneClick } from "norampkit";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import useWindowSize from "@/hooks/useWindowSize";

export default function Home() {
  const [priceId, setPriceId] = useState("");
  const [error, setError] = useState("");
  const { width } = useWindowSize();
  const { address } = useAccount();

  useEffect(() => {
    generatePrice();
  }, []);

  const generatePrice = useCallback(async () => {
    try {
      const newPrice = (
        await axios.get(`/api/prices?address=${address}`, {
          baseURL: process.env.NEXT_PUBLIC_APP_URL,
        })
      ).data.data;

      console.log("newPrice", newPrice);

      if (!newPrice) {
        toast.error("Error creating price");
      }

      setPriceId(newPrice.id);
    } catch (e) {
      toast.error("Error creating price");
      setError("Error creating price");
    }
  }, []);

  const renderContent = () => {
    if (error) {
      return (
        <div
          className="flex flex-col gap-2 p-4 text-sm text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800 rounded-lg"
          role="alert"
        >
          <div className="flex items-center">
            <span>{error}</span>
          </div>
        </div>
      );
    }
    if (priceId) {
      return <></>;
    }
    return (
      <button
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg"
        type="button"
        onClick={generatePrice}
      >
        <span className="flex items-center rounded-md text-sm px-4 py-2">
          Buy $5 On-chain Color
        </span>
      </button>
    );
  };

  return (
    <>
      <Head>
        <title>NoRamp Colors</title>
        <meta name="description" content="NoRamp Colors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container flex flex-col items-center justify-center gap-8 px-4 mx-auto">
          <div className="flex justify-center w-full">
            {width < 768 ? (
              <video
                className="logo h-96"
                src="/video/mobile_hero.mp4"
                key="/video/mobile_hero.mp4"
                autoPlay
                playsInline
                loop
                muted
              ></video>
            ) : (
              <video
                src="/video/hero.mp4"
                className="logo"
                key="/video/hero.mp4"
                autoPlay
                playsInline
                loop
                muted
              ></video>
            )}
          </div>
          <div>
            <p className="font-bold text-lg max-w-sm text-center">
              ColorsOnChain by NoRamp is an infinite collection of colors that
              are generated and stored on-chain for you to use however you’d
              like.
            </p>
          </div>
          <CustomConnectButton />

          <div className="flex items-center justify-center flex-1">
            {/* {renderContent()} */}
            <NoRampOneClick
              appId="app_4zd8QoywncK1itHmVhhowU"
              priceId={priceId}
              auth={true}
            />
          </div>
          <div className="">
            {width < 768 ? (
              <video
                className="colorGridVideo"
                src="/video/mobile_color_grid.mp4"
                key="/video/mobile_color_grid.mp4"
                autoPlay
                playsInline
                loop
                muted
              ></video>
            ) : (
              <video
                className="colorGridVideo"
                src="/video/color_grid.mp4"
                key="/video/color_grid.mp4"
                autoPlay
                playsInline
                loop
                muted
              ></video>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
