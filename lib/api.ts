import axios from "axios";

export const createPriceForNft = async () => {
  const response = await axios.get(`/api/prices`, {
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
  });

  return response.data;
};
