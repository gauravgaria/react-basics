import React from "react";

class Seasons extends React.Component {
  // constructor() function will be called first before anything else,when instance of this Class is called

  /*  super(props) -> When constructor is called it overrides the properties of Parent Class, 
                        Hence to get some functionalities of the parent class super() is used.
                        | super() -> reference to parent class constructor | 
                        Note: Not using super() will give error message.
    */

  constructor(props) {
    super(props);

    this.state = { lat: null, long: null }; // state initialization(1) -> Now state can be referenced anywhere in the class

    // Calling geolocation in render will be calling this method each time.

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }); // state updation(2) -> setState() updates data
      },
      (err) => {
        this.setState({ lat: err.message, long: err.message });
      }
    );
  }

  /* render() In this class render() called two times,
              1-> when page is refreshed and permission is asked(here it shows null)
              2-> Then as soon as user performs any action it renders it again in split seconds(here whatever value that comes from backend)
   */

  render() {
    return (
      <div>
        <h2>Latitude: {this.state.lat}</h2>
        <h2>longitude: {this.state.long}</h2>
      </div>
    );
  }
}

export default Seasons;
