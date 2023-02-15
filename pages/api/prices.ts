import axios from "axios";
import { NORAMP_APP_ID, NORAMP_TRIGGER_ID } from "@/config/config";
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string;
};
export const createPrice = async (appId: string, createPriceDto: any) => {
  return axios
    .post(`/prices/${appId}`, createPriceDto, {
      baseURL: process.env.NORAMP_API_URL,
      headers: {
        Authorization: `Bearer ${process.env.NORAMP_API_KEY}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.message);
      throw error;
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const nftId = req.query.id;

  if (!nftId) {
    res.statusCode = 404;

    return;
  }

  const newPrice = await createPrice(NORAMP_APP_ID, {
    amount: "1",
    trigger_id: NORAMP_TRIGGER_ID,
    trigger_data: {
      params_data: {
        token_id: String(nftId),
        receiver_id: "elijosedev.testnet", // TODO: Replace with the receiver account ID
      },
    },
  });

  res.statusCode = 200;

  res.json(newPrice.data);
};

export default handler;
