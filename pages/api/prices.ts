import { NORAMP_APP_ID, NORAMP_TRIGGER_ID } from "@/config/config";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (!req.query.address) {
    res.statusCode = 400;
    res.json({ error: "Missing address" });
    return;
  }

  const data = {
    currency: "usd",
    trigger_id: NORAMP_TRIGGER_ID,
    trigger_data: {
      params_data: [req.query.address],
    },
    amount: 5,
  };

  const response = await fetch(
    `https://api.noramp.io/prices/${NORAMP_APP_ID}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${process.env.NORAMP_API_KEY}`,
      },
      body: JSON.stringify(data),
    }
  );

  const json = await response.json();

  res.statusCode = 200;

  res.json(json);
};

export default handler;
