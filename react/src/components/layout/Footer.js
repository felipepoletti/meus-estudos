import { FaFacebook, FaInstagram, FaLinkedin, icons } from "react-icons/fa";
import styles from "./Navbar.module.css"

function Footer() {
  return (
    <footer>
      <ul className={styles.list}>
        <li className={styles.item}>
          <FaFacebook />
        </li>
        <li className={styles.item}>
          <FaLinkedin />
        </li>
        <li className={styles.item}>
          <FaInstagram />
        </li>
      </ul>
      <p>
        Nosso rodapé
      </p>
    </footer>
  );
}

export default Footer;