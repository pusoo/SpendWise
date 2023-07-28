import React, { useState } from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonPage,
  IonList,
  IonReorderGroup,
  IonItem,
  IonInput,
  IonLabel,
  IonReorder,
  IonButton,
  IonIcon,
  IonModal,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { removeCircleOutline, createOutline, add } from "ionicons/icons";
import Header from "../components/Header";
import "./Tab3.css";
import "../components/Modal/Modal.css";

// svg icons
import babyIcon from "../icons/baby.svg";
import beautyIcon from "../icons/beauty.svg";
import billsIcon from "../icons/bills.svg";
import carIcon from "../icons/car.svg";
import clothingIcon from "../icons/clothing.svg";

const Tab3 = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [categories, setCategories] = useState([
    { label: "Baby", icon: babyIcon },
    { label: "Beauty", icon: beautyIcon },
    { label: "Bills", icon: billsIcon },
    { label: "Car", icon: carIcon },
    { label: "Clothing", icon: clothingIcon },
  ]);
  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState(null);
  const [editCategoryIndex, setEditCategoryIndex] = useState(null);

  const handleReorder = (event) => {
    console.log("Dragged from index", event.detail.from, "to", event.detail.to);
    event.detail.complete();
  };

  const handleModalAdd = () => {
    setShowModalAdd((prev) => !prev);
  };

  const handleModalEdit = (editCategory, index) => {
    setEditCategoryName(editCategory);
    setEditCategoryIndex(index);
    setShowModalEdit((prev) => !prev);
  };

  const iconOptions = [
    { label: "Baby", icon: babyIcon },
    { label: "Beauty", icon: beautyIcon },
    { label: "Bills", icon: billsIcon },
    { label: "Car", icon: carIcon },
    { label: "Clothing", icon: clothingIcon },
  ];

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
                      return prev.filter((category, i) => i !== index);
                    });
                  }}
                >
                  <IonIcon slot="icon-only" icon={removeCircleOutline} />
                </IonButton>
                <IonIcon
                  icon={category.icon}
                  style={{
                    marginLeft: "10px",
                    marginRight: "8px",
                    width: "35px",
                    height: "35px",
                  }}
                />
                <IonLabel>{category.label}</IonLabel>
                <IonReorder slot="end" />
                <IonButton
                  fill="clear"
                  onClick={() => handleModalEdit(category, index)}
                >
                  <IonIcon slot="icon-only" icon={createOutline} />
                </IonButton>

                {/* EDIT MODAL */}
                {editCategoryName && editCategoryIndex === index && (
                  <IonModal isOpen={showModalEdit} className="edit-modal">
                    <IonContent>
                      <IonHeader className="modal-header">
                        <IonToolbar>
                          <IonTitle>Edit Category</IonTitle>
                        </IonToolbar>
                      </IonHeader>
                      <IonList className="modal-inputs">
                        <IonItem key={index}>
                          <IonInput
                            label="Name:"
                            labelPlacement="stacked"
                            type="text"
                            value={editCategoryName.label}
                            onIonChange={(e) => {
                              setEditCategoryName((prev) => ({
                                ...prev,
                                label: e.target.value,
                              }));
                            }}
                          ></IonInput>
                        </IonItem>
                      </IonList>
                      <div className="modal-footer">
                        <IonButton onClick={() => setShowModalEdit(false)}>
                          CANCEL
                        </IonButton>
                        <IonButton
                          onClick={() => {
                            setCategories((prev) => {
                              const updatedRecords = [...prev];
                              updatedRecords[editCategoryIndex] =
                                editCategoryName;
                              return updatedRecords;
                            });
                            setShowModalEdit(false);
                          }}
                        >
                          SAVE
                        </IonButton>
                      </div>
                    </IonContent>
                  </IonModal>
                )}
              </IonItem>
            ))}
          </IonReorderGroup>
        </IonList>

        {/* ADD BUTTON */}
        <IonButton className="add-btn" onClick={handleModalAdd}>
          <IonIcon slot="icon-only" icon={add}></IonIcon>
        </IonButton>

        {/* ADD MODAL */}
        <IonModal isOpen={showModalAdd} className="tab3-modal">
          <IonContent>
            <IonHeader className="modal-header">
              <IonToolbar>
                <IonTitle>Add Category</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonList className="modal-inputs">
              <IonItem>
                <IonInput
                  label="Name:"
                  labelPlacement="stacked"
                  type="text"
                  value={categoryName}
                  onIonChange={(e) => setCategoryName(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Icon</IonLabel>
              </IonItem>
              <IonGrid>
                <IonRow
                  style={{ border: "1px solid #004ba8", borderRadius: "10px" }}
                >
                  {iconOptions.map((option, index) => (
                    <IonCol size="3" key={index}>
                      <IonIcon
                        icon={option.icon}
                        onClick={() => setSelectedIcon(option.icon)}
                        style={{
                          width: "40px",
                          height: "40px",
                          cursor: "pointer",
                          padding: "8px",
                          background: `${
                            selectedIcon === option.icon
                              ? "#d7d8da"
                              : "transparent"
                          }`,
                          borderRadius: "10px",
                        }}
                      />
                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </IonList>
            <div className="modal-footer">
              <IonButton onClick={handleModalAdd}>CANCEL</IonButton>
              <IonButton
                onClick={() => {
                  setCategories((prev) => {
                    return [
                      ...prev,
                      {
                        label: categoryName,
                        icon: selectedIcon,
                      },
                    ];
                  });
                  setShowModalAdd(false);
                  setCategoryName("");
                  setSelectedIcon(null);
                }}
              >
                DONE
              </IonButton>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
