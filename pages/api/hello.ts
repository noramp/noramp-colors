import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  res.statusCode = 200;

  res.json({ hello: "world" });
};

export default handler;
