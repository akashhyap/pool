"use client";
import { storyblokEditable } from "@storyblok/react";
import React, { useEffect, useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

function useHeadings() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2")).map(
      (element) => {
        const ID = element.textContent.toLowerCase().split(" ").join("-");
        return element.setAttribute("id", ID);
      }
    );
    setHeadings(elements);
  }, []);
  return headings;
}

const RichTextContent = ({ blok }) => {
  useHeadings();

  const textColor = {
    color: blok?.textColor?.color,
  };

  return (
    <div
      className={`${blok.alignText} content_block`}
      style={textColor}
      {...storyblokEditable(blok)}
    >
      {render(blok.content)}
    </div>
  );
};

export default RichTextContent;
