import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Marzo 30, 1985</div>
      <div className="expense-item__description">
        <h2>Seguro de auto</h2>
        <div className="expense-item__price">clp$ 40.000</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
