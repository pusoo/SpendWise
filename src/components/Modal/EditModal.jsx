import React, { useState, useEffect } from "react";
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

const EditModal = ({ isOpen, onClose, onSave, initialValue }) => {
  const [categoryEdit, setCategoryEdit] = useState(initialValue);

  useEffect(() => {
    setCategoryEdit(initialValue);
  }, [initialValue]);

  const handleCategoryEdit = (e) => {
    setCategoryEdit(e.target.value);
  };

  const handleSave = () => {
    onSave(categoryEdit);
    onClose();
  };

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
              value={categoryEdit}
              onIonChange={handleCategoryEdit}
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

export default EditModal;
