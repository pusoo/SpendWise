import React, { useState } from "react";
import {
  IonModal,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonHeader,
  IonList,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import { checkmarkCircle, checkmarkCircleOutline } from "ionicons/icons";
import "./Modal.css";

const Tab1Modal = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} className="tab1-modal">
      <IonHeader className="modal-header">
        <IonSegment>
          <IonSegmentButton value="expense" className="modal-segment">
            <IonIcon icon={checkmarkCircle} />
            <IonLabel>EXPENSE</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="income" className="modal-segment">
            <IonIcon icon={checkmarkCircleOutline} />
            <IonLabel>INCOME</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent className="modal-content">
        <IonButton className="category-btn" expand="block" fill="outline">
          Category
        </IonButton>
        <IonList className="modal-inputs">
          <IonItem>
            <IonInput
              label="Amount:"
              labelPlacement="stacked"
              type="number"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Date:"
              labelPlacement="stacked"
              type="date"
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

export default Tab1Modal;
