import React, { useState } from "react";
import {
  IonModal,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonHeader,
  IonList,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import { checkmarkCircle, checkmarkCircleOutline } from "ionicons/icons";
import "./Modal.css";

const IncomeModal = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} className="income-modal">
      <IonHeader className="modal-header">
        <IonSegment>
          <IonSegmentButton value="income" className="modal-segment">
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

export default IncomeModal;