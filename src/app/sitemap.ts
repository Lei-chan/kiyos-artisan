import type { MetadataRoute } from "next";
import { BASE_URL } from "./lib/config/settings";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja`,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/ja`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja`,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja`,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/ja/artisan-mariage-vineyards`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/artisan-mariage-vineyards`,
          en: `${BASE_URL}/en/artisan-mariage-vineyards`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/artisan-mariage-vineyards`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/artisan-mariage-vineyards`,
          en: `${BASE_URL}/en/artisan-mariage-vineyards`,
        },
      },
    },
    {
      url: `${BASE_URL}/ja/kiyos-cellar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/kiyos-cellar`,
          en: `${BASE_URL}/en/kiyos-cellar`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/kiyos-cellar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/kiyos-cellar`,
          en: `${BASE_URL}/en/kiyos-cellar`,
        },
      },
    },
    {
      url: `${BASE_URL}/ja/history`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/history`,
          en: `${BASE_URL}/en/history`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/history`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/history`,
          en: `${BASE_URL}/en/history`,
        },
      },
    },
  ];
}
