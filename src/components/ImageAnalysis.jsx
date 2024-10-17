"use client";
import { useEffect, useState } from "react";
import Groq from "groq-sdk";
import { MarkdownRender } from "./MarkdownRender";
import { promptAnalysis } from "@/data/promptAnalysis";
import { Loading } from "./Loading";

const ImageAnalysis = ({ imageUrl, storyGenerated  }) => {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!imageUrl || !storyGenerated) {
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      setAnalysis("");
      try {
        const groq = new Groq({
          apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
          dangerouslyAllowBrowser: true,
        });
        const chatCompletion = await groq.chat.completions.create({
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: promptAnalysis,
                },
                {
                  type: "image_url",
                  image_url: {
                    url: imageUrl,
                  },
                },
              ],
            },
            {
              role: "assistant",
              content: "",
            },
          ],
          model: "llama-3.2-11b-vision-preview",
          temperature: 0.5,
          max_tokens: 1000,
          top_p: 0.9,
          presence_penalty: 0,
          frequency_penalty: 0,
          stream: false,
          stop: null,
          seed: 666,
        });
        setAnalysis(chatCompletion.choices[0].message.content);
      } catch (error) {
        console.error("Error analyzing image:", error);
        setAnalysis("Error analyzing image");
      } finally {
        setLoading(false);
      }
    };

    if (imageUrl) {
      fetchData();
    }
  }, [imageUrl, storyGenerated]);

  return (
    <div>
      {loading ? (
        <span className="animate-pulse font-medium">Generando tu historia ...</span>
      ) : (
        <>
          <MarkdownRender markdown={analysis} />
        </>
      )}
    </div>
  );
};

export default ImageAnalysis;
