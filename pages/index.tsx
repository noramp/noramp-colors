import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { NoRampOneClick } from "norampkit";
import toast from "react-hot-toast";
import useWindowSize from "@/hooks/useWindowSize";

export default function Home() {
  const [priceId, setPriceId] = useState("");
  const [error, setError] = useState("");
  const { width } = useWindowSize();

  useEffect(() => {
    generatePrice();
  }, []);

  const generatePrice = useCallback(async () => {
    try {
      const newPrice = (
        await axios.get(`/api/prices?address=${"test"}`, {
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

          <div className="flex items-center justify-center flex-1">
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
