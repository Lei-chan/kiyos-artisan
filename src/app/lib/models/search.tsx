//models
import { homeForSearch } from "./home";
import { kiyosForSearch } from "./kiyos";
import { amavinForSearch } from "./amavin";

const dataForSearch = [...homeForSearch, ...kiyosForSearch, ...amavinForSearch];

export default dataForSearch;
