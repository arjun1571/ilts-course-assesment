import { ENV } from "@/@config/env.config";
import axios from "axios";

export const fetchProduct = async (lang: "en" | "bn") => {
  if (!ENV.BaseUrl) return console.log("Base Url Missing");

  const res = await axios.get(ENV.BaseUrl, {
    params: { lang },
    headers: {
      "X-TENMS-SOURCE-PLATFORM": "web",
      Accept: "application/json",
    },
  });
  return res.data;
};
