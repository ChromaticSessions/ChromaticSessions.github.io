import Header from "@/components/UI/header";

import React from "react";
import "@/styles/global.css";
import Content from "@/components/content";

export default function Home() {
  return (
    <html>
      <head>
        <title>Chromatic Sessions</title>
      </head>
      <body>
        <main>
          <Header />
          <Content />
        </main>
      </body>
    </html>
  );
}
