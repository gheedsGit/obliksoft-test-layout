import LanguageButton from "../../../UI/LanguageButton";
import SVGPicker from "../../../UI/SVGPicker";
import styles from "./LangSelect.module.scss";

const LangSelect = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.langSelect}>
          <LanguageButton isActive>UA</LanguageButton>
          <LanguageButton>RU</LanguageButton>
          <LanguageButton>ENG</LanguageButton>
        </div>
        <div className={styles.langIcon}>
          <SVGPicker id="language" />
        </div>
      </div>
    </div>
  );
};

export default LangSelect;
