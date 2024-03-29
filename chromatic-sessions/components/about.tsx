"use client";

import React from "react";
import Grid from "@mui/material/Grid";

export function About() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <h1>About</h1>
        <p>
          Chromatic Sessions is a collection of music, art, and other creative
          works. We are a community of artists and musicians who come together
          to share our work and inspire each other.
        </p>
      </Grid>
      <Grid item xs={6}>
        {/* Placeholder img, insert img from db when available */}
        <img
          src="https://source.unsplash.com/1600x900/?music"
          alt="Music"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={6}>
        <img
          src="https://source.unsplash.com/1600x900/?art"
          alt="Art"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={6}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a space where artists and musicians can
          collaborate and share their work. We believe that by working together,
          we can create something greater than the sum of its parts.
        </p>
      </Grid>
      <Grid item xs={4}>
        <h2>Our Vision</h2>
        <p>
          Our vision is to build a community of artists and musicians who
          support each other and push each other to new heights. We want to
          create a space where creativity can flourish and grow.
        </p>
      </Grid>
      <Grid item xs={4}>
        <img
          src="https://source.unsplash.com/1600x900/?community"
          alt="Community"
          style={{ width: "100%" }}
        />
      </Grid>

      <Grid item xs={4}>
        <h2>Our Values</h2>
        <p>
          Our values are creativity, collaboration, and community. We believe
          that by working together and supporting each other, we can create
          something truly special.
        </p>
      </Grid>
    </Grid>
  );
}
