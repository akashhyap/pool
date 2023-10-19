import React from "react";
import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";

const Heading = ({ blok }) => {
  const textColor = {
    color: blok?.textColor?.color,
  };

  const selectedTag = blok.selectTag || 'h2';
  return (
    <div
      {...storyblokEditable(blok)}
      className={`${blok.alignText} [&>h1]:text-5xl [&>h1]:font-bold [&>h1]:my-6 [&>h2]:text-4xl [&>h2]:my-5 [&>h3]:text-3xl [&>h3]:my-3 section_title`} style={textColor}
    >
      {blok.label &&
        React.createElement(selectedTag, null, blok.label)}
    </div>
  );
};

export default Heading;
