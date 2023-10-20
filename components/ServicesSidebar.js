import { StoryblokComponent } from "@storyblok/react/rsc";
import React from "react";

const ServicesSidebar = ({ blok,full_slug }) => {
  // console.log("side ServicesSidebar", full_slug);
  const servicesNavigationComponents =
    blok?.body?.filter(
      (nestedBlok) => nestedBlok.component === "servicesNavigation"
    ) || [];
  return (
    <div className="basis-5/12 hidden lg:block">
      {servicesNavigationComponents.length > 0 && <div className="bg-[#F2F7FB] p-5 sticky top-5 rounded-lg">
       {servicesNavigationComponents.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} full_slug={full_slug} key={nestedBlok._uid} />
        ))}
      </div>}
    </div>
  );
};

export default ServicesSidebar;
