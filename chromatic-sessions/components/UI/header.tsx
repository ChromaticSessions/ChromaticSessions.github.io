"use client";

import React from "react";

import styles from "./header.module.css";

import Navigation from "./navigation";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <h1>Chromatic Sessions</h1>
      </a>

      <Navigation />
    </header>
  );
}
