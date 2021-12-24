import React from "react";
import * as styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.log}>LOGO</div>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className={styles.link}>
            About Page
          </Link>
        </li>
        <li>
          <Link to="/Blog" className={styles.link}>
            Blog Page
          </Link>
        </li>
        <li>
          <Link to="/Services" className={styles.link}>
            Services Page
          </Link>
        </li>
        <li>
          <Link
            to="/Contact/AP15-6180/abrar.hassan@auxilium.digital"
            className={styles.link}
          >
            Contact Page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
