import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonModal,
  IonInput,
  IonRadioGroup,
  IonRadio,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { add } from "ionicons/icons";
import Header from "../components/Header";
import "./Tab2.css";

const Tab2 = () => {
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const [data, setData] = useState([]);
  console.log(data);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/tracker")
  //     .then((res) => {
  //       setData(res.data.data.map((record) => record));
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, [updateTrigger]);

  // const createGoalData = (body) => {
  //   console.log(body);
  //   axios.post("http://localhost:3000/savings/add-savings", body).then((res) => {
  //     console.log(res.data),
  //       setShowModalAdd(false),
  //       setUpdateTrigger((prev) => prev + 1);
  //   });
  // };

  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState(0);
  const [goalDate, setGoalDate] = useState("");
  const [goalRecords, setGoalRecords] = useState([
  ]);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [addGoalRecord, setAddGoalRecord] = useState({
    current: "",
    date: new Date().toISOString(),
  });
  const [addGoalIndex, setAddGoalIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState("savings");
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalLists, setShowModalLists] = useState(false);

  const handleModalAdd = () => {
    setShowModalAdd((prev) => !prev);
  };

  const handleModalLists = (index) => {
    setAddGoalRecord(goalRecords[index]);
    setAddGoalIndex(index);
    setShowModalLists((prev) => !prev);
  };

  const handleSavingsWithdraw = () => {
    const goalRecord = goalRecords[addGoalIndex];
    const currentAmount = parseFloat(goalRecord.current);
    const inputAmount = parseFloat(addGoalRecord.current);

    if (selectedOption === "savings") {
      const newAmount = currentAmount + inputAmount;

      if (newAmount <= goalRecord.amount) {
        const updatedGoalRecord = {
          ...goalRecord,
          current: newAmount.toFixed(2),
          date: addGoalRecord.date,
        };

        const updatedGoalRecords = [...goalRecords];
        updatedGoalRecords[addGoalIndex] = updatedGoalRecord;
        setGoalRecords(updatedGoalRecords);

        setAddGoalRecord({
          ...addGoalRecord,
          current: "",
          date: "",
        });
        setShowModalLists(false);
      } else {
        alert("The amount exceeds the goal.");
      }
    } else if (selectedOption === "withdraw") {
      const newAmount = currentAmount - inputAmount;

      if (newAmount >= 0) {
        const updatedGoalRecord = {
          ...goalRecord,
          current: newAmount.toFixed(2),
          date: addGoalRecord.date,
        };

        const updatedGoalRecords = [...goalRecords];
        updatedGoalRecords[addGoalIndex] = updatedGoalRecord;
        setGoalRecords(updatedGoalRecords);

        setAddGoalRecord({
          ...addGoalRecord,
          current: "",
          date: "",
        });
        setShowModalLists(false);
      } else {
        alert(
          "Insufficient balance. The amount to withdraw exceeds the current savings."
        );
      }
    }
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        {goalRecords.map((goalRecord, index) => {
          const currentAmount = parseFloat(goalRecord.current);
          const goalAmount = parseFloat(goalRecord.amount);
          const progressPercent = (currentAmount / goalAmount) * 100;

          return (
            <IonCard key={index} onClick={() => handleModalLists(index)}>
              <IonCardContent>
                <IonList lines="none">
                  <IonItem>
                    <IonLabel className="savings-lists">
                      <div className="savings-label">
                        <h2>{goalRecord.label}</h2>
                        <div className="goal-container">
                          <p>₱{goalRecord.amount.toLocaleString()}</p>
                          <p>GOAL</p>
                        </div>
                      </div>
                      <div
                        className="progressBar-container"
                        style={{
                          width: "100%",
                          height: "10px",
                          backgroundColor: "#ccc",
                          borderRadius: "10px",
                        }}
                      >
                        <div
                          className="progress"
                          style={{
                            width: `${progressPercent}%`,
                            backgroundColor: `${
                              currentAmount === goalAmount ? "green" : "red"
                            } `,
                            height: "100%",
                            borderRadius: "10px",
                          }}
                        ></div>
                      </div>
                      <div className="savings-estimate">
                        <p>
                          ₱{goalRecord.current} <br /> {goalRecord.date}
                        </p>
                        <div className="savings-goal">
                          <p>
                            ₱
                            {`${(
                              goalRecord.amount - goalRecord.current
                            ).toLocaleString()}`}
                          </p>
                          <p>REMAINING</p>
                        </div>
                      </div>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
          );
        })}
        {/* SAVINGS MODAL */}
        {addGoalRecord && addGoalIndex !== null && (
          <IonModal isOpen={showModalLists} className="savings-modal">
            <IonContent>
              <IonHeader className="modal-header">
                <IonToolbar>
                  <IonTitle>Add Savings or Withdraw</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonList>
                <IonItem className="modal-inputs">
                  <label>Amount:</label>
                  <input
                    type="text"
                    value={addGoalRecord.current}
                    onChange={(e) =>
                      setAddGoalRecord((prev) => ({
                        ...prev,
                        current: e.target.value,
                      }))
                    }
                  ></input>
                </IonItem>
                <IonItem className="modal-inputs">
                  <IonRadioGroup
                    value={selectedOption}
                    className="savings-radio"
                    onIonChange={(e) => setSelectedOption(e.detail.value)}
                  >
                    <IonRadio value="savings">Savings</IonRadio>
                    <IonRadio value="withdraw">Withdraw</IonRadio>
                  </IonRadioGroup>
                </IonItem>
                <IonItem className="modal-inputs">
                  <label>Date:</label>
                  <input
                    type="date"
                    value={addGoalRecord.date}
                    onChange={(e) =>
                      setAddGoalRecord((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                  ></input>
                </IonItem>
              </IonList>
              <div className="modal-footer">
                <IonButton onClick={() => setShowModalLists((prev) => !prev)}>
                  CANCEL
                </IonButton>
                <IonButton onClick={handleSavingsWithdraw}>DONE</IonButton>
              </div>
            </IonContent>
          </IonModal>
        )}

        {/* ADD BUTTON */}
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={handleModalAdd}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        {/* ADD MODAL */}
        <IonModal isOpen={showModalAdd} className="tab2-modal">
          <IonContent>
            <IonHeader className="modal-header">
              <IonToolbar>
                <IonTitle>Create New Goal</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonList>
              <IonItem className="modal-inputs">
                <label>Goal name:</label>
                <input
                  type="text"
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                ></input>
              </IonItem>
              <IonItem className="modal-inputs">
                <label>Goal Amount:</label>
                <input
                  type="text"
                  value={goalAmount}
                  onChange={(e) => setGoalAmount(e.target.value)}
                ></input>
              </IonItem>
            </IonList>
            <div className="modal-footer">
              <IonButton onClick={() => setShowModalAdd(false)}>
                CANCEL
              </IonButton>
              <IonButton
                onClick={() => {
                  setGoalRecords((prev) => {
                    return [
                      ...prev,
                      {
                        label: goalName,
                        amount: goalAmount,
                        current: currentAmount,
                        date: goalDate,
                      },
                    ];
                  });
                  setShowModalAdd(false);
                  setGoalName("");
                  setGoalAmount("");
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

export default Tab2;
