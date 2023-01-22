const model = require('./model')
const jwt = require('../../utils/jwt')

module.exports = {
  LOGIN: async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await model.login(email, password)

        if (user) {
          user.filter(a => {
            res.json({
              message: "Authorized",
              access_token: jwt({ id: a.user_id }),
              id: a.user_id
          })
          })

       }else{
        return res.sendStatus(401)
       }

    } catch (err) {
        console.log(err.message)
    }

},
  ALL_USERS: async(req , res) => {
    try {
      const allusers = await model.users()

      res.json(allusers)
    } catch (err) {
      console.log(err)
    }
  },

  ADD_USER: async (req, res) => {
    try {
        const { name, email, password, img } = req.body

        const newuser = await model.addUser(name, email, password, img)

        res.json(newuser)
    } catch (err) {
        console.log(err.message)
    }
},
DEL_USER: async (req, res) => {
  try {
      const { id } = req.body

      const delUser = await model.delUser(id)

      res.json(delUser)
  } catch (err) {
      console.log(err.message)
  }
},
EDIT_USER: async (req, res) => {
  try {
      const { name, email, password, img, id } = req.body

      const edituser = await model.editUser(name, email, password, img, id)

      res.json(edituser)
  } catch (err) {
      console.log(err.message)
  }
}
}