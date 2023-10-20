import { StoryblokComponent } from "@storyblok/react/rsc";
import React from "react";

const ServicesNavigation = ({ blok,full_slug }) => {
  // console.log("side nav full_slug", full_slug);
  return (
    <>
      <p className="text-3xl font-bold mb-4">{blok.heading}</p>
      <ul>
        {blok?.navigation_links.map((nestedBlok) => (
          <StoryblokComponent
            blok={nestedBlok}
            full_slug={full_slug}
            key={nestedBlok._uid}
            closeMenu={() => setMenuOpen(false)}
          />
        ))}
      </ul>
    </>
  );
};

export default ServicesNavigation;
