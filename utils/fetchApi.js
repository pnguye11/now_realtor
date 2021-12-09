import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "567fccc0c2msh426ad7c3fd273afp1ee14cjsn1c38800d02f7",
    },
  });
  return data;
};
