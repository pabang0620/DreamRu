const { askToGPT } = require("../utils/openai");

async function sendMessage(req, res) {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "메시지를 입력하세요." });
    }

    // const reply = await askToGPT(message);

    // ✅ 임시 답변 (이선화 말투)
    const reply = `
        그래그래~ 그랬구나. 그런 일은 누구나 겪을 수 있단다.
        
        이 할미가 보기엔, 지금은 마음을 조금 내려놓고 흐름을 지켜보는 게 좋겠어.
        너무 조급해하지 말고, 때가 되면 자연스레 풀릴 테니까 말이지~ 😊
            `.trim();

    return res.json({ reply });
  } catch (err) {
    console.error("GPT 오류:", err.message);
    return res.status(500).json({ error: "GPT 응답 실패" });
  }
}

module.exports = { sendMessage };
