/* eslint-disable no-unused-vars */
import styles from "./AccordionCard.module.css";
import patternMobile from "../../assets/images/bg-pattern-mobile.svg";
import patternDesktop from "../../assets/images/bg-pattern-desktop.svg";
import womanMobile from "../../assets/images/illustration-woman-online-mobile.svg";
import womanDesktop from "../../assets/images/illustration-woman-online-desktop.svg";
import box from "../../assets/images/illustration-box-desktop.svg";
import { useState } from "react";
import QuestArticle from "./QuestArticle";
import FAQData from "../../data/FAQData";

export default function AccordionCard() {
  const [activeQuestNumber, setActiveQuestNumber] = useState(null);
  const toggleQuest = (accordionNum) => {
    if (activeQuestNumber === accordionNum) setActiveQuestNumber(0);
    else setActiveQuestNumber(accordionNum);
  };

  return (
    <>
      <img src={box} className={styles.box} alt="illustration" />

      <div className={styles.accordionContainer}>
        <div className={styles.imgDiv}>
          <img
            className={styles.patternMobile}
            src={patternMobile}
            alt="illustration"
          />
          <img
            className={styles.patternDesktop}
            src={patternDesktop}
            alt="illustration"
          />
          <img
            className={styles.womanMobile}
            src={womanMobile}
            alt="illustration"
          />
          <img
            className={styles.womanDesktop}
            src={womanDesktop}
            alt="illustration"
          />
        </div>
        <div className={styles.faqSection}>
          <h1 className={styles.title}>FAQ</h1>
          <div className={styles.questContainer}>
            {FAQData.map((item, i) => (
              <QuestArticle
                key={i}
                toggleQuest={toggleQuest}
                itemNumber={item.itemNumber}
                question={item.question}
                answer={item.answer}
                activeQuestNumber={activeQuestNumber}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// How many team members can I invite?
//   You can invite up to 2 additional users on the Free plan. There is no limit on
//   team members for the Premium plan.
