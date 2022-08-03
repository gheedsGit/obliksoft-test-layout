import styles from "./AssistNavbar.module.scss";

const AssistNavbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.backBlock}>&#60; Назад</div>
        <div className={styles.toBotBlock}>Перерейти у бот... </div>
        <div className={styles.buttonBlock}>
          <button className={styles.test}>Тест</button>
          <button className={styles.post}>Опублікувати в боті</button>
        </div>
      </div>
    </div>
  );
};

export default AssistNavbar;
