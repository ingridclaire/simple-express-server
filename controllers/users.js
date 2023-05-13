const loginUser = (req, res) => {
  console.log(req.body);
  res.json({message: 'logged in'})
}


module.exports = { loginUser }