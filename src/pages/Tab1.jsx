import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { add } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import Tab1Modal from "../components/Modal/Tab1Modal";
import Header from "../components/Header";
import "./Tab1.css";

const Tab1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol class="balance">
                  <p>BALANCE</p>
                  <h1>₱{balance.toFixed(2)}</h1>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="expense">
                  <p>EXPENSE</p>
                  <h1>₱{expense.toFixed(2)}</h1>
                </IonCol>
                <IonCol>
                  <p>INCOME</p>
                  <h1>₱{income.toFixed(2)}</h1>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonList inset={true}>
          <IonItem>
            <IonLabel>
              <div className="title">
                <p>Expenses</p>
              </div>
              <div className="date">
                <p>07/21/2023</p>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <div className="expense-lists">
                <p>label</p>
                <p>500.00</p>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <div className="expense-lists">
                <p>label</p>
                <p>- 500.00</p>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <div className="title">
                <p>Income</p>
              </div>
              <div className="date">
                <p>07/21/2023</p>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <div className="expense-lists">
                <p>label</p>
                <p>500.00</p>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <div className="expense-lists">
                <p>label</p>
                <p>500.00</p>
              </div>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonButton className="add-btn" onClick={handleModal}>
          <IonIcon slot="icon-only" icon={add}></IonIcon>
        </IonButton>
        <Tab1Modal
          isOpen={showModal}
          onClose={handleModal}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
