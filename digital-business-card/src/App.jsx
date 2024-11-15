import "./App.css";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Text from "./components/Text";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app'>
      <Header />
      <Buttons />
      <Text />
      <Footer />
    </div>
  );
}

export default App;
