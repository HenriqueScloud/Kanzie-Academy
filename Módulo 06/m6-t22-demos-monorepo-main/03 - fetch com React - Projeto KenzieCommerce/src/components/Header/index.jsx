import styles from "./styles.module.scss";
import { Nav } from "./Nav";

export const Header = ({ bagItemsCount }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className="title one">Kenzie Commerce</h1>
        <Nav
          bagItemsCount={bagItemsCount}
          roberto={35}
          outraChave={[100, 200, 300]}
        />
      </div>
    </header>
  );
};
