import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to="/" className={styles.logo}>
        영단어 암기장
      </Link>
      <div className={styles.menu}>
        <a href="/create_word">단어 추가</a>
        <a href="/create_day">Day 추가</a>
      </div>
    </div>
  );
};

export default Header;
