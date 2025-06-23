class Purchase{
  constructor({ productId, userId, quantity, date = new Date() }) {
    this.productId = productId;
    this.userId = userId;
    this.quantity = quantity;
    this.date = date;
  }
}

export default Purchase;