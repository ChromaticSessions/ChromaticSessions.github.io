import React from "react";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <h1>Chromatic Sessions</h1>
      </a>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/sessions">Sessions</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
