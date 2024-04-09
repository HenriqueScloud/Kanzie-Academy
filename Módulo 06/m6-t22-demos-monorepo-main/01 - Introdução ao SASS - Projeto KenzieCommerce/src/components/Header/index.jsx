import styles from "./styles.module.scss";
import { Nav } from "./Nav";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className="title one">Kenzie Commerce</h1>
        <Nav />
      </div>
    </header>
  );
};
