import { GoogleGenerativeAI } from "@google/generative-ai";
import { VentResponse } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

export const generateSolwasteSolution = async (complaint: string): Promise<VentResponse> => {
  // Fallback solutions if no API key
  if (!apiKey || apiKey === 'your_api_key_here') {
    console.warn("No valid API Key provided. Using fallback solution.");
    const fallbacks = [
      {
        solution: "The Golden Composter Elite",
        technicalSpec: "Odor-neutralizing biomechanical filtration with quantum-grade aerobic digestion."
      },
      {
        solution: "Rapid Organic Reclaimer X1",
        technicalSpec: "Advanced enzymatic breakdown engine with thermophilic acceleration technology."
      },
      {
        solution: "The Silent Nexus Processor",
        technicalSpec: "Acoustic dampening + hyperbaric microbial digestion system."
      },
      {
        solution: "BioSphere Waste Neutralizer",
        technicalSpec: "Closed-loop anaerobic conversion with automated pH balancing."
      }
    ];
    
    // Return random fallback after a delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro",
      generationConfig: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    });

    const prompt = `You are Solwaste, a luxury, high-tech waste management company specializing in premium organic waste solutions.

A customer has this waste complaint: "${complaint}"

Provide a sophisticated solution in JSON format with:
1. "solution": A catchy, premium machine/service name (3-5 words, like "The Aurora Biomass Converter" or "Quantum Waste Neutralizer")
2. "technicalSpec": A short, impressive technical explanation (1-2 sentences, use advanced scientific terms)

Respond ONLY with valid JSON in this exact format:
{
  "solution": "Machine Name Here",
  "technicalSpec": "Technical explanation here."
}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Try to parse JSON from the response
    let jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        solution: parsed.solution || "The Premium Waste Processor",
        technicalSpec: parsed.technicalSpec || "Advanced waste transformation technology."
      };
    }
    
    // If JSON parsing fails, use fallback
    throw new Error("Invalid JSON response");
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Return fallback on error
    return {
      solution: "The Phoenix Waste Converter",
      technicalSpec: "Multi-stage thermophilic digestion with catalytic odor suppression and automated volume reduction."
    };
  }
};