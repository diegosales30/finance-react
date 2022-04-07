const FinanceList = () => {
  return (
    <>
      <div className="box-btn-filter">
        <div className="box-title">
          <h5 className="titulo-box-financas">Resumo</h5>
        </div>
        <div className="box-btn">
          <button>Todos</button>
          <button>Entrada</button>
          <button>Saída</button>
        </div>
      </div>
      <div className="box-financas">
        <ul className="ul-list">
          <li className="item-financas">
            <div className="box-text">
              <p>gasolida adulterada</p>
              <span>entrada</span>
            </div>
            <div className="box-btn-delete">
              <button>X</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="btn-remove-all">
        <button>Remover Tudo</button>
      </div>
    </>
  );
};
export default FinanceList;
