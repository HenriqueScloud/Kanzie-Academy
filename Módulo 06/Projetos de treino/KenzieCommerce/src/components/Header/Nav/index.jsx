import { BagIcon } from "../../icons/BagIcon";
import styles from "./styles.module.scss";

// export const Nav = (variavel) => {
export const Nav = ({ bagItemsCount, setIsModalOpen }) => {

  return (
    <nav>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <a href="#">Login</a>
        </li>
        <li className={styles.navLink}>
          <a href="#">Contato</a>
        </li>

        <li className={styles.navLink} onClick={() =>{
                setIsModalOpen(true);
            } }>
          <a href="#">
            <BagIcon />
            <span>{bagItemsCount}</span>
            {/* <span>{variavel.bagItemsCount}</span> */}
          </a>
        </li>
      </ul>
    </nav>
  );
};
