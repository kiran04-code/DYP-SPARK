const exprees = require('express');
const router = exprees.Router();

const user = require('../model/user');

router.get('/signup', (req, res) => {
    res.render('signup');
})
router.post('/signup', async (req, res) => { 
  try {
    const body = req.body;
       await user.create({
        UserName: body.UserName,
        email: body.email,
        Number: body.Number,
        password: body.password,
    })
    res.render('signin')
  } catch (error) {
     res.render('signup', {error: "User Already Exist!"})
}
})
router.get('/hospitalDetails', (req, res) => {
    res.render('hospitalDetails');
})
router.get('/map', (req, res) => {
    res.render('map');
})
router.get('/signin', (req, res) => {
    res.render('signin');
})
router.get('/logout', (req, res) => {
    res.clearCookie('token').redirect('/')
})
router.get('/profile', (req, res) => {
    res.render('profile', {user: req.user});
})

router.post('/signin', async (req, res) => {
    try {
      const {email, password} = req.body;
     const token =   await user.matchthepasstone(email,password)
     res.cookie('token',token).redirect('/')
    } catch (error) {
      res.render('signin', {error: "Invalid email or password"})
    }
})

module.exports = router;