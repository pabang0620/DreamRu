const romance_major = [
  {
    id: 0,
    title: "The Fool",
    meaning:
      "새로운 인연이 시작될 수 있는 시기입니다. 두려움 없이 마음을 열어보세요.",
  },
  {
    id: 1,
    title: "The Magician",
    meaning:
      "당신의 매력이 빛나는 순간입니다. 능동적으로 다가가면 좋은 인연이 생길 수 있어요.",
  },
  {
    id: 2,
    title: "The High Priestess",
    meaning:
      "상대의 진심을 알기 어려운 시기입니다. 직감과 관찰력이 필요합니다.",
  },
  {
    id: 3,
    title: "The Empress",
    meaning: "사랑이 무르익는 시기입니다. 풍요롭고 따뜻한 연애를 할 수 있어요.",
  },
  {
    id: 4,
    title: "The Emperor",
    meaning:
      "상대가 신뢰할 수 있는 사람일 수 있으나 다소 권위적일 수 있어요. 안정감은 크지만 유연함도 필요해요.",
  },
  {
    id: 5,
    title: "The Hierophant",
    meaning:
      "전통적인 연애를 선호하는 사람과의 인연이 있을 수 있어요. 가족이나 주변의 인정을 받을 수 있는 관계입니다.",
  },
  {
    id: 6,
    title: "The Lovers",
    meaning:
      "연애운이 매우 상승 중입니다. 강한 끌림이나 중요한 선택이 앞에 놓일 수 있어요.",
  },
  {
    id: 7,
    title: "The Chariot",
    meaning:
      "당신이 주도하는 연애가 될 수 있어요. 밀고 나갈 용기가 필요한 시기입니다.",
  },
  {
    id: 8,
    title: "Strength",
    meaning:
      "인내와 배려가 필요한 관계입니다. 감정 조절이 연애의 키포인트가 됩니다.",
  },
  {
    id: 9,
    title: "The Hermit",
    meaning:
      "혼자만의 시간이 필요한 시기입니다. 연애보다 자기 내면을 돌보는 게 우선이에요.",
  },
  {
    id: 10,
    title: "Wheel of Fortune",
    meaning:
      "뜻밖의 인연이나 우연한 만남이 연애로 이어질 수 있습니다. 운명의 흐름을 믿어보세요.",
  },
  {
    id: 11,
    title: "Justice",
    meaning:
      "상호 간의 균형이 중요합니다. 공평한 관계를 유지하려는 노력이 필요해요.",
  },
  {
    id: 12,
    title: "The Hanged Man",
    meaning: "답답한 연애 상황일 수 있어요. 잠시 기다림이 필요한 시기입니다.",
  },
  {
    id: 13,
    title: "Death",
    meaning:
      "기존 관계의 종료 또는 새로운 관계로의 변화가 예상됩니다. 새로운 시작의 기회가 될 수 있어요.",
  },
  {
    id: 14,
    title: "Temperance",
    meaning:
      "서로 다른 사람이라도 조화롭게 이어질 수 있는 연애입니다. 균형과 배려가 열쇠입니다.",
  },
  {
    id: 15,
    title: "The Devil",
    meaning:
      "집착이나 유혹이 강한 연애일 수 있어요. 상대방과의 관계를 잘 판단하세요.",
  },
  {
    id: 16,
    title: "The Tower",
    meaning:
      "예기치 못한 충돌이나 이별이 있을 수 있어요. 현재 관계를 되돌아볼 필요가 있어요.",
  },
  {
    id: 17,
    title: "The Star",
    meaning: "희망적인 연애가 시작될 수 있어요. 긍정적인 기대를 해도 좋아요.",
  },
  {
    id: 18,
    title: "The Moon",
    meaning:
      "혼란과 오해가 발생할 수 있어요. 감정에 휘둘리지 않도록 주의하세요.",
  },
  {
    id: 19,
    title: "The Sun",
    meaning:
      "밝고 긍정적인 연애운입니다. 함께하는 시간이 행복으로 가득 찰 수 있어요.",
  },
  {
    id: 20,
    title: "Judgement",
    meaning:
      "과거의 인연이 다시 나타날 수 있습니다. 또는 잘못된 판단을 바로잡을 기회입니다.",
  },
  {
    id: 21,
    title: "The World",
    meaning:
      "완전한 연애, 운명적인 인연이 기대되는 카드입니다. 관계가 결실을 맺을 수 있어요.",
  },
];

const romance_minor_cups = [
  {
    id: 1,
    title: "Ace of Cups",
    meaning: "사랑의 시작을 알리는 카드입니다. 설레는 인연이 다가오고 있어요.",
  },
  {
    id: 2,
    title: "Two of Cups",
    meaning:
      "상호적인 사랑과 진실된 교감이 이루어지는 시기입니다. 좋은 관계로 발전할 가능성이 높습니다.",
  },
  {
    id: 3,
    title: "Three of Cups",
    meaning:
      "즐거운 만남과 소개팅, 친구 이상의 관계로 발전할 수 있는 분위기입니다.",
  },
  {
    id: 4,
    title: "Four of Cups",
    meaning:
      "마음이 닫혀 있거나 권태기를 겪고 있을 수 있어요. 주변의 관심을 놓치지 마세요.",
  },
  {
    id: 5,
    title: "Five of Cups",
    meaning:
      "이별이나 실망감이 있는 상황입니다. 그러나 새로운 기회도 가까이에 있습니다.",
  },
  {
    id: 6,
    title: "Six of Cups",
    meaning:
      "과거의 인연이 다시 떠오르거나, 추억 속 사람이 다시 나타날 수 있어요.",
  },
  {
    id: 7,
    title: "Seven of Cups",
    meaning:
      "환상과 현실 사이에서 갈등할 수 있는 시기입니다. 감정에만 의존하지 마세요.",
  },
  {
    id: 8,
    title: "Eight of Cups",
    meaning:
      "감정적으로 멀어지고 있는 관계일 수 있어요. 단호한 선택이 필요한 때입니다.",
  },
  {
    id: 9,
    title: "Nine of Cups",
    meaning:
      "사랑에 있어 원하는 것이 이루어질 수 있는 시기입니다. 만족스러운 관계가 기대돼요.",
  },
  {
    id: 10,
    title: "Ten of Cups",
    meaning:
      "이상적인 관계나 결혼을 암시합니다. 감정적으로 매우 안정된 시기입니다.",
  },
  {
    id: 11,
    title: "Page of Cups",
    meaning:
      "설레는 고백이나 연락이 오갈 수 있는 시기입니다. 감정을 표현해 보세요.",
  },
  {
    id: 12,
    title: "Knight of Cups",
    meaning: "로맨틱한 사람이 다가올 수 있습니다. 감성적인 만남이 예상돼요.",
  },
  {
    id: 13,
    title: "Queen of Cups",
    meaning:
      "상대에 대한 깊은 이해와 공감이 중요한 시기입니다. 부드러운 사랑이 필요한 때예요.",
  },
  {
    id: 14,
    title: "King of Cups",
    meaning:
      "감정을 잘 조절하는 성숙한 사람이 인연이 될 수 있어요. 안정적인 관계가 형성됩니다.",
  },
];

const romance_minor_pentacles = [
  {
    id: 1,
    title: "Ace of Pentacles",
    meaning:
      "연애에 있어 안정적인 관계의 시작입니다. 현실적인 기반 위의 만남이 기대돼요.",
  },
  {
    id: 2,
    title: "Two of Pentacles",
    meaning:
      "두 사람 사이의 균형을 맞추기 위한 노력이 필요합니다. 상황 조율이 중요해요.",
  },
  {
    id: 3,
    title: "Three of Pentacles",
    meaning:
      "서로에 대한 이해와 협력이 깊어지는 시기입니다. 함께 발전해 나갈 수 있어요.",
  },
  {
    id: 4,
    title: "Four of Pentacles",
    meaning:
      "상대를 놓치지 않으려는 집착이 있을 수 있어요. 관계를 지나치게 소유하려 들지 마세요.",
  },
  {
    id: 5,
    title: "Five of Pentacles",
    meaning:
      "소외감이나 외로움을 느낄 수 있는 시기입니다. 상대와의 거리감을 좁힐 필요가 있어요.",
  },
  {
    id: 6,
    title: "Six of Pentacles",
    meaning:
      "주고받는 마음이 균형을 이루는 관계입니다. 서로를 위한 배려가 연애운을 좋게 만들어요.",
  },
  {
    id: 7,
    title: "Seven of Pentacles",
    meaning:
      "관계의 발전이 더디게 느껴질 수 있어요. 인내심을 가지고 기다려야 할 시기입니다.",
  },
  {
    id: 8,
    title: "Eight of Pentacles",
    meaning:
      "관계에 정성과 노력을 기울이면 좋은 결과가 생깁니다. 성실한 자세가 사랑을 키워요.",
  },
  {
    id: 9,
    title: "Nine of Pentacles",
    meaning:
      "자기 자신을 사랑하고 만족하는 것이 먼저입니다. 독립적인 매력이 돋보이는 시기예요.",
  },
  {
    id: 10,
    title: "Ten of Pentacles",
    meaning:
      "가정적이고 안정적인 연애가 이루어질 수 있습니다. 결혼 운도 들어와 있는 시기예요.",
  },
  {
    id: 11,
    title: "Page of Pentacles",
    meaning:
      "서툴지만 진심 어린 접근이 있을 수 있어요. 상대의 노력을 귀엽게 봐줄 필요가 있어요.",
  },
  {
    id: 12,
    title: "Knight of Pentacles",
    meaning:
      "느리지만 확실한 사랑이 찾아옵니다. 신뢰할 수 있는 사람과의 인연이 생길 수 있어요.",
  },
  {
    id: 13,
    title: "Queen of Pentacles",
    meaning:
      "현실적이면서도 따뜻한 사랑을 할 수 있습니다. 상대에게 안정감을 주는 존재가 됩니다.",
  },
  {
    id: 14,
    title: "King of Pentacles",
    meaning:
      "책임감 있고 성숙한 사랑이 가능한 시기입니다. 결혼을 염두에 둘 만한 인연일 수 있어요.",
  },
];
const romance_minor_swords = [
  {
    id: 1,
    title: "Ace of Swords",
    meaning:
      "연애에 있어 진실과 명확한 의사소통이 필요한 시기입니다. 감정보다 이성적 판단이 중요해요.",
  },
  {
    id: 2,
    title: "Two of Swords",
    meaning:
      "마음을 정하지 못하고 있는 상황입니다. 선택의 기로에 서 있거나 양다리의 가능성도 있습니다.",
  },
  {
    id: 3,
    title: "Three of Swords",
    meaning:
      "상처받는 연애, 이별이나 오해로 인한 아픔이 예상됩니다. 감정 조절이 필요해요.",
  },
  {
    id: 4,
    title: "Four of Swords",
    meaning:
      "관계에서 거리두기가 필요한 시기입니다. 휴식과 정리가 필요할 수 있어요.",
  },
  {
    id: 5,
    title: "Five of Swords",
    meaning:
      "상대와의 갈등이나 자존심 싸움이 격해질 수 있습니다. 감정적 대응을 자제하세요.",
  },
  {
    id: 6,
    title: "Six of Swords",
    meaning:
      "문제 해결을 위한 이동이나 정리가 필요한 시기입니다. 관계를 재정비하는 시기로 볼 수 있어요.",
  },
  {
    id: 7,
    title: "Seven of Swords",
    meaning:
      "비밀 연애나 감춰진 감정이 있을 수 있습니다. 신뢰 문제가 생길 수 있어요.",
  },
  {
    id: 8,
    title: "Eight of Swords",
    meaning:
      "자기 감정에 얽매여 행동하지 못하고 있는 상황입니다. 용기가 필요한 시기예요.",
  },
  {
    id: 9,
    title: "Nine of Swords",
    meaning:
      "불안과 걱정이 관계에 영향을 주고 있어요. 혼자 끙끙 앓는 것보단 솔직한 대화가 필요합니다.",
  },
  {
    id: 10,
    title: "Ten of Swords",
    meaning:
      "관계가 끝나가는 조짐이 보일 수 있습니다. 하지만 새로운 시작의 전조일 수도 있어요.",
  },
  {
    id: 11,
    title: "Page of Swords",
    meaning:
      "상대의 속마음을 궁금해하는 시기입니다. 직접적인 대화보다는 관찰이 필요한 때예요.",
  },
  {
    id: 12,
    title: "Knight of Swords",
    meaning:
      "급하게 시작되는 연애일 수 있지만 감정보다 논리가 앞설 수 있어요. 속도를 조절하세요.",
  },
  {
    id: 13,
    title: "Queen of Swords",
    meaning:
      "이성적인 시각으로 연애를 바라보게 됩니다. 감정보다 기준과 경계가 먼저일 수 있어요.",
  },
  {
    id: 14,
    title: "King of Swords",
    meaning:
      "상대방이 감정 표현이 서툴 수 있습니다. 하지만 진심은 깊을 수 있어요. 냉정함 속 따뜻함을 이해하세요.",
  },
];
const romance_minor_wands = [
  {
    id: 1,
    title: "Ace of Wands",
    meaning:
      "연애에 있어 새로운 열정이 생깁니다. 새로운 사람에게 강한 끌림이 느껴질 수 있어요.",
  },
  {
    id: 2,
    title: "Two of Wands",
    meaning:
      "연애에 대한 계획과 고민이 있는 시기입니다. 확신을 가지기 전에 신중히 결정하세요.",
  },
  {
    id: 3,
    title: "Three of Wands",
    meaning:
      "멀리 있는 인연이나 장거리 연애의 기회가 있을 수 있습니다. 기다림이 열쇠가 됩니다.",
  },
  {
    id: 4,
    title: "Four of Wands",
    meaning: "연애에 안정감이 생기고, 관계의 진전이나 약속이 생길 수 있어요.",
  },
  {
    id: 5,
    title: "Five of Wands",
    meaning:
      "감정적인 충돌이나 삼각관계 가능성이 있습니다. 경쟁이 치열할 수 있어요.",
  },
  {
    id: 6,
    title: "Six of Wands",
    meaning:
      "호감 받기 좋은 시기입니다. 연애운이 상승세이며 주변의 관심도 커집니다.",
  },
  {
    id: 7,
    title: "Seven of Wands",
    meaning:
      "관계를 지키기 위한 노력이 필요한 때입니다. 경쟁자나 외부 방해가 있을 수 있어요.",
  },
  {
    id: 8,
    title: "Eight of Wands",
    meaning:
      "빠른 전개가 예상됩니다. 급진적인 감정의 변화나 갑작스러운 만남이 있을 수 있어요.",
  },
  {
    id: 9,
    title: "Nine of Wands",
    meaning:
      "상처받은 경험으로 인해 마음의 벽이 있을 수 있어요. 신중하지만 열린 마음이 필요합니다.",
  },
  {
    id: 10,
    title: "Ten of Wands",
    meaning:
      "관계가 부담스럽게 느껴질 수 있습니다. 혼자 너무 많은 걸 짊어지고 있진 않은가요?",
  },
  {
    id: 11,
    title: "Page of Wands",
    meaning:
      "새로운 설렘과 호기심이 생기는 시기입니다. 대화와 표현이 연애의 열쇠예요.",
  },
  {
    id: 12,
    title: "Knight of Wands",
    meaning:
      "열정적인 관계가 시작될 수 있지만, 감정의 지속성에 유의하세요. 빠르게 시작해도 쉽게 식을 수 있어요.",
  },
  {
    id: 13,
    title: "Queen of Wands",
    meaning:
      "자신감 있는 모습이 상대를 끌어당깁니다. 당당한 태도가 매력을 발산해요.",
  },
  {
    id: 14,
    title: "King of Wands",
    meaning:
      "강한 카리스마와 리더십이 있는 사람과의 인연이 생길 수 있어요. 열정적이지만 주도적인 관계가 될 수 있습니다.",
  },
];
export {
  romance_major,
  romance_minor_cups,
  romance_minor_pentacles,
  romance_minor_swords,
  romance_minor_wands,
};
