import styles from "./styles.module.scss";
import { Nav } from "./Nav";
export const Header = ({bagItensCount}) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className="title one">Kenzie Commerce</h1>
        <Nav bagItensCount={bagItensCount}/>
      </div>
    </header>
  );
};
