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
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tracker")
      .then((res) => {
        setData(res.data.data.map((record) => record));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [updateTrigger]);

  const createIncome = (body) => {
    console.log(body);
    axios.post("http://localhost:3000/tracker", body).then((res) => {
      console.log(res.data),
        setShowIncomeModal(false),
        setUpdateTrigger((prev) => prev + 1);
    });
  };

  const createExpense = (body) => {
    console.log(body);
    axios.post("http://localhost:3000/tracker", body).then((res) => {
      console.log(res.data),
        setShowExpenseModal(false),
        setUpdateTrigger((prev) => prev + 1);
    });
  };

  const deleteIncomeData = () => {
    const IncomeRecordId = selectedIncomeRecord._id;

    axios
      .delete(`http://localhost:3000/tracker/${IncomeRecordId}`)
      .then(() => {
        console.log("Income Record deleted successfully!");
        setData((prev) =>
          prev.filter((record) => record._id !== IncomeRecordId)
        );
      })
      .catch((error) => {
        console.error("Error deleting Income record:", error);
      });

    setShowIncomeActionSheet(false);
  };

  const deleteExpenseData = () => {
    const ExpenseRecordId = selectedExpenseRecord["_id"];

    axios
      .delete(`http://localhost:3000/tracker/${ExpenseRecordId}`)
      .then(() => {
        console.log("Expense Record deleted successfully!");
        setData((prev) =>
          prev.filter((record) => record._id !== ExpenseRecordId)
        );
      })
      .catch((error) => {
        console.error("Error deleting Expense record:", error);
      });

    setShowExpenseActionSheet(false);
  };

  const [selectedExpenseRecord, setSelectedExpenseRecord] = useState(null);
  const [selectedIncomeRecord, setSelectedIncomeRecord] = useState(null);
  const [editIncomeRecord, setEditIncomeRecord] = useState(null);
  const [editIncomeIndex, setEditIncomeIndex] = useState(null);
  const [editExpenseRecord, setEditExpenseRecord] = useState(null);
  const [editExpenseIndex, setEditExpenseIndex] = useState(null);

  const updateIncomeData = (incomeRecordId, updatedData) => {
    axios
      .patch(`http://localhost:3000/tracker/${incomeRecordId}`, updatedData)
      .then((res) => {
        console.log("Income record updated successfully!");
        setData((prevData) =>
          prevData.map((record) =>
            record._id === incomeRecordId
              ? { ...record, ...updatedData }
              : record
          )
        );
      })
      .catch((error) => {
        console.error("Error updating income record:", error);
      });
  };

  const updateExpenseData = (expenseRecordId, updatedData) => {
    axios
      .patch(`http://localhost:3000/tracker/${expenseRecordId}`, updatedData)
      .then((res) => {
        console.log("Expense record updated successfully!");
        setData((prevData) =>
          prevData.map((record) =>
            record._id === expenseRecordId
              ? { ...record, ...updatedData }
              : record
          )
        );
      })
      .catch((error) => {
        console.error("Error updating expense record:", error);
      });
  };

  // const handleUpdatedIncome = () => {
  //   if (selectedIncomeRecord && editIncomeRecord) {
  //     updateIncomeData(selectedIncomeRecord._id, editIncomeRecord);
  //     setShowEditIncomeModal(false);
  //   }
  // };

  const handleUpdatedIncome = () => {
    if (selectedIncomeRecord && editIncomeRecord) {
      const updatedRecord = {
        ...editIncomeRecord,
        icon: selectedIncomeCategory?.icon,
        name: selectedIncomeCategory?.label,
      };
      console.log(updatedRecord)

      updateIncomeData(selectedIncomeRecord._id, updatedRecord);
      setShowEditIncomeModal(false);
    }
  };

  // const handleUpdatedExpense = () => {
  //   if (selectedExpenseRecord && editExpenseRecord) {
  //     updateExpenseData(selectedExpenseRecord._id, editExpenseRecord);
  //     setShowEditExpenseModal(false);
  //   }
  // };

  const handleUpdatedExpense = () => {
    if (selectedExpenseRecord && editExpenseRecord) {
      const updatedRecord = {
        ...editExpenseRecord,
        icon: selectedExpenseCategory?.icon,
        name: selectedExpenseCategory?.label,
      };
            console.log(updatedRecord)

      updateExpenseData(selectedExpenseRecord._id, updatedRecord);
      setShowEditExpenseModal(false);
    }
  };

  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomeDate, setIncomeDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState("");
  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showEditIncomeModal, setShowEditIncomeModal] = useState(false);
  const [showEditExpenseModal, setShowEditExpenseModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedIncomeCategory, setSelectedIncomeCategory] = useState(null);
  const [selectedExpenseCategory, setSelectedExpenseCategory] = useState(null);
  const [showIncomeActionSheet, setShowIncomeActionSheet] = useState(false);
  const [showExpenseActionSheet, setShowExpenseActionSheet] = useState(false);
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
                    ₱
                    {`${(
                      data
                        .filter((val) => val.type === "income")
                        .reduce((acc, cur) => {
                          return (acc += cur.amount);
                        }, 0) -
                      data
                        .filter((val) => val.type === "expense")
                        .reduce((acc, cur) => {
                          return (acc += cur.amount);
                        }, 0)
                    ).toLocaleString()}`}
                  </h1>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="expense">
                  <p>EXPENSE</p>
                  <h1>
                    ₱
                    {data
                      .filter((val) => val.type === "expense")
                      .reduce((acc, cur) => {
                        return (acc += cur.amount);
                      }, 0)
                      .toLocaleString()}
                  </h1>
                </IonCol>
                <IonCol>
                  <p>INCOME</p>
                  <h1>
                    ₱
                    {data
                      .filter((val) => val.type === "income")
                      .reduce((acc, cur) => {
                        return (acc += cur.amount);
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
          {data
            .filter((val) => val.type === "income")
            .map((incomeRecord, index) => {
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
                      {incomeRecord.name && <span>{incomeRecord.name}</span>}
                    </IonCol>
                    <IonCol>₱{incomeRecord.amount.toLocaleString()}</IonCol>
                    <IonCol>{formattedDate}</IonCol>
                    <IonCol>
                      <IonButton
                        fill="clear"
                        onClick={() =>
                          openIncomeActionSheet(incomeRecord, index)
                        }
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
                          <IonList key={index}>
                            <IonItem className="modal-inputs">
                              <label htmlFor="incomeEditDate">Date:</label>
                              <input
                                type="date"
                                id="incomeEditDate"
                                value={editIncomeRecord?.date || ""}
                                onChange={(e) =>
                                  setEditIncomeRecord((prev) => ({
                                    ...prev,
                                    date: e.target.value,
                                  }))
                                }
                              />
                            </IonItem>
                            <IonItem className="modal-inputs">
                              <label>Amount:</label>
                              <input
                                type="text"
                                id="incomeEditAmount"
                                value={editIncomeRecord?.amount || ""}
                                onChange={(e) =>
                                  setEditIncomeRecord((prev) => ({
                                    ...prev,
                                    amount: parseInt(e.target.value),
                                  }))
                                }
                              />
                            </IonItem>
                          </IonList>
                          <div className="modal-footer">
                          <IonButton
                              onClick={() => setShowEditIncomeModal(false)}
                            >
                              CANCEL
                            </IonButton>
                            <IonButton onClick={handleUpdatedIncome}>
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
          {data
            .filter((val) => val.type === "expense")
            .map((expenseRecord, index) => {
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
                      {expenseRecord.name && <span>{expenseRecord.name}</span>}
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
                          <IonList key={index}>
                            <IonItem className="modal-inputs">
                              <label htmlFor="expenseEditDate">Date:</label>
                              <input
                                type="date"
                                id="expenseEditDate"
                                value={editExpenseRecord?.date || ""}
                                onChange={(e) =>
                                  setEditExpenseRecord((prev) => ({
                                    ...prev,
                                    date: e.target.value,
                                  }))
                                }
                              />
                            </IonItem>
                            <IonItem className="modal-inputs">
                              <label htmlFor="expenseEditAmount">Amount:</label>
                              <input
                                type="text"
                                id="expenseEditAmount"
                                value={editExpenseRecord?.amount || ""}
                                onChange={(e) =>
                                  setEditExpenseRecord((prev) => ({
                                    ...prev,
                                    amount: parseInt(e.target.value),
                                  }))
                                }
                              />
                            </IonItem>
                          </IonList>

                          <div className="modal-footer">
                            <IonButton
                              onClick={() => setShowEditExpenseModal(false)}
                            >
                              CANCEL
                            </IonButton>
                            <IonButton onClick={handleUpdatedExpense}>
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
            <IonList>
              <IonItem className="modal-inputs">
                <label htmlFor="incomeDate">Date:</label>
                <input
                  type="date"
                  id="incomeDate"
                  value={incomeDate}
                  onChange={(e) => setIncomeDate(e.target.value)}
                />
              </IonItem>
              <IonItem className="modal-inputs">
                <label>Amount:</label>
                <input
                  type="text"
                  id="incomeAmount"
                  value={incomeAmount}
                  onChange={(e) => setIncomeAmount(e.target.value)}
                />
              </IonItem>
            </IonList>
            <div className="modal-footer">
              <IonButton
                onClick={() => {
                  setShowIncomeModal(false);
                  setIncomeDate("");
                  setIncomeAmount(0);
                }}
              >
                CANCEL
              </IonButton>
              <IonButton
                onClick={() => {
                  createIncome({
                    type: "income",
                    icon: selectedIncomeCategory?.icon,
                    name: selectedIncomeCategory?.label,
                    amount: parseInt(incomeAmount),
                    date: incomeDate,
                  });
                  setIncomeDate("");
                  setIncomeAmount(0);
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
              className="category-btn"
              expand="block"
              fill="outline"
              onClick={handleCategoryModal}
            >
              Category
            </IonButton>
            <IonList>
              <IonItem className="modal-inputs">
                <label htmlFor="expenseDate">Date:</label>
                <input
                  type="date"
                  id="expenseDate"
                  value={expenseDate}
                  onChange={(e) => setExpenseDate(e.target.value)}
                />
              </IonItem>
              <IonItem className="modal-inputs">
                <label>Amount:</label>
                <input
                  type="text"
                  id="expenseDate"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                />
              </IonItem>
            </IonList>
            <div className="modal-footer">
              <IonButton
                onClick={() => {
                  setShowExpenseModal(false);
                  setExpenseDate("");
                  setExpenseAmount(0);
                }}
              >
                CANCEL
              </IonButton>
              <IonButton
                onClick={() => {
                  createExpense({
                    type: "expense",
                    icon: selectedExpenseCategory?.icon,
                    name: selectedExpenseCategory?.label,
                    amount: parseInt(expenseAmount),
                    date: expenseDate,
                  });
                  setExpenseDate("");
                  setExpenseAmount(0);
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
                  {categories.map((category, index, set) => (
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
              handler: deleteIncomeData,
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
              handler: deleteExpenseData,
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
