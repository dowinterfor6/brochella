import React from 'react';
import '../../../src/assets/stylesheets/map.css'

class Map extends React.Component {

  componentDidMount() {

    this.mapReady();

  }

  mapReady() {
    const mapOptions = {
      center: { lat: 33.7389815, lng: -116.2592564 }, // this is SF
      zoom: 10
    };
    this.map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
  }


  render() {
    return (
      <div>
        <h1> COACHELLA GROUNDS </h1>
        <div id="map"></div>
      </div>
    )
  }
}

export default Map;