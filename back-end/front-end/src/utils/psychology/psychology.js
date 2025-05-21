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
  depression: {
    title: "우울증 자가 진단 (PHQ-9)",
    color: "#e74c3c",
    description:
      "지난 2주 동안의 경험을 기반으로 현재 기분 상태를 확인해보세요.",
    questions: [
      {
        id: 1,
        text: "거의 매일 우울하거나 슬픈 기분이 들었다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "며칠 동안", score: 1 },
          { label: "일주일 이상", score: 2 },
          { label: "거의 매일", score: 3 },
        ],
      },
      {
        id: 2,
        text: "일이나 공부에 대한 흥미나 즐거움이 줄어들었다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "며칠 동안", score: 1 },
          { label: "일주일 이상", score: 2 },
          { label: "거의 매일", score: 3 },
        ],
      },
      {
        id: 3,
        text: "잠들기 어렵거나 자주 깼다, 혹은 너무 많이 잤다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "며칠 동안", score: 1 },
          { label: "일주일 이상", score: 2 },
          { label: "거의 매일", score: 3 },
        ],
      },
      {
        id: 4,
        text: "피곤하거나 기력이 없다고 느꼈다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "며칠 동안", score: 1 },
          { label: "일주일 이상", score: 2 },
          { label: "거의 매일", score: 3 },
        ],
      },
      {
        id: 5,
        text: "식욕이 없거나 과식을 했다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "며칠 동안", score: 1 },
          { label: "일주일 이상", score: 2 },
          { label: "거의 매일", score: 3 },
        ],
      },
      {
        id: 6,
        text: "자신을 실패자라고 느끼거나 자신과 가족을 실망시켰다고 느꼈다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "며칠 동안", score: 1 },
          { label: "일주일 이상", score: 2 },
          { label: "거의 매일", score: 3 },
        ],
      },
      {
        id: 7,
        text: "신문을 읽거나 TV를 보는 등 집중하기가 어려웠다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "며칠 동안", score: 1 },
          { label: "일주일 이상", score: 2 },
          { label: "거의 매일", score: 3 },
        ],
      },
      {
        id: 8,
        text: "다른 사람의 눈에 띄게 느리거나 너무 들떠 있었다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "며칠 동안", score: 1 },
          { label: "일주일 이상", score: 2 },
          { label: "거의 매일", score: 3 },
        ],
      },
      {
        id: 9,
        text: "자신을 해치거나 자살에 대한 생각을 한 적이 있다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "며칠 동안", score: 1 },
          { label: "일주일 이상", score: 2 },
          { label: "거의 매일", score: 3 },
        ],
      },
    ],
  },
  travel: {
    title: "여행 성격 검사",
    color: "#a29bfe",
    description: "여행 스타일을 테스트하고, 찰떡궁합 여행 친구도 알아보세요!",
    questions: [
      {
        id: 1,
        text: "여행은 미리 꼼꼼하게 계획을 짜야 마음이 놓인다.",
        options: [
          { label: "전혀 아니다", value: "spontaneous" },
          { label: "아니다", value: "spontaneous" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "planner" },
          { label: "매우 그렇다", value: "planner" },
        ],
      },
      {
        id: 2,
        text: "낯선 장소에서 즉흥적으로 길을 걷는 게 좋다.",
        options: [
          { label: "전혀 아니다", value: "planner" },
          { label: "아니다", value: "planner" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "spontaneous" },
          { label: "매우 그렇다", value: "spontaneous" },
        ],
      },
      {
        id: 3,
        text: "사람 많은 곳보다는 조용하고 한적한 곳이 좋다.",
        options: [
          { label: "전혀 아니다", value: "social" },
          { label: "아니다", value: "social" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "quiet" },
          { label: "매우 그렇다", value: "quiet" },
        ],
      },
      {
        id: 4,
        text: "숙소보단 여행 스팟! 돌아다니는 게 우선이다.",
        options: [
          { label: "전혀 아니다", value: "relax" },
          { label: "아니다", value: "relax" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "explorer" },
          { label: "매우 그렇다", value: "explorer" },
        ],
      },
      {
        id: 5,
        text: "여행은 누구랑 가느냐가 제일 중요하다.",
        options: [
          { label: "전혀 아니다", value: "solo" },
          { label: "아니다", value: "solo" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "social" },
          { label: "매우 그렇다", value: "social" },
        ],
      },
      {
        id: 6,
        text: "최고의 여행은 노을 지는 바닷가에서 조용히 앉아있는 것이다.",
        options: [
          { label: "전혀 아니다", value: "explorer" },
          { label: "아니다", value: "explorer" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "relax" },
          { label: "매우 그렇다", value: "relax" },
        ],
      },
      {
        id: 7,
        text: "여행 계획 짤 때 엑셀이나 지도 앱을 적극 활용한다.",
        options: [
          { label: "전혀 아니다", value: "spontaneous" },
          { label: "아니다", value: "spontaneous" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "planner" },
          { label: "매우 그렇다", value: "planner" },
        ],
      },
      {
        id: 8,
        text: "맛집 투어는 빼놓을 수 없는 필수 코스다.",
        options: [
          { label: "전혀 아니다", value: "simple" },
          { label: "아니다", value: "simple" },
          { label: "보통이다", value: "" },
          { label: "그렇다", value: "foodie" },
          { label: "매우 그렇다", value: "foodie" },
        ],
      },
    ],
  },
  stress: {
    title: "스트레스 지수 검사",
    color: "#ff6b6b",
    description:
      "최근 일주일 간의 상태를 체크해보세요. 스트레스 상태를 확인하고 적절한 조언을 받아보세요.",
    questions: [
      {
        id: 1,
        text: "짜증이 평소보다 자주 난다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 2,
        text: "피곤한 느낌이 계속 든다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 3,
        text: "일이나 공부에 집중이 잘 안 된다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 4,
        text: "식욕이 줄거나 반대로 폭식하는 일이 생긴다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 5,
        text: "무기력하거나 우울한 기분이 든다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 6,
        text: "사소한 일에도 예민하게 반응하게 된다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 7,
        text: "머리가 아프거나 소화가 잘 안 되는 등 신체 증상이 있다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 8,
        text: "잠들기 어렵거나 수면이 자주 끊긴다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 9,
        text: "일상에 의욕이 없고, 아무것도 하기 싫은 날이 많다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
      {
        id: 10,
        text: "내 감정을 주위 사람에게 잘 숨긴다.",
        options: [
          { label: "전혀 아니다", score: 0 },
          { label: "가끔 그렇다", score: 1 },
          { label: "자주 그렇다", score: 2 },
          { label: "거의 항상 그렇다", score: 3 },
        ],
      },
    ],
  },
  idealType: {
    title: "이상형 유형 테스트",
    color: "#ff99aa",
    description: "당신의 연애 스타일을 알아보는 테스트입니다.",
    questions: [
      {
        id: 1,
        text: "소개팅에서 더 끌리는 사람은?",
        options: [
          { label: "다정하게 말 걸어주는 사람", value: "romantic" },
          { label: "무심하지만 챙겨주는 사람", value: "tsundere" },
        ],
      },
      {
        id: 2,
        text: "데이트할 때 선호하는 건?",
        options: [
          { label: "즉흥적인 드라이브", value: "passionate" },
          { label: "계획된 알찬 코스", value: "stable" },
        ],
      },
      {
        id: 3,
        text: "이성에게 더 끌리는 포인트는?",
        options: [
          { label: "대화 센스와 유머", value: "friend" },
          { label: "진중한 성격과 듬직함", value: "stable" },
        ],
      },
      {
        id: 4,
        text: "연애 스타일은?",
        options: [
          { label: "매일 연락하고 표현 자주함", value: "romantic" },
          { label: "연락 간격이 자유로운 편", value: "independent" },
        ],
      },
      {
        id: 5,
        text: "다툰 후 화해 방식은?",
        options: [
          { label: "먼저 다가가서 풀려고 함", value: "friend" },
          { label: "시간을 두고 자연스럽게", value: "tsundere" },
        ],
      },
      {
        id: 6,
        text: "사랑을 느끼는 순간은?",
        options: [
          { label: "작은 행동 하나에 감동할 때", value: "romantic" },
          { label: "오래 함께할수록 더 편해질 때", value: "stable" },
        ],
      },
      {
        id: 7,
        text: "연애 초반 스타일은?",
        options: [
          { label: "먼저 연락 많이 하고 리드", value: "passionate" },
          { label: "상대가 다가올 때까지 기다림", value: "independent" },
        ],
      },
      {
        id: 8,
        text: "이상적인 연애는?",
        options: [
          { label: "함께 성장하며 친구 같은 관계", value: "friend" },
          { label: "서로 공간을 존중하는 관계", value: "independent" },
        ],
      },
    ],
  },
};
