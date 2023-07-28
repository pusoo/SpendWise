import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonList,
  IonReorderGroup,
  IonItem,
  IonLabel,
  IonReorder,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { removeCircleOutline, createOutline, add } from "ionicons/icons";
import Tab3Modal from "../components/Modal/Tab3Modal";
import Header from "../components/Header";
import EditModal from "../components/Modal/EditModal";
import "./Tab3.css";

const Tab3 = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [categories, setCategories] = useState(["Category 1", "Category 2"]);
  const [editedCategory, setEditedCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleReorder = (event) => {
    console.log("Dragged from index", event.detail.from, "to", event.detail.to);
    event.detail.complete();
  };

  const handleModalAdd = () => {
    setShowModalAdd((prev) => !prev);
  };

  const handleModalClose = () => {
    setShowModalAdd(false);
    setShowModalEdit(false);
    setEditedCategory("");
  };

  const handleModalEdit = (category, index) => {
    setSelectedCategory(index);
    setEditedCategory(category);
    setShowModalEdit((prev) => !prev);
  };

  const handleCategorySave = (categoryName) => {
    if (editedCategory !== "") {
      const updatedCategories = [...categories];
      updatedCategories[selectedCategory] = categoryName;
      setCategories(updatedCategories);
    } else {
      setCategories((prevCategories) => [...prevCategories, categoryName]);
    }
    setShowModalAdd((prev) => !prev);
    setShowModalEdit((prev) => !prev);
    setSelectedCategory(null);
    setEditedCategory("");
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonList className="category-lists">
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            {categories.map((category, index) => (
              <IonItem key={index}>
                <IonButton
                  fill="clear"
                  onClick={() => {
                    setCategories((prev) => {
                      return prev.filter((categories, i) => i !== index);
                    });
                  }}
                >
                  <IonIcon slot="icon-only" icon={removeCircleOutline} />
                </IonButton>
                <IonLabel>{category}</IonLabel>
                <IonReorder slot="end" />
                <IonButton
                  fill="clear"
                  onClick={() => handleModalEdit(category, index)}
                >
                  <IonIcon slot="icon-only" icon={createOutline} />
                </IonButton>
              </IonItem>
            ))}
          </IonReorderGroup>
        </IonList>
        <IonButton className="add-btn" onClick={handleModalAdd}>
          <IonIcon slot="icon-only" icon={add}></IonIcon>
        </IonButton>
        <Tab3Modal
          isOpen={showModalAdd}
          onClose={handleModalClose}
          onSave={handleCategorySave}
          initialValue={
            selectedCategory !== null ? categories[selectedCategory] : ""
          }
        />
        <EditModal
          isOpen={showModalEdit}
          onClose={handleModalClose}
          onSave={handleCategorySave}
          initialValue={editedCategory}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
