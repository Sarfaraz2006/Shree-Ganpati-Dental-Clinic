import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateDoctorImage() {
  console.log("Generating doctor image...");
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A highly professional, friendly female dentist doctor in a modern premium clinic, wearing a white coat, 4k, photorealistic, highly detailed, smiling, looking at camera.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: "1K"
        }
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const buffer = Buffer.from(base64EncodeString, 'base64');
        const outputPath = path.join(process.cwd(), 'public', 'ai-doctor.png');
        fs.writeFileSync(outputPath, buffer);
        console.log("Image saved to", outputPath);
        return;
      }
    }
    console.log("No image found in response.");
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

generateDoctorImage();
