import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Section = ({ blok }) => {
  const inlineStyle = {
    marginTop: blok?.marginTop,
    marginBottom: blok?.marginBottom,
  };
  return (
    <div {...storyblokEditable(blok)} className={`container ${blok.maxWidth} ${blok.maxWidth} ${
      blok.maxWidth ? "mx-auto" : ""
    }`} style={inlineStyle}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
};

export default Section;