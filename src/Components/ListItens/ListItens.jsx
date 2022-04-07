const ListItens = ({
  state,
  setState,
  data,
  deleteItem,
  filterEntrada,
  filterSaida,
}) => {
  if (state === 0) {
    return (
      <ul className="ul-list">
        {data.map((current, index) =>
          current.type === "Entrada" ? (
            <li key={index} className="item-financas color-green">
              <div className="box-text">
                <p>{current.description}</p>
                <span>{current.type}</span>
              </div>
              <div className="box-btn-delete">
                <button onClick={() => deleteItem(index)}>X</button>
                <span className="box-btn-price">
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "brl",
                  }).format(current.valor)}
                </span>
              </div>
            </li>
          ) : (
            <li key={index} className="item-financas color-red">
              <div className="box-text">
                <p>{current.description}</p>
                <span>{current.type}</span>
              </div>
              <div className="box-btn-delete">
                <button onClick={() => deleteItem(index)}>X</button>
                <span className="box-btn-price">
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "brl",
                  }).format(current.valor)}
                </span>
              </div>
            </li>
          )
        )}
      </ul>
    );
  } else if (state === 1) {
    return (
      <ul className="ul-list">
        {filterEntrada.map((current, index) => (
          <li key={index} className="item-financas color-green">
            <div className="box-text">
              <p>{current.description}</p>
              <span>{current.type}</span>
            </div>
            <div className="box-btn-delete">
              <button onClick={() => deleteItem(index)}>X</button>
              <span className="box-btn-price">
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "brl",
                }).format(current.valor)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul className="ul-list">
        {filterSaida.map((current, index) => (
          <li key={index} className="item-financas color-red">
            <div className="box-text">
              <p>{current.description}</p>
              <span>{current.type}</span>
            </div>
            <div className="box-btn-delete">
              <button onClick={() => deleteItem(index)}>X</button>
              <span className="box-btn-price">
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "brl",
                }).format(current.valor)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
};
export default ListItens;
