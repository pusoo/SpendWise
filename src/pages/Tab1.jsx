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
  IonFab,
  IonFabButton,
  IonFabList,
} from "@ionic/react";
import { add, cashOutline, addCircleOutline } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import IncomeModal from "../components/Modal/Tab1Income";
import ExpenseModal from "../components/Modal/Tab1Expense";
import Header from "../components/Header";
import "./Tab1.css";

const Tab1 = () => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showIncomeModal, setIncomeModal] = useState(false);
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const handleExpenseModal = () => {
    setShowExpenseModal((prev) => !prev);
  };
  const handleIncomeModal = () => {
    setIncomeModal((prev) => !prev);
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
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton onClick={handleExpenseModal}>
              <IonIcon icon={cashOutline}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={handleIncomeModal}>
              <IonIcon icon={addCircleOutline}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
        <ExpenseModal isOpen={showExpenseModal} onClose={handleExpenseModal} />
        <IncomeModal isOpen={showIncomeModal} onClose={handleIncomeModal} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
