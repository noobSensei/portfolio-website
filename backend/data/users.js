import bycrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@gmaik.om',
    password: bycrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@gmaik.om',
    password: bycrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@gmaik.om',
    password: bycrypt.hashSync('123456', 10),
  },
]

export default users