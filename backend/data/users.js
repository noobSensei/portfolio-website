import bycrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bycrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: bycrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    password: bycrypt.hashSync('123456', 10),
  },
]

export default users