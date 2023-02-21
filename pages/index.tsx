import Head from "next/head";
import { CustomConnectButton } from "@/components/CustomConnectButton";
import { useCallback, useState } from "react";
import { createPriceForNft } from "@/lib/api";
import toast from "react-hot-toast";
import NoRampPayWidget from "@/components/NoRampPayWidget";
import useWindowSize from "@/hooks/useWindowSize";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");
  const { width } = useWindowSize();

  const handleBuy = useCallback(async () => {
    try {
      const newPrice = await createPriceForNft();
      setPrice(newPrice);
    } catch (e) {
      toast.error("Error creating price");
      setError("Error creating price");
    }
    setShowForm(true);
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
    if (showForm) {
      return <NoRampPayWidget price={price} />;
    }
    return (
      <button
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg"
        type="button"
        onClick={handleBuy}
      >
        <span className="flex items-center rounded-md text-sm px-4 py-2">
          Buy
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
        <nav>
          <CustomConnectButton />
        </nav>
        <div className="text-3xl font-bold underline">
          <div className="container flex flex-col items-center justify-center gap-8 px-4 mx-auto md:flex-row">
            <div className="flex w-full">
              {width > 768 ? (
                <video
                  className="logo"
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
            <div className="">
              {width > 768 ? (
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

            <div className="flex items-center justify-center flex-1">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
