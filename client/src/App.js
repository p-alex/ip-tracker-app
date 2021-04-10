import Banner from "./components/Banner/Banner";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import MapView from "./components/MapView/MapView";
import Footer from "./components/Footer/Footer";
import "./App.scss";
function App() {
  return (
    <>
      <Banner />
      <DataDisplay />
      <MapView />
      <Footer />
    </>
  );
}

export default App;
