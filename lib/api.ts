import axios from "axios";

export const fetchNfts = async () => {
  const response = await axios.get("/api/nfts", {
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
  });
  return response.data;
};

export const fetchNft = async (id: string) => {
  const response = await axios.get(`/api/nfts/${id}`, {
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
  });
  return response.data;
};

export const createPriceForNft = async () => {
  const response = await axios.get(`/api/prices/1`, {
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
  });

  return response.data;
};
