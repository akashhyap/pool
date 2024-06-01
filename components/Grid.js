import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";

const Grid = ({ blok }) => {
  return (
    <div className="grid_block" {...storyblokEditable(blok)}>
      <div className="px-0 sm:px-4 xl:px-0">
        <div
          className={`mb-12 ${
            blok.right ? "flex items-center md:justify-between" : "block"
          }`}
        >
          <h2 className={`text-5xl font-bold mb-0 ${blok.alignText}`}>
            {blok.heading}
          </h2>
          {blok.right && blok.label && <Link
            href={`/${blok.link?.cached_url}`}
            className="bg-black text-white text-sm px-4 py-3 rounded-md"
          >
            {blok.label}
          </Link>}
        </div>
        <div className={`grid gap-12 ${blok.grid_cols}`}>
          {blok.columns.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
        <div className="text-center mt-10">
          {!blok.right && blok.label && (
            <Link
              href={`/${blok.link?.cached_url}`}
              className="bg-black text-white text-lg px-5 py-4 rounded-md inline-block"
            >
              {blok.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grid;
