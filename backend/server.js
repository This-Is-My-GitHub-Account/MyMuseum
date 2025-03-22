import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI();

app.post('/api/chat', async (req, res) => {
    try {
        const { message, mode } = req.body;
        
        const systemMessage = mode === 'booking' 
            ? "You are a helpful museum ticket booking assistant. Help visitors book tickets, check availability, handle group bookings, process payments, and manage booking modifications or cancellations. Provide clear information about pricing and availability."
            : "You are an Indian museum guide who provides detailed, accurate information about Indian museums and their artifacts. Share knowledge about historical artifacts, cultural significance, and interesting facts about Indian museums. Maintain a professional yet engaging tone, and provide context for historical and cultural references.";

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: systemMessage
                },
                {
                    role: "user",
                    content: message
                }
            ]
        });

        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));