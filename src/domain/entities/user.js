class User{
  constructor({ id, name, email, password, role = 'cliente' }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}

export default User;