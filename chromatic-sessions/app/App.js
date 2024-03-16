"use client";

import Header from "@/components/UI/header";
import About from "@/components/about";
import Sessions from "@/components/sessions";
import Content from "@/components/content";
import Music from "@/components/music";
import Art from "@/components/art";

import React, { useLayoutEffect } from "react";
import "@/app/globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </main>
    </Router>
  );
}
