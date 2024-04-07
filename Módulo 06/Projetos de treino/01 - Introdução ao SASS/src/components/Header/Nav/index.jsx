import { BagIcon } from "../../icons/BagIcon";
import styles from "./styles.module.scss";

export const Nav = ({bagItensCount}) => {
  return (
    <nav>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <a href="#">Login</a>
        </li>
        <li className={styles.navLink}>
          <a href="#">Contato</a>
        </li>
        <li className={styles.navLink}>
          <a href="">
            <BagIcon />
            <span>{bagItensCount}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
