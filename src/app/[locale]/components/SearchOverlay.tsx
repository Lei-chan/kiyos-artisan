//react
import { useState } from "react";
//next.js
import { useRouter } from "next/navigation";
//models
import data from "../../models/search";
//type
import {
  TYPE_LOCALE,
  TYPE_SEARCH_DATA,
  TYPE_SEARCH_RESULT,
} from "../../config/type";

export default function SearchOverlay({
  currentLocale,
  open,
  onClickClose,
}: {
  currentLocale: TYPE_LOCALE;
  open: boolean;
  onClickClose: () => void;
}) {
  function handleClickDiv(e: React.MouseEvent<HTMLDivElement>) {
    if (e.currentTarget === e.target) onClickClose();
  }

  return (
    <div
      className={`w-screen h-screen bg-black/30 fixed top-0 left-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        open ? "opacity-100" : "opacity-0"
      } ${open ? "z-50" : "-z-50"}`}
      onClick={handleClickDiv}
    >
      <button
        type="button"
        className="absolute text-white w-fit h-fit top-[2%] right-[4%] text-xl lg:text-2xl"
        onClick={onClickClose}
      >
        &times;
      </button>
      <SearchContainer locale={currentLocale} onClickClose={onClickClose} />
    </div>
  );
}

function SearchContainer({
  locale,
  onClickClose,
}: {
  locale: TYPE_LOCALE;
  onClickClose: () => void;
}) {
  const [results, setResults] = useState<TYPE_SEARCH_DATA>([]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = new FormData(e.currentTarget)
      .get("value")
      ?.toString()
      .toLowerCase()
      .trim();

    if (!value) return;

    const results = data.filter(
      (data) =>
        data.title[locale].includes(value) ||
        data.searchableText[locale].includes(value) ||
        data.keywords.join(" ").includes(value)
    );

    if (!results.length)
      setMessage(locale === "ja" ? "検索結果 ０件" : "0 search results");
    setResults(results);
  }

  return (
    <div className="relative w-[90%] sm:w-[80%] lg:w-[70%] h-[80%] bg-slate-50 rounded-lg">
      <SearchForm locale={locale} onSubmitForm={handleSubmit} />
      <SearchResults
        locale={locale}
        results={results}
        message={message}
        onClickClose={onClickClose}
      />
    </div>
  );
}

function SearchForm({
  locale,
  onSubmitForm,
}: {
  locale: TYPE_LOCALE;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      className="w-full h-1/5 border-b-2 flex flex-row items-center justify-center gap-[1%]"
      onSubmit={onSubmitForm}
    >
      <input
        type="search"
        placeholder={
          locale === "ja" ? "何をお探しですか？" : "What are you looking for?"
        }
        name="value"
        className="w-[80%] h-[40%] text-center border-2 border-black/10 rounded text-base lg:text-lg 2xl:text-2xl"
      ></input>
      <button
        type="submit"
        className="w-7 xl:w-10 2xl:w-13 aspect-square bg-[url('/icons/magnifying-glass.svg')] bg-[length:88%] bg-no-repeat bg-center"
      ></button>
    </form>
  );
}

function SearchResults({
  locale,
  results,
  message,
  onClickClose,
}: {
  locale: TYPE_LOCALE;
  results: TYPE_SEARCH_DATA;
  message: string;
  onClickClose: () => void;
}) {
  return (
    <ul className="w-full h-4/5 overflow-auto">
      {results.length ? (
        results.map((result, i) => (
          <Result
            key={i}
            locale={locale}
            result={result}
            onClickClose={onClickClose}
          />
        ))
      ) : (
        <p className="w-full h-full flex flex-col text-center pt-[45%] text-base text-black/60">
          {message}
        </p>
      )}
    </ul>
  );
}

function Result({
  locale,
  result,
  onClickClose,
}: {
  locale: TYPE_LOCALE;
  result: TYPE_SEARCH_RESULT;
  onClickClose: () => void;
}) {
  const router = useRouter();

  function handleClickResult() {
    router.push(`/${locale}${result.href}`);
    onClickClose();
  }

  return (
    <li
      className="w-full h-1/3 border-b-2 py-[4%] px-[5%] flex flex-col gap-[3%] overflow-hidden hover:bg-slate-200"
      onClick={handleClickResult}
    >
      <h3 className="h-[25%] text-base lg:text-lg 2xl:text-2xl font-semibold text-blue-600 overflow-hidden text-ellipsis whitespace-nowrap">
        {result.title[locale]}
      </h3>
      <p className="w-full h-[72%] break-all overflow-hidden text-sm lg:text-base 2xl:text-xl">
        {result.searchableText[locale]}
      </p>
    </li>
  );
}
