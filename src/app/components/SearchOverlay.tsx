import { useState } from "react";
import data from "../models/search";
import { TYPE_SEARCH_DATA, TYPE_SEARCH_RESULT } from "../type";
import { useRouter } from "next/navigation";

export default function SearchOverlay({
  open,
  onClickClose,
}: {
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
        className="absolute text-white w-fit h-fit top-[2%] right-[4%] text-xl"
        onClick={onClickClose}
      >
        &times;
      </button>
      <SearchContainer onClickClose={onClickClose} />
    </div>
  );
}

function SearchContainer({ onClickClose }: { onClickClose: () => void }) {
  const [results, setResults] = useState<TYPE_SEARCH_DATA>([]);

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
        data.title.includes(value) ||
        data.searchableText.includes(value) ||
        data.keywords.join(" ").includes(value)
    );

    setResults(results);
  }

  return (
    <div className="relative w-[90%] h-[80%] bg-slate-50 rounded-lg">
      <SearchForm onSubmitForm={handleSubmit} />
      <SearchResults results={results} onClickClose={onClickClose} />
    </div>
  );
}

function SearchForm({
  onSubmitForm,
}: {
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      className="w-full h-1/5 border-b-2 flex flex-row items-center justify-center gap-[1%]"
      onSubmit={onSubmitForm}
    >
      <input
        type="search"
        placeholder="What are you looking for?"
        name="value"
        className="w-[80%] h-[40%] text-center border-2 border-black/10 rounded"
      ></input>
      <button
        type="submit"
        className="w-[9%] aspect-square bg-[url('/icons/magnifying-glass.svg')] bg-[length:88%] bg-no-repeat bg-center"
      ></button>
    </form>
  );
}

function SearchResults({
  results,
  onClickClose,
}: {
  results: TYPE_SEARCH_DATA;
  onClickClose: () => void;
}) {
  return (
    <ul className="w-full h-4/5 overflow-auto">
      {results.map((result, i) => (
        <Result key={i} result={result} onClickClose={onClickClose} />
      ))}
    </ul>
  );
}

function Result({
  result,
  onClickClose,
}: {
  result: TYPE_SEARCH_RESULT;
  onClickClose: () => void;
}) {
  const router = useRouter();

  function handleClickResult() {
    router.push(result.href);
    onClickClose();
  }

  return (
    <li
      className="w-full h-1/3 border-b-2 py-[4%] px-[5%] overflow-hidden hover:bg-slate-200"
      onClick={handleClickResult}
    >
      <h3 className="h-[23%] text-base font-semibold text-blue-600 overflow-hidden text-ellipsis whitespace-nowrap">
        {result.title}
      </h3>
      <p className="w-full h-[74%] break-all overflow-hidden mt-[3%] text-sm">
        {result.searchableText}
      </p>
    </li>
  );
}
