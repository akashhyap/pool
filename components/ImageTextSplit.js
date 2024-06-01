import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

const ImageTextSplit = ({ blok }) => {
  const inlineStyle = {
    marginTop: blok?.marginTop,
    marginBottom: blok?.marginBottom,
  };

  return (
    <div {...storyblokEditable(blok)} style={inlineStyle}>
      <div
        className={`container mx-auto flex flex-wrap md:flex-nowrap gap-8 md:gap-16 px-4 xl:px-14 ${
          blok.reverse ? "flex-row-reverse" : ""
        } ${blok.alignItem}`}
      >
        <div className="w-full relative aspect-square md:flex-1">
          <Image
            src={blok?.image?.filename}
            alt=""
            width="800"
            height="800"
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div className={`md:flex-1 ${blok.textColor? blok.textColor : 'text-black'}`}>{render(blok.content)}</div>
      </div>
    </div>
  );
};

export default ImageTextSplit;
