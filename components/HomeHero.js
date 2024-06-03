import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
const HomeHero = ({ blok }) => {
  // console.log("blok hero", blok);
  //   const inlineStyle = {
  //     paddingTop: blok?.paddingTop,
  //     paddingBottom: blok?.paddingBottom,
  //     marginTop: blok?.marginTop,
  //   };

  return (
    <div className="2xl:container mx-auto flex flex-wrap lg:flex-nowrap overflow-hidden" {...storyblokEditable(blok)}>
      <div className="bg-[#28292a] lg:basis-8/12 py-[100px] px-6 lg:px-12 lg:pr-40">
        <h1 className="text-white pt-10 xl:leading-tight">{blok.title}</h1>
        <p className="text-white">{blok.subtitle}</p>
        <div className="my-5">
          <Link
            href={`/${blok?.buttonLeftLink?.cached_url}`}
            className="inline-block text-black bg-white rounded-lg px-3 py-2"
          >
            {blok?.buttonLeftLabel}
          </Link>
        </div>
        <p className="text-white text-sm flex items-center space-x-1"><IoShieldCheckmark/> <span>{blok.notes}</span></p>
      </div>
      <div className="relative flex-1 lg:py-5">
        <div className="md:hidden text-center z-20 w-full absolute md:relative bottom-5 md:bottom-0 md:mt-3">
          <Link
            href={`/${blok?.buttonRightLink?.cached_url}`}
            className="inline-block text-white bg-black rounded-lg px-3 py-2 text-sm"
          >
            {blok?.buttonRightLabel}
          </Link>
        </div>
        {blok?.image?.filename && (
          <div className="aspect-w-7 aspect-h-7 lg:aspect-none">
            <Image
              src={`${blok?.image?.filename}`}
              alt="Background image of hero"
              fill
              className="absolute top-0 left-0 z-0 w-full h-full object-cover"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeHero;
