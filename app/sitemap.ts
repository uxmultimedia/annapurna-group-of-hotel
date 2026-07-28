import type { MetadataRoute } from "next";
import { hotelData } from "@/data/hotels";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: .8 },
    { url: `${base}/hotels`, changeFrequency: "weekly", priority: .9 },
    ...hotelData.map(({ slug }) => ({ url: `${base}/hotels/${slug}`, changeFrequency: "weekly" as const, priority: .85 })),
    { url: `${base}/banquet`, changeFrequency: "monthly", priority: .8 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: .7 },
  ];
}
