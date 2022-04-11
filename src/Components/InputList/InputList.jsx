import { useState } from "react";

const InputList = ({ data, setData }) => {
  const [description, setDescription] = useState();
  const [type, setType] = useState("Entrada");
  const [valor, setValor] = useState();

  console.log(data);

  const getValue = (event) => {
    event.preventDefault();
    setData([...data, { description: description, type: type, valor: valor }]);
  };

  return (
    <>
      <form onSubmit={getValue}>
        <div className="box-input-description">
          <span className="span-description">Descrição</span>
          <input
            required
            className="input-description"
            placeholder="Ex: Salário de mês"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="container-input-valor">
          <div className="box-valor">
            <span>Valor</span>
            <input
              required
              className="input-number"
              placeholder="1 R$"
              type="number"
              step="0.01"
              onChange={(event) => setValor(Number(event.target.value))}
            />
          </div>
          <div className="box-type-value">
            <span>Tipo de valor</span>
            <select
              onChange={(event) => setType(event.target.value)}
              className="input-select"
            >
              <option type="entrada" value="Entrada">
                Entrada
              </option>
              <option type="saida" value="Despesas">
                Saída
              </option>
            </select>
          </div>
        </div>
        <div className="container-btn-cadastrar">
          <button className="btn-cadastrar">Cadastrar</button>
        </div>
      </form>
    </>
  );
};
export default InputList;
