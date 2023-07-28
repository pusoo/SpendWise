import React, { useState } from "react";
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
} from "@ionic/react";
import { add } from "ionicons/icons";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import "./Tab2.css";

const Tab2 = () => {
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState(0);
  const [goalDate, setGoalDate] = useState("");
  const [goalRecords, setGoalRecords] = useState([
    { label: "Car", amount: 5000, current: 0 },
  ]);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [addGoalRecord, setAddGoalRecord] = useState(null);
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

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        {goalRecords.map((goalRecord, index) => {
          return (
            <IonCard key={index} onClick={() => handleModalLists(index)}>
              <IonCardContent>
                <IonList lines="none">
                  <IonItem>
                    <IonLabel className="savings-lists">
                      <div className="savings-label">
                        <h2>{goalRecord.label}</h2>
                        <div className="goal-container">
                          <p>₱{goalRecord.amount}</p>
                          <p>GOAL</p>
                        </div>
                      </div>
                      <ProgressBar />
                      <div className="savings-estimate">
                        <p>
                          ₱{goalRecord.current} <br /> {goalRecord.date}
                        </p>
                        <div className="savings-goal">
                          <p>₱{`${goalRecord.amount - goalRecord.current}`}</p>
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
              <IonList className="modal-inputs">
                <IonItem>
                  <IonInput
                    label="Amount:"
                    labelPlacement="stacked"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={addGoalRecord.current}
                    onIonChange={(e) =>
                      setAddGoalRecord((prev) => ({
                        ...prev,
                        current: e.target.value,
                      }))
                    }
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonRadioGroup
                    value={selectedOption}
                    className="savings-radio"
                    onIonChange={(e) => setSelectedOption(e.detail.value)}
                  >
                    <IonRadio value="savings">Savings</IonRadio>
                    <IonRadio value="withdraw">Withdraw</IonRadio>
                  </IonRadioGroup>
                </IonItem>
                <IonItem>
                  <IonInput
                    label="Date:"
                    labelPlacement="stacked"
                    type="date"
                    value={addGoalRecord.date}
                    onIonChange={(e) =>
                      setAddGoalRecord((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                  ></IonInput>
                </IonItem>
              </IonList>
              <div className="modal-footer">
                <IonButton onClick={() => setShowModalLists(false)}>
                  CANCEL
                </IonButton>
                <IonButton
                  onClick={() => {
                    if (selectedOption === "savings") {
                      setGoalRecords((prev) => {
                        const updatedRecords = [...prev];
                        updatedRecords[addGoalIndex] = addGoalRecord;
                        return updatedRecords;
                      });
                    } else {
                      const withdrawalAmount = parseInt(addGoalRecord.current);
                      if (withdrawalAmount <= addGoalRecord.current) {
                        setGoalRecords((prev) => {
                          const updatedRecords = [...prev];
                          updatedRecords[addGoalIndex] = {
                            ...addGoalRecord,
                            current: addGoalRecord.current - withdrawalAmount,
                          };
                          return updatedRecords;
                        });
                      } else {
                        //
                      }
                    }
                    setShowModalLists(false);
                  }}
                >
                  DONE
                </IonButton>
              </div>
            </IonContent>
          </IonModal>
        )}
        {/* ADD BUTTON */}
        <IonButton className="add-btn" onClick={handleModalAdd}>
          <IonIcon slot="icon-only" icon={add}></IonIcon>
        </IonButton>

        {/* ADD MODAL */}
        <IonModal isOpen={showModalAdd} className="tab2-modal">
          <IonContent>
            <IonHeader className="modal-header">
              <IonToolbar>
                <IonTitle>Create New Goal</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonList className="modal-inputs">
              <IonItem>
                <IonInput
                  label="Goal name:"
                  labelPlacement="stacked"
                  type="text"
                  value={goalName}
                  onIonChange={(e) => setGoalName(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  label="Goal Amount:"
                  labelPlacement="stacked"
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={goalAmount}
                  onIonChange={(e) => setGoalAmount(e.target.value)}
                ></IonInput>
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
