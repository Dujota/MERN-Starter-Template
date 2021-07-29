const User = require('../models/user');

async function signup(req, res){
  const user = new User(req.body)

  try{
    // try to save the user
    await user.save()

    // if save is ok, respond back with the user (TODO::: we will send token instead)
    res.json({user})

  }catch(err){
    // Probably a duplicate email or blank field
    res.status(400).json(err)
  }
}

module.exports = {
  signup
}