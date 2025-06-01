"use server";

import { groq } from "@/utils/groqsdk";

export const groqAction = async (_, formData) => {
  const input = formData.get("input");

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: input,
        },
      ],
      model: "compound-beta",
    });

    console.log(chatCompletion.choices[0].message);
  } catch (error) {
    console.log({ error });
  }
};
