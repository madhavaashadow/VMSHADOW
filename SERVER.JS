import express from "express";
import OpenAI from "openai";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// 🔑 API KEY DAALO
const openai = new OpenAI({
  apiKey: "sk-proj-Fjfof_1g5Vg_Is-J6chm7mxKfcIIjlZ1X6s-V6KKTG_7uOAjNtkVFg3v9agQim26yJFanJ-K_TT3BlbkFJJ9-IkL5r8vN6lLFIBxv6Hk19TfKLJlmfP-Bmh4_scfbQcnGkjM9o5L-qiE7UG1qV_R",
});

// ✅ HOME ROUTE (Not Found fix)
app.get("/", (req, res) => {
  res.send("MADHAVAA SHADOW AI SERVER RUNNING ✅");
});

// ✅ CHAT ROUTE (YEHI IMPORTANT HAI)
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: message }],
    });

    res.json({
      reply: response.choices[0].message.content,
    });

  } catch (err) {
    res.json({
      reply: "⚠️ Error: API key ya server issue",
    });
  }
});

// ✅ SERVER START
app.listen(3000, () => {
  console.log("🔥 Server running");
});
