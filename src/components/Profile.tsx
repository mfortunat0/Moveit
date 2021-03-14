import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://www.github.com/mfortunat0.png" alt="" />
      <div>
        <strong>Matheus fortunato</strong>
        <p>
          <img src="icons/level.svg" alt="Level" /> Level {level}
        </p>
      </div>
    </div>
  );
}
