import { GoogleGenAI } from "@google/genai";
import { searchAPI_key } from "./constants";

const ai = new GoogleGenAI({ apiKey: searchAPI_key});
export default ai;
