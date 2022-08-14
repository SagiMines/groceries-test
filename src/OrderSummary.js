function OrderSummary(props) {
  return (
    <div className="container-fluid">
      <h2>Order Summary</h2>
      <h3>Total amount of groceries: {props.data.totalItems}</h3>
      <h3>Total price: {props.data.totalPrice}$</h3>
    </div>
  );
}

export default OrderSummary;
