import Groq from "groq-sdk";

export const groq = new Groq({
  apiKey: process.env.GROG_API_KEY,
});
