class Purchase{
  constructor({ product, user, quantity, date = new Date() }) {
    this.product = product;
    this.user = user;
    this.quantity = quantity;
    this.date = date;
  }
}

export default Purchase;