const job_major = [
  {
    id: 0,
    title: "The Fool",
    meaning:
      "새로운 커리어를 시작하기에 좋은 시기입니다. 도전 정신이 당신의 성장으로 이어질 거예요.",
  },
  {
    id: 1,
    title: "The Magician",
    meaning:
      "당신의 역량을 십분 발휘할 수 있는 기회가 찾아옵니다. 스스로를 믿고 능동적으로 움직이세요.",
  },
  {
    id: 2,
    title: "The High Priestess",
    meaning:
      "직장 내 비밀이나 숨겨진 정보가 있을 수 있어요. 직감과 분석력이 필요한 시기입니다.",
  },
  {
    id: 3,
    title: "The Empress",
    meaning:
      "풍요롭고 안정적인 직업 환경이 조성될 수 있어요. 창의적인 아이디어가 인정을 받습니다.",
  },
  {
    id: 4,
    title: "The Emperor",
    meaning:
      "리더십이 발휘되는 시기입니다. 책임감 있는 자세가 좋은 평가로 이어질 거예요.",
  },
  {
    id: 5,
    title: "The Hierophant",
    meaning:
      "보수적이고 전통적인 조직에서의 안정적인 커리어가 예상됩니다. 규칙을 따르는 것이 중요해요.",
  },
  {
    id: 6,
    title: "The Lovers",
    meaning:
      "중요한 직업적 선택의 기로에 서 있습니다. 자신의 가치와 맞는 방향을 선택하세요.",
  },
  {
    id: 7,
    title: "The Chariot",
    meaning:
      "강한 추진력과 열정으로 성과를 낼 수 있는 시기입니다. 목표를 명확히 하고 나아가세요.",
  },
  {
    id: 8,
    title: "Strength",
    meaning:
      "인내와 꾸준함이 요구되는 시기입니다. 차분한 태도가 오히려 강력한 무기가 됩니다.",
  },
  {
    id: 9,
    title: "The Hermit",
    meaning:
      "혼자 깊이 고민해야 할 시간이 필요해요. 진정 원하는 커리어 방향을 탐색해보세요.",
  },
  {
    id: 10,
    title: "Wheel of Fortune",
    meaning:
      "예상치 못한 기회가 들어올 수 있어요. 운의 흐름을 믿고 유연하게 움직이세요.",
  },
  {
    id: 11,
    title: "Justice",
    meaning:
      "공정한 평가와 결과가 따르는 시기입니다. 정확하고 책임감 있는 행동이 중요해요.",
  },
  {
    id: 12,
    title: "The Hanged Man",
    meaning:
      "직업적으로 답보 상태에 놓일 수 있어요. 인내하며 시야를 바꿔보는 것이 필요합니다.",
  },
  {
    id: 13,
    title: "Death",
    meaning:
      "현재의 직업 상황이 끝나고, 새로운 기회가 열릴 수 있어요. 변화는 곧 성장입니다.",
  },
  {
    id: 14,
    title: "Temperance",
    meaning:
      "업무와 삶의 균형이 필요한 시기입니다. 지나친 욕심보다 조화로운 흐름을 유지하세요.",
  },
  {
    id: 15,
    title: "The Devil",
    meaning:
      "일 중독이나 부정적인 관계에 빠질 수 있어요. 의존을 줄이고 스스로를 챙기세요.",
  },
  {
    id: 16,
    title: "The Tower",
    meaning:
      "예상치 못한 변화나 위기가 발생할 수 있어요. 무너짐 속에서 새로운 시작이 만들어집니다.",
  },
  {
    id: 17,
    title: "The Star",
    meaning:
      "희망적인 기회가 다가옵니다. 장기적인 목표를 향해 차근차근 준비해보세요.",
  },
  {
    id: 18,
    title: "The Moon",
    meaning:
      "직장 내 혼란이나 불확실성이 있을 수 있어요. 상황을 명확히 파악하는 것이 중요합니다.",
  },
  {
    id: 19,
    title: "The Sun",
    meaning:
      "밝은 전망과 성취가 예상됩니다. 노력한 만큼의 결과를 얻을 수 있는 시기예요.",
  },
  {
    id: 20,
    title: "Judgement",
    meaning:
      "과거의 실수가 교훈이 되어 더 나은 기회로 이어질 수 있어요. 긍정적인 변화가 시작됩니다.",
  },
  {
    id: 21,
    title: "The World",
    meaning:
      "직업적으로 큰 성취나 완성이 기대되는 시기입니다. 프로젝트나 커리어의 마무리가 아름다울 거예요.",
  },
];

const job_minor_cups = [
  {
    id: 1,
    title: "Ace of Cups",
    meaning:
      "새로운 일에 대한 열정과 영감이 샘솟는 시기입니다. 창의적인 프로젝트나 제안이 좋은 결과로 이어질 수 있어요.",
  },
  {
    id: 2,
    title: "Two of Cups",
    meaning:
      "직장에서의 파트너십이나 협업이 순조롭게 진행됩니다. 신뢰할 수 있는 동료와 좋은 결과를 만들 수 있어요.",
  },
  {
    id: 3,
    title: "Three of Cups",
    meaning:
      "팀워크가 돋보이는 시기입니다. 프로젝트의 성공이나 축하할 일이 생길 수 있어요.",
  },
  {
    id: 4,
    title: "Four of Cups",
    meaning:
      "현재의 직업 상황에 불만이 생길 수 있어요. 새로운 기회를 놓치지 않도록 마음을 열어보세요.",
  },
  {
    id: 5,
    title: "Five of Cups",
    meaning:
      "실망이나 후회가 따를 수 있는 시기입니다. 하지만 아직 남아 있는 기회를 포착하는 게 중요해요.",
  },
  {
    id: 6,
    title: "Six of Cups",
    meaning:
      "과거에 함께 일했던 사람들과의 인연이 다시 이어질 수 있어요. 과거 경험을 현재에 잘 활용해보세요.",
  },
  {
    id: 7,
    title: "Seven of Cups",
    meaning:
      "많은 선택지와 유혹이 있는 시기입니다. 헛된 희망보다 현실적인 판단이 필요해요.",
  },
  {
    id: 8,
    title: "Eight of Cups",
    meaning:
      "현재 직장을 떠나고 싶은 마음이 생길 수 있어요. 진짜 원하는 목표를 찾아 움직일 때입니다.",
  },
  {
    id: 9,
    title: "Nine of Cups",
    meaning:
      "직장에서의 만족감과 성취를 느낄 수 있는 시기입니다. 소망하던 일이 이뤄질 가능성이 높아요.",
  },
  {
    id: 10,
    title: "Ten of Cups",
    meaning:
      "직장에서의 조화로운 분위기와 안정감이 강조되는 카드예요. 장기적인 만족과 팀워크가 잘 맞을 수 있어요.",
  },
  {
    id: 11,
    title: "Page of Cups",
    meaning:
      "새로운 아이디어나 프로젝트 제안이 들어올 수 있어요. 유연하고 개방적인 자세가 중요해요.",
  },
  {
    id: 12,
    title: "Knight of Cups",
    meaning:
      "당신의 비전과 감성을 표현하는 일이 중요해지는 시기입니다. 이상과 현실의 균형이 필요해요.",
  },
  {
    id: 13,
    title: "Queen of Cups",
    meaning:
      "동료를 배려하고 감성적으로 대할수록 좋은 결과가 따를 수 있어요. 감정 조율 능력이 중요한 역할을 해요.",
  },
  {
    id: 14,
    title: "King of Cups",
    meaning:
      "감정을 잘 다스리는 리더십이 필요한 시기입니다. 차분하고 신뢰감 있는 모습이 사람들에게 존경을 받을 수 있어요.",
  },
];

const job_minor_pentacles = [
  {
    id: 1,
    title: "Ace of Pentacles",
    meaning:
      "새로운 기회, 제안, 금전적 보상이 주어지는 시기입니다. 취업, 창업, 계약 등에 매우 긍정적이에요.",
  },
  {
    id: 2,
    title: "Two of Pentacles",
    meaning:
      "멀티태스킹 능력이 요구됩니다. 일과 재정의 균형을 잡는 것이 핵심이에요.",
  },
  {
    id: 3,
    title: "Three of Pentacles",
    meaning:
      "협업과 팀워크가 빛을 발하는 시기입니다. 당신의 노력이 인정을 받을 수 있어요.",
  },
  {
    id: 4,
    title: "Four of Pentacles",
    meaning:
      "안정은 있지만 변화에 대한 두려움도 클 수 있어요. 지나친 안정 추구는 성장을 막을 수 있어요.",
  },
  {
    id: 5,
    title: "Five of Pentacles",
    meaning:
      "재정적 또는 직업적으로 어려움을 겪을 수 있는 시기입니다. 도움을 요청하는 것도 용기입니다.",
  },
  {
    id: 6,
    title: "Six of Pentacles",
    meaning:
      "도움 주고받는 관계 속에서 성장이 가능합니다. 보너스, 지원, 멘토 등의 혜택을 기대할 수 있어요.",
  },
  {
    id: 7,
    title: "Seven of Pentacles",
    meaning:
      "노력에 대한 결실을 기다리는 시기입니다. 인내심을 갖고 꾸준함을 유지하세요.",
  },
  {
    id: 8,
    title: "Eight of Pentacles",
    meaning:
      "장인정신과 몰입이 필요한 시기입니다. 전문성 향상, 실력 성장에 집중해보세요.",
  },
  {
    id: 9,
    title: "Nine of Pentacles",
    meaning:
      "노력의 결실을 혼자서 충분히 누릴 수 있는 시기입니다. 자립성과 재정적 안정이 확보돼요.",
  },
  {
    id: 10,
    title: "Ten of Pentacles",
    meaning:
      "장기적 안정과 유산, 성공적인 커리어의 정점에 도달하는 시기입니다. 가업, 조직적 성공과도 관련돼요.",
  },
  {
    id: 11,
    title: "Page of Pentacles",
    meaning:
      "배움과 시작의 에너지가 강해요. 인턴십, 새로운 업무, 스킬 향상에 좋은 시기입니다.",
  },
  {
    id: 12,
    title: "Knight of Pentacles",
    meaning:
      "성실함과 끈기로 승부하는 시기입니다. 꾸준한 노력과 책임감이 커리어에 큰 도움이 돼요.",
  },
  {
    id: 13,
    title: "Queen of Pentacles",
    meaning:
      "일과 가정의 균형을 잘 맞추는 능력이 돋보입니다. 현실적이고 실용적인 감각이 큰 무기예요.",
  },
  {
    id: 14,
    title: "King of Pentacles",
    meaning:
      "재정적 성공과 리더십이 조화를 이루는 시기입니다. 경영, 투자, 조직관리 분야에서 큰 능력을 발휘할 수 있어요.",
  },
];

const job_minor_swords = [
  {
    id: 1,
    title: "Ace of Swords",
    meaning:
      "명확한 결단과 새로운 아이디어로 돌파구가 열리는 시기입니다. 면접, 기획, 계약 등에 유리해요.",
  },
  {
    id: 2,
    title: "Two of Swords",
    meaning:
      "중요한 결정을 내려야 할 시기입니다. 갈등이나 선택의 기로에 놓일 수 있어요.",
  },
  {
    id: 3,
    title: "Three of Swords",
    meaning:
      "직장에서의 실망이나 배신감, 프로젝트의 실패 등이 있을 수 있어요. 감정 관리가 필요해요.",
  },
  {
    id: 4,
    title: "Four of Swords",
    meaning:
      "휴식과 재충전이 필요한 시기입니다. 과로로 인한 탈진을 주의하세요.",
  },
  {
    id: 5,
    title: "Five of Swords",
    meaning:
      "경쟁이나 정치적 갈등이 발생할 수 있어요. 너무 이기적으로 행동하지 않도록 주의하세요.",
  },
  {
    id: 6,
    title: "Six of Swords",
    meaning:
      "안정을 찾아가는 시기입니다. 직업적 전환, 환경 변화가 긍정적으로 작용할 수 있어요.",
  },
  {
    id: 7,
    title: "Seven of Swords",
    meaning:
      "신뢰할 수 없는 동료나 프로젝트가 있을 수 있어요. 조심스럽고 전략적으로 움직이세요.",
  },
  {
    id: 8,
    title: "Eight of Swords",
    meaning:
      "제약과 스트레스로 인해 방향을 잃을 수 있어요. 내면의 두려움을 마주해야 해요.",
  },
  {
    id: 9,
    title: "Nine of Swords",
    meaning:
      "불안과 걱정이 커지는 시기입니다. 일이 손에 잡히지 않거나 실수에 대한 고민이 많을 수 있어요.",
  },
  {
    id: 10,
    title: "Ten of Swords",
    meaning:
      "직장 내 큰 변화나 프로젝트 종료가 있을 수 있어요. 재시작의 기회로 삼아보세요.",
  },
  {
    id: 11,
    title: "Page of Swords",
    meaning:
      "호기심과 탐구심이 커지는 시기입니다. 조사, 연구, 보고서 작성 등에 능력을 발휘할 수 있어요.",
  },
  {
    id: 12,
    title: "Knight of Swords",
    meaning:
      "속도감 있는 결단과 추진력이 필요한 시기입니다. 너무 성급하게 행동하지 않도록 주의하세요.",
  },
  {
    id: 13,
    title: "Queen of Swords",
    meaning:
      "논리적 사고와 냉철한 판단이 빛나는 시기입니다. 객관적인 분석이 성공을 이끌 수 있어요.",
  },
  {
    id: 14,
    title: "King of Swords",
    meaning:
      "전문성, 판단력, 리더십이 중요합니다. 전략가적인 사고로 팀이나 프로젝트를 이끌 수 있어요.",
  },
];

const job_minor_wands = [
  {
    id: 1,
    title: "Ace of Wands",
    meaning:
      "새로운 직업 기회나 프로젝트가 시작되는 시기입니다. 열정적으로 도전하면 좋은 성과를 거둘 수 있어요.",
  },
  {
    id: 2,
    title: "Two of Wands",
    meaning:
      "계획과 전략이 중요한 시기입니다. 해외나 외부와의 협업 기회가 생길 수도 있어요.",
  },
  {
    id: 3,
    title: "Three of Wands",
    meaning:
      "노력의 결실이 서서히 보이는 시기입니다. 사업 확장이나 성장이 기대돼요.",
  },
  {
    id: 4,
    title: "Four of Wands",
    meaning:
      "직장 내 안정감과 성취가 따르는 시기입니다. 팀과 함께 성과를 축하하게 될 수 있어요.",
  },
  {
    id: 5,
    title: "Five of Wands",
    meaning:
      "경쟁이나 갈등이 발생할 수 있어요. 자신의 입장을 지키되, 협력을 통해 해결책을 찾아보세요.",
  },
  {
    id: 6,
    title: "Six of Wands",
    meaning:
      "성과와 인정이 따르는 시기입니다. 승진이나 프로젝트 성공 등 좋은 결과가 기대돼요.",
  },
  {
    id: 7,
    title: "Seven of Wands",
    meaning:
      "자리를 지키기 위한 경쟁이 치열할 수 있어요. 끈기 있게 밀고 나가야 할 때입니다.",
  },
  {
    id: 8,
    title: "Eight of Wands",
    meaning:
      "일이 빠르게 진행됩니다. 이메일, 커뮤니케이션, 출장 등이 활발해질 수 있어요.",
  },
  {
    id: 9,
    title: "Nine of Wands",
    meaning:
      "지치고 힘든 상황에서도 끝까지 버티는 힘이 필요해요. 곧 마무리가 보일 수 있어요.",
  },
  {
    id: 10,
    title: "Ten of Wands",
    meaning:
      "과도한 업무 부담으로 인해 스트레스를 받을 수 있어요. 업무 분담과 휴식이 필요합니다.",
  },
  {
    id: 11,
    title: "Page of Wands",
    meaning:
      "새로운 아이디어와 열정이 넘치는 시기입니다. 도전적인 자세가 기회를 불러올 수 있어요.",
  },
  {
    id: 12,
    title: "Knight of Wands",
    meaning:
      "변화와 이동이 있는 시기입니다. 이직이나 출장, 새로운 제안이 들어올 수 있어요.",
  },
  {
    id: 13,
    title: "Queen of Wands",
    meaning:
      "자신감과 리더십이 돋보이는 시기입니다. 팀을 이끄는 위치나 독립적인 역할에 유리해요.",
  },
  {
    id: 14,
    title: "King of Wands",
    meaning:
      "큰 그림을 보는 경영적 사고가 필요한 시기입니다. 목표 지향적인 추진력이 큰 성과로 이어질 수 있어요.",
  },
];

export {
  job_major,
  job_minor_cups,
  job_minor_pentacles,
  job_minor_swords,
  job_minor_wands,
};
