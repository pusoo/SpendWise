import React, { useEffect, useState } from "react";
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
  IonActionSheet,
  IonSpinner,
} from "@ionic/react";
import {
  add,
  cashOutline,
  addCircleOutline,
  ellipsisVerticalOutline,
  pencilOutline,
  trashOutline,
  closeOutline,
} from "ionicons/icons";
import Header from "../components/Header";
import "./Tab1.css";
import axios from "axios";

const Tab1 = ({ categories }) => {
  const createIncome = (body) => {
    console.log(body);
    axios.post("http://localhost:3000/tracker", body).then((res) => {
      console.log(res.data);
      setIncomeRecords((prevIncomeRecords) => [...prevIncomeRecords, res.data]);
    });
    setShowIncomeModal(false);
  };
  const createExpense = (body) => {
    console.log(body);
    axios.post("http://localhost:3000/tracker", body).then((res) => {
      console.log(res.data);
      setExpenseRecords((prevExpenseRecords) => [
        ...prevExpenseRecords,
        res.data,
      ]);
    });
    setShowExpenseModal(false);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tracker")
      .then((res) => {
        setData(res.data);
        setIncomeRecords(res.data.incomeRecords);
        setExpenseRecords(res.data.expenseRecords);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [incomeRecords, setIncomeRecords] = useState([]);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomeDate, setIncomeDate] = useState("");
  const [expenseRecords, setExpenseRecords] = useState([]);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState("");
  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showEditIncomeModal, setShowEditIncomeModal] = useState(false);
  const [showEditExpenseModal, setShowEditExpenseModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editIncomeRecord, setEditIncomeRecord] = useState(null);
  const [editIncomeIndex, setEditIncomeIndex] = useState(null);
  const [editExpenseRecord, setEditExpenseRecord] = useState(null);
  const [editExpenseIndex, setEditExpenseIndex] = useState(null);
  const [selectedIncomeCategory, setSelectedIncomeCategory] = useState(null);
  const [selectedExpenseCategory, setSelectedExpenseCategory] = useState(null);
  const [showIncomeActionSheet, setShowIncomeActionSheet] = useState(false);
  const [showExpenseActionSheet, setShowExpenseActionSheet] = useState(false);
  const [selectedIncomeRecord, setSelectedIncomeRecord] = useState(null);
  const [selectedExpenseRecord, setSelectedExpenseRecord] = useState(null);
  const [isIncomeTab, setIsIncomeTab] = useState(true);
  const [isExpenseTab, setIsExpenseTab] = useState(false);

  const handleIncomeModal = () => {
    setSelectedIncomeCategory(null);
    setShowIncomeModal((prev) => !prev);
    setIsIncomeTab(true);
    setIsExpenseTab(false);
  };

  const handleExpenseModal = () => {
    setSelectedExpenseCategory(null);
    setShowExpenseModal((prev) => !prev);
    setIsIncomeTab(false);
    setIsExpenseTab(true);
  };

  const handleIncomeEditModal = (incomeRecord, index) => {
    setEditIncomeRecord(incomeRecord);
    setEditIncomeIndex(index);
    setShowIncomeActionSheet(false);
    setShowEditIncomeModal(true);
  };

  const handleExpenseEditModal = (expenseRecord, index) => {
    setEditExpenseRecord(expenseRecord);
    setEditExpenseIndex(index);
    setShowExpenseActionSheet(false);
    setShowEditExpenseModal(true);
  };

  const handleCategoryModal = (category, index) => {
    if (isIncomeTab) {
      setSelectedIncomeCategory({ ...category, index });
    } else if (isExpenseTab) {
      setSelectedExpenseCategory({ ...category, index });
    }
    setShowCategoryModal((prev) => !prev);
  };

  const openIncomeActionSheet = (incomeRecord, index) => {
    setSelectedIncomeRecord(incomeRecord);
    setEditIncomeIndex(index);
    setShowIncomeActionSheet(true);
  };

  const openExpenseActionSheet = (expenseRecord, index) => {
    setSelectedExpenseRecord(expenseRecord);
    setEditExpenseIndex(index);
    setShowExpenseActionSheet(true);
  };

  const deleteIncomeRecord = () => {
    setIncomeRecords((prev) =>
      prev.filter((record) => record !== selectedIncomeRecord)
    );
    setShowIncomeActionSheet(false);
  };

  const deleteExpenseRecord = () => {
    setExpenseRecords((prev) =>
      prev.filter((record) => record !== selectedExpenseRecord)
    );
    setShowExpenseActionSheet(false);
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
                  {`₱${(
                    incomeRecords.reduce((acc, cur) => {
                      return (acc += parseInt(cur.amount));
                    }, 0) -
                    expenseRecords.reduce((acc, cur) => {
                      return (acc += parseInt(cur.amount));
                    }, 0)
                  ).toLocaleString()}`}
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
                      .toLocaleString()}
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
                      .toLocaleString()}
                  </h1>
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
            const formattedDate = new Date(
              incomeRecord.date
            ).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "2-digit",
            });
            return (
              <IonGrid key={index}>
                <IonRow
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IonCol
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {incomeRecord.icon && (
                      <IonIcon
                        icon={incomeRecord.icon}
                        style={{
                          width: "25px",
                          height: "25px",
                          marginRight: "5px",
                        }}
                      />
                    )}
                    {incomeRecord.label && <span>{incomeRecord.label}</span>}
                  </IonCol>
                  <IonCol>₱{incomeRecord.amount.toLocaleString()}</IonCol>
                  <IonCol>{formattedDate}</IonCol>
                  <IonCol>
                    <IonButton
                      fill="clear"
                      onClick={() => openIncomeActionSheet(incomeRecord, index)}
                    >
                      <IonIcon icon={ellipsisVerticalOutline} />
                    </IonButton>
                  </IonCol>
                  {/* INCOME EDIT MODAL */}
                  {selectedIncomeRecord && editIncomeIndex === index && (
                    <IonModal
                      isOpen={showEditIncomeModal}
                      className="lists-modal"
                    >
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
                          onClick={() =>
                            handleCategoryModal(selectedIncomeCategory)
                          }
                        >
                          Category
                        </IonButton>
                        <IonList className="modal-inputs" key={index}>
                          <IonItem>
                            <IonInput
                              label="Date:"
                              labelPlacement="stacked"
                              type="date"
                              value={editIncomeRecord?.date || ""}
                              onIonChange={(e) =>
                                setEditIncomeRecord((prev) => ({
                                  ...prev,
                                  date: e.target.value,
                                }))
                              }
                            ></IonInput>
                          </IonItem>
                          <IonItem>
                            <IonInput
                              label="Amount:"
                              labelPlacement="stacked"
                              type="text"
                              value={editIncomeRecord?.amount || ""}
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
                          <IonButton
                            onClick={() => setShowEditIncomeModal(false)}
                          >
                            CANCEL
                          </IonButton>
                          <IonButton
                            onClick={() => {
                              setIncomeRecords((prev) => {
                                const updatedRecords = [...prev];
                                updatedRecords[editIncomeIndex] = {
                                  ...editIncomeRecord,
                                  icon: selectedIncomeCategory?.icon,
                                  label: selectedIncomeCategory?.label,
                                };
                                return updatedRecords;
                              });
                              setShowEditIncomeModal(false);
                            }}
                          >
                            SAVE
                          </IonButton>
                        </div>
                      </IonContent>
                    </IonModal>
                  )}
                </IonRow>
              </IonGrid>
            );
          })}
        </IonList>
        <IonList lines="full">
          <IonItem>
            <IonLabel>Expense</IonLabel>
          </IonItem>
          {expenseRecords.map((expenseRecord, index) => {
            const formattedDate = new Date(
              expenseRecord.date
            ).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "2-digit",
            });
            return (
              <IonGrid key={index}>
                <IonRow
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IonCol
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {expenseRecord.icon && (
                      <IonIcon
                        icon={expenseRecord.icon}
                        style={{
                          width: "25px",
                          height: "25px",
                          marginRight: "5px",
                        }}
                      />
                    )}
                    {expenseRecord.label && <span>{expenseRecord.label}</span>}
                  </IonCol>
                  <IonCol>₱{expenseRecord.amount.toLocaleString()}</IonCol>
                  <IonCol>{formattedDate}</IonCol>
                  <IonCol>
                    <IonButton
                      fill="clear"
                      onClick={() =>
                        openExpenseActionSheet(expenseRecord, index)
                      }
                    >
                      <IonIcon icon={ellipsisVerticalOutline} />
                    </IonButton>
                  </IonCol>
                  {/* EXPENSE EDIT MODAL */}
                  {selectedExpenseRecord && editExpenseIndex === index && (
                    <IonModal
                      isOpen={showEditExpenseModal}
                      className="lists-modal"
                    >
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
                          onClick={() =>
                            handleCategoryModal(selectedExpenseCategory)
                          }
                        >
                          Category
                        </IonButton>
                        <IonList className="modal-inputs" key={index}>
                          <IonItem>
                            <IonInput
                              label="Date: "
                              labelPlacement="stacked"
                              type="date"
                              value={editExpenseRecord?.date || ""}
                              onIonChange={(e) =>
                                setEditExpenseRecord((prev) => ({
                                  ...prev,
                                  date: e.target.value,
                                }))
                              }
                            ></IonInput>
                          </IonItem>
                          <IonItem>
                            <IonInput
                              label="Amount:"
                              labelPlacement="stacked"
                              type="text"
                              value={editExpenseRecord?.amount || ""}
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
                          <IonButton
                            onClick={() => setShowEditExpenseModal(false)}
                          >
                            CANCEL
                          </IonButton>
                          <IonButton
                            onClick={() => {
                              setExpenseRecords((prev) => {
                                const updatedRecords = [...prev];
                                updatedRecords[editExpenseIndex] = {
                                  ...editExpenseRecord,
                                  icon: selectedExpenseCategory?.icon,
                                  label: selectedExpenseCategory?.label,
                                };
                                return updatedRecords;
                              });
                              setShowEditExpenseModal(false);
                            }}
                          >
                            SAVE
                          </IonButton>
                        </div>
                      </IonContent>
                    </IonModal>
                  )}
                </IonRow>
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
            <IonButton
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
                  // setIncomeRecords((prev) => {
                  //   return [
                  //     ...prev,
                  //     {
                  //       icon: selectedIncomeCategory?.icon,
                  //       label: selectedIncomeCategory?.label,
                  //       amount: incomeAmount,
                  //       date: incomeDate,
                  //     },
                  //   ];
                  // });
                  // setSelectedIncomeCategory(null);
                  // setIncomeAmount(0);
                  // setIncomeDate("");
                  // setShowIncomeModal(false);
                  createIncome({
                    type: "income",
                    icon: selectedIncomeCategory?.icon,
                    name: selectedIncomeCategory?.label,
                    amount: incomeAmount,
                    date: incomeDate,
                  });
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
                        icon: selectedExpenseCategory?.icon,
                        label: selectedExpenseCategory?.label,
                        amount: expenseAmount,
                        date: expenseDate,
                      },
                    ];
                  });
                  setSelectedExpenseCategory(null);
                  setExpenseAmount(0);
                  setExpenseDate("");
                  setShowExpenseModal(false);
                  createExpense({
                    type: "expense",
                    icon: selectedExpenseCategory?.icon,
                    name: selectedExpenseCategory?.label,
                    amount: expenseAmount,
                    date: expenseDate,
                  });
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
                <IonLabel style={{ textAlign: "center", fontWeight: "bold" }}>
                  ICON
                </IonLabel>
              </IonItem>
              <IonGrid>
                <IonRow
                  style={{ border: "1px solid #004ba8", borderRadius: "10px" }}
                >
                  {categories.map((category, index) => (
                    <IonCol
                      size="3"
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        cursor: "pointer",
                        padding: "5px",
                        background: `${
                          (isIncomeTab &&
                            selectedIncomeCategory?.index === index) ||
                          (isExpenseTab &&
                            selectedExpenseCategory?.index === index)
                            ? "#d7d8da"
                            : "transparent"
                        }`,
                        borderRadius: "10px",
                      }}
                      onClick={() => handleCategoryModal(category, index)}
                    >
                      <IonIcon
                        icon={category.icon}
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                      <IonLabel style={{ fontSize: "12px" }}>
                        {category.label}
                      </IonLabel>
                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </IonList>
          </IonContent>
        </IonModal>
        {/* Action sheet for edit and delete */}
        {/* INCOME */}
        <IonActionSheet
          isOpen={showIncomeActionSheet}
          onDidDismiss={() => setShowIncomeActionSheet(false)}
          buttons={[
            {
              text: "Edit",
              icon: pencilOutline,
              handler: () =>
                handleIncomeEditModal(selectedIncomeRecord, editIncomeIndex),
            },
            {
              text: "Delete",
              icon: trashOutline,
              role: "destructive",
              handler: deleteIncomeRecord,
            },
            {
              text: "Cancel",
              icon: closeOutline,
              role: "cancel",
            },
          ]}
        />
        {/* EXPENSE */}
        <IonActionSheet
          isOpen={showExpenseActionSheet}
          onDidDismiss={() => setShowExpenseActionSheet(false)}
          buttons={[
            {
              text: "Edit",
              icon: pencilOutline,
              handler: () =>
                handleExpenseEditModal(selectedExpenseRecord, editExpenseIndex),
            },
            {
              text: "Delete",
              icon: trashOutline,
              role: "destructive",
              handler: deleteExpenseRecord,
            },
            {
              text: "Cancel",
              icon: closeOutline,
              role: "cancel",
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
