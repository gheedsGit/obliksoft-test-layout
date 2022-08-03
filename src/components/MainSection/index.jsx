import AssistNavbar from "./AssistNavbar";
import FunctionalTab from "./FunctionalTab";
import styles from "./MainSection.module.scss";
import OperationField from "./OperationField";

const MainSection = () => {
  return (
    <div className={styles.container}>
      <AssistNavbar />
      <div className={styles.mainBlock}>
        <OperationField />
        <FunctionalTab />
      </div>
    </div>
  );
};

export default MainSection;
