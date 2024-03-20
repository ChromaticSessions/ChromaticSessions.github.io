"use client";

import React from "react";

import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/sessions">Sessions</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/art">Art</Link>
        </li>
        {/* <li>
          <a href="/sessions">Sessions</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
        <li>
          <a href="/art">Art</a>
        </li> */}
      </ul>
    </nav>
  );
}
