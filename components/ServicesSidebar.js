import { StoryblokComponent } from "@storyblok/react/rsc";
import React from "react";

const ServicesSidebar = ({ blok }) => {
  // console.log("side ServicesSidebar", blok);
  return (
    <div className="basis-5/12 hidden lg:block">
      <div className="bg-[#F2F7FB] p-5 sticky top-5">
        {blok?.body?.map((nestedBlok) => {
          const isNav = nestedBlok.component == "servicesNavigation";
          const sideNav = isNav ? (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ) : null;
          return sideNav;
        })}
      </div>
    </div>
  );
};

export default ServicesSidebar;
