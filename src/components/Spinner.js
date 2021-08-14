import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

/*  If there is no value in the above prop then this default value is shown
    But if the value is assigned to the prop it will override the default.
 */

Spinner.defaultProps = {
  message: "Loading....",
};

export default Spinner;
