import Logo from "../UI/Logo";
import SVGPicker from "../UI/SVGPicker";
import styles from "./Sidenavbar.module.scss";

const Sidenavbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoBlock}>
          <Logo />
        </div>
        <nav className={styles.navBlock}>
          <SVGPicker id="home" />
          <SVGPicker id="robot" />
          <SVGPicker id="contacts" />
          <SVGPicker id="people" />
          <SVGPicker id="place" />
          <SVGPicker id="settings" />
        </nav>
        <div className={styles.accountBlock}>
          <SVGPicker id="account_circle" />
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
