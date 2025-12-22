import { JSX } from "react";

export type TYPE_LOCALE = "ja" | "en";

export type TYPE_NEWS = {
  date: string;
  type: TYPE_GROUP;
  title: { ja: string; en: string };
  content: { ja: JSX.Element; en: JSX.Element };
  new: boolean;
};

export type TYPE_GROUP = "kiyos" | "amavin";

export type TYPE_MONTH_HISTORY = {
  month: number;
  content: JSX.Element;
  searchableText: string;
};

export type TYPE_SEARCH_RESULT = {
  title: string;
  searchableText: string;
  href: string;
  keywords: [] | string[];
};

export type TYPE_SEARCH_DATA = TYPE_SEARCH_RESULT[] | [];
