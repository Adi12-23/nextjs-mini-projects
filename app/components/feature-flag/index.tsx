"use client"

import { JSX, useContext} from "react";
import Accordian from "../accordian";
import SearchAutoComplete from "../autocomplete";
import DarkMode from "../dark-mode"
import GithubProfileFinder from "../github-profile-finder";
import ImageSlider from "../image-slider";
import ModalComponent from "../modal-popup";
import QrCodeGenerator from "../qr-code-generator";
import RandomColor from "../random-color";
import ScrollIndicator from "../scroll-indicator";
import StarRating from "../star-rating";
import TabsComponent from "../tabs";
import Tictactoe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagContext } from "./context";
export type FeatureFlags = {
  showDarkMode: boolean;
  showTicTacToe: boolean;
  showAccordian: boolean;
  showGithubProfileFinder: boolean;
  showSearchAutocomplete: boolean;
  showImageSlider: boolean;
  showLoadMore: boolean;
  showModalPopup: boolean;
  showQrCode: boolean;
  showRandomColor: boolean;
  showScrollIndicator: boolean;
  showStarRating: boolean;
  showTabs: boolean;
  showTreeView: boolean;
};
type FeatureFlagContextType = {
  loading: boolean;
  enabledFlags: FeatureFlags;
};
export default function FeatureFlags(){
 
  const{loading,enabledFlags}=useContext(FeatureFlagContext)

  const ComponentsToRender:{
    key: keyof FeatureFlags;
    component: JSX.Element
  }[] =[
    {
        key:"showDarkMode",
        component:<DarkMode />
    },
    {
        key:"showTicTacToe",
        component:<Tictactoe />
    },
    {
        key:"showAccordian",
        component:<Accordian />
    },
    {
        key:"showGithubProfileFinder",
        component:<GithubProfileFinder />
    },
    {
        key:"showSearchAutocomplete",
        component:<SearchAutoComplete />
    },
    {
        key:"showImageSlider",
        component:<ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />
    },
    {
        key:"showModalPopup",
        component:<ModalComponent />
    },
    {
        key:"showQrCode",
        component:<QrCodeGenerator />
    },
    {
        key:"showRandomColor",
        component:<RandomColor />
    },
    {
        key:"showScrollIndicator",
        component:<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    },
    {
        key:"showStarRating",
        component:<StarRating />
    },
    {
        key:"showTabs",
        component:<TabsComponent />
    },
    {
        key:"showTreeView",
        component:<TreeView />
    },
  ];
  if(loading) return <h1>Loading!</h1>;
  function checkEnabledFlag(getCurrentKey: keyof FeatureFlags):boolean{
    return enabledFlags[getCurrentKey];
  }
    return(
        <div className="text-center">
         <h1>
            FeatureFlag Implementation
         </h1>
         {
            ComponentsToRender.map(componentItem=>checkEnabledFlag(componentItem.key)?
            <div key={componentItem.key}>{componentItem.component}</div> : null)
         }
        </div>
    );
}