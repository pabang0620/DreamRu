const study_major = [
  {
    id: 0,
    title: "The Fool",
    meaning:
      "새로운 학문을 시작하는 시기입니다. 두려움 없이 첫걸음을 떼어보세요. 새로운 경험이 기다리고 있어요.",
  },
  {
    id: 1,
    title: "The Magician",
    meaning:
      "현재 가진 자원을 활용해 학업을 성공적으로 이끌어 나갈 수 있는 능력을 가졌습니다. 자신감을 가지세요.",
  },
  {
    id: 2,
    title: "The High Priestess",
    meaning:
      "내면의 지혜를 믿고 집중하세요. 직감과 신중함이 중요한 시기입니다.",
  },
  {
    id: 3,
    title: "The Empress",
    meaning:
      "학업에서 성장이 이루어지는 시기입니다. 창의력과 감성적인 접근이 학습에 큰 도움이 될 수 있어요.",
  },
  {
    id: 4,
    title: "The Emperor",
    meaning:
      "학문에 대한 강한 규율과 조직력이 필요합니다. 체계적인 계획을 세우고 진행하세요.",
  },
  {
    id: 5,
    title: "The Hierophant",
    meaning:
      "전통적인 학습 방식이나 멘토링이 유리한 시기입니다. 교사나 조언자의 도움이 큰 도움이 될 거예요.",
  },
  {
    id: 6,
    title: "The Lovers",
    meaning:
      "학업의 선택이나 방향을 두고 중요한 결정을 내려야 할 시기입니다. 자신의 진정한 관심사를 따르세요.",
  },
  {
    id: 7,
    title: "The Chariot",
    meaning:
      "강한 의지력과 집중력을 발휘할 때입니다. 도전적인 과제가 있어도, 승리를 향해 나아가세요.",
  },
  {
    id: 8,
    title: "Strength",
    meaning:
      "인내와 끈기, 자기 통제가 필요한 시기입니다. 어려운 과제에 대한 꾸준한 노력이 중요해요.",
  },
  {
    id: 9,
    title: "The Hermit",
    meaning:
      "독립적인 학습이 필요한 시기입니다. 혼자서 깊이 있는 연구와 학문에 몰두하세요.",
  },
  {
    id: 10,
    title: "Wheel of Fortune",
    meaning:
      "학업에서 중요한 전환점이 있을 수 있습니다. 운이 좋은 방향으로 흐를 수 있음을 믿고 적극적으로 참여하세요.",
  },
  {
    id: 11,
    title: "Justice",
    meaning:
      "공정성과 균형이 중요한 시기입니다. 시험이나 과제에서 공정하게 평가받을 수 있도록 노력하세요.",
  },
  {
    id: 12,
    title: "The Hanged Man",
    meaning:
      "학업에 대한 접근 방식을 재고할 필요가 있습니다. 일시적인 지체가 있을 수 있지만, 그 속에서 배울 점이 많습니다.",
  },
  {
    id: 13,
    title: "Death",
    meaning:
      "구습을 버리고 새로운 학습 방법으로 변화해야 할 시기입니다. 변화가 성장의 기회로 다가올 것입니다.",
  },
  {
    id: 14,
    title: "Temperance",
    meaning:
      "학습과 휴식의 균형이 중요합니다. 과도한 압박을 피하고, 꾸준하게 학업을 이어가세요.",
  },
  {
    id: 15,
    title: "The Devil",
    meaning:
      "학업에 있어 의존성이나 유혹이 있을 수 있어요. 집중력이 떨어질 수 있으니 주의해야 해요.",
  },
  {
    id: 16,
    title: "The Tower",
    meaning:
      "학업에서 큰 충격이나 예상치 못한 변화가 있을 수 있습니다. 불확실성 속에서도 자신감을 잃지 마세요.",
  },
  {
    id: 17,
    title: "The Star",
    meaning:
      "긍정적이고 희망적인 미래가 보입니다. 꿈과 목표를 향해 나아가세요. 학업에서도 좋은 결과를 기대할 수 있어요.",
  },
  {
    id: 18,
    title: "The Moon",
    meaning:
      "혼란과 불확실성에 주의가 필요합니다. 감정에 휘둘리지 않고, 명확한 목표를 세워 집중하세요.",
  },
  {
    id: 19,
    title: "The Sun",
    meaning:
      "학업에서 빛을 발하는 시기입니다. 긍정적이고 밝은 에너지가 넘쳐나며 좋은 성과를 이룰 수 있어요.",
  },
  {
    id: 20,
    title: "Judgement",
    meaning:
      "과거의 경험과 결정을 되돌아보는 시기입니다. 새로운 시작을 할 준비가 되었어요.",
  },
  {
    id: 21,
    title: "The World",
    meaning:
      "학문에서의 큰 성취와 마무리입니다. 끝이 아닌, 새로운 도전의 시작이 기다리고 있어요.",
  },
];

const study_minor_cups = [
  {
    id: 1,
    title: "Ace of Cups",
    meaning:
      "학문에 대한 새로운 열정이 솟구치는 시기입니다. 새로운 지식에 대한 갈망과 감정적으로 풍요로운 학습 경험이 기대됩니다.",
  },
  {
    id: 2,
    title: "Two of Cups",
    meaning:
      "학문에서 중요한 협력 관계가 이루어질 수 있습니다. 파트너와 함께 공동 연구나 공부를 진행하면 좋은 결과를 얻을 수 있어요.",
  },
  {
    id: 3,
    title: "Three of Cups",
    meaning:
      "학업과 관련된 기쁜 소식이나 성공적인 협력이 있을 수 있습니다. 함께 공부하는 사람들과의 즐거운 시간과 성취가 기다리고 있어요.",
  },
  {
    id: 4,
    title: "Four of Cups",
    meaning:
      "현재 학업에서 감정적으로 무기력하거나 흥미를 잃은 상태일 수 있습니다. 새로운 방법을 시도하여 학문에 대한 관심을 되찾는 것이 중요해요.",
  },
  {
    id: 5,
    title: "Five of Cups",
    meaning:
      "학업에서 실망하거나 실패를 경험할 수 있어요. 하지만 지나간 것을 돌아보지 말고, 앞으로 나아가는 것이 중요합니다. 새로운 기회를 놓치지 마세요.",
  },
  {
    id: 6,
    title: "Six of Cups",
    meaning:
      "과거의 학문적 경험이나 오래된 기억이 현재 학업에 영향을 미칠 수 있습니다. 학습에 있어서 원래의 열정을 되찾을 기회가 주어져요.",
  },
  {
    id: 7,
    title: "Seven of Cups",
    meaning:
      "다양한 학문적 선택이나 가능성 앞에서 혼란을 느낄 수 있습니다. 신중하게 결정을 내려야 할 시기입니다.",
  },
  {
    id: 8,
    title: "Eight of Cups",
    meaning:
      "현재의 학문적 상황에 만족하지 않거나, 더 높은 목표를 향해 떠나고자 하는 마음이 커질 수 있어요. 새로운 학문적 길을 찾는 것이 좋습니다.",
  },
  {
    id: 9,
    title: "Nine of Cups",
    meaning:
      "학업에서 만족스러운 결과나 성취를 거둘 수 있는 시기입니다. 원하는 학문적 목표를 이루게 될 가능성이 큽니다.",
  },
  {
    id: 10,
    title: "Ten of Cups",
    meaning:
      "학문적으로 풍요롭고 안정된 시기입니다. 학업과 개인 생활에서 만족스러운 균형을 이룰 수 있어요.",
  },
  {
    id: 11,
    title: "Page of Cups",
    meaning:
      "학문에 대한 창의적이고 감성적인 접근이 유리한 시기입니다. 새로운 아이디어나 학문적 호기심이 큰 도움이 될 거예요.",
  },
  {
    id: 12,
    title: "Knight of Cups",
    meaning:
      "학문에 대한 열정과 이상을 추구하는 시기입니다. 감정을 믿고, 자신의 직관을 따라 공부하세요.",
  },
  {
    id: 13,
    title: "Queen of Cups",
    meaning:
      "학문에 대한 깊은 이해와 감성적인 접근이 필요한 시기입니다. 자신에게 맞는 공부 방법을 찾아내고, 균형 잡힌 마음으로 학업에 임하세요.",
  },
  {
    id: 14,
    title: "King of Cups",
    meaning:
      "학문을 관리하고 조정하는 능력이 중요한 시기입니다. 감정을 잘 다루며, 안정적으로 학업을 이끌어 가세요.",
  },
];

const study_minor_pentacles = [
  {
    id: 1,
    title: "Ace of Pentacles",
    meaning:
      "새로운 학문적 기회가 열릴 수 있는 시기입니다. 학업에서 실질적인 진전을 이룰 수 있는 기회가 다가오고 있어요.",
  },
  {
    id: 2,
    title: "Two of Pentacles",
    meaning:
      "학업과 다른 여러 가지 일을 병행하는 시기입니다. 균형을 잘 맞추어 나가야 하며, 유연하게 대처할 필요가 있어요.",
  },
  {
    id: 3,
    title: "Three of Pentacles",
    meaning:
      "학문적인 팀워크나 협력이 중요한 시기입니다. 공동 작업을 통해 더 큰 성과를 이룰 수 있어요.",
  },
  {
    id: 4,
    title: "Four of Pentacles",
    meaning:
      "학문적으로 안정된 시기일 수 있지만, 지나치게 집착하거나 보수적인 태도를 취하면 발전이 어려울 수 있습니다. 새로운 방법을 시도해보세요.",
  },
  {
    id: 5,
    title: "Five of Pentacles",
    meaning:
      "학업에서 어려운 시기일 수 있습니다. 자금이나 자원 부족으로 어려움을 겪을 수 있지만, 이 어려움은 결국 성취로 이어질 수 있어요.",
  },
  {
    id: 6,
    title: "Six of Pentacles",
    meaning:
      "학문적인 지원이나 도움을 받을 수 있는 시기입니다. 다른 사람의 도움을 받거나, 자신의 지식을 나누며 발전할 수 있어요.",
  },
  {
    id: 7,
    title: "Seven of Pentacles",
    meaning:
      "학문적인 성취를 위해 시간이 필요할 수 있습니다. 지금까지의 노력이 곧 결실을 맺을 테니 인내심을 가지고 기다려보세요.",
  },
  {
    id: 8,
    title: "Eight of Pentacles",
    meaning:
      "학문적인 집중과 노력의 시기입니다. 꾸준히 노력하고 학습하는 것이 중요한 시기이며, 그 노력은 분명히 보상받을 거예요.",
  },
  {
    id: 9,
    title: "Nine of Pentacles",
    meaning:
      "학문적으로 안정된 위치에 올 수 있는 시기입니다. 자신의 능력과 노력을 인정받게 될 거예요.",
  },
  {
    id: 10,
    title: "Ten of Pentacles",
    meaning:
      "학문적으로 매우 안정된 시기입니다. 장기적으로 볼 때 학문적인 성과를 거두고, 명성과 안정감을 얻을 수 있어요.",
  },
  {
    id: 11,
    title: "Page of Pentacles",
    meaning:
      "새로운 학문적 목표나 연구를 시작하는 시기입니다. 진지하게 공부에 임하고, 체계적인 접근이 필요해요.",
  },
  {
    id: 12,
    title: "Knight of Pentacles",
    meaning:
      "학문에 대한 꾸준한 노력이 필요한 시기입니다. 인내와 성실함이 중요한 시기로, 한 걸음씩 착실히 나아가는 것이 중요해요.",
  },
  {
    id: 13,
    title: "Queen of Pentacles",
    meaning:
      "학문적인 안정과 실용적인 성과를 이루는 시기입니다. 현실적이고 실용적인 접근이 중요하며, 균형 잡힌 학문적 삶을 살아갈 수 있어요.",
  },
  {
    id: 14,
    title: "King of Pentacles",
    meaning:
      "학문적인 리더십을 발휘할 수 있는 시기입니다. 실용적이고 목표 지향적인 학문적 접근이 필요한 때입니다. 자원과 기회를 잘 활용하세요.",
  },
];

const study_minor_swords = [
  {
    id: 1,
    title: "Ace of Swords",
    meaning:
      "새로운 학문적 아이디어나 명확한 진리가 드러날 시기입니다. 논리적 사고와 명확한 판단이 중요한 시기예요.",
  },
  {
    id: 2,
    title: "Two of Swords",
    meaning:
      "학문적 선택에서 갈등이나 어려움을 겪을 수 있습니다. 결단을 내리기 위해서는 명확한 정보를 바탕으로 신중하게 결정하세요.",
  },
  {
    id: 3,
    title: "Three of Swords",
    meaning:
      "학문적인 실망이나 충격을 받을 수 있는 시기입니다. 하지만 이를 통해 더 큰 학문적 성장을 이룰 기회가 될 수 있어요.",
  },
  {
    id: 4,
    title: "Four of Swords",
    meaning:
      "학문적으로 잠시 휴식이 필요한 시기입니다. 스트레스나 과중한 부담을 줄이고, 휴식을 취하면서 새로운 아이디어를 떠올려보세요.",
  },
  {
    id: 5,
    title: "Five of Swords",
    meaning:
      "학문적 갈등이나 경쟁에서 상처를 받을 수 있습니다. 승패보다 중요한 것은 이 과정을 통해 배우는 것입니다.",
  },
  {
    id: 6,
    title: "Six of Swords",
    meaning:
      "학문적으로 어려운 상황을 벗어나 새로운 길로 나아가는 시기입니다. 힘든 시기를 지나면 평화롭고 안정적인 학문적 환경이 다가올 거예요.",
  },
  {
    id: 7,
    title: "Seven of Swords",
    meaning:
      "학문적인 측면에서 정보나 자원을 유용하게 활용해야 하는 시기입니다. 전략적으로 접근하고, 주의 깊게 행동하세요.",
  },
  {
    id: 8,
    title: "Eight of Swords",
    meaning:
      "학문적으로 자신을 제한하는 장애물이나 어려움이 있을 수 있습니다. 하지만 그 장애물은 당신이 만들어낸 것이며, 스스로 이를 벗어날 수 있는 방법을 찾을 수 있어요.",
  },
  {
    id: 9,
    title: "Nine of Swords",
    meaning:
      "학문적인 불안이나 스트레스가 클 수 있습니다. 걱정과 두려움이 실질적인 문제를 키울 수 있으므로, 차분하게 문제를 해결하려는 노력이 필요합니다.",
  },
  {
    id: 10,
    title: "Ten of Swords",
    meaning:
      "학문적인 충격이나 실패를 경험할 수 있습니다. 그러나 이 경험은 새로운 시작을 위한 중요한 교훈이 될 수 있어요.",
  },
  {
    id: 11,
    title: "Page of Swords",
    meaning:
      "학문적인 호기심과 탐구가 필요한 시기입니다. 논리적 사고와 분석적 접근을 통해 새로운 지식에 대한 열정을 키우세요.",
  },
  {
    id: 12,
    title: "Knight of Swords",
    meaning:
      "학문에 대한 빠르고 결단력 있는 접근이 필요한 시기입니다. 자신의 목표를 향해 직진하는 모습이 중요한 시점이에요.",
  },
  {
    id: 13,
    title: "Queen of Swords",
    meaning:
      "학문적으로 명확한 사고와 객관적인 판단이 요구되는 시기입니다. 감정을 배제하고 논리적이고 직관적인 접근을 하세요.",
  },
  {
    id: 14,
    title: "King of Swords",
    meaning:
      "학문에서의 권위와 지식을 상징하는 시기입니다. 지적 리더십을 발휘하고, 명확한 계획과 결단을 통해 문제를 해결할 수 있어요.",
  },
];
const study_minor_wands = [
  {
    id: 1,
    title: "Ace of Wands",
    meaning:
      "학문적인 열정이 넘치는 시기입니다. 새로운 학문적 목표나 프로젝트가 시작될 수 있어요. 에너지와 창의력으로 가득 차 있습니다.",
  },
  {
    id: 2,
    title: "Two of Wands",
    meaning:
      "학문적인 계획을 세우는 시기입니다. 현재의 길을 따라가면서 미래를 향한 비전을 설정해야 합니다.",
  },
  {
    id: 3,
    title: "Three of Wands",
    meaning:
      "학문적인 노력에 대한 결실을 보기 시작할 수 있는 시기입니다. 꾸준히 노력한 결과, 좋은 기회나 성과가 다가올 거예요.",
  },
  {
    id: 4,
    title: "Four of Wands",
    meaning:
      "학문적인 성취를 축하하는 시기입니다. 현재 진행 중인 프로젝트나 연구에서 성공적인 결과를 얻을 수 있어요.",
  },
  {
    id: 5,
    title: "Five of Wands",
    meaning:
      "학문적인 경쟁이나 갈등이 발생할 수 있는 시기입니다. 다소 도전적인 상황이지만, 이를 통해 더 나은 성장을 이룰 수 있어요.",
  },
  {
    id: 6,
    title: "Six of Wands",
    meaning:
      "학문적인 성취를 인정받고 칭찬을 받을 시기입니다. 학문적인 성공이나 목표 달성을 이룬 후, 큰 자부심을 느낄 수 있어요.",
  },
  {
    id: 7,
    title: "Seven of Wands",
    meaning:
      "학문적인 도전이 다가오고 있습니다. 경쟁이나 비판을 피하지 말고, 자신의 입장을 고수하며 싸워야 할 때입니다.",
  },
  {
    id: 8,
    title: "Eight of Wands",
    meaning:
      "학문적인 진전이 빠르게 이루어질 시기입니다. 새로운 기회나 정보가 갑작스럽게 들어올 수 있어요. 빠른 결단력이 필요합니다.",
  },
  {
    id: 9,
    title: "Nine of Wands",
    meaning:
      "학문적인 노력에 대한 피로와 스트레스를 느낄 수 있습니다. 하지만 한 번 더 힘을 내어 끝까지 노력하면 큰 성과를 이룰 수 있어요.",
  },
  {
    id: 10,
    title: "Ten of Wands",
    meaning:
      "학문적인 부담이 커질 수 있습니다. 과중한 책임감이나 업무가 많아지는 시기지만, 이를 잘 관리하면 큰 성취로 이어질 수 있어요.",
  },
  {
    id: 11,
    title: "Page of Wands",
    meaning:
      "학문적인 탐구와 새로운 아이디어에 대한 열정이 생기는 시기입니다. 새로운 분야나 연구에 도전할 준비가 되어 있어요.",
  },
  {
    id: 12,
    title: "Knight of Wands",
    meaning:
      "학문적 목표를 향한 빠른 진전이 이루어질 시기입니다. 열정적이고 빠른 결단력을 발휘해 새로운 아이디어를 실현할 수 있어요.",
  },
  {
    id: 13,
    title: "Queen of Wands",
    meaning:
      "학문적 열정과 창의성을 발휘하는 시기입니다. 학문적 환경에서 리더십을 발휘하거나, 다른 사람들에게 영감을 줄 수 있어요.",
  },
  {
    id: 14,
    title: "King of Wands",
    meaning:
      "학문적 리더십을 발휘할 수 있는 시기입니다. 강한 의지와 목표를 향한 추진력으로, 학문적인 분야에서 중요한 위치를 차지할 수 있어요.",
  },
];

export {
  study_major,
  study_minor_cups,
  study_minor_pentacles,
  study_minor_swords,
  study_minor_wands,
};
