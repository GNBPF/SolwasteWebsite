import { GoogleGenAI, Type } from "@google/genai";
import { VentResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateSolwasteSolution = async (complaint: string): Promise<VentResponse> => {
  if (!apiKey) {
    console.warn("No API Key provided");
    return {
      solution: "The Golden Composter 3000",
      technicalSpec: "Odor-neutralizing biomechanical filtration."
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `The user has a waste complaint: "${complaint}". 
      Act as Solwaste, a luxury, high-tech waste management company. 
      Analyze this complaint and provide a solution using one of our fictional high-end machines (e.g., The Silent Composter, The Biogas Nexus).
      Keep the tone sophisticated, reassuring, and premium.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            solution: {
              type: Type.STRING,
              description: "A catchy, premium name for the solution machine or process.",
            },
            technicalSpec: {
              type: Type.STRING,
              description: "A short, scientific-sounding explanation of how it fixes the problem.",
            },
          },
          required: ["solution", "technicalSpec"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text) as VentResponse;
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      solution: "Rapid Organic Reclaimer",
      technicalSpec: "Advanced enzymatic breakdown engine enabled."
    };
  }
};