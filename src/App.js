import "./App.css";
import { Header } from "./components/Header/Header";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { MainContent } from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <div className="header-line"></div>
      <div className="container grid">
        <Header />
        <NavMenu />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
