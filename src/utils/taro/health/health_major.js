const healthMajor = [
  {
    id: 0,
    title: "The Fool",
    meaning:
      "새로운 환경에서의 건강 변화에 주의하세요. 사고나 부주의로 인한 문제에 조심이 필요합니다.",
  },
  {
    id: 1,
    title: "The Magician",
    meaning:
      "체력과 회복력이 좋은 시기입니다. 운동을 시작하기에 적절한 때입니다.",
  },
  {
    id: 2,
    title: "The High Priestess",
    meaning:
      "겉으로 드러나지 않는 건강 문제에 유의해야 합니다. 정기적인 검진이 필요할 수 있어요.",
  },
  {
    id: 3,
    title: "The Empress",
    meaning:
      "신체적으로 안정적이고 회복력이 좋은 시기입니다. 여성 건강이나 임신 관련 주제에 특히 강합니다.",
  },
  {
    id: 4,
    title: "The Emperor",
    meaning:
      "규칙적인 생활이 건강에 도움이 됩니다. 관절, 뼈 건강에 신경 써야 할 수 있어요.",
  },
  {
    id: 5,
    title: "The Hierophant",
    meaning:
      "의료 전문가의 조언을 따르는 것이 좋습니다. 전통적인 치료법이 효과를 볼 수 있어요.",
  },
  {
    id: 6,
    title: "The Lovers",
    meaning:
      "건강은 나뿐 아니라 가족, 파트너와의 관계 속에서도 영향을 받을 수 있어요. 스트레스를 공유하지 않도록 주의하세요.",
  },
  {
    id: 7,
    title: "The Chariot",
    meaning:
      "에너지가 넘치고 활동성이 좋은 시기입니다. 무리한 운동은 오히려 독이 될 수 있으니 주의하세요.",
  },
  {
    id: 8,
    title: "Strength",
    meaning:
      "면역력과 회복력이 매우 좋은 시기입니다. 마음의 힘이 건강을 지탱하고 있어요.",
  },
  {
    id: 9,
    title: "The Hermit",
    meaning:
      "심리적인 고립감이 신체 건강에도 영향을 줄 수 있어요. 우울감과 외로움 관리가 중요합니다.",
  },
  {
    id: 10,
    title: "Wheel of Fortune",
    meaning:
      "건강 상태에 변화가 있을 수 있어요. 불규칙한 흐름에 대비하는 것이 좋아요.",
  },
  {
    id: 11,
    title: "Justice",
    meaning:
      "균형 잡힌 식단과 수면이 중요한 시기입니다. 과도한 편중이 건강을 해칠 수 있어요.",
  },
  {
    id: 12,
    title: "The Hanged Man",
    meaning:
      "건강 문제가 정체되거나 회복이 지연될 수 있어요. 인내심을 가지고 접근해야 해요.",
  },
  {
    id: 13,
    title: "Death",
    meaning:
      "생활 습관의 근본적인 전환이 필요합니다. 건강의 큰 전환점이 올 수 있어요.",
  },
  {
    id: 14,
    title: "Temperance",
    meaning:
      "몸과 마음의 균형이 중요한 시기입니다. 절제와 조절이 건강 유지의 핵심이에요.",
  },
  {
    id: 15,
    title: "The Devil",
    meaning:
      "중독, 과음, 과식 등에 주의해야 합니다. 건강에 해로운 습관을 끊는 것이 급선무예요.",
  },
  {
    id: 16,
    title: "The Tower",
    meaning:
      "갑작스러운 건강 이상이나 사고에 주의가 필요합니다. 보험이나 응급대책을 점검하세요.",
  },
  {
    id: 17,
    title: "The Star",
    meaning:
      "회복과 치유의 에너지가 강한 시기입니다. 건강에 긍정적인 변화가 일어날 수 있어요.",
  },
  {
    id: 18,
    title: "The Moon",
    meaning:
      "불면증이나 정신적인 스트레스에 주의가 필요합니다. 수면의 질이 건강에 큰 영향을 줍니다.",
  },
  {
    id: 19,
    title: "The Sun",
    meaning: "건강운이 매우 좋은 시기입니다. 활력 넘치고 면역력도 높아져요.",
  },
  {
    id: 20,
    title: "Judgement",
    meaning:
      "건강에 대한 경고를 받는 시기일 수 있습니다. 검진을 통해 문제를 조기에 발견할 수 있어요.",
  },
  {
    id: 21,
    title: "The World",
    meaning:
      "건강적으로 완성되고 균형 잡힌 시기입니다. 전체적인 몸 상태가 매우 양호합니다.",
  },
];

const health_minor_cups = [
  {
    id: 1,
    title: "Ace of Cups",
    meaning:
      "정서적 회복이 건강에 긍정적인 영향을 줍니다. 스트레스 해소가 잘 되고 있는 상태입니다.",
  },
  {
    id: 2,
    title: "Two of Cups",
    meaning:
      "마음의 안정이 신체 건강에도 도움이 되는 시기입니다. 인간관계에서 힘을 얻을 수 있어요.",
  },
  {
    id: 3,
    title: "Three of Cups",
    meaning:
      "친구나 지인과의 시간은 정신 건강에 큰 도움이 됩니다. 다만 과음은 피하세요.",
  },
  {
    id: 4,
    title: "Four of Cups",
    meaning:
      "무기력함이나 정서적 권태가 건강에 영향을 줄 수 있어요. 활력을 되찾는 노력이 필요합니다.",
  },
  {
    id: 5,
    title: "Five of Cups",
    meaning:
      "우울감이나 상실감이 건강을 저하시키는 요인입니다. 마음의 회복이 우선이에요.",
  },
  {
    id: 6,
    title: "Six of Cups",
    meaning:
      "과거의 감정이나 기억이 건강 상태에 영향을 줄 수 있어요. 내면 정리가 필요합니다.",
  },
  {
    id: 7,
    title: "Seven of Cups",
    meaning:
      "과도한 걱정이나 환상 속에서 실제 건강 문제를 놓칠 수 있어요. 명확한 진단이 중요합니다.",
  },
  {
    id: 8,
    title: "Eight of Cups",
    meaning:
      "감정적인 피로감이 누적된 상태입니다. 휴식과 거리두기가 회복에 도움됩니다.",
  },
  {
    id: 9,
    title: "Nine of Cups",
    meaning:
      "전반적으로 건강이 양호합니다. 과식이나 과도한 안일함에는 주의하세요.",
  },
  {
    id: 10,
    title: "Ten of Cups",
    meaning:
      "정신적, 감정적 안정이 신체 건강까지 긍정적으로 이끌고 있어요. 좋은 상태입니다.",
  },
  {
    id: 11,
    title: "Page of Cups",
    meaning:
      "건강에 대한 관심이 생기기 시작한 시기입니다. 아직은 조심스럽고 감성적인 반응이 앞설 수 있어요.",
  },
  {
    id: 12,
    title: "Knight of Cups",
    meaning:
      "컨디션이 일정하지 않을 수 있어요. 기분에 따라 건강도 영향을 받을 수 있으니 주의하세요.",
  },
  {
    id: 13,
    title: "Queen of Cups",
    meaning:
      "감정의 균형이 신체 건강에 도움이 됩니다. 명상이나 휴식이 큰 도움이 돼요.",
  },
  {
    id: 14,
    title: "King of Cups",
    meaning:
      "감정을 잘 다스리고 있어 건강에도 긍정적입니다. 특히 정신적 안정이 강점이에요.",
  },
];

const health_minor_pentacles = [
  {
    id: 1,
    title: "Ace of Pentacles",
    meaning:
      "건강 관리의 새로운 시작입니다. 식단, 운동, 검진 등 구체적인 실천이 효과를 봅니다.",
  },
  {
    id: 2,
    title: "Two of Pentacles",
    meaning:
      "생활 패턴의 균형이 필요합니다. 과로하거나 한쪽으로 치우치지 않도록 하세요.",
  },
  {
    id: 3,
    title: "Three of Pentacles",
    meaning:
      "전문가와의 협업을 통해 건강을 개선할 수 있습니다. 팀 기반 운동이나 재활 치료가 좋습니다.",
  },
  {
    id: 4,
    title: "Four of Pentacles",
    meaning:
      "건강에 대한 과도한 집착이 오히려 스트레스가 될 수 있어요. 유연함이 필요합니다.",
  },
  {
    id: 5,
    title: "Five of Pentacles",
    meaning:
      "체력 저하나 질병, 외로움으로 인한 건강 악화가 있을 수 있어요. 도움을 요청하는 용기가 필요합니다.",
  },
  {
    id: 6,
    title: "Six of Pentacles",
    meaning:
      "주변의 도움이나 치유 에너지가 건강 회복에 큰 도움이 됩니다. 치료비 관련 문제도 해결될 수 있어요.",
  },
  {
    id: 7,
    title: "Seven of Pentacles",
    meaning:
      "건강 개선의 결과가 더디게 나타날 수 있어요. 인내심을 가지고 꾸준히 관리하세요.",
  },
  {
    id: 8,
    title: "Eight of Pentacles",
    meaning:
      "규칙적인 관리가 건강을 탄탄하게 만들어줍니다. 루틴을 지키는 것이 핵심입니다.",
  },
  {
    id: 9,
    title: "Nine of Pentacles",
    meaning:
      "스스로 건강을 잘 관리하고 있는 시기입니다. 여유로운 상태에서의 건강 유지가 가능합니다.",
  },
  {
    id: 10,
    title: "Ten of Pentacles",
    meaning:
      "가족력이나 유전 질환에 관심을 둘 필요가 있어요. 장기적인 건강 계획이 중요합니다.",
  },
  {
    id: 11,
    title: "Page of Pentacles",
    meaning:
      "건강에 대한 새로운 관심이 생기는 시기입니다. 기본 검진부터 차근차근 시작해보세요.",
  },
  {
    id: 12,
    title: "Knight of Pentacles",
    meaning:
      "건강을 성실하게 잘 관리할 수 있는 시기입니다. 느리지만 확실한 개선이 기대돼요.",
  },
  {
    id: 13,
    title: "Queen of Pentacles",
    meaning:
      "자기 돌봄이 잘 이루어지고 있습니다. 안정감 있는 식생활과 휴식이 건강을 지켜줍니다.",
  },
  {
    id: 14,
    title: "King of Pentacles",
    meaning:
      "신체적 안정감이 뛰어난 시기입니다. 전반적으로 건강 상태가 양호하며 회복력도 좋습니다.",
  },
];

const health_minor_swords = [
  {
    id: 1,
    title: "Ace of Swords",
    meaning:
      "명확한 판단을 통해 건강 문제를 해결할 수 있습니다. 진단이나 검사가 필요한 시기입니다.",
  },
  {
    id: 2,
    title: "Two of Swords",
    meaning:
      "건강에 대해 결정을 내리지 못하고 미루는 중입니다. 신속한 판단이 필요합니다.",
  },
  {
    id: 3,
    title: "Three of Swords",
    meaning:
      "심장, 가슴, 호흡기와 관련된 질환이나 상처에 주의가 필요합니다. 감정적 상처가 신체에 영향을 줄 수 있어요.",
  },
  {
    id: 4,
    title: "Four of Swords",
    meaning:
      "휴식이 절실한 시기입니다. 회복을 위해 충분한 수면과 정적인 시간이 필요해요.",
  },
  {
    id: 5,
    title: "Five of Swords",
    meaning:
      "스트레스성 질환이나 두통, 신경계 문제에 주의하세요. 지나친 경쟁은 건강에 해로울 수 있어요.",
  },
  {
    id: 6,
    title: "Six of Swords",
    meaning:
      "점진적인 회복이 이루어지고 있습니다. 환경을 바꾸면 건강에 긍정적인 영향이 있어요.",
  },
  {
    id: 7,
    title: "Seven of Swords",
    meaning:
      "숨겨진 증상이나 감춰진 병이 있을 수 있어요. 조용히 진행되는 증상에 주의가 필요합니다.",
  },
  {
    id: 8,
    title: "Eight of Swords",
    meaning:
      "건강에 대한 두려움이나 억눌림이 심리적 압박으로 작용할 수 있어요. 마음을 여는 게 먼저입니다.",
  },
  {
    id: 9,
    title: "Nine of Swords",
    meaning:
      "불면증, 불안, 우울 등 정신적인 문제에 주의하세요. 전문가의 상담이 필요할 수 있어요.",
  },
  {
    id: 10,
    title: "Ten of Swords",
    meaning:
      "신체적 한계에 도달했을 수 있어요. 극심한 피로, 탈진, 만성 통증 등이 있을 수 있습니다.",
  },
  {
    id: 11,
    title: "Page of Swords",
    meaning:
      "건강 정보를 많이 찾는 시기입니다. 하지만 잘못된 정보에 속지 않도록 주의하세요.",
  },
  {
    id: 12,
    title: "Knight of Swords",
    meaning:
      "건강 문제를 과감하게 해결하려는 의지가 있지만, 무리한 선택은 자제하세요.",
  },
  {
    id: 13,
    title: "Queen of Swords",
    meaning:
      "이성적인 건강 관리가 필요합니다. 감정보다 데이터와 루틴을 따르는 게 좋습니다.",
  },
  {
    id: 14,
    title: "King of Swords",
    meaning:
      "건강에 대해 전문가적인 접근이 가능한 시기입니다. 통제력 있는 관리가 잘 이루어져요.",
  },
];

const health_minor_wands = [
  {
    id: 1,
    title: "Ace of Wands",
    meaning:
      "활력이 넘치고 새로운 에너지가 솟아오르는 시기입니다. 건강 상태가 상승세에 있어요.",
  },
  {
    id: 2,
    title: "Two of Wands",
    meaning:
      "건강에 대해 계획하고 준비하는 시기입니다. 운동 루틴을 짜거나 검진을 고려해 보세요.",
  },
  {
    id: 3,
    title: "Three of Wands",
    meaning:
      "건강 회복이나 체력 향상이 기대됩니다. 꾸준한 노력의 성과가 나타나기 시작해요.",
  },
  {
    id: 4,
    title: "Four of Wands",
    meaning:
      "건강이 안정된 상태입니다. 즐거운 활동이나 휴식이 건강에 긍정적인 영향을 줍니다.",
  },
  {
    id: 5,
    title: "Five of Wands",
    meaning:
      "과도한 스트레스나 경쟁이 체력에 영향을 줄 수 있어요. 휴식이 필요합니다.",
  },
  {
    id: 6,
    title: "Six of Wands",
    meaning:
      "건강 목표를 달성하는 시기입니다. 운동이나 다이어트의 성과가 드러나요.",
  },
  {
    id: 7,
    title: "Seven of Wands",
    meaning:
      "몸이 신호를 보내고 있어요. 무리하거나 참기보다는 적극적으로 대처하세요.",
  },
  {
    id: 8,
    title: "Eight of Wands",
    meaning: "건강 회복 속도가 빠릅니다. 좋은 소식이나 결과가 예상됩니다.",
  },
  {
    id: 9,
    title: "Nine of Wands",
    meaning:
      "몸이 지쳐 있는 상태입니다. 과거 병력이나 사고로 인한 피로가 누적되었을 수 있어요.",
  },
  {
    id: 10,
    title: "Ten of Wands",
    meaning:
      "과로로 인해 몸과 마음이 지쳐 있어요. 책임감이 지나치면 건강을 해칠 수 있습니다.",
  },
  {
    id: 11,
    title: "Page of Wands",
    meaning:
      "건강에 대한 호기심이나 동기부여가 생기는 시기입니다. 운동을 새로 시작하기 좋아요.",
  },
  {
    id: 12,
    title: "Knight of Wands",
    meaning:
      "과도한 활동성으로 인해 체력 소모가 클 수 있습니다. 부상에 주의하세요.",
  },
  {
    id: 13,
    title: "Queen of Wands",
    meaning:
      "정신적 활력과 체력이 조화를 이루고 있어요. 활발한 생활이 건강을 지켜줍니다.",
  },
  {
    id: 14,
    title: "King of Wands",
    meaning:
      "자신감과 체력이 모두 높은 시기입니다. 주도적으로 건강을 관리할 수 있어요.",
  },
];

export {
  healthMajor,
  health_minor_cups,
  health_minor_pentacles,
  health_minor_swords,
  health_minor_wands,
};
