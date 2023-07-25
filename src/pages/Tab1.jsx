import React, { useState, useRef } from "react";
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
  IonModal,
  IonHeader,
  IonButtons,
  IonTitle,
  IonToolbar,
  IonInput,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { add, cashOutline, addCircleOutline, carOutline } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
// import IncomeModal from "../components/Modal/Tab1Income";
// import ExpenseModal from "../components/Modal/Tab1Expense";
import Header from "../components/Header";
import "./Tab1.css";

const Tab1 = () => {
  const [incomeRecords, setIncomeRecords] = useState([
    { label: "Salary", amount: "50000", date: "2023-07-25" },
    { label: "Awards", amount: "1000", date: "2023-07-25" },
  ]);
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomeDate, setIncomeDate] = useState("");
  const [expenseRecords, setExpenseRecords] = useState([
    { label: "Laptop", amount: "20000", date: "2023-07-25" },
    { label: "Bills", amount: "2000", date: "2023-07-25" },
  ]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState("");
  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  const handleIncomeModal = () => {
    setShowIncomeModal((prev) => !prev);
  };
  const handleExpenseModal = () => {
    setShowExpenseModal((prev) => !prev);
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
                  <h1>
                    {`₱${(
                      incomeRecords.reduce((acc, cur) => {
                        return (acc += parseInt(cur.amount));
                      }, 0) -
                      expenseRecords.reduce((acc, cur) => {
                        return (acc += parseInt(cur.amount));
                      }, 0)
                    ).toFixed(2)}`}
                  </h1>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="expense">
                  <p>EXPENSE</p>
                  <h1>
                    ₱
                    {expenseRecords
                      .reduce((acc, cur) => {
                        return (acc += parseInt(cur.amount));
                      }, 0)
                      .toFixed(2)}
                  </h1>
                </IonCol>
                <IonCol>
                  <p>INCOME</p>
                  <h1>
                    ₱
                    {incomeRecords
                      .reduce((acc, cur) => {
                        return (acc += parseInt(cur.amount));
                      }, 0)
                      .toFixed(2)}
                  </h1>
                  {/* <h1>₱{income.toFixed(2)}</h1> */}
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonList lines="full" className="income-lists">
          <IonItem>
            <IonLabel>Income</IonLabel>
          </IonItem>
          {incomeRecords.map((incomeRecord, index) => {
            return (
              <IonItem key={index}>
                <IonLabel
                  style={{
                    display: "flex",
                    width: "100vw",
                    flexDirection: "column",
                    padding: "5px 8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{incomeRecord.label}</p>
                    <p>{incomeRecord.amount}</p>
                    <p>{incomeRecord.date}</p>
                  </div>
                </IonLabel>
              </IonItem>
            );
          })}
        </IonList>
        <IonList lines="full" className="expense-lists">
          <IonItem>
            <IonLabel>Expense</IonLabel>
          </IonItem>
          {expenseRecords.map((expenseRecord, index) => {
            return (
              <IonItem key={index}>
                <IonLabel
                  style={{
                    display: "flex",
                    width: "100vw",
                    flexDirection: "column",
                    padding: "5px 8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{expenseRecord.label}</p>
                    <p>{expenseRecord.amount}</p>
                    <p>{expenseRecord.date}</p>
                  </div>
                </IonLabel>
              </IonItem>
            );
          })}
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

        {/* INCOME MODAL */}
        <IonModal isOpen={showIncomeModal} className="income-modal">
          <IonHeader className="modal-header">
            <IonSegment>
              <IonSegmentButton value="expense" className="modal-segment">
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
                  label="Name: "
                  labelPlacement="stacked"
                  type="text"
                  value={incomeName}
                  onIonChange={(e) => setIncomeName(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  label="Date: "
                  labelPlacement="stacked"
                  type="date"
                  value={incomeDate}
                  onIonChange={(e) => setIncomeDate(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  label="Amount:"
                  labelPlacement="stacked"
                  type="text"
                  value={incomeAmount}
                  onIonChange={(e) => setIncomeAmount(e.target.value)}
                ></IonInput>
              </IonItem>
            </IonList>
            <div className="modal-footer">
              <IonButton onClick={() => setShowIncomeModal(false)}>
                CANCEL
              </IonButton>
              <IonButton
                onClick={() => {
                  setIncomeRecords((prev) => {
                    return [
                      ...prev,
                      {
                        label: incomeName,
                        amount: incomeAmount,
                        date: incomeDate,
                      },
                    ];
                  });
                  setShowIncomeModal(false);
                }}
              >
                DONE
              </IonButton>
            </div>
          </IonContent>
        </IonModal>

        {/* EXPENSE MODAL */}
        <IonModal isOpen={showExpenseModal} className="expense-modal">
          <IonHeader className="modal-header">
            <IonSegment>
              <IonSegmentButton value="expense" className="modal-segment">
                <IonLabel>EXPENSE</IonLabel>
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
                  label="Name: "
                  labelPlacement="stacked"
                  type="text"
                  value={expenseName}
                  onIonChange={(e) => setExpenseName(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  label="Date: "
                  labelPlacement="stacked"
                  type="date"
                  value={expenseDate}
                  onIonChange={(e) => setExpenseDate(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  label="Amount:"
                  labelPlacement="stacked"
                  type="text"
                  value={expenseAmount}
                  onIonChange={(e) => setExpenseAmount(e.target.value)}
                ></IonInput>
              </IonItem>
            </IonList>
            <div className="modal-footer">
              <IonButton onClick={() => setShowExpenseModal(false)}>
                CANCEL
              </IonButton>
              <IonButton
                onClick={() => {
                  setExpenseRecords((prev) => {
                    return [
                      ...prev,
                      {
                        label: expenseName,
                        amount: expenseAmount,
                        date: expenseDate,
                      },
                    ];
                  });
                  setShowExpenseModal(false);
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

export default Tab1;
