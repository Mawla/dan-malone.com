import fs from "fs";
import path from "path";
import { Metadata } from "next";
import matter from "gray-matter";

export interface PageData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  siteName: string;
  openGraph: {
    title: string;
    description: string;
    type: string;
    locale: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
  icons: {
    icon: string;
    apple: string;
  };
}

export type PageContent = {
  metadata: Metadata;
  content: {
    raw: string;
    data: PageData;
  };
};

/**
 * Load and parse page content and metadata from MDX file
 */
export async function getPageContent(pagePath: string): Promise<PageContent> {
  const filePath = path.join(
    process.cwd(),
    "content/pages",
    pagePath,
    "index.mdx"
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const metadata: Metadata = {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || "https://dan-malone.com"
    ),
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    authors: [{ name: data.author }],
    openGraph: {
      type: data.openGraph.type,
      locale: data.openGraph.locale,
      url: data.url,
      siteName: data.siteName,
      title: data.openGraph.title,
      description: data.openGraph.description,
      images: data.openGraph.images,
    },
    twitter: {
      card: data.twitter.card,
      title: data.twitter.title,
      description: data.twitter.description,
      images: data.twitter.images,
    },
    robots: data.robots,
    icons: data.icons,
  };

  return {
    metadata,
    content: {
      raw: content,
      data: data as PageData,
    },
  };
}

/**
 * Get metadata for a specific page
 */
export async function getMetadata(
  pagePath: string = "home"
): Promise<Metadata> {
  const { metadata } = await getPageContent(pagePath);
  return metadata;
}
