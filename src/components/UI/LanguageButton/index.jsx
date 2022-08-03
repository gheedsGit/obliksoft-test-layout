import styles from "./LanguageButton.module.scss";

const LanguageButton = ({ children, isActive }) => {
  const { active, inactive } = styles;
  
  return (
    <div className={styles.container}>
      <button className={isActive ? active : inactive}>{children}</button>
    </div>
  );
};

export default LanguageButton;
