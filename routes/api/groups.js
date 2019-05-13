const express = require('express');
const router = express.Router();
const passport = require('passport');

const Group = require('../../models/Group');
const validateGroupInput = require('../../validation/group');

router.get('/test', (req, res) => {
    res.json({ msg: 'This is the groups route' })
});

router.get('/user/:user_id', (req, res) => {
    Group.find({ user: req.params.user_id })
      .then((groups) => res.json(groups))
      .catch((err) => res.status(404).json({ notweetsfound: 'No groups found for this user.' }));
  });

router.get('/:id', (req, res) => {
    Group.findById(req.params.id )
        .then((group) => res.json(group))
        .catch((err) => res.status(404).json({ nogroupfound: "That group does not exist." }))
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateGroupInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const newGroup = new Group({
        name: req.body.name,
        owner: req.user.id,
        members: [req.user.id]
    });

    newGroup.save().then((group) => res.json(group)).then(() => owner.groups.push(newGroup));
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateGroupInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    Group.findByIdAndDelete(req.params.id)
        .then((docs) => res.status(200).send({docs}))
        .catch((err) => res.status(400))
});

module.exports = router;