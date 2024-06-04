"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { StoryblokComponent } from "@storyblok/react";
import { Transition } from "@headlessui/react";
import CustomStoryblokComponent from "./StoryblokMenuComponent";
import { usePathname } from "next/navigation";

const Config = ({ blok }) => {
  // console.log("config file", blok);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const dimensionLogo = {
    width: blok?.widthLogo,
    height: blok?.heightLogo
  };
  // console.log(dimensionLogo);

  return (
    <div className={`z-50 w-full ${isHome ? "absolute" : "bg-[#28292a]"}`}>
      <div className="md:max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-3 px-4">
          {/* Logo */}
          <div className={`flex justify-start ${isHome ? "md:order-2" : ""}`}>
            <Link href="/" className="md:ml-auto">
              <span className="sr-only">Pool Cleaning Services</span>
              {blok?.logo ? (
                <img
                  src={blok?.logo?.filename}
                  alt="Pool Cleaning Services"
                  className="h-full object-cover"
                  width={blok.widthLogo}
                  height={blok.heightLogo}
                />
              ) : (
                "Pool Cleaning Services"
              )}
            </Link>
          </div>
          {/* Toggle Menu */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {/* Icon for menu (three horizontal lines) */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          {/* Main Menu */}
          <nav className="hidden md:flex space-x-8">
            {blok?.header_menu?.map((nestedBlok) => (
              <StoryblokComponent
                blok={nestedBlok}
                key={nestedBlok._uid}
                closeMenu={() => setMenuOpen(false)}
              />
            ))}
          </nav>
          <Link
            href="/contact"
            className={`text-white bg-black rounded-lg px-3 py-2 text-sm md:order-3 hidden md:inline-block ${
              isHome ? "md:order-3" : ""
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay Transition */}
      <Transition
        show={menuOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      </Transition>

      {/* Mobile menu */}
      <Transition
        show={menuOpen}
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        as={Fragment}
      >
        <div className="fixed top-0 left-0 w-10/12 h-screen bg-[#28292a] overflow-y-auto z-50 shadow-lg">
          <div className="overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href="/">
                  <span className="sr-only">Pool Cleaning Services</span>
                  {blok?.logo ? (
                    <img
                      src={blok?.logo?.filename}
                      alt="Pool Cleaning"
                      className="h-full object-cove"
                      width={180}
                      height={150}
                    />
                  ) : (
                    "Pool Cleaning Services"
                  )}
                </Link>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  {/* X icon for closing menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-4 pt-2 pb-3 mt-5 sm:px-3 flex flex-col">
              {blok?.header_menu?.map((nestedBlok) => (
                <CustomStoryblokComponent
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                  closeMenu={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Config;
