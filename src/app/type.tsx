import { JSX } from "react";

export type TYPE_NEWS = {
  date: string;
  type: "kiyos" | "amavin";
  title: string;
  content: JSX.Element;
  new: boolean;
};
