import React from "react";
import {
  IonModal,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonList,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Modal.css";

const Tab2Modal = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} className="tab2-modal">
      <IonContent>
        <IonHeader className="modal-header">
          <IonToolbar>
            <IonTitle>Create New Goal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList className="modal-inputs">
          <IonItem>
            <IonInput
              label="Goal name:"
              labelPlacement="stacked"
              type="text"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Goal Amount:"
              labelPlacement="stacked"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
            ></IonInput>
          </IonItem>
        </IonList>
        <div className="modal-footer">
          <IonButton onClick={onClose}>CANCEL</IonButton>
          <IonButton onClick={onClose}>DONE</IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default Tab2Modal;
