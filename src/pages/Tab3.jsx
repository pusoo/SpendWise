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
  IonFab,
  IonFabButton,
  IonFabList,
} from "@ionic/react";
import { removeCircleOutline, createOutline, add } from "ionicons/icons";
import Header from "../components/Header";
import "./Tab3.css";
import "../components/Modal/Modal.css";

// svg icons
import Awards from "../icons/awards.svg";
import Baby from "../icons/baby.svg";
import Beauty from "../icons/beauty.svg";
import Bills from "../icons/bills.svg";
import Car from "../icons/car.svg";
import Clothing from "../icons/clothing.svg";
import Coupons from "../icons/coupons.svg";
import Education from "../icons/education.svg";
import Electronics from "../icons/electronics.svg";
import Entertainment from "../icons/entertainment.svg";
import Food from "../icons/food.svg";
import Grants from "../icons/grants.svg";
import Health from "../icons/health.svg";
import Home from "../icons/home.svg";
import Insurance from "../icons/insurance.svg";
import Lottery from "../icons/lottery.svg";
import Refunds from "../icons/refunds.svg";
import Rental from "../icons/rental.svg";
import Salary from "../icons/salary.svg";
import Sale from "../icons/sale.svg";
import Shopping from "../icons/shopping.svg";
import Social from "../icons/social.svg";
import Sport from "../icons/sport.svg";
import Tax from "../icons/tax.svg";
import Telephone from "../icons/telephone.svg";
import Transportation from "../icons/transportation.svg";

const Tab3 = ({ categories, setCategories }) => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryIcon, setCategoryIcon] = useState(null);
  const [editCategoryIndex, setEditCategoryIndex] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState("");
  const [editCategory, setEditCategory] = useState(null);
  const [editCategoryIcon, setEditCategoryIcon] = useState(null);

  const handleReorder = (event) => {
    console.log("Dragged from index", event.detail.from, "to", event.detail.to);
    event.detail.complete();
  };

  const handleModalAdd = () => {
    setShowModalAdd((prev) => !prev);
  };

  const handleModalEdit = (category, index) => {
    console.log("Editing category:", category);
    console.log("Category index:", index);
    setEditCategory(category);
    setEditCategoryName(category.label);
    setEditCategoryIndex(index);
    setEditCategoryIcon(category.icon);
    setShowModalEdit(true);
  };

  const iconOptions = [
    { label: "Awards", icon: Awards },
    { label: "Baby", icon: Baby },
    { label: "Beauty", icon: Beauty },
    { label: "Bills", icon: Bills },
    { label: "Car", icon: Car },
    { label: "Clothing", icon: Clothing },
    { label: "Coupons", icon: Coupons },
    { label: "Education", icon: Education },
    { label: "Electronics", icon: Electronics },
    { label: "Entertainment", icon: Entertainment },
    { label: "Food", icon: Food },
    { label: "Grants", icon: Grants },
    { label: "Health", icon: Health },
    { label: "Home", icon: Home },
    { label: "Insurance", icon: Insurance },
    { label: "Lottery", icon: Lottery },
    { label: "Refunds", icon: Refunds },
    { label: "Rental", icon: Rental },
    { label: "Salary", icon: Salary },
    { label: "Sale", icon: Sale },
    { label: "Shopping", icon: Shopping },
    { label: "Social", icon: Social },
    { label: "Sport", icon: Sport },
    { label: "Tax", icon: Tax },
    { label: "Telephone", icon: Telephone },
    { label: "Transportation", icon: Transportation },
  ];

  const handleAddCategory = () => {
    if (categoryName.trim() !== "" && categoryIcon) {
      const newCategoryObject = {
        id: Date.now(),
        label: categoryName.trim(),
        icon: categoryIcon,
      };

      setCategories((prevCategories) => [...prevCategories, newCategoryObject]);
      setShowModalAdd(false);
      setCategoryName("");
      setCategoryIcon(null);
    }
  };

  const handleSaveEditCategory = () => {
    if (editCategory && editCategoryIndex !== null) {
      setCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        updatedCategories[editCategoryIndex] = {
          ...editCategory,
          label: editCategoryName.trim(),
          icon: editCategoryIcon,
        };
        return updatedCategories;
      });

      setShowModalEdit(false);
      setEditCategory(null);
      setEditCategoryIndex(null);
    }
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonList className="category-lists">
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            {categories &&
              categories.map((category, index) => (
                <IonItem key={category.id}>
                  <IonButton
                    fill="clear"
                    onClick={() => {
                      setCategories((prev) => {
                        return prev.filter(
                          (prevCategory) => prevCategory.id !== category.id
                        );
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
                  {editCategoryIndex === index && (
                    <IonModal isOpen={showModalEdit} className="edit-modal">
                      <IonContent>
                        <IonHeader className="modal-header">
                          <IonToolbar>
                            <IonTitle>Edit Category</IonTitle>
                          </IonToolbar>
                        </IonHeader>
                        <IonList className="modal-inputs">
                          <IonItem key={editCategory.id}>
                            <IonInput
                              label="Name:"
                              labelPlacement="stacked"
                              type="text"
                              value={editCategoryName}
                              onIonChange={(e) =>
                                setEditCategoryName(e.target.value)
                              }
                            ></IonInput>
                          </IonItem>
                          <IonItem lines="none">
                            <IonLabel>Icon</IonLabel>
                          </IonItem>
                          <IonGrid>
                            <IonRow
                              style={{
                                border: "1px solid #004ba8",
                                borderRadius: "10px",
                              }}
                            >
                              {iconOptions.map((option, index) => (
                                <IonCol size="3" key={index}>
                                  <IonIcon
                                    icon={option.icon}
                                    onClick={() =>
                                      setEditCategoryIcon(option.icon)
                                    }
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      cursor: "pointer",
                                      padding: "8px",
                                      background: `${
                                        editCategoryIcon === option.icon
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
                          <IonButton onClick={() => setShowModalEdit(false)}>
                            CANCEL
                          </IonButton>
                          <IonButton onClick={handleSaveEditCategory}>
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
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
