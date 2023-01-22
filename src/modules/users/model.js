const { fetchData } = require('../../utils/postgres')

const LOGIN = `
    SELECT * FROM all_users WHERE user_email = $1 AND user_password = $2
`

const USERS = `
  SELECT
    *
  FROM
    all_users
`

const ADD_USER = `
INSERT INTO all_users(user_name, user_email, user_password, user_img) VALUES($1, $2, $3, $4)
`

const DEL_USER = `
DELETE FROM all_users WHERE user_id = $1
`

const EDIT_USER = `
UPDATE all_users SET user_name = $1, user_email = $2, user_password = $3, user_img = $4 WHERE user_id = $5
`

const users = () => fetchData(USERS)
const delUser = (id) => fetchData(DEL_USER, id)
const addUser = (name, email, password, img) => fetchData(ADD_USER, name, email, password, img)
const login = (email, password) => fetchData(LOGIN, email, password)
const editUser = (name, email, password, img, id) => fetchData(EDIT_USER, name, email, password, img, id)

module.exports = {
  users,
  addUser,
  login,
  delUser,
  editUser
}