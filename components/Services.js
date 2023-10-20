import { storyblokEditable } from "@storyblok/react/rsc";
import ServicesContent from "./ServicesContent";
import ServicesSidebar from "./ServicesSidebar";

const Services = ({ blok, full_slug }) => {
  const inlineStyle = {
    marginTop: blok?.marginTop,
  };
  return (
    <div
      {...storyblokEditable(blok)}
      className="max-w-5xl mx-auto flex lg:gap-10 px-6 xl:px-0"
      style={inlineStyle}
    >
      <ServicesSidebar blok={blok} full_slug={full_slug} />
      <ServicesContent blok={blok} />
    </div>
  );
};

export default Services;
