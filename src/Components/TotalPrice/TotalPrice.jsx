const TotalPrice = ({ data }) => {
  const output = data.reduce(
    (a, b) => (b.type === "Entrada" ? a + b.valor : a - b.valor),
    0
  );

  return (
    <div className="totalValue">
      <div>
        <span className="total-title">Total:</span>
      </div>
      <div>
        <span className="total-price">
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl",
          }).format(output)}
        </span>
      </div>
    </div>
  );
};

export default TotalPrice;
