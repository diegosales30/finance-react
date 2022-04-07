import "./MainPage.css";
import logo from "./../../img/logoFinance.png";
import InputList from "../InputList/InputList";
import FinanceList from "../FinanceList/FinanceList";

const MainPage = ({ onClick }) => {
  return (
    <div className="container-principal-main">
      <header className="header-main">
        <figure>
          <img className="img-logo-main" src={logo} alt="logoMain" />
        </figure>
        <div>
          <button className="btn-logout-main" onClick={onClick}>
            Sair
          </button>
        </div>
      </header>
      <main className="main-principal">
        <div className="container-input-main">
          <InputList />
        </div>
        <div className="container-list-financas">
          <FinanceList />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
