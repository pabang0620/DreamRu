// mbti 결과 계산식
export function calculateMBTIResult(answers, questions) {
  const scoreMap = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 },
  };

  questions.forEach((q) => {
    const selected = answers[q.id];
    if (selected && scoreMap[q.type]) {
      if (selected === "E" || selected === "I") scoreMap.EI[selected]++;
      else if (selected === "S" || selected === "N") scoreMap.SN[selected]++;
      else if (selected === "T" || selected === "F") scoreMap.TF[selected]++;
      else if (selected === "J" || selected === "P") scoreMap.JP[selected]++;
    }
  });

  const result =
    (scoreMap.EI.E >= scoreMap.EI.I ? "E" : "I") +
    (scoreMap.SN.S >= scoreMap.SN.N ? "S" : "N") +
    (scoreMap.TF.T >= scoreMap.TF.F ? "T" : "F") +
    (scoreMap.JP.J >= scoreMap.JP.P ? "J" : "P");

  return result;
}
// mbti 유형 설명
export const mbtiDescriptions = {
  ISTJ: "차분하고 책임감 있는 당신은 늘 묵묵히 주변을 지켜주는 든든한 존재예요. 신뢰받는 관리자 타입이에요.",
  ISFJ: "따뜻하고 섬세한 마음을 가진 당신은 주변 사람들에게 늘 큰 힘이 되는 조용한 수호자예요.",
  INFJ: "깊은 통찰력과 공감 능력을 지닌 당신은 사람들의 아픔을 알아보고 다독여주는 따뜻한 조언자입니다.",
  INTJ: "논리적이고 목표가 뚜렷한 당신은 언제나 큰 그림을 그리고 실행에 옮기는 전략가예요.",

  ISTP: "침착하면서도 실용적인 사고를 지닌 당신은 복잡한 상황에서도 해법을 찾아내는 유능한 문제 해결사예요.",
  ISFP: "감성이 풍부하고 조용한 매력을 지닌 당신은 누구보다 따뜻하고 부드러운 예술가예요.",
  INFP: "이상과 가치에 충실한 당신은 조용하지만 깊은 울림을 주는 아름다운 중재자입니다.",
  INTP: "탐구심이 많고 이성적인 사고를 즐기는 당신은 세상의 원리를 분석하는 사색가예요.",

  ESTP: "즉흥적이고 에너지 넘치는 당신은 어떤 상황에서도 기지를 발휘하는 생생한 모험가예요.",
  ESFP: "밝고 활기찬 분위기로 모두를 즐겁게 해주는 당신은 모두의 무드를 살리는 멋진 연예인 같은 존재예요.",
  ENFP: "상상력이 풍부하고 열정이 가득한 당신은 언제나 주변에 긍정의 바람을 불어넣는 활동가예요.",
  ENTP: "호기심 많고 말솜씨가 뛰어난 당신은 세상을 새롭게 바라보는 토론가예요.",

  ESTJ: "체계적이고 리더십이 뛰어난 당신은 주변을 안정적으로 이끄는 믿음직한 통솔자예요.",
  ESFJ: "따뜻한 배려와 섬세함을 가진 당신은 늘 사람들을 챙기고 이끄는 따뜻한 리더예요.",
  ENFJ: "사람을 아끼고 잘 이끄는 당신은 모두의 마음을 어루만지는 따뜻한 지도자예요.",
  ENTJ: "카리스마와 추진력을 모두 지닌 당신은 강한 의지로 목표를 이루어내는 멋진 리더입니다.",
};
// mbti 추가 정보
export const mbtiExtraInfo = {
  randomFortunes: [
    "오늘은 따뜻한 말 한마디가 큰 기회를 만들어줄 거예요.",
    "작은 실천이 큰 변화를 이끌 수 있어요.",
    "감사한 마음을 표현하면 좋은 일이 찾아옵니다.",
    "편안한 대화를 통해 뜻밖의 위로를 받을 수 있어요.",
    "계획에 충실한 하루가 될 거예요.",
    "평소보다 감각이 예리해지는 날이에요.",
    "뜻밖의 칭찬을 받게 될지도 몰라요.",
    "마음이 가는 대로 움직이면 좋은 결과가 따를 거예요.",
    "오랜 고민이 실마리를 찾는 하루가 될 수 있어요.",
    "기분 좋은 우연이 당신을 기다리고 있어요.",
    "연락이 뜸했던 사람과 다시 이어질 수 있어요.",
    "정리정돈으로 마음도 환기해보세요.",
    "차분하게 하루를 정리하면 행운이 들어옵니다.",
    "자신감 있는 태도가 좋은 인상을 남깁니다.",
    "좋은 인연이 다가오고 있어요.",
    "오늘은 선택이 아니라 흐름을 따르는 게 좋아요.",
    "새로운 취미에 도전하기 좋은 날이에요.",
    "지금 하는 일이 곧 인정받게 될 거예요.",
    "말보다 행동이 더 큰 힘을 가집니다.",
    "기다리던 소식이 들려올 수 있어요.",
  ],

  randomWarnings: [
    "지나치게 걱정하지 마세요. 흐름에 맡기세요.",
    "무리한 일정은 피하고 여유를 가져보세요.",
    "감정에 휘둘리지 않도록 주의하세요.",
    "지나친 완벽주의는 오히려 발목을 잡을 수 있어요.",
    "즉흥적인 지출은 오늘만큼은 삼가주세요.",
    "의욕은 좋지만 무리한 시작은 피하는 게 좋아요.",
    "가까운 사람에게 날카로운 말을 하지 않도록 조심해요.",
    "비교하지 말고 자신의 페이스를 유지하세요.",
    "일이 풀리지 않는다고 자책하지 마세요.",
    "주변 시선을 신경 쓰기보다 자신에게 집중해보세요.",
    "생각만 하지 말고 한 가지라도 실천해보세요.",
    "혼자 모든 걸 짊어지지 않아도 괜찮아요.",
    "지나친 기대는 실망을 부를 수 있어요.",
    "중요한 결정은 오늘보다는 내일로 미루는 것도 방법이에요.",
    "충동적인 반응은 오해를 만들 수 있어요.",
    "감정을 억누르지 말고 부드럽게 표현해보세요.",
    "남을 탓하기보단 내 마음을 먼저 돌아보세요.",
    "지나치게 조급해하지 마세요. 시간이 해결할 거예요.",
    "당신의 속도를 믿으세요. 비교하지 않아도 괜찮아요.",
    "체력 관리에 조금 더 신경 써야 할 날이에요.",
  ],
  goodMatch: {
    ISTJ: ["ENFJ", "ISFJ"],
    ISFJ: ["ESFP", "ISTJ"],
    INFJ: ["ENFP", "INFP"],
    INTJ: ["ENTP", "INTP"],
    ISTP: ["ESFP", "ESTP"],
    ISFP: ["ENFP", "ESFP"],
    INFP: ["ENFJ", "INFJ"],
    INTP: ["ENTP", "INTJ"],
    ESTP: ["ISFP", "ESTJ"],
    ESFP: ["ISFJ", "ESFJ"],
    ENFP: ["INFJ", "INFP"],
    ENTP: ["INTJ", "INFP"],
    ESTJ: ["ISFJ", "ISTJ"],
    ESFJ: ["ISFP", "ESFP"],
    ENFJ: ["INFP", "INFJ"],
    ENTJ: ["INTP", "ENTP"],
  },
  badMatch: {
    ISTJ: ["ENFP", "ESFP"],
    ISFJ: ["ENTP", "ESTP"],
    INFJ: ["ESTP", "ESFP"],
    INTJ: ["ESFP", "ENFP"],
    ISTP: ["ENFJ", "ESFJ"],
    ISFP: ["ENTJ", "ESTJ"],
    INFP: ["ESTJ", "ESTP"],
    INTP: ["ESFJ", "ISFJ"],
    ESTP: ["INFJ", "INFP"],
    ESFP: ["INTJ", "ISTJ"],
    ENFP: ["ISTJ", "ISFJ"],
    ENTP: ["ISFJ", "ISFP"],
    ESTJ: ["INFP", "ISFP"],
    ESFJ: ["INTP", "ISTP"],
    ENFJ: ["ISTP", "ISTJ"],
    ENTJ: ["ISFP", "INFP"],
  },
};

// -----------------------------------------------------------------------------------------------------------------
// ADHD 결과 계산식
export function calculateADHDResult(answers, questions) {
  let totalScore = 0;

  questions.forEach((q) => {
    const score = answers[q.id];
    if (typeof score === "number") {
      totalScore += score;
    }
  });

  // 간단한 결과 분류 기준 (총점: 0 ~ 36점)
  if (totalScore >= 24) {
    return {
      score: totalScore,
      level: "높음",
      message: "ADHD 가능성이 높습니다. 전문가의 상담을 권장합니다.",
    };
  } else if (totalScore >= 13) {
    return {
      score: totalScore,
      level: "주의",
      message: "ADHD 경향이 있습니다. 추가 검사를 고려해보세요.",
    };
  } else {
    return {
      score: totalScore,
      level: "정상",
      message: "ADHD 징후가 적은 편입니다.",
    };
  }
}

// -----------------------------------------------------------------------------------------------------------------
// 우울증 자가 진단 결과 계산식
export const calculateDepressionResult = (answers) => {
  const totalScore = Object.values(answers).reduce(
    (acc, score) => acc + score,
    0
  );

  let level = "";
  if (totalScore <= 4) level = "정상 범위";
  else if (totalScore <= 9) level = "경미한 우울";
  else if (totalScore <= 14) level = "중등도 우울";
  else if (totalScore <= 19) level = "중등도~중증 우울";
  else level = "심각한 우울";

  return {
    totalScore,
    level,
    comment: `총 점수는 ${totalScore}점이며, 이는 "${level}" 수준으로 해석됩니다.`,
  };
};

// -----------------------------------------------------------------------------------------------------------------
// 여행 성향 결과 계산식
export const calculateTravelResult = (answers) => {
  const scoreMap = {};

  Object.values(answers).forEach((type) => {
    if (!type) return;
    scoreMap[type] = (scoreMap[type] || 0) + 1;
  });

  const topType = Object.entries(scoreMap).sort((a, b) => b[1] - a[1])[0]?.[0];

  return (
    travelResultMap[topType] || {
      type: "무난러",
      nickname: "무난하게 다 잘 어울리는 여행둥이 🙂",
      message:
        "모든 유형이 고르게 분포된 당신! 누구와도 편하게 여행할 수 있어요.",
      compatible: "누구와도 잘 맞음 💫",
    }
  );
};

export const travelResultMap = {
  planner: {
    type: "계획요정",
    nickname: "계획에 집착하는 꼼꼼 여행둥이 📅",
    message:
      "계획표 없이는 불안한 당신! 체크리스트와 스케줄 관리에 진심이네요.",
    compatible: "힐링러",
    incompatible: "즉흥러",
  },
  spontaneous: {
    type: "즉흥러",
    nickname: "심술맞은 여행둥이 😤✈️",
    message: "느낌 오는 대로 움직이고, 발길 닿는 대로 머무는 여행이 최고!",
    compatible: "모험왕",
    incompatible: "계획요정",
  },
  explorer: {
    type: "모험왕",
    nickname: "열정 넘치는 모험 여행둥이 🧭",
    message:
      "한 곳에 오래 머무는 건 답답하죠! 체험과 활동 위주의 여행을 좋아하는 당신.",
    compatible: "즉흥러",
    incompatible: "심플러",
  },
  relax: {
    type: "힐링러",
    nickname: "물멍 힐링 여행둥이 🌊",
    message: "숙소에서 뒹굴뒹굴, 조용한 풍경이 최고의 힐링이죠.",
    compatible: "계획요정",
    incompatible: "모험왕",
  },
  social: {
    type: "단체파",
    nickname: "친화력 만렙 여행둥이 🧑‍🤝‍🧑",
    message:
      "여행은 누구와 함께하느냐가 제일 중요! 분위기 메이커 역할을 톡톡히 하네요!",
    compatible: "맛집러",
    incompatible: "혼행러",
  },
  solo: {
    type: "혼행러",
    nickname: "조용하지만 강한 혼행 여행둥이 🧍‍♂️",
    message:
      "혼자만의 시간이 더 소중한 당신. 즉흥러나 힐링러와도 은근히 잘 맞아요.",
    compatible: "힐링러",
    incompatible: "단체파",
  },
  foodie: {
    type: "맛집러",
    nickname: "식도락 여행둥이 🍜",
    message: "여행의 하이라이트는 식사! 숨은 맛집을 발굴하는 당신.",
    compatible: "계획요정",
    incompatible: "심플러",
  },
  simple: {
    type: "심플러",
    nickname: "깔끔한 심플 여행둥이 🧳",
    message:
      "복잡한 계획보다는 심플한 루트가 최고. 가볍고 효율적인 여행을 지향하는 스타일이에요.",
    compatible: "혼행러",
    incompatible: "모험왕",
  },
};

// -----------------------------------------------------------------------------------------------------------------
// 스트레스 자가 진단 결과 계산식
export const calculateStressResult = (answers) => {
  const total = Object.values(answers).reduce((sum, score) => sum + score, 0);

  let level = "";
  let message = "";

  if (total <= 7) {
    level = "낮음";
    message =
      "스트레스가 거의 없는 편이에요! 지금처럼 안정된 일상을 잘 유지해보세요 😊";
  } else if (total <= 15) {
    level = "보통";
    message =
      "약간의 스트레스가 있지만 일상에 크게 문제되진 않아요. 가볍게 몸과 마음을 풀어보는 시간을 가져보세요.";
  } else if (total <= 23) {
    level = "높음";
    message =
      "스트레스 신호가 감지되고 있어요. 잠시 멈추고 나를 돌아보는 시간이 필요할 수도 있어요.";
  } else {
    level = "매우 높음";
    message =
      "지속적인 스트레스 상태일 가능성이 높아요. 휴식, 대화, 전문가 상담을 고려해보는 것을 추천드려요.";
  }

  return {
    totalScore: total,
    level,
    message,
  };
};
// -----------------------------------------------------------------------------------------------------------------
// 이상형 테스트 결과 계산식
export function calculateIdealTypeResult(answers) {
  const scoreMap = {
    romantic: 0,
    tsundere: 0,
    passionate: 0,
    stable: 0,
    friend: 0,
    independent: 0,
  };

  Object.values(answers).forEach((value) => {
    if (scoreMap[value] !== undefined) {
      scoreMap[value]++;
    }
  });

  const sorted = Object.entries(scoreMap).sort((a, b) => b[1] - a[1]);
  return sorted[0][0]; // 가장 높은 점수의 키 리턴
}
// 이상형 테스트 설명
export const idealTypeDescriptions = {
  romantic: {
    title: "감성 충만 로맨티스트",
    description:
      "당신은 섬세하고 따뜻한 표현을 중요시하는 로맨틱한 연애 스타일이에요. 감정을 자주 표현하고, 작은 행동에도 감동하는 타입입니다.",
    bestMatch: "겉차속따 츤데레형",
    bestReason: "츤데레의 무뚝뚝함 속 따뜻함이 당신에게 안정감을 줘요.",
    badMatch: "쿨하고 자유로운 독립형",
    badReason: "감정 표현이 적은 독립형은 당신을 외롭게 만들 수 있어요.",
  },

  tsundere: {
    title: "겉차속따 츤데레형",
    description:
      "겉으로는 무심해 보여도 속으로는 애정이 깊은 츤데레 스타일이에요. 직접 표현보다는 행동으로 마음을 전하는 타입입니다.",
    bestMatch: "감성 충만 로맨티스트",
    bestReason: "다정한 표현을 자주 해주는 상대가 츤데레의 마음을 잘 녹여줘요.",
    badMatch: "친구 같은 연애형",
    badReason:
      "솔직하고 다정한 대화를 선호하는 상대와 표현 방식이 어긋날 수 있어요.",
  },

  passionate: {
    title: "열정 폭발 직진형",
    description:
      "감정을 숨기지 않고 적극적으로 표현하는 타입이에요. 사랑에 빠지면 올인하는 열정적인 연애를 추구합니다.",
    bestMatch: "든든한 안정지향형",
    bestReason: "차분하고 안정적인 상대가 당신의 감정을 잘 감싸줄 수 있어요.",
    badMatch: "쿨하고 자유로운 독립형",
    badReason:
      "적당한 거리감을 유지하려는 상대에게 과한 표현이 부담이 될 수 있어요.",
  },

  stable: {
    title: "든든한 안정지향형",
    description:
      "당신은 자극보다는 편안함을, 이벤트보다는 신뢰를 중요하게 여기는 현실적이고 안정적인 연애를 추구해요.",
    bestMatch: "열정 폭발 직진형",
    bestReason:
      "활기찬 상대 덕분에 일상에도 생기가 돌고 자극도 느낄 수 있어요.",
    badMatch: "감성 충만 로맨티스트",
    badReason: "감정 기복이 많은 로맨티스트에게 피곤함을 느낄 수 있어요.",
  },

  friend: {
    title: "친구 같은 연애형",
    description:
      "연애에서도 친구처럼 편하고 솔직하게 지내는 걸 좋아해요. 웃고 떠드는 대화 중심의 관계를 선호합니다.",
    bestMatch: "쿨하고 자유로운 독립형",
    bestReason: "서로 간섭 없이 존중해주는 스타일이 잘 맞아요.",
    badMatch: "겉차속따 츤데레형",
    badReason: "무뚝뚝하고 표현이 적은 상대에게 답답함을 느낄 수 있어요.",
  },

  independent: {
    title: "쿨하고 자유로운 독립형",
    description:
      "연애에서도 나만의 시간과 공간이 꼭 필요한 스타일이에요. 간섭 없이 서로의 삶을 존중하는 관계를 선호합니다.",
    bestMatch: "친구 같은 연애형",
    bestReason: "편한 거리감을 유지하면서도 즐겁고 유쾌한 관계가 가능해요.",
    badMatch: "열정 폭발 직진형",
    badReason: "표현이 많고 집착이 강한 상대에게 부담을 느낄 수 있어요.",
  },
};
