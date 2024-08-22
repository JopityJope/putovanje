import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Bellefair,
  Red_Hat_Display,
  Cormorant_Garamond,
  Raleway,
} from "next/font/google";
import "./globals.css";

const Bodoni_Moda_init = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bodini-moda",
});

const Raleway_init = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-raleway",
});

const Bellefair_init = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

const RedHatDisplay_init = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-red-hat-display",
});

const Cormorant_Garamond_init = Cormorant_Garamond({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const APP_NAME = "Putovanja";
const APP_DEFAULT_TITLE = "Putovanja u XIX veku";
const APP_TITLE_TEMPLATE = "%s - Putovanja";
const APP_DESCRIPTION = "Putovanja u XIX veku";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[62.5%]">
      <body
        suppressHydrationWarning={true}
        className={`${Bodoni_Moda_init.variable} ${RedHatDisplay_init.variable} ${Bellefair_init.variable} ${Cormorant_Garamond_init.variable}  ${Raleway_init.variable} font-cormorant text-text`}
      >
        {children}
      </body>
    </html>
  );
}
