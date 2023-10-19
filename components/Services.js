import { storyblokEditable } from "@storyblok/react/rsc";
import ServicesContent from "./ServicesContent";
import ServicesSidebar from "./ServicesSidebar";

const Services = ({ blok }) => {
  const inlineStyle = {
    marginTop: blok?.marginTop,
  };
  return (
    <div
      {...storyblokEditable(blok)}
      className="max-w-5xl mx-auto flex lg:gap-10 px-6 lg:px-0"
      style={inlineStyle}
    >
      <ServicesSidebar blok={blok} />
      <ServicesContent blok={blok} />
    </div>
  );
};

export default Services;
