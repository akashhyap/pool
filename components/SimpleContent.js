import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const SimpleContent = ({ blok }) => {
  // console.log("simple content", blok);
  const inlineStyle = {
    marginTop: blok?.marginTop,
    marginBottom: blok?.marginBottom,
    paddingTop: blok?.paddingTop,
    paddingBottom: blok?.paddingBottom,
    backgroundColor: blok?.backgroundColor?.color,
  };

  return (
    <div
      {...storyblokEditable(blok)}
      className={`relative z-10 container ${blok.maxWidth} ${
        blok.maxWidth ? "mx-auto" : ""
      } ${blok.contentAlign}`}
      style={inlineStyle}
    >
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default SimpleContent;
