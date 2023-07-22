import React from "react";
import { IonProgressBar } from "@ionic/react";

const ProgressBar = ({ value }) => {
  return (
    <div>
      <IonProgressBar value={value} />
    </div>
  );
};

export default ProgressBar;
