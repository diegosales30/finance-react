const InputList = () => {
  return (
    <>
      <div className="box-input-description">
        <span className="span-description">Descrição</span>
        <input
          className="input-description"
          placeholder="Ex: Salário de mês"
          type="text"
        />
      </div>
      <div className="container-input-valor">
        <div className="box-valor">
          <span>Valor</span>
          <input className="input-number" placeholder="1R$" type="number" />
        </div>
        <div className="box-type-value">
          <span>Tipo de valor</span>
          <select className="input-select">
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saída</option>
          </select>
        </div>
      </div>
      <div className="container-btn-cadastrar">
        <button className="btn-cadastrar">Cadastrar</button>
      </div>
    </>
  );
};
export default InputList;
