import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

export const useCategoriesFIlterProps = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      {
        id: nanoid(),
        title: "All",
      },
      {
        id: nanoid(),
        title: "Sitcom",
      },
      {
        id: nanoid(),
        title: "Soap Opera",
      },
      {
        id: nanoid(),
        title: "News",
      },
      {
        id: nanoid(),
        title: "Action Film",
      },
      {
        id: nanoid(),
        title: "Rock music",
      },
      {
        id: nanoid(),
        title: "Mix",
      },
      {
        id: nanoid(),
        title: "Podcast",
      },
      {
        id: nanoid(),
        title: "Astronomy",
      },
      {
        id: nanoid(),
        title: "Interview",
      },
      {
        id: nanoid(),
        title: "Comedy",
      },
      {
        id: nanoid(),
        title: "UX/UI",
      },
      {
        id: nanoid(),
        title: "Electonic dance music",
      },
      {
        id: nanoid(),
        title: "Live",
      },
      {
        id: nanoid(),
        title: "Games",
      },
      {
        id: nanoid(),
        title: "Computer",
      },
      {
        id: nanoid(),
        title: "Cartoon",
      },
    ]);
  }, []);

  return {
    categories,
  }
};
