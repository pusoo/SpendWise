import React, { useState } from "react";
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

const Tab3Modal = ({ isOpen, onClose, onSave }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSave = () => {
    onSave(categoryName);
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} className="tab3-modal">
      <IonContent>
        <IonHeader className="modal-header">Add Category</IonHeader>
        <IonList className="modal-inputs">
          <IonItem>
            <IonInput
              label="Name:"
              labelPlacement="stacked"
              type="text"
              onIonChange={handleCategoryChange}
            ></IonInput>
          </IonItem>
        </IonList>
        <div className="modal-footer">
          <IonButton onClick={onClose}>CANCEL</IonButton>
          <IonButton onClick={handleSave}>SAVE</IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default Tab3Modal;
