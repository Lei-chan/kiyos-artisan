//models
import { homeForSearch } from "./home";
import { newsForSearch } from "./news";
import { kiyosForSearch } from "./kiyos";
import { amavinForSearch } from "./amavin";
import { historyKiyosForSearch } from "./historyKiyos/historyKiyos";
import { historyAmavinForSearch } from "./hitoryAmavin/historyAmavin";

const data = [
  ...homeForSearch,
  ...newsForSearch,
  ...kiyosForSearch,
  ...amavinForSearch,
  ...historyKiyosForSearch,
  ...historyAmavinForSearch,
];

export default data;
