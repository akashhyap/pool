import { StoryblokComponent } from "@storyblok/react/rsc";
import React from "react";

const ServicesContent = ({ blok }) => {
  // console.log("blok service", blok);
  return (
    <>
      {blok?.body?.map((nestedBlok) => {
        const isNav = nestedBlok.component == "servicesNavigation";
        const content = !isNav ? (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ) : null;
        return content;
      })}
    </>
  );
};

export default ServicesContent;
