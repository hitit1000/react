import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to="/" className={styles.logo}>
        영단어 암기장
      </Link>
      <div className={styles.menu}>
        <a href="/">단어 추가</a>
        <a href="/">Day 추가</a>
      </div>
    </div>
  );
};

export default Header;
