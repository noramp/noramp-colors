import { useEffect, useState } from "react";
import { NORAMP_EMBED_URL, NORAMP_APP_ID } from "@/config/config";
import Celebrate from "./Celebrate";

const NoRampPayWidget = ({ price }: any) => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.origin !== NORAMP_EMBED_URL) {
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
        src={`${NORAMP_EMBED_URL}/embed/payments/${NORAMP_APP_ID}?device=desktop&theme=dark&price_id=${price.id}`}
        height="209"
        width="455"
      />
      {success && <Celebrate />}
    </div>
  );
};

export default NoRampPayWidget;
