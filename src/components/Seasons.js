import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class Seasons extends React.Component {
  // constructor() function will be called first before anything else,when instance of this Class is called

  /*  super(props) -> When constructor is called it overrides the properties of Parent Class, 
                        Hence to get some functionalities of the parent class super() is used.
                        | super() -> reference to parent class constructor | 
                        Note: Not using super() will give error message.

                       | NOTE |: Using constructor is optional as |state = {lat:'null'} | will create same constructor by "babel".
                                                  |
                                                  |
                                                  V
                       constructor(props) {
                            super(props);
                            this.state = { lat: null, long: null, errorMessage: "" }; 
                        }
    */

  state = { lat: null, long: null, errorMessage: "" }; // state initialization(1) -> Now state can be referenced anywhere in the class

  /** |Best practices| -> It is best that state changes are not done inside the constructor and only initialization to be done there,
   *                    acc to code conventions of React.
   *                    1) more easy to understand and systematic.
   */

  componentDidMount() {
    // Calling geolocation in render will be calling this method each time.
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }); // state updation(2) -> setState() updates data
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  /*  Conditional Rendering and renderComponent() -> avoid applying same css for each condition
        Note:Don't forget to return after is conditional statement
    */

  renderComponent() {
    if (this.state.errorMessage && !this.state.lat) {
      // !this.state.lat => not having lat values
      return <h2>Error: {this.state.errorMessage}</h2>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    }

    return <Spinner message="Please accept user location" />; // Using Spinner.js -> it can be reused anywhere again
  }

  /* render() In this class render() called two times,
              1-> when page is refreshed and permission is asked(here it shows null)
              2-> Then as soon as user performs any action it renders it again in split seconds(here whatever value that comes from backend)
   */

  render() {
    /*  renderComponent() -> this will call renderComponent() and be applied for all conditions in it.
     */
    return <div style={{ border: "red" }}>{this.renderComponent()}</div>;
  }
}

export default Seasons;
