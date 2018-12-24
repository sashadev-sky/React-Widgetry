import React from "react";

import Parallax from "../../assets/jss/Parallax/Parallax";
import MapContainer from "./map/mapComponent";
import App from "./app";

const Root = () => {
  return (
    <div>
      <Parallax>
        <MapContainer />
      </Parallax>
      <App />
    </div>
  );
};

export default Root;
