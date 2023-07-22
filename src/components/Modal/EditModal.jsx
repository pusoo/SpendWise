import React from "react";
import {
  IonModal,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonList,
  IonHeader,
} from "@ionic/react";
import "./Modal.css";

const EditModal = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} className="edit-modal">
      <IonContent>
        <IonHeader className="modal-header">Edit Category</IonHeader>
        <IonList className="modal-inputs">
          <IonItem>
            <IonInput
              label="Name:"
              labelPlacement="stacked"
              type="text"
            ></IonInput>
          </IonItem>
        </IonList>
        <div className="modal-footer">
          <IonButton onClick={onClose}>CANCEL</IonButton>
          <IonButton onClick={onClose}>SAVE</IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default EditModal;
