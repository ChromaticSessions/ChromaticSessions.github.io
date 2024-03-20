"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./globals.css";

import { ErrorPage } from "./error-page";

import { Header } from "@/UI/header";
import { Content } from "@/components/content";
import { Sessions } from "@/components/sessions";
import { About } from "@/components/about";
import { Music } from "@/components/music";
import { Art } from "@/components/art";

export default function Home() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/" element={<Content />} />
          <Route path="/music" element={<Music />} />
          <Route path="/art" element={<Art />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}