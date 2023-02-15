import Head from "next/head";
import { CustomConnectButton } from "@/components/CustomConnectButton";
import { useCallback, useState } from "react";
import { createPriceForNft } from "@/lib/api";
import toast from "react-hot-toast";
import NoRampPayWidget from "@/components/NoRampPayWidget";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");

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
        <title>T2</title>
        <meta name="description" content="NoRamp Colors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-3xl font-bold underline">
          <h1>Welcome to the NoRamp Colors</h1>
          <div className="container flex flex-col items-center justify-center gap-8 px-4 mx-auto md:flex-row">
            <div className="flex-1 w-11/12 max-w-xs md:max-w-md"></div>

            <div className="flex items-center justify-center flex-1">
              {renderContent()}
            </div>
          </div>
          <CustomConnectButton />
        </div>
      </main>
    </>
  );
}
