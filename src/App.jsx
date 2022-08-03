import styles from "./App.module.scss";
import Sidenavbar from "./components/SideNavbar";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Sidenavbar />
      </div>
    </div>
  );
}

export default App;
