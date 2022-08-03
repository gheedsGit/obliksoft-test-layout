import styles from "./App.module.scss";
import MainSection from "./components/MainSection";
import Sidenavbar from "./components/SideNavbar";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Sidenavbar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
