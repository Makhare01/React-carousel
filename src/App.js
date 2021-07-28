import "./App.css";
import ImageSlider from "./components/imageSlider";
import { sliderData } from "./components/sliderData";

function App() {
  return <ImageSlider slides={sliderData} />;
}

export default App;
