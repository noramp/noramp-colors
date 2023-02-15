import Head from "next/head";
import { CustomConnectButton } from "@/components/CustomConnectButton";
import { useCallback, useState } from "react";
import { createPriceForNft } from "@/lib/api";

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
  }, [nft.id]);
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
          <CustomConnectButton />
        </div>
      </main>
    </>
  );
}
