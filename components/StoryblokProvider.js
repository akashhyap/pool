/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
import Services from "./Services";
import Heading from "./Heading";
import Hero from "./Hero";
import HomeHero from "./HomeHero";
import SimpleContent from "./SimpleContent";
import RichTextContent from "./RichTextContent";
import Teaser from "./Teaser";
import ButtonLink from "./ButtonLink";
import ImageTextSplit from "./ImageTextSplit";
import Grid from "./Grid";
import Feature from "./Feature";
import Hightlight from "./Hightlight";
import Section from "./Section";
import ServicesNavigation from "./ServicesNavigation";
import Config from "./Config";
import MenuLink from "./MenuLink";
import SubmenuLink from "./SubmenuLink";
import SideNavLink from "./SideNavLink";
import FooterLink from "./FooterLink";
import Contact from "./Contact";


/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    services: Services,
    heading: Heading,
    hero: Hero,
    "home-hero": HomeHero,
    buttonLink: ButtonLink,
    grid: Grid,
    feature: Feature,
    teaser: Teaser,
    hightlight: Hightlight,
    section: Section,
    servicesNavigation: ServicesNavigation,
    sideNavLink: SideNavLink,
    // config: Config,
    "simple-content": SimpleContent,
    "rich-text-content": RichTextContent,
    "image-text-split": ImageTextSplit,
    menu_link: MenuLink,
    submenu_link: SubmenuLink,
    footer_link: FooterLink,
    contact: Contact,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
