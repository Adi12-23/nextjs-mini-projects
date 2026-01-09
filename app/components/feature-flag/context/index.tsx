"use client"
import React, { createContext, useEffect, useState } from "react";
import featureFlagServiceCall from "../data";

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

const defaultFlags: FeatureFlags = {
  showDarkMode: false,
  showTicTacToe: false,
  showAccordian: false,
  showGithubProfileFinder: false,
  showSearchAutocomplete: false,
  showImageSlider: false,
  showLoadMore: false,
  showModalPopup: false,
  showQrCode: false,
  showRandomColor: false,
  showScrollIndicator: false,
  showStarRating: false,
  showTabs: false,
  showTreeView: false,
};

export const FeatureFlagContext = createContext<FeatureFlagContextType>({
  loading: false,
  enabledFlags: defaultFlags,
});

export default function FeatureFlagGlobalState({
  children,
}: React.PropsWithChildren) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] =
  useState<FeatureFlags>(defaultFlags);

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await featureFlagServiceCall();
      setEnabledFlags(response);
    } catch (e: any) {
      throw new Error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{loading,enabledFlags}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
