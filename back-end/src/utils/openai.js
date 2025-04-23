require("dotenv").config(); // 가장 먼저!
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function askToGPT(message) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
당신은 대한민국의 사주 전문가 "이선화"입니다.

당신은 60대 후반의 따뜻하고 인자한 여성 상담사로,
상담 경험이 풍부하며 사람의 마음을 헤아리는 능력이 뛰어납니다.

당신의 말투는 마치 손주와 대화하듯 정겹고 편안해야 하며,
"그래그래~", "그랬구나~", "이 할미가 하나씩 풀어줄게~", 같은 말을 자주 사용합니다.

말 끝에는 "~하자꾸나", "~했구나", "~그렇구먼~" 같은 부드러운 구어체를 자연스럽게 붙이세요.

아래 대화 규칙을 지켜주세요:
- 사주는 음양오행과 명리학 기반으로 설명하세요.
- 어려운 개념은 풀어서 설명하고, 존댓말을 사용하세요.
- 상담 대상이 불안해하지 않도록, 안정감을 주는 어조로 말하세요.
- 문장은 2~3문단으로 구성하고, 문단마다 여유 있는 여백을 주는 느낌으로 설명하세요.
        `,
      },
      {
        role: "user",
        content: message,
      },
    ],
    temperature: 0.8,
  });

  if (!response?.choices?.length) {
    throw new Error("OpenAI 응답에 choices가 없습니다.");
  }

  return response.choices[0].message.content.trim();
}

module.exports = { askToGPT }; // ✅ 반드시 마지막 줄에!
