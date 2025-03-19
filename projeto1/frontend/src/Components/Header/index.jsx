import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className={styles.navbar}>
      <div className="{styles.navbar_logo">
        <h2>Meu Pet Sumiu</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Entrar</Link>
        </li>
        <li>
          <Link to="/Register">Cadastre-se</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
