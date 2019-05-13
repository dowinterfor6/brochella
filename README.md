Bro-chella
A social planning application for the Coachella event. 

Background and Overview
Bro-chella is an application that allows users to create event-groups based on events from Coachella. Within an event-group, users can join through invites and plan the details of their activities, such as whereabouts and location meetup. Lastly, users can also discover related events through the disocver page or their event-group.

Building Bro-chella will involve:
- Build database to store users, and event-groups information
- Create forms for event-group creation
- Allow users to interact with a planning module when viewing an event-group
- View map location of area-site

Functionality & MVP
- Splash page of some bros(probably ronilAndFriends)
- User Auth: sign up and login 
- Dashboard of event-groups a user has created or joined
- Event-group show page 
- Acts discovery and search
- Render Google Maps API on the event-group show page

Bonus Features
- Chat within event-groups
- Allow users to pin their current location during the event

Technologies & Technical Challenges 
- Backend: Node, Express, MongoDBAtlas 
- Frontend: React, Redux

UI/UX
The goal is to maintain a minimalistic design that will allow users to create many event-groups, while sustaining an organized dashboard. 
- The app will have a splash page with animations of pictures of past Coachella events, as well as buttons to allow users to Signup or Login through a modal
- Upon Signing up or Logging in, the user's dashbaord will render with event-groups they are participated in
The event-groups will render in a chronological order starting with the next upcoming event. Only one event-group will appear on the dashboard at a time, while the adjacent listed event-groups will fade in upon scrolling in their direction, and fade out when no longer shown. 
  Additional features: 
  - scrollbar-less scrolling
  - Each page has enough information
  - Borderless
  - 100 uh/mm pages
  - Each page has enough information
  - All headers are sans-serif, body serif
  - Moment.js for relative time
- The event-group show page will contain a log of acts (hourly) where users can append details of their plans onto. It will also contain a map of the event staging area. There will be a carousel bar of related events that will render a modal (with prefilled date and place) upon a group creation based on that event.
- < Something for the dicover page >

Things Accomplished Over the Weekend
- Splash Page, User Auth
- Dashboard

Group Members and Work Breakdown

Plan for getting users and reviews 

