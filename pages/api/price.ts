export default async function handler(req: any, res: any) {
  const data = {
    currency: "usd",
    trigger_id: process.env.NORAMP_TRIGGER_ID,
    trigger_data: {
      params_data: [req.query.address],
    },
    amount: 5,
  };

  console.log(process.env.NORAMP_APP_ID, process.env.NORAMP_TRIGGER_ID);

  const response = await fetch(
    `https://api.noramp.io/prices/${process.env.NORAMP_APP_ID}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${process.env.NORAMP_API_KEY}`,
        // "Noramp-network": "testnet",
      },
      body: JSON.stringify(data),
    }
  );
  const dataRes = await response.json();
  console.log({ dataRes });

  res.status(200).json({ dataRes });
}
