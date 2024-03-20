"use client";

import React from "react";

import styles from "./header.module.css";

import Navigation from "./navigation";

export function Header() {
  const root = document.querySelector(":root");

  useEffect(() => {
    const day = new Date().getDay();
    console.log("Day: " + day)
    if (day == 7) {
      root.style.setProperty("--colour-primary", "blue");
    } else {
      // root.style.setProperty("--colour-primary", "lime");
    }
    console.log("Content rendered")
  }, []);

  return (
    <header className={styles.header}>
      <a href="/">
        <h1>Chromatic Sessions</h1>
      </a>

      <Navigation />
    </header>
  );
}
