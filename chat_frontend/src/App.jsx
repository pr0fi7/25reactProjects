import Accordian from "./components/accordions/index";
import RandomColor from "./components/random_color/index";
import StarRating from "./components/star_rating/index";
import ImageSlider from "./components/image_slider/index";
import LoadMoreData from "./components/load_more_data/index";
import QrCodeGenerator from "./components/qr_code_generator/index";
import TreeView from "./components/tree_view/index";
import {menus} from "./components/tree_view/data";
import LightDarkMode from "./components/light_dark_mode/index";
import ScrollIndicator from "./components/scroll_indicator/index";
import TabsTestFinal from "./components/custom_tabs/tabs_test";
import ModalTest from "./components/modal_test/modalTest";
import ProfileFinder from "./components/github_profile_finder/profile_finder";
import SearchAutoComplete from "./components/search_auto_complete/search_test";
import TicTacToe from "./components/tic-tac-toe/index";
import FeatureFlag from "./components/feature_flag/index";
import FeatureFlagState from "./components/feature_flag/context";
import UseFetchTest from "./components/useFetch/test";
import TestOutsideClick from "./components/useOutsideClick/test";
import WindowResizeTest from "./components/windowResizeHook/test";
import ScrollTo from "./components/scrollTo";
import ParticularSection from "./components/scrollTo/particularSection";
import Weather from "./components/weatherApp/weather";

function App() {
  
  return (
    <>
    {/* <Accordian /> */}
    {/* <RandomColor /> */}
    {/* {<StarRating rating={10} />} */}
    {/* <ImageSlider
    url={"https://picsum.photos/v2/list"}
    page={"1"}
    limit={"10"}/> */}
    {/* <LoadMoreData /> */}
    {/* <QrCodeGenerator />  */}
    {/* <TreeView menus={menus} /> */}
    {/* <LightDarkMode /> */}
    {/* <ScrollIndicator /> */}
    {/* <TabsTestFinal /> */}
    {/* <ModalTest /> */}
    {/* <ProfileFinder />  */}
    {/* <SearchAutoComplete /> */}
    {/* <TicTacToe /> */}
    {/* <FeatureFlagState>
      <FeatureFlag />
    </FeatureFlagState> */}
    {/* <UseFetchTest /> */}
    {/* <TestOutsideClick /> */}
    {/* <WindowResizeTest />   */}
    {/* <ScrollTo />   */}
    {/* <ParticularSection /> */}
    <Weather />

    </>
  );
}

export default App;
