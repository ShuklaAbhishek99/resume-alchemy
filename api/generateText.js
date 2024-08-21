import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_AI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { prompt } = req.body;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            res.status(200).json({ data: text });
        } catch (error) {
            console.log("Error in generate Text :: ", error);

            res.status(500).json({ error: "Failed to generate response" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
