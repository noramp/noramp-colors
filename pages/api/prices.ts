import axios from "axios";
import { NORAMP_APP_ID, NORAMP_TRIGGER_ID } from "@/config/config";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const response = await axios.post(
    `/prices/${NORAMP_APP_ID}`,
    {
      amount: "1",
      trigger_id: NORAMP_TRIGGER_ID,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NORAMP_API_KEY}`,
      },
    }
  );

  res.statusCode = 200;

  res.json(response.data);
};

export default handler;
