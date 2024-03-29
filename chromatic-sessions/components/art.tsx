"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { ImageList, ImageListItem } from "@mui/material";

// import Wrapper from "./UI/wrapper";

export function Art() {
  let [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // fetch("")
    // .then((res) => res.json())
    // .then((data) => {
    // setImages(data);
    // });
    setImages([
      "https://source.unsplash.com/1600x900/?art",
      "https://source.unsplash.com/1600x900/?art",
      "https://source.unsplash.com/1600x900/?art",
      "https://source.unsplash.com/1600x900/?art",
      "https://source.unsplash.com/1600x900/?art",
      "https://source.unsplash.com/1600x900/?art",
      "https://source.unsplash.com/600x600/?art",
      "https://source.unsplash.com/600x600/?art",
      "https://source.unsplash.com/600x600/?art",
      "https://source.unsplash.com/600x600/?art",
      "https://source.unsplash.com/600x600/?art",
      "https://source.unsplash.com/600x600/?art",
      "https://source.unsplash.com/600x600/?art",
      "https://source.unsplash.com/600x600/?art",
      "https://source.unsplash.com/600x600/?art",
      "https://source.unsplash.com/600x600/?art",
    ]);
  });

  return (
    // <Grid container spacing={3}>
    //   <Grid item xs={6}>
    //     <h1>Art</h1>
    //     <p>
    //       Chromatic Sessions is a collection of music, art, and other creative
    //       works. We are a community of artists and musicians who come together
    //       to share our work and inspire each other.
    //     </p>
    //   </Grid>
    // </Grid>
    <ImageList cols={3}>
      {images.map((image) => (
        <ImageListItem>
          <img src={image} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
