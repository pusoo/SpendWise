import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

const Header = () => {
  return (
    <IonHeader className="page-header">
      <IonToolbar>
        <IonTitle>SpendWise</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
