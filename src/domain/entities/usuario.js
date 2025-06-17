class User{
  constructor({ id, name, email, pasword, rol = 'cliente' }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.pasword = pasword;
    this.rol = rol;
  }
}

module.exports = User;