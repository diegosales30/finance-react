import "./MainPage.css";

const MainPage = ({ onClick }) => {
  return (
    <div>
      <div>
        <h2>PRINCIPAL</h2>
        <button onClick={onClick}>Sair</button>
      </div>
    </div>
  );
};

export default MainPage;
