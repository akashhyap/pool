
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Teaser = ({ blok }) => {
  const textColor = {
    color: blok?.textColor?.color,
    fontSize: blok?.textSize,
    fontWeight: blok?.fontWeight,
    lineHeight: blok?.lineHeight,
  };

  return (
    <div
      className={`${blok.alignText} teaser_content`}
      style={textColor}
      {...storyblokEditable(blok)}
    >
      {render(blok.content)}
    </div>
  );
};

export default Teaser;
