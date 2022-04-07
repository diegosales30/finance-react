import { useState } from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import MainPage from "./Components/MainPage/MainPage";

import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleGetIn = () => {
    isLogged ? setIsLogged(false) : setIsLogged(true);
  };

  return (
    <div className="App">
      <div className="App-header">
        {isLogged ? (
          <MainPage onClick={handleGetIn} />
        ) : (
          <LandingPage onClick={handleGetIn} />
        )}
      </div>
    </div>
  );
}

export default App;
