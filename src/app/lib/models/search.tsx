//models
import { homeForSearch } from "./home";
import { newsForSearch } from "./news";
import { kiyosForSearch } from "./kiyos";
import { amavinForSearch } from "./amavin";

const dataForSearch = [
  ...homeForSearch,
  ...newsForSearch,
  ...kiyosForSearch,
  ...amavinForSearch,
];

export default dataForSearch;
