import React from 'react';
import '../../assets/stylesheets/reset.css';
import '../../assets/stylesheets/main_page.css';

class MainPage extends React.Component {
  
  componentDidMount() {
    document.title = 'Bro-chella';
  };

  render() {
    return (
      <div className='main-landing'>
        <div className='landing-page-container'>
          <section className="why-brochella">
            <h2>Why Bro-chella?</h2>
            <p>
              Ever feel like it's a massive hassle getting all your bros together
              for events like Coachella? Sent out too many texts for an unorganized
              group trip to this coveted music festival? Lost track of who's coming 
              from where, who's hitching a ride with who, and who's bringing the beer?
            </p>
          </section>
          <section className="what-brochella">
            <h2>What is Bro-chella?</h2>
            <p>
              Bro-chella is a platform for organizing your own custom groups
              and itinerary for events like Coachella. With an minimalistic and clean
              design and simple navigation, you can easily create groups that you can
              invite friends to (soon<sup>tm</sup>). Groups have an embedded map for
              your friends to easily find the location of the event, and list out the acts
              that the group is planning to attend, as well as the associated details.
            </p>
          </section>
          <section className="beyond-brochella">
            <h2>Beyond Bro-chella</h2>
            <p>
              Developed by Andrew Chan, Karen Lai, and Kevin Brimmerman, Bro-chella is
              a brief introduction to the MERN stack and the first real experience of a 
              group full stack project for all of us. Working under a five day timeline 
              with no prior experience with the MERN stack, this site was developed upon 
              an idea that could potentially become a real app once fully completed.
            </p>
          </section>
        </div>
      </div> 
    )
  }
}

export default MainPage;