class User{
  constructor({ id, name, email, password, rol = 'cliente' }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.rol = rol;
  }
}

export default User;