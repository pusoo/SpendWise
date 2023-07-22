import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonModal,
  IonInput,
} from "@ionic/react";
import { add } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import Tab2Modal from "../components/Modal/Tab2Modal";
import SavingsModal from "../components/Modal/SavingsModal";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import "./Tab2.css";

const Tab2 = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalLists, setShowModalLists] = useState(false);

  const handleModalAdd = () => {
    setShowModalAdd((prev) => !prev);
  };

  const handleModalLists = () => {
    setShowModalLists((prev) => !prev);
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonCard onClick={handleModalLists}>
          <IonCardContent>
            <IonList lines="none">
              <IonItem>
                <IonLabel className="savings-lists">
                  <div className="savings-label">
                    <h2>Label</h2>
                    <p>₱1,000.00</p>
                  </div>
                  <ProgressBar />
                  <div className="savings-estimate">
                    <div className="savings-remaining">
                      <p>₱1,000.00</p>
                      <p>REMAINING</p>
                    </div>
                    <div className="savings-goal">
                      <p>₱2,000.00</p>
                      <p>GOAL</p>
                    </div>
                  </div>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
        <SavingsModal isOpen={showModalLists} onClose={handleModalLists} />
        <IonButton className="add-btn" onClick={handleModalAdd}>
          <IonIcon slot="icon-only" icon={add}></IonIcon>
        </IonButton>
        <Tab2Modal isOpen={showModalAdd} onClose={handleModalAdd} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
