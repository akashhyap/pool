import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import React from "react";

const ButtonLink = ({ blok }) => {
  //   console.log("button component", blok);

  const buttonSize = blok?.button_size;
  const sizeClass =
    buttonSize === "jumbo"
      ? "px-6 py-4"
      : buttonSize === "large"
      ? "px-4 py-3"
      : "px-3 py-2";

  const margin = {
    marginTop: blok?.marginTop,
    marginBottom: blok?.marginBottom,
  };
  return (
    <div {...storyblokEditable(blok)} className={`${blok.alignBtn}`} style={margin}>
      {blok?.type === "link" ? (
        <Link href={`/${blok?.url.cached_url}`}>{blok?.label}</Link>
      ) : (
        <Link
          href={`/${blok?.url.cached_url}`}
          className={`inline-block text-white bg-black rounded-lg ${sizeClass}`}
        >
          {blok?.label}
        </Link>
      )}
    </div>
  );
};

export default ButtonLink;
