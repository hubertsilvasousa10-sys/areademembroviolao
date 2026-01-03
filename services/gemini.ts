
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAITutorResponse = async (userMessage: string, context: string) => {
  if (!API_KEY) return "Configuração de IA não encontrada. Verifique sua chave API.";
  
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Você é um tutor de violão amigável e experiente chamado 'Mestre das Cordas'. 
        Seu objetivo é ajudar alunos do curso Violão Master. 
        Mantenha as respostas curtas, práticas e encorajadoras.
        Se perguntarem algo fora de violão ou música, redirecione gentilmente para o aprendizado musical.
        Contexto do curso atual: ${context}`,
        temperature: 0.7,
      },
    });
    
    return response.text || "Desculpe, não consegui processar sua dúvida agora.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocorreu um erro ao conectar com o Tutor IA. Tente novamente mais tarde.";
  }
};
