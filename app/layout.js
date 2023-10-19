import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

// export const metadata = {
//   metadataBase: new URL("https://liedownloseweight.vercel.app/"),
//   title: "Liedownandloseweight",
//   description: "Liedownandloseweight",
// };

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={roboto.className}>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
