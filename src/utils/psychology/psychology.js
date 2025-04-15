export const psychologyTests = {
  mbti: {
    title: "MBTI 성격 유형 검사",
    color: "#88c0d0",
    description: "당신의 성격 유형을 간단하게 알아보는 테스트입니다.",
    questions: [
      {
        id: 1,
        text: "사교적인 편이며 사람들과 어울리는 것을 즐긴다.",
        type: "EI",
        options: [
          { label: "전혀 아니다", value: "I" },
          { label: "아니다", value: "I" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "E" },
          { label: "매우 그렇다", value: "E" },
        ],
      },
      {
        id: 2,
        text: "혼자 있는 시간이 나에게 더 에너지를 준다.",
        type: "EI",
        options: [
          { label: "전혀 아니다", value: "E" },
          { label: "아니다", value: "E" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "I" },
          { label: "매우 그렇다", value: "I" },
        ],
      },
      {
        id: 3,
        text: "현실적이고 사실에 기반해 생각하는 편이다.",
        type: "SN",
        options: [
          { label: "전혀 아니다", value: "N" },
          { label: "아니다", value: "N" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "S" },
          { label: "매우 그렇다", value: "S" },
        ],
      },
      {
        id: 4,
        text: "직관과 영감을 믿는 편이다.",
        type: "SN",
        options: [
          { label: "전혀 아니다", value: "S" },
          { label: "아니다", value: "S" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "N" },
          { label: "매우 그렇다", value: "N" },
        ],
      },
      {
        id: 5,
        text: "의사결정 시 감정보다 논리를 우선시한다.",
        type: "TF",
        options: [
          { label: "전혀 아니다", value: "F" },
          { label: "아니다", value: "F" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "T" },
          { label: "매우 그렇다", value: "T" },
        ],
      },
      {
        id: 6,
        text: "타인의 기분과 감정을 중요하게 여긴다.",
        type: "TF",
        options: [
          { label: "전혀 아니다", value: "T" },
          { label: "아니다", value: "T" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "F" },
          { label: "매우 그렇다", value: "F" },
        ],
      },
      {
        id: 7,
        text: "계획적이고 체계적인 것을 선호한다.",
        type: "JP",
        options: [
          { label: "전혀 아니다", value: "P" },
          { label: "아니다", value: "P" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "J" },
          { label: "매우 그렇다", value: "J" },
        ],
      },
      {
        id: 8,
        text: "상황에 따라 융통성 있게 행동하는 편이다.",
        type: "JP",
        options: [
          { label: "전혀 아니다", value: "J" },
          { label: "아니다", value: "J" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "P" },
          { label: "매우 그렇다", value: "P" },
        ],
      },
      // 기존 8개 뒤에 이어 붙이기
      {
        id: 9,
        text: "나는 빠르게 새로운 사람들과 친해지는 편이다.",
        type: "EI",
        options: [
          { label: "전혀 아니다", value: "I" },
          { label: "아니다", value: "I" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "E" },
          { label: "매우 그렇다", value: "E" },
        ],
      },
      {
        id: 10,
        text: "새로운 일보다 익숙한 일에 더 편안함을 느낀다.",
        type: "SN",
        options: [
          { label: "전혀 아니다", value: "N" },
          { label: "아니다", value: "N" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "S" },
          { label: "매우 그렇다", value: "S" },
        ],
      },
      {
        id: 11,
        text: "결정할 때 감정보다는 사실과 데이터에 근거한다.",
        type: "TF",
        options: [
          { label: "전혀 아니다", value: "F" },
          { label: "아니다", value: "F" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "T" },
          { label: "매우 그렇다", value: "T" },
        ],
      },
      {
        id: 12,
        text: "나는 정해진 계획보다는 그때그때 즉흥적인 선택을 선호한다.",
        type: "JP",
        options: [
          { label: "전혀 아니다", value: "J" },
          { label: "아니다", value: "J" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "P" },
          { label: "매우 그렇다", value: "P" },
        ],
      },
      {
        id: 13,
        text: "여럿이 함께하는 활동에서 에너지를 얻는다.",
        type: "EI",
        options: [
          { label: "전혀 아니다", value: "I" },
          { label: "아니다", value: "I" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "E" },
          { label: "매우 그렇다", value: "E" },
        ],
      },
      {
        id: 14,
        text: "상상이나 아이디어보다 현실적인 정보가 더 중요하다고 생각한다.",
        type: "SN",
        options: [
          { label: "전혀 아니다", value: "N" },
          { label: "아니다", value: "N" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "S" },
          { label: "매우 그렇다", value: "S" },
        ],
      },
      {
        id: 15,
        text: "논쟁 중 감정보다는 논리로 설득하는 편이다.",
        type: "TF",
        options: [
          { label: "전혀 아니다", value: "F" },
          { label: "아니다", value: "F" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "T" },
          { label: "매우 그렇다", value: "T" },
        ],
      },
      {
        id: 16,
        text: "할 일 목록을 만들고 순서대로 처리하는 것을 좋아한다.",
        type: "JP",
        options: [
          { label: "전혀 아니다", value: "P" },
          { label: "아니다", value: "P" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "J" },
          { label: "매우 그렇다", value: "J" },
        ],
      },
    ],
  },
  adhd: {
    title: "ADHD 자가 진단",
    color: "#f39c12",
    description: "주의력 및 충동 조절과 관련된 성향을 확인해보세요.",
    questions: [
      {
        id: 1,
        text: "나는 일을 시작하는 것이 어렵고, 자주 미룬다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 2,
        text: "주의가 산만해져서 집중하기 어렵다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 3,
        text: "지시사항을 따르기 어려워 중간에 포기하는 경우가 많다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 4,
        text: "중요한 물건(예: 열쇠, 지갑 등)을 자주 잃어버린다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 5,
        text: "회의나 대화 중 다른 생각으로 집중하지 못한다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 6,
        text: "지루하거나 반복적인 일을 피하는 경향이 있다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 7,
        text: "하나의 일을 끝내기도 전에 다른 일을 벌이곤 한다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 8,
        text: "대화 중에 다른 사람의 말을 자주 끊는다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 9,
        text: "조금만 기다리는 상황에서도 안절부절 못한다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 10,
        text: "지나치게 말을 많이 하거나 통제하기 어려울 때가 있다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 11,
        text: "스스로를 통제하기 어렵고 충동적으로 행동할 때가 있다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 12,
        text: "일이나 과제를 끝내기 어려워 마감 직전에야 서두른다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      




    ],
  },

};
