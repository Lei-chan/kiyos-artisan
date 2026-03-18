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
  content: { ja: JSX.Element; en: JSX.Element };
  searchableText: { ja: string; en: string };
};

export type TYPE_SEARCH_RESULT = {
  title: { ja: string; en: string };
  searchableText: { ja: string; en: string };
  href: string;
  keywords: string[];
};

export type TYPE_SEARCH_DATA = TYPE_SEARCH_RESULT[] | [];

export type HistoryData = {
  year: number;
  month: number;
  contents: {
    images: { data: string; name: string }[];
    sentence: { en: string[]; ja: string[] };
  }[];
};

export type HistoryDataForSearch = {
  type: TYPE_GROUP;
  year: number;
  month: number;
  sentence: { ja: string[]; en: string[] }[];
};

export type NewsData = {
  _id: string;
  date: string;
  type: NewsType;
  content: {
    title: { en: string; ja: string };
    sentence: { en: string[]; ja: string[] };
    link: string;
  };
};

export type NewsType = TYPE_GROUP | "both";
