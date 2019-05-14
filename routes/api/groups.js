const express = require('express');
const router = express.Router();
const passport = require('passport');

const Group = require('../../models/Group');
const validateGroupInput = require('../../validation/group');
const User = require('../../models/User');

router.get('/test', (req, res) => {
    res.json({ msg: 'This is the groups route' })
});

router.get('/user/:user_id', (req, res) => {
    Group.find({ user: req.params.user_id })
      .then((groups) => res.json(groups))
      .catch((err) => res.status(404).json({ nouserfound: 'No groups found for this user.' }));
  });

router.get('/:id', (req, res) => {
    Group.findById(req.params.id )
        .then((group) => {
            res.json({
            members: group.members,
            owner: group.owner,
            name: group.name,
            acts: group.acts
            })
        })
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

    newGroup.save()
        .then((group) => group.populate('owner').execPopulate())
        .then((group) => {
            group.owner.groups.push(group.id)
            return group.owner.save()
            .then(() => {
                return group
            })
        })
        //async await???
        .then((group) => {
            const { name, owner } = group
            res.json({ name: name, owner: owner.id });
        })

});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Group.findByIdAndDelete(req.params.id)
        .then((docs) => res.status(200).json({ msg: "Group sucessfully deleted." }))
        .catch((err) => res.status(400))
});

router.put('/:id', (req, res) => {
    Group.findByIdAndUpdate({_id: req.params.id},req.body)
        .then(() => Group.findOne({_id: req.params.id}))
        .then((group) => res.send(group))
});

router.get('/:id/acts', (req, res) => {
    Group.findById(req.params.id)
        .then((group) => {
            res.json({
                acts: group.acts
            })
    })
})

module.exports = router;


// convaluted workaround - unnecessary but works (ALMOST!)

// router.put('/:id', (req, res) => {
//     Group.findByIdAndUpdate({_id: req.params.id},req.body)
//         .then(() => Group.findOne({_id: req.params.id}))
//         // .then((group) => group.members.forEach((member) => {
//         //     User.findOne({_id: member})
//         //         .then((user) => {
//         //             user.groups.findByIdAndUpdate({_id: req.params.id}, req.body)
//         //         })
//         //     // member.groups.findByIdAndUpdate({_id: req.params.id}, req.body)
//         //     // .then(() => Group.findOne({_id: req.params.id}))
//         // }))
//         .then((group) => res.send(group))
// });

// 5cd9e058a551963435c33528
// 5cda15da6139f92544c0075c