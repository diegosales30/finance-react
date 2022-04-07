import TotalPrice from "../TotalPrice/TotalPrice";
import ListItens from "../ListItens/ListItens";

const FinanceList = ({
  data,
  setData,
  deleteItem,
  filterSaida,
  filterEntrada,
  state,
  setState,
}) => {
  console.log(data);
  return (
    <>
      <div className="box-btn-filter">
        <div className="box-title">
          <h5 className="titulo-box-financas">Resumo</h5>
        </div>
        <div className="box-btn">
          <button onClick={() => setState(0)}>Todos</button>
          <button onClick={() => setState(1)}>Entrada</button>
          <button onClick={() => setState(2)}>Saída</button>
        </div>
      </div>
      <div className="box-financas">
        <ListItens
          state={state}
          setState={setState}
          filterEntrada={filterEntrada}
          filterSaida={filterSaida}
          deleteItem={deleteItem}
          data={data}
        />
      </div>
      <TotalPrice data={data} />
      <div className="btn-remove-all">
        <button>Remover Tudo</button>
      </div>
    </>
  );
};
export default FinanceList;
