import "./App.css";
import { Header } from "./components/Header";
import { NavMenu } from "./components/NavMenu";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <div className="header-line">
        
      </div>
      <div className='container'>
      <Header />
      <NavMenu />
      <MainContent />

      </div>
     
    </div>
  );
}

export default App;
