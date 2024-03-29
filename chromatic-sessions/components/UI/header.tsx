"use client";

import React, { useEffect } from "react";

import styles from "./header.module.css";

import Navigation from "./navigation";
import { Link } from "react-router-dom";

export function Header() {
  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    if (!root) {
      console.log("No root element found");
      return;
    }

    const day = new Date().getDay();
    console.log("Day: " + day);
    if (day == 7) {
      root.style.setProperty("--primary-colour", "blue");
    } else if (day == 5) {
      root.style.setProperty("--primary-colour", "red");
    } else {
      root.style.setProperty("--primary-colour", "lime");
    }
    console.log("Content rendered");
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Chromatic Sessions</h1>
      </Link>

      <Navigation />
    </header>
  );
}
