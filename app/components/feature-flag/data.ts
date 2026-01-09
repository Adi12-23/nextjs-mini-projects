import { TbCurrencyRubel } from "react-icons/tb";
import { FeatureFlags } from "./context";

const dummyApiResponse = {
  showDarkMode: true,
  showTicTacToe: true,
  showAccordian: true,
  showGithubProfileFinder: true,
  showSearchAutocomplete: true,
  showImageSlider: true,
  showLoadMore: true,
  showModalPopup: true,
  showQrCode: true,
  showRandomColor: true,
  showScrollIndicator: true,
  showStarRating: true,
  showTabs: true,
  showTreeView: true,
};

export default function featureFlagServiceCall():Promise<FeatureFlags> {
  return new Promise<FeatureFlags>((resolve, reject) => {
    if (dummyApiResponse) setTimeout(()=>resolve(dummyApiResponse), 500);
    else reject("An Error Occured, Please Try again")
  });
}
