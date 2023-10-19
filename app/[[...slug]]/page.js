import Config from "@/components/Config";
// import Footer from "@/components/Footer";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export const dynamicParams = true;

export default async function Page({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    cv: Math.random(),
  });
  let { data: config } = await storyblokApi.get("cdn/stories/config");
  return (
    <div className="relative">
      <Config blok={config?.story?.content} />
      <div className="min-h-screen">
        <StoryblokStory story={data.story} full_slug={data.story?.full_slug} />
      </div>
      {/* <Footer blok={config?.story?.content} /> */}
    </div>
  );
}

export const generateMetadata = async ({ params }) => {
  let slug = params.slug ? params.slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    resolve_links: "url",
    resolve_relations: ["related-articles.articles"],
    cv: Math.random(),
  });
  // console.log("==>", data?.story?.content?.seo[0]);
  // const hasSEOdata = data?.story?.content?.seo
  // return {
  //   title: hasSEOdata ? data?.story?.content?.seo[0]?.site_title : "Zamaripa",
  //   description: hasSEOdata ? data?.story?.content?.seo[0]?.site_description : "Zamaripa",
    // openGraph: {
    //   title: data?.story?.content?.seo ? data?.story?.content?.seo[0]?.og_title : "Zamaripa",
    //   description: hasSEOdata ? data?.story?.content?.seo[0]?.og_description : "Zamaripa",
    //   url: hasSEOdata ? data?.story?.content?.seo[0]?.og_url : "",
    //   siteName: hasSEOdata ? data?.story?.content?.seo[0]?.og_siteName : "Zamaripa",
    //   type: 'website',
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: hasSEOdata ? data?.story?.content?.seo[0]?.twitter_title : "Zamaripa",
    //   description: hasSEOdata ? data?.story?.content?.seo[0]?.og_description : "Zamaripa",
    //   creator: '@trustseo',
    // },
    // icons: {
    //  apple: [
    //     { url: '/apple-touch-icon.png' }
    //   ]
    // },
//   };
};


export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }
    const slug = data.links[linkKey].slug;

    if (slug == "home") {
      return;
    }

    let splittedSlug = slug.split("/");

    paths.push({ slug: splittedSlug });
  });
  return paths;
}
