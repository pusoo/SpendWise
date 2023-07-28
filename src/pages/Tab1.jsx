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
  IonModal,
  IonHeader,
  IonInput,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import {
  add,
  cashOutline,
  addCircleOutline,
  removeCircleOutline,
} from "ionicons/icons";
import Header from "../components/Header";
import "./Tab1.css";

const Tab1 = () => {
  const [incomeRecords, setIncomeRecords] = useState([
    { label: "Heart", amount: 5000, date: "2023-25-07" },
  ]);
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomeDate, setIncomeDate] = useState("");
  const [expenseRecords, setExpenseRecords] = useState([
    { label: "Jomaru", amount: 2000, date: "2023-25-07" },
  ]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState("");
  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editIncomeRecord, setEditIncomeRecord] = useState(null);
  const [editIncomeIndex, setEditIncomeIndex] = useState(null);
  const [editExpenseRecord, setEditExpenseRecord] = useState(null);
  const [editExpenseIndex, setEditExpenseIndex] = useState(null);

  const handleIncomeModal = () => {
    setShowIncomeModal((prev) => !prev);
  };
  const handleExpenseModal = () => {
    setShowExpenseModal((prev) => !prev);
  };

  const handleIncomeEditModal = (incomeRecord, index) => {
    setEditIncomeRecord(incomeRecord);
    setEditIncomeIndex(index);
    setShowListModal((prev) => !prev);
  };

  const handleExpenseEditModal = (expenseRecord, index) => {
    setEditExpenseRecord(expenseRecord);
    setEditExpenseIndex(index);
    setShowListModal((prev) => !prev);
  };

  const handleCategoryModal = () => {
    setShowCategoryModal((prev) => !prev);
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
        <IonList lines="full">
          <IonItem>
            <IonLabel>Income</IonLabel>
          </IonItem>
          {incomeRecords.map((incomeRecord, index) => {
            return (
              <IonGrid key={index}>
                <IonRow>
                  <div className="delete-column">
                    <IonCol>
                      <IonButton
                        fill="clear"
                        onClick={() => {
                          setIncomeRecords((prev) => {
                            return prev.filter((income, i) => i !== index);
                          });
                        }}
                      >
                        <IonIcon
                          slot="icon-only"
                          icon={removeCircleOutline}
                        ></IonIcon>
                      </IonButton>
                    </IonCol>
                  </div>
                  <div
                    className="lists-column"
                    onClick={() => handleIncomeEditModal(incomeRecord, index)}
                  >
                    <IonCol>{incomeRecord.label}</IonCol>
                    <IonCol>{incomeRecord.amount}</IonCol>
                    <IonCol>{incomeRecord.date}</IonCol>
                  </div>
                </IonRow>
                {/* INCOME EDIT MODAL */}
                {editIncomeRecord && editIncomeIndex === index && (
                  <IonModal isOpen={showListModal} className="lists-modal">
                    <IonHeader className="modal-header">
                      <IonToolbar>
                        <IonTitle>Income</IonTitle>
                      </IonToolbar>
                    </IonHeader>
                    <IonContent className="modal-content">
                      <IonButton
                        className="category-btn"
                        expand="block"
                        fill="outline"
                      >
                        Category
                      </IonButton>
                      <IonList className="modal-inputs">
                        <IonItem key={index}>
                          <IonInput
                            label="Name:"
                            labelPlacement="stacked"
                            type="text"
                            value={editIncomeRecord.label}
                            onIonChange={(e) =>
                              setEditIncomeRecord((prev) => ({
                                ...prev,
                                label: e.target.value,
                              }))
                            }
                          ></IonInput>
                        </IonItem>
                        <IonItem key={index}>
                          <IonInput
                            label="Date:"
                            labelPlacement="stacked"
                            type="date"
                            value={editIncomeRecord.date}
                            onIonChange={(e) =>
                              setEditIncomeRecord((prev) => ({
                                ...prev,
                                date: e.target.value,
                              }))
                            }
                          ></IonInput>
                        </IonItem>
                        <IonItem key={index}>
                          <IonInput
                            label="Amount:"
                            labelPlacement="stacked"
                            type="text"
                            value={editIncomeRecord.amount}
                            onIonChange={(e) =>
                              setEditIncomeRecord((prev) => ({
                                ...prev,
                                amount: e.target.value,
                              }))
                            }
                          ></IonInput>
                        </IonItem>
                      </IonList>
                      <div className="modal-footer">
                        <IonButton onClick={() => setShowListModal(false)}>
                          CANCEL
                        </IonButton>
                        <IonButton
                          onClick={() => {
                            setIncomeRecords((prev) => {
                              const updatedRecords = [...prev];
                              updatedRecords[editIncomeIndex] =
                                editIncomeRecord;
                              return updatedRecords;
                            });
                            setShowListModal(false);
                          }}
                        >
                          SAVE
                        </IonButton>
                      </div>
                    </IonContent>
                  </IonModal>
                )}
              </IonGrid>
            );
          })}
        </IonList>
        <IonList lines="full">
          <IonItem>
            <IonLabel>Expense</IonLabel>
          </IonItem>
          {expenseRecords.map((expenseRecord, index) => {
            return (
              <IonGrid key={index}>
                <IonRow>
                  <div className="delete-column">
                    <IonCol>
                      <IonButton
                        fill="clear"
                        onClick={() => {
                          setExpenseRecords((prev) => {
                            return prev.filter((expense, i) => i !== index);
                          });
                        }}
                      >
                        <IonIcon
                          slot="icon-only"
                          icon={removeCircleOutline}
                        ></IonIcon>
                      </IonButton>
                    </IonCol>
                  </div>
                  <div
                    className="lists-column"
                    onClick={() => handleExpenseEditModal(expenseRecord, index)}
                  >
                    <IonCol>{expenseRecord.label}</IonCol>
                    <IonCol>{expenseRecord.amount}</IonCol>
                    <IonCol>{expenseRecord.date}</IonCol>
                  </div>
                </IonRow>
                {/* EXPENSE EDIT MODAL */}
                {editExpenseRecord && editExpenseIndex === index && (
                  <IonModal isOpen={showListModal} className="lists-modal">
                    <IonHeader className="modal-header">
                      <IonToolbar>
                        <IonTitle>Expense</IonTitle>
                      </IonToolbar>
                    </IonHeader>
                    <IonContent className="modal-content">
                      <IonButton
                        className="category-btn"
                        expand="block"
                        fill="outline"
                      >
                        Category
                      </IonButton>
                      <IonList className="modal-inputs">
                        <IonItem>
                          <IonInput
                            label="Name: "
                            labelPlacement="stacked"
                            type="text"
                            value={editExpenseRecord.label}
                            onIonChange={(e) =>
                              setEditExpenseRecord((prev) => ({
                                ...prev,
                                label: e.target.value,
                              }))
                            }
                          ></IonInput>
                        </IonItem>
                        <IonItem>
                          <IonInput
                            label="Date: "
                            labelPlacement="stacked"
                            type="date"
                            value={editExpenseRecord.date}
                            onIonChange={(e) =>
                              setEditExpenseRecord((prev) => ({
                                ...prev,
                                date: e.target.value,
                              }))
                            }
                          ></IonInput>
                        </IonItem>
                        <IonItem key={index}>
                          <IonInput
                            label="Amount:"
                            labelPlacement="stacked"
                            type="text"
                            value={editExpenseRecord.amount}
                            onIonChange={(e) =>
                              setEditExpenseRecord((prev) => ({
                                ...prev,
                                amount: e.target.value,
                              }))
                            }
                          ></IonInput>
                        </IonItem>
                      </IonList>
                      <div className="modal-footer">
                        <IonButton onClick={() => setShowListModal(false)}>
                          CANCEL
                        </IonButton>
                        <IonButton
                          onClick={() => {
                            setExpenseRecords((prev) => {
                              const updatedRecords = [...prev];
                              updatedRecords[editExpenseIndex] =
                                editExpenseRecord;
                              return updatedRecords;
                            });
                            setShowListModal(false);
                          }}
                        >
                          SAVE
                        </IonButton>
                      </div>
                    </IonContent>
                  </IonModal>
                )}
              </IonGrid>
            );
          })}
        </IonList>
        {/* ADD BUTTON */}
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
            <IonToolbar>
              <IonTitle>Income</IonTitle>
            </IonToolbar>
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
            <IonToolbar>
              <IonTitle>Expense</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="modal-content">
            <IonButton
              id="open-modal"
              className="category-btn"
              expand="block"
              fill="outline"
              onClick={handleCategoryModal}
            >
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
        {/* CATEGORY MODAL */}
        <IonModal isOpen={showCategoryModal} className="category-modal">
          <IonContent>
            <IonHeader className="modal-header">
              <IonToolbar>
                <IonTitle>Select a Category</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonList className="modal-inputs">
              <IonItem lines="none">
                <IonLabel>Icon</IonLabel>
              </IonItem>
            </IonList>
            <div className="modal-footer">
              <IonButton onClick={handleCategoryModal}>CANCEL</IonButton>
              <IonButton>DONE</IonButton>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
