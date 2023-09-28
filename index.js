import { OpenAI } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const openai = new OpenAI({
  organization: "",
  apiKey: "",
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {role: "user", content: "hello World"},
    ]
  })
  res.json({
    completion: completion.choices[0].message
  })
});



app.listen(port, () =>{
  console.log(`example app listening at http://localhost:${port}`)
})