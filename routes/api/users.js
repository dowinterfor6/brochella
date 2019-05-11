const express = require("express");
const router = express.Router();
// Import bcrypt and user model for registration
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

// TESTING:
router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

// Register route
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        // Throw status 400 error
        return res.status(400).json({ email: "Email already has an associated account"})
      } else {
        console.log('hi');
        // Create a new user
        const newUser = new User({
          handle: req.body.handle,
          email: req.body.email,
          password: req.body.password
        });
        // Generate hashed password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              // TODO: Update if user model changes (unlikely)
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
          })
        })
      }
    })
})

module.exports = router;