# Bro-chella
A social planning application for the Coachella event. 

## Background and Overview
Bro-chella is an application that allows users to create groups based on acts from Coachella. Within a group,users can join through invites and plan the details of their activities, such as whereabouts and location meetup. Lastly, users can also discover related acts either through their group discover page.

## Building Bro-chella involved:
- Building and implementing a thorough database schema with backend routes to store users, event-groups, and acts
- Full CRUD functionality, allowing users to create, update, and delete groups with their friends
- Allow users to interact with a planning module when on the group show page
- View map location of area-site

## Functionality & MVPs
- Splash page of some bros(probably ronilAndFriends)
- User Auth: sign up and login, complete with demo user
- Dashboard of groups that a user has created or joined, including a preview of upcoming acts for that group
- Group show page, containing a map of the surrounding area, members of that group, and acts that that group has subscribed to attend
- Acts discovery and search
- Render Google Maps API on the group show page

### Bonus Features - Upcoming!
- Chat within the group show page
- Allow users to pin their current location during the event

### Technologies & Technical Challenges 
- Backend: Node, Express, MongoDB 
- Frontend: React, Redux

# Code Highlights

### Cross-Document Referencing
```
/routes/api/group.js

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
        .then((group) => {
            const { name, owner } = group
            res.json({ name: name, owner: owner.id, id: group.id })
            ;
        })
});
```
Creating groups and simultaneously pushing groups into a user's Groups array proved to be something of a challenge.
We were able to use promises and Mongoose's populate() method to achieve both of these desired results, and to return to the api only the information that would be relevant upon a successful group creation.

## UI/UX

The goal is to maintain a minimalistic design that will allow users to create many groups, while sustaining an organized dashboard. 
- The app will have a splash page with animations of pictures of past Coachella events, as well as buttons to allow users to Signup or Login through a modal
- Upon Signing up or Logging in, the user's dashbaord will render with groups they are participating in.
The groups will render according to a chronological order starting with the next upcoming event. Only one group will appear on the dashboard at a time, while the adjacent listed groups will fade in upon scrolling in their direction, and fade out when no longer shown. 
  Additional features: 
  - scrollbar-less scrolling
  - Borderless
  - 100 vh/vw pages
  - All headers are sans-serif, body serif
  - Moment.js for relative time
- The group show page will contain a log of acts (hourly) where users can append details of their plans onto. It will also contain a map of the event staging area. There will be a carousel bar of related events that will render a modal (with prefilled date and place) upon a group creation based on that event.
- The Discover Page will render a list of related events. 
  - Events will be sorted according to the most related tags based on their previosly created groups and acts.


## Group Members & Responsibilities

### Andrew
 - User Authentication, User Dashboard/Group Carousel Component Creation/Page Styling, Discovery Page Layout, Chief CSSer, General Squasher of Bugs/Fix'er Upper

### Karen
 - Built Out React Skeleton, Full Google Maps API Integration, Groups Show Page Components, Thorough Styling
 
### Kevin
 - Primary Backend Routes/API Architect, Implementor of Group CRUD Form Functionality, Small Styling of Delete/Create Modal, Provider of Pikachu Gif

