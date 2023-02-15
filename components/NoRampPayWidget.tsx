import { useEffect, useState } from "react";
import Celebrate from "./Celebrate";

const NoRampPayWidget = ({ price }: any) => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.origin !== process.env.NEXT_PUBLIC_NORAMP_EMBED_URL) {
        return;
      }

      if (event.data.event === "noramp:onPayment") {
        console.log("Payment event", event.data);
        setSuccess(event.data?.detail?.type === "finished");
      }
    });
  }, []);

  if (!price) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center">
      <iframe
        src={`${process.env.NEXT_PUBLIC_NORAMP_EMBED_URL}/embed/payments/${process.env.NEXT_PUBLIC_NORAMP_APP_ID}?device=desktop&theme=dark&price_id=${price.id}`}
        height="180"
        width="450"
      />
      {success && <Celebrate />}
    </div>
  );
};

export default NoRampPayWidget;
