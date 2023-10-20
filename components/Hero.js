import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";
import React from "react";

const Hero = ({ blok }) => {
  // console.log("blok hero", blok);
  const inlineStyle = {
    paddingTop: blok?.paddingTop,
    paddingBottom: blok?.paddingBottom,
    marginTop: blok?.marginTop,
  };

  return (
    <div
      className={`hero relative flex items-center justify-center overflow-hidden ${
        blok.minHeight
      } ${blok.maxWidth} ${
        blok.maxWidth ? "mx-auto rounded-lg" : ""
      } overflow-hidden`}
      style={inlineStyle}
      {...storyblokEditable(blok)}
    >
      {blok?.backgroundImage?.filename && (
        <Image
          src={`${blok?.backgroundImage?.filename}`}
          alt="Background image of hero"
          fill
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
          priority
        />
      )}
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Hero;
