Bro-chella
A social planning application for the Coachella event. 

Background and Overview
Bro-chella is an application that allows users to create groups based on acts from Coachella. Within a group,users can join through invites and plan the details of their activities, such as whereabouts and location meetup. Lastly, users can also discover related acts either through their group discover page.

Building Bro-chella will involve:
- Build database to store users, and event-groups information
- Create form group creation
- Allow users to interact with a planning module when on the group show page
- View map location of area-site

Functionality & MVP
- Splash page of some bros(probably ronilAndFriends)
- User Auth: sign up and login 
- Dashboard of groups a user has created or joined
- Group show page 
- Acts discovery and search
- Render Google Maps API on the group show page

Bonus Features
- Chat within the group show page
- Allow users to pin their current location during the event

Technologies & Technical Challenges 
- Backend: Node, Express, MongoDBAtlas 
- Frontend: React, Redux

UI/UX
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

Things Accomplished Over the Weekend
- Splash Page, User Auth
- Dashboard

Group Members and Work Breakdown
- Monday:
  - Andrew: UserAuth Backend/Frontend; Splash Page, Navbar, Modal CSS
  - Kevin: Models, Routes, Modal Backend
  - Karen: Dashboard Frontend, Group Show, Create/Edit Group Forms; 

  ---Push to Heroku---

- Tuesday: 
  - Andrew: Group Index and Show page CSS; Check Routes;
  - Kevin: Seed Everything including Acts, Discovery Page; BE/FE routes are matching; (BE location column for event)
  - Karen: Group Show CSS, Google Maps API(FE); 
- Wednesday:
  - Production README, Push to Heroku (seeded database)

Plan for getting users and reviews 

