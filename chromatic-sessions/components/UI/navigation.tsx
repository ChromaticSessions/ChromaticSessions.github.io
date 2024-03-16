"use client";

import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="./sessions">Sessions</Link>
        </li>
        <li>
          <Link to="./about">About</Link>
        </li>
        <li>
          <Link to="./music">Music</Link>
        </li>
        <li>
          <Link to="./art">Art</Link>
        </li>
      </ul>
    </nav>
  );
}
