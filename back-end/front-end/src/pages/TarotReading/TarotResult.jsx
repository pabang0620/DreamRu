import React from "react";

import {
  healthMajor,
  health_minor_cups,
  health_minor_pentacles,
  health_minor_swords,
  health_minor_wands,
} from "../../utils/taro/health/health_major";

import {
  job_major,
  job_minor_cups,
  job_minor_pentacles,
  job_minor_swords,
  job_minor_wands,
} from "../../utils/taro/job/job_major";

import {
  romance_major,
  romance_minor_cups,
  romance_minor_pentacles,
  romance_minor_swords,
  romance_minor_wands,
} from "../../utils/taro/romance/romance_major";

import {
  study_major,
  study_minor_cups,
  study_minor_pentacles,
  study_minor_swords,
  study_minor_wands,
} from "../../utils/taro/study/study_major";

import {
  wealth_major,
  wealth_minor_cups,
  wealth_minor_pentacles,
  wealth_minor_swords,
  wealth_minor_wands,
} from "../../utils/taro/wealth/wealth_major";

import "./TarotResult.css";

const tarotDataMap = {
  health: {
    major: healthMajor,
    minor: {
      cups: health_minor_cups,
      pentacles: health_minor_pentacles,
      swords: health_minor_swords,
      wands: health_minor_wands,
    },
  },
  job: {
    major: job_major,
    minor: {
      cups: job_minor_cups,
      pentacles: job_minor_pentacles,
      swords: job_minor_swords,
      wands: job_minor_wands,
    },
  },
  romance: {
    major: romance_major,
    minor: {
      cups: romance_minor_cups,
      pentacles: romance_minor_pentacles,
      swords: romance_minor_swords,
      wands: romance_minor_wands,
    },
  },
  study: {
    major: study_major,
    minor: {
      cups: study_minor_cups,
      pentacles: study_minor_pentacles,
      swords: study_minor_swords,
      wands: study_minor_wands,
    },
  },
  wealth: {
    major: wealth_major,
    minor: {
      cups: wealth_minor_cups,
      pentacles: wealth_minor_pentacles,
      swords: wealth_minor_swords,
      wands: wealth_minor_wands,
    },
  },
};

const tarotTypeTitleMap = {
  romance: "연애 타로 결과",
  health: "건강 타로 결과",
  job: "직업 타로 결과",
  study: "학업 타로 결과",
  wealth: "재물 타로 결과",
};

const TarotResult = ({ cards, type }) => {
  const data = tarotDataMap[type] || tarotDataMap["romance"]; // 기본 fallback

  const getCardInfo = (card) => {
    if (card.id.startsWith("major-")) {
      const id = parseInt(card.id.split("-")[1]);
      return data.major.find((item) => item.id === id);
    }

    if (card.id.startsWith("minor-")) {
      const [, suit, idStr] = card.id.split("-");
      const id = parseInt(idStr);
      const suitGroup = data.minor[suit];
      return suitGroup?.find((item) => item.id === id) || null;
    }

    return null;
  };

  return (
    <div className="tarot-result-wrapper">
      <h1 className="tarot-result-title">
        {tarotTypeTitleMap[type] || "타로 결과"}
      </h1>
      {/* <p className="tarot-result-desc">선택한 타로 카드의 해석 결과입니다.</p> */}
      {cards.map((card, index) => {
        const info = getCardInfo(card);
        return (
          <div key={index} className="tarot-result-card">
            <h3>{["과거", "현재", "미래"][index]}</h3>
            <img src={card.image} alt={info?.title || "선택 카드"} />
            {info ? (
              <>
                <h4>{info.title}</h4>
                <p>{info.meaning}</p>
              </>
            ) : (
              <p>카드 해석을 찾을 수 없습니다.</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TarotResult;
