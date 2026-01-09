
import FeatureFlags from "./components/feature-flag";
import ScrollToTopAndBottom from "./components/scroll-to-top-bottom";
import ScrollToSection from "./components/scroll-to-top-bottom/scroll-to-section";
import UseFetchHookComponent from "./components/use-fetch";
import UseOutsideClickComponent from "./components/use-outside-click";
import UseWindowResizeComponent from "./components/use-window-resize";
export default function Home() {
  return (
    <div className="text-center">
      {/** These Components are rendered using the Feature Flags Component */}
      {/* Accordian Component
      <Accordian />
      {/* Random Color Component*/}
      {/*Star Rating Component */}
      {/*Image Slider Component */}      
      {/*Load More Component*/}
      {/*Tree View Recursive Component */}
      {/*QR Code Generator*/}
      {/*Dark Mode Component */}
      {/*Scroll Indicator Components*/}
      {/* Tabs Component */}
      {/*Modal Component */}
      {/*Github Profile Finder Component */}
      {/* Search Autocomplete */}
      {/* Tic Tac Toe Game */}
      {/*Feature Flags */}
      <FeatureFlags />
      <UseFetchHookComponent />
      <UseOutsideClickComponent />
      <UseWindowResizeComponent />
      <ScrollToTopAndBottom />
      <ScrollToSection />
    </div>
  );
}
