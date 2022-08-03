import styles from "./FunctionalTab.module.scss";
import LangSelect from "./LangSelect/LangSelect";

const FunctionalTab = () => {
  return (
    <div className={styles.container}>
      <LangSelect />
    </div>
  );
};

export default FunctionalTab;
