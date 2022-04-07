import { useState } from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import MainPage from "./Components/MainPage/MainPage";

import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState([]);
  const [state, setState] = useState(0);

  const handleGetIn = () => {
    isLogged ? setIsLogged(false) : setIsLogged(true);
  };

  const deleteItem = (inputIndex) => {
    const deleted = data.filter((current, index) => index !== inputIndex);
    setData(deleted);
  };

  const filterEntrada = data.filter((current) => current.type === "Entrada");
  const filterSaida = data.filter((current) => current.type === "Despesas");

  return (
    <div className="App">
      <div className="App-header">
        {isLogged ? (
          <MainPage
            onClick={handleGetIn}
            data={data}
            setData={setData}
            deleteItem={deleteItem}
            filterEntrada={filterEntrada}
            filterSaida={filterSaida}
            state={state}
            setState={setState}
          />
        ) : (
          <LandingPage onClick={handleGetIn} />
        )}
      </div>
    </div>
  );
}

export default App;
