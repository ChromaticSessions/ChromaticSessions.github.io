"use client";

import Header from "@/components/UI/header";
import About from "@/components/about";
import Sessions from "@/components/sessions";

import React, { useLayoutEffect } from "react";
import "@/app/globals.css";
import Content from "@/components/content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#e8e8e8"
  });

  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}
