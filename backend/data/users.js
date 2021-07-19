import bycrypt from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: bycrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: bycrypt.hashSync('1234', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    password: bycrypt.hashSync('1234', 10),
  },
]

export default users