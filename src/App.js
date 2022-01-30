import Navbar from "./components/Navbar";
import wave from "./assets/svgs/wave.svg";
import Mid from "./components/Mid";
import Places from "./components/Places";
import Steps from "./components/Steps";
import Subnslt from "./components/Subnslt";
import "./App.css";
import Screen from "./components/Screen";
import Category from "./components/Category";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <img className="wave" src={wave} alt="" />

      <Navbar />
      <Screen/>
      <Category/>
      <Mid />
      <Places />
      <Steps />
      <Subnslt />
      <Footer/>
    </div>
  );
};

export default App;
