import React from "react";
import {
  IonModal,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonHeader,
} from "@ionic/react";
import "./Modal.css";

const SavingsModal = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} className="savings-modal">
      <IonContent>
        <IonHeader className="modal-header">Add Savings or Withdraw</IonHeader>
        <IonList className="modal-inputs">
          <IonItem>
            <IonInput
              label="Amount:"
              labelPlacement="stacked"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonRadioGroup value="custom-checked" className="savings-radio">
              <IonRadio value="custom-checked" aria-label="Custom checkbox">
                Savings
              </IonRadio>
              <IonRadio aria-label="Custom checkbox that is checked">
                Withdraw
              </IonRadio>
            </IonRadioGroup>
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

export default SavingsModal;
