import "../css/SeasonDisplay.css";
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter"; //  if condition ? true : false
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

/*      const icon = "winter"   --> syntax for getting variable in className--> <i className="`${icon}`" />
 */

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth);
  return (
    <div>
      <p>Season Display</p>
      {/*${variable} direct assignment -> here season returns string winter/summer */}
      <h3 className={`text-left ${season}`}>{season}</h3>
    </div>
  );
};

export default SeasonDisplay;
