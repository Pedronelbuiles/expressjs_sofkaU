const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')

const app = express()

// Session configuration
app.use(session({ secret: 'secret-key123', resave: false, saveUninitialized: false }))

// Passport configuration
app.use(passport.initialize())
app.use(passport.session())

// Views engine configuration
app.set('view engine', 'ejs')

// Routes and middleware authentication add here
passport.use(new LocalStrategy((username, password, done) => {
  //Here you should verify the credentials of user in your data base
  if (username === 'username' && password === 'password') {
    console.log('user login ok')
    return done(null, { id: 1, username: 'user' })
  } else {
    return done(null, false)
  }
}))

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  // Recover here the user from data base from id
  done(null, { id: 1, username: 'user' })
})

app.get('/', (req, res) => {
  res.render('index', { user: req.user })
});

app.get('/login', (req, res) => {
  res.render('login')
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('Server listening in port 3000')
})