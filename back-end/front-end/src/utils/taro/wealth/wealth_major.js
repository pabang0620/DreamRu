const wealth_major = [
  {
    id: 0,
    title: "The Fool",
    meaning:
      "새로운 재정 기회가 나타날 수 있습니다. 하지만 준비 없는 투자는 위험할 수 있어요.",
  },
  {
    id: 1,
    title: "The Magician",
    meaning:
      "자신의 능력을 통해 수익을 창출할 수 있습니다. 창업이나 프리랜스에 유리한 시기입니다.",
  },
  {
    id: 2,
    title: "The High Priestess",
    meaning:
      "재정 상태가 겉으로는 드러나지 않지만, 직관을 믿고 투자하면 좋은 결과가 따릅니다.",
  },
  {
    id: 3,
    title: "The Empress",
    meaning:
      "경제적으로 풍요롭고 안정된 시기입니다. 수입이 증가하거나 자산이 늘어날 수 있어요.",
  },
  {
    id: 4,
    title: "The Emperor",
    meaning:
      "재정적으로 안정적이지만, 보수적인 접근이 필요합니다. 책임감 있는 지출과 계획이 중요합니다.",
  },
  {
    id: 5,
    title: "The Hierophant",
    meaning:
      "전통적인 방법으로 자산을 관리하면 좋은 결과가 나옵니다. 금융 전문가의 조언을 따르세요.",
  },
  {
    id: 6,
    title: "The Lovers",
    meaning:
      "금전적으로 중요한 결정을 내려야 할 시기입니다. 공동 투자나 계약에 주의가 필요합니다.",
  },
  {
    id: 7,
    title: "The Chariot",
    meaning:
      "자신감 있게 밀어붙이면 수익을 낼 수 있습니다. 적극적인 재테크가 유리한 시기예요.",
  },
  {
    id: 8,
    title: "Strength",
    meaning:
      "절제력과 인내심이 재정을 안정시킵니다. 장기적인 관점의 투자가 유리합니다.",
  },
  {
    id: 9,
    title: "The Hermit",
    meaning:
      "혼자 고민하기보다는 전문가의 조언이 필요한 시기입니다. 리스크가 큰 투자는 피하세요.",
  },
  {
    id: 10,
    title: "Wheel of Fortune",
    meaning:
      "뜻밖의 재정적 기회가 들어올 수 있습니다. 운에 맡기기보다 기회를 잘 포착하세요.",
  },
  {
    id: 11,
    title: "Justice",
    meaning:
      "공정한 거래와 계약이 재정 안정의 핵심입니다. 세금이나 법적 문제에 주의하세요.",
  },
  {
    id: 12,
    title: "The Hanged Man",
    meaning:
      "재정적으로 정체된 시기입니다. 지금은 소비보다 저축과 기다림이 중요합니다.",
  },
  {
    id: 13,
    title: "Death",
    meaning:
      "금전적 손실이 있을 수 있으나, 이는 새로운 재정 계획을 위한 전환점입니다.",
  },
  {
    id: 14,
    title: "Temperance",
    meaning:
      "지출과 수입의 균형이 잘 맞는 시기입니다. 절제된 소비와 중립적인 투자가 유리해요.",
  },
  {
    id: 15,
    title: "The Devil",
    meaning:
      "과소비나 충동구매, 혹은 금전 집착에 주의하세요. 카드빚이나 사기 조심!",
  },
  {
    id: 16,
    title: "The Tower",
    meaning:
      "예상치 못한 금전적 위기가 발생할 수 있습니다. 비상금이나 보험이 필요해요.",
  },
  {
    id: 17,
    title: "The Star",
    meaning:
      "장기적으로 희망적인 재정 흐름이 예상됩니다. 계획을 믿고 꾸준히 실행해 보세요.",
  },
  {
    id: 18,
    title: "The Moon",
    meaning:
      "금전적으로 혼란스러운 상황입니다. 투자 사기나 불확실한 제안에 주의가 필요해요.",
  },
  {
    id: 19,
    title: "The Sun",
    meaning:
      "수입이 늘어나거나 보너스, 계약 성사 등 좋은 소식이 들어올 수 있는 시기입니다.",
  },
  {
    id: 20,
    title: "Judgement",
    meaning:
      "과거의 금전적 판단이 현재 수익이나 손실로 이어집니다. 리셋하거나 회복의 기회가 있어요.",
  },
  {
    id: 21,
    title: "The World",
    meaning:
      "재정적으로 완성된 상태입니다. 해외 투자, 확장 사업, 큰 보상이 기대됩니다.",
  },
];

const wealth_minor_cups = [
  {
    id: 1,
    title: "Ace of Cups",
    meaning:
      "새로운 수익 기회가 열리는 시기입니다. 감정적인 만족도 높은 일에서 수입이 생길 수 있어요.",
  },
  {
    id: 2,
    title: "Two of Cups",
    meaning:
      "파트너십이나 공동 투자에서 이익을 얻을 수 있어요. 신뢰가 중요한 시기입니다.",
  },
  {
    id: 3,
    title: "Three of Cups",
    meaning:
      "지인이나 친구와의 협업에서 이익이 발생할 수 있습니다. 기쁨을 나눌 일이 생길 수도 있어요.",
  },
  {
    id: 4,
    title: "Four of Cups",
    meaning:
      "기회를 놓치고 있는 상태일 수 있어요. 새로운 제안에 열린 마음을 가져보세요.",
  },
  {
    id: 5,
    title: "Five of Cups",
    meaning:
      "과거의 실수나 손실로 실망할 수 있어요. 그러나 남은 기회를 잘 살펴보세요.",
  },
  {
    id: 6,
    title: "Six of Cups",
    meaning:
      "예전 거래처나 과거의 인연을 통해 금전적인 기회가 다시 찾아올 수 있어요.",
  },
  {
    id: 7,
    title: "Seven of Cups",
    meaning:
      "너무 많은 선택지로 혼란스러울 수 있습니다. 이상적인 제안에만 속지 마세요.",
  },
  {
    id: 8,
    title: "Eight of Cups",
    meaning:
      "더 이상 이익이 없는 사업이나 프로젝트에서 벗어나는 것이 이득일 수 있어요.",
  },
  {
    id: 9,
    title: "Nine of Cups",
    meaning:
      "금전적으로 만족스러운 시기입니다. 원하는 결과를 손에 넣을 수 있어요.",
  },
  {
    id: 10,
    title: "Ten of Cups",
    meaning:
      "가족이나 공동체를 통해 안정적인 재정 흐름이 기대됩니다. 유산, 증여도 포함될 수 있어요.",
  },
  {
    id: 11,
    title: "Page of Cups",
    meaning:
      "작지만 기분 좋은 수익이 생길 수 있어요. 감성적인 일이 수익으로 연결될 수 있어요.",
  },
  {
    id: 12,
    title: "Knight of Cups",
    meaning:
      "직관을 따르는 투자가 좋은 결과로 이어질 수 있어요. 감정적 소비는 주의해야 해요.",
  },
  {
    id: 13,
    title: "Queen of Cups",
    meaning:
      "돈을 모으기보다 나누고 싶은 시기입니다. 재정 감각이 예민해지는 때예요.",
  },
  {
    id: 14,
    title: "King of Cups",
    meaning:
      "감정과 이성을 조화롭게 사용해 안정적인 수익을 창출할 수 있는 능력이 있습니다.",
  },
];

const wealth_minor_pentacles = [
  {
    id: 1,
    title: "Ace of Pentacles",
    meaning:
      "새로운 수익의 기회가 열립니다. 현실적인 시작이 금전적 성과로 이어질 수 있어요.",
  },
  {
    id: 2,
    title: "Two of Pentacles",
    meaning:
      "지출과 수입의 균형을 잡는 것이 중요합니다. 자금 흐름을 잘 조절해야 해요.",
  },
  {
    id: 3,
    title: "Three of Pentacles",
    meaning:
      "협업을 통해 수익을 창출할 수 있어요. 실력을 인정받는 기회가 옵니다.",
  },
  {
    id: 4,
    title: "Four of Pentacles",
    meaning:
      "금전을 꽉 쥐고 놓지 않으려는 경향이 있습니다. 과도한 절약은 기회를 놓칠 수 있어요.",
  },
  {
    id: 5,
    title: "Five of Pentacles",
    meaning:
      "경제적인 어려움을 겪을 수 있는 시기입니다. 도움을 요청하는 용기가 필요해요.",
  },
  {
    id: 6,
    title: "Six of Pentacles",
    meaning:
      "금전적 도움을 주거나 받을 수 있습니다. 균형 있는 나눔이 행운을 부릅니다.",
  },
  {
    id: 7,
    title: "Seven of Pentacles",
    meaning:
      "금전적으로 결과가 더디게 나타날 수 있어요. 인내심이 필요한 시기입니다.",
  },
  {
    id: 8,
    title: "Eight of Pentacles",
    meaning:
      "꾸준한 노력과 반복이 수익을 만들어냅니다. 장인정신이 재정으로 이어지는 시기예요.",
  },
  {
    id: 9,
    title: "Nine of Pentacles",
    meaning:
      "경제적으로 독립적이고 여유 있는 상태입니다. 자산의 성장을 기대할 수 있어요.",
  },
  {
    id: 10,
    title: "Ten of Pentacles",
    meaning:
      "가족, 유산, 장기적 재산 관리와 같은 큰 금전 흐름이 있습니다. 재정 안정 최고조입니다.",
  },
  {
    id: 11,
    title: "Page of Pentacles",
    meaning:
      "작은 투자나 새로운 공부가 금전적 기회를 가져올 수 있어요. 실용적인 아이디어가 필요합니다.",
  },
  {
    id: 12,
    title: "Knight of Pentacles",
    meaning:
      "신중하고 꾸준한 재정 관리가 수익을 가져옵니다. 느리지만 확실한 돈의 흐름이에요.",
  },
  {
    id: 13,
    title: "Queen of Pentacles",
    meaning:
      "가정과 재정을 균형 있게 관리할 수 있습니다. 실속 있는 소비와 저축이 어울립니다.",
  },
  {
    id: 14,
    title: "King of Pentacles",
    meaning:
      "재정적으로 매우 안정된 상태입니다. 부동산, 장기 투자에 강한 운이 들어와 있어요.",
  },
];

const wealth_minor_swords = [
  {
    id: 1,
    title: "Ace of Swords",
    meaning:
      "명확한 판단력으로 수익을 낼 수 있는 시기입니다. 논리적 분석이 수익의 열쇠예요.",
  },
  {
    id: 2,
    title: "Two of Swords",
    meaning:
      "금전적인 결정을 내리기 어려운 시기입니다. 직감보다 데이터와 분석이 우선입니다.",
  },
  {
    id: 3,
    title: "Three of Swords",
    meaning:
      "예상치 못한 손해나 금전 갈등이 발생할 수 있어요. 감정에 휘둘리지 마세요.",
  },
  {
    id: 4,
    title: "Four of Swords",
    meaning: "소득이나 투자가 정체되는 시기입니다. 재정 계획을 재정비해보세요.",
  },
  {
    id: 5,
    title: "Five of Swords",
    meaning:
      "사기나 계약상 갈등에 주의하세요. 이기려는 마음이 손실을 부를 수 있어요.",
  },
  {
    id: 6,
    title: "Six of Swords",
    meaning:
      "금전 문제를 해결하기 위해 이동이나 변화가 필요합니다. 이직, 재배치 등이 유리할 수 있어요.",
  },
  {
    id: 7,
    title: "Seven of Swords",
    meaning:
      "숨겨진 지출이나 부정확한 계약에 주의하세요. 꼼꼼한 확인이 필수입니다.",
  },
  {
    id: 8,
    title: "Eight of Swords",
    meaning:
      "금전적으로 얽매인 느낌을 받을 수 있어요. 대출이나 고정 지출에 유의하세요.",
  },
  {
    id: 9,
    title: "Nine of Swords",
    meaning:
      "돈에 대한 걱정과 불안이 커지는 시기입니다. 실제보다 과도하게 걱정하고 있을 수도 있어요.",
  },
  {
    id: 10,
    title: "Ten of Swords",
    meaning:
      "금전적인 손실이나 실패를 겪을 수 있습니다. 하지만 회복의 가능성도 내포되어 있어요.",
  },
  {
    id: 11,
    title: "Page of Swords",
    meaning:
      "정보 수집과 분석이 중요한 시기입니다. 잘못된 정보에 속지 않도록 주의하세요.",
  },
  {
    id: 12,
    title: "Knight of Swords",
    meaning:
      "빠른 결단이 필요한 상황입니다. 다만 성급한 투자는 피하고 이성적으로 판단하세요.",
  },
  {
    id: 13,
    title: "Queen of Swords",
    meaning:
      "이성적인 태도가 재정적 안정으로 이어집니다. 감정적 소비는 줄이고 분석 위주로 판단하세요.",
  },
  {
    id: 14,
    title: "King of Swords",
    meaning:
      "재정 전문가나 리더로서의 능력이 발휘됩니다. 금전 관리를 명확하게 할 수 있어요.",
  },
];

const wealth_minor_wands = [
  {
    id: 1,
    title: "Ace of Wands",
    meaning:
      "금전적으로 새로운 기회가 시작됩니다. 창의적인 아이디어가 수익으로 연결될 수 있어요.",
  },
  {
    id: 2,
    title: "Two of Wands",
    meaning:
      "금전 계획을 세우기 좋은 시기입니다. 해외 거래나 확장 사업에 관심을 가져보세요.",
  },
  {
    id: 3,
    title: "Three of Wands",
    meaning:
      "투자나 사업이 점차 성과를 보이기 시작합니다. 수출입, 외부 확장이 유리해요.",
  },
  {
    id: 4,
    title: "Four of Wands",
    meaning:
      "재정적으로 안정감을 느낄 수 있어요. 계약 성사나 보너스가 들어올 가능성도 있습니다.",
  },
  {
    id: 5,
    title: "Five of Wands",
    meaning:
      "금전 경쟁이 심한 상황입니다. 경쟁에서 이기기 위해 전략적인 판단이 필요해요.",
  },
  {
    id: 6,
    title: "Six of Wands",
    meaning:
      "성과가 인정받고 금전적 보상도 따르는 시기입니다. 명예와 수입이 동시에 올라가요.",
  },
  {
    id: 7,
    title: "Seven of Wands",
    meaning:
      "재정적으로 방어적 자세가 필요합니다. 자신의 이익을 지키기 위한 노력이 필요해요.",
  },
  {
    id: 8,
    title: "Eight of Wands",
    meaning:
      "빠른 속도로 수익이 들어오거나 계약이 체결될 수 있어요. 속도감 있는 전개가 예상됩니다.",
  },
  {
    id: 9,
    title: "Nine of Wands",
    meaning:
      "지금까지의 노력 덕분에 재정적으로 안정되고 있지만, 아직 긴장을 늦추지 마세요.",
  },
  {
    id: 10,
    title: "Ten of Wands",
    meaning:
      "책임이 너무 많아 금전적으로 부담이 커질 수 있어요. 혼자 감당하지 마세요.",
  },
  {
    id: 11,
    title: "Page of Wands",
    meaning:
      "작은 수입이나 기회가 생길 수 있어요. 열정을 가지고 도전해보면 돈이 따릅니다.",
  },
  {
    id: 12,
    title: "Knight of Wands",
    meaning:
      "금전적으로 빠르게 움직이고 싶어지는 시기예요. 하지만 섣부른 투자는 주의가 필요합니다.",
  },
  {
    id: 13,
    title: "Queen of Wands",
    meaning:
      "자기 주도적인 사업이나 부업이 수익으로 이어질 수 있어요. 자신감을 가지세요.",
  },
  {
    id: 14,
    title: "King of Wands",
    meaning:
      "사업가적 기질이 발휘됩니다. 리더십과 추진력이 금전운을 높이는 열쇠입니다.",
  },
];

export {
  wealth_major,
  wealth_minor_cups,
  wealth_minor_pentacles,
  wealth_minor_swords,
  wealth_minor_wands,
};
