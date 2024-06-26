"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";
import { Menu, Popover, Transition } from "@headlessui/react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const MenuLink = ({ blok, closeMenu }) => {
  // console.log("menu", blok);
  const hasSubMenu = blok?.menu?.length != 0;
  // console.log("hasSubMenu", hasSubMenu);

  return (
    <>
      {hasSubMenu ? (
        <>
          <Menu
            as="div"
            key={`${blok?._uid}-i`}
            className="relative text-left hidden md:inline-block z-30"
          >
            {({ open }) => (
              <>
                <Menu.Button className="text-lg md:text-base mb-4 md:mb-0 text-white">
                  <span className="flex items-center gap-x-2">
                    {blok?.name} <IoMdArrowDropdown className="text-lg" />
                  </span>
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="p-4 flex flex-col gap-y-2">
                      {blok?.menu?.map((subItem, index) => (
                        <Menu.Item key={`${subItem._uid}-${index}`}>
                          {({ active }) => (
                            <Link
                              href={`/${subItem?.link?.cached_url}`}
                              className="text-lg md:text-base mb-4 md:mb-0 text-black hover:text-gray-900"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          <Popover key={blok._uid} className="md:hidden">
            {({ open }) => (
              <>
                <Popover.Button className="flex justify-between items-center w-full py-2 text-lg md:mt-0 text-white md:text-black md:hover:text-gray-900">
                  {blok.name}
                  <span>
                    {open ? (
                      <IoMdArrowDropup className="text-lg" />
                    ) : (
                      <IoMdArrowDropdown className="text-lg" />
                    )}
                  </span>
                </Popover.Button>
                <Transition
                  show={open}
                  enter="transition-opacity ease-linear duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel
                    static
                    className="flex flex-col mb-2 bg-slate-100 pl-3 pt-3 rounded-sm"
                  >
                    {blok?.menu?.map((subItem) => (
                      <Link
                        key={subItem._uid}
                        href={`/${subItem?.link?.cached_url}`}
                        className="text-lg md:text-base mb-2 md:mb-0 text-black hover:text-gray-900"
                        onClick={closeMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </>
      ) : (
        <div className="relative text-left inline-block z-10">
          <Link
            href={`/${blok.link.cached_url}`}
            className="menulinks text-lg md:text-base mb-4 md:mb-0 text-white"
            onClick={closeMenu}
          >
            {blok.name}
          </Link>
        </div>
      )}
    </>
  );
};
export default MenuLink;
