import { StoryblokComponent } from "@storyblok/react/rsc";
import React from "react";

const ServicesNavigation = ({ blok }) => {
  console.log("side nav", blok);
  return (
    <>
      <p className="text-3xl font-bold mb-4">{blok.heading}</p>
      {blok?.navigation_links.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          closeMenu={() => setMenuOpen(false)}
        />
      ))}
    </>
  );
};

export default ServicesNavigation;
