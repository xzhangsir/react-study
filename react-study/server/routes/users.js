const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  console.log(req.body)
  // res.status(400).json(req.body)
  res.send({
    msg: 'hello!'
  })
})


module.exports = router