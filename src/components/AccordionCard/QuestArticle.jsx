/* eslint-disable react/prop-types */
import styles from "./AccordionCard.module.css";
import arrow from "../../assets/images/icon-arrow-down.svg";

export default function QuestArticle(props) {
  const { activeQuestNumber, toggleQuest, question, answer, itemNumber } =
    props;

  return (
    <div
      className={styles.article}
      style={
        activeQuestNumber === itemNumber
          ? { paddingBottom: "16px", gap: "13px" }
          : {}
      }
      onClick={() => toggleQuest(itemNumber)}
    >
      <div className={styles.questDiv}>
        <p
          className={styles.quest}
          style={activeQuestNumber === itemNumber ? { fontWeight: "bold" } : {}}
        >
          {question}
        </p>
        <img
          style={
            activeQuestNumber === itemNumber
              ? { transform: "rotate(180deg)" }
              : {}
          }
          src={arrow}
          alt="arrow icon"
        />
      </div>

      <p
        className={`${styles.answer} ${
          activeQuestNumber === itemNumber ? styles["answerVisible"] : ""
        }`}
      >
        {answer}
      </p>
    </div>
  );
}
