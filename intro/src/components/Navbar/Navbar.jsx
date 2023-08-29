import logo from "../../assets/logo-labsIF.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <ul className={styles.ul}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
      </ul>
    </div>
  );
};

export default Navbar;
