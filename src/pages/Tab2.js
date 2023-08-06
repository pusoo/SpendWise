"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var axios_1 = require("axios");
var react_2 = require("@ionic/react");
var icons_1 = require("ionicons/icons");
var Header_1 = require("../components/Header");
require("./Tab2.css");
var Tab2 = function () {
    var _a = (0, react_1.useState)(0), updateTrigger = _a[0], setUpdateTrigger = _a[1];
    var _b = (0, react_1.useState)([]), data = _b[0], setData = _b[1];
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
    var _c = (0, react_1.useState)(""), goalName = _c[0], setGoalName = _c[1];
    var _d = (0, react_1.useState)(0), goalAmount = _d[0], setGoalAmount = _d[1];
    var _e = (0, react_1.useState)(""), goalDate = _e[0], setGoalDate = _e[1];
    var _f = (0, react_1.useState)([]), goalRecords = _f[0], setGoalRecords = _f[1];
    var _g = (0, react_1.useState)(0), currentAmount = _g[0], setCurrentAmount = _g[1];
    var _h = (0, react_1.useState)({
        current: "",
        date: new Date().toISOString(),
    }), addGoalRecord = _h[0], setAddGoalRecord = _h[1];
    var _j = (0, react_1.useState)(null), addGoalIndex = _j[0], setAddGoalIndex = _j[1];
    var _k = (0, react_1.useState)("savings"), selectedOption = _k[0], setSelectedOption = _k[1];
    var _l = (0, react_1.useState)(false), showModalAdd = _l[0], setShowModalAdd = _l[1];
    var _m = (0, react_1.useState)(false), showModalLists = _m[0], setShowModalLists = _m[1];
    var handleModalAdd = function () {
        setShowModalAdd(function (prev) { return !prev; });
    };
    var handleModalLists = function (index) {
        setAddGoalRecord(goalRecords[index]);
        setAddGoalIndex(index);
        setShowModalLists(function (prev) { return !prev; });
    };
    var handleSavingsWithdraw = function () {
        var goalRecord = goalRecords[addGoalIndex];
        var currentAmount = parseFloat(goalRecord.current);
        var inputAmount = parseFloat(addGoalRecord.current);
        if (selectedOption === "savings") {
            var newAmount = currentAmount + inputAmount;
            if (newAmount <= goalRecord.amount) {
                var updatedGoalRecord = __assign(__assign({}, goalRecord), { current: newAmount.toFixed(2), date: addGoalRecord.date });
                var updatedGoalRecords = __spreadArray([], goalRecords, true);
                updatedGoalRecords[addGoalIndex] = updatedGoalRecord;
                setGoalRecords(updatedGoalRecords);
                setAddGoalRecord(__assign(__assign({}, addGoalRecord), { current: "", date: "" }));
                setShowModalLists(false);
            }
            else {
                alert("The amount exceeds the goal.");
            }
        }
        else if (selectedOption === "withdraw") {
            var newAmount = currentAmount - inputAmount;
            if (newAmount >= 0) {
                var updatedGoalRecord = __assign(__assign({}, goalRecord), { current: newAmount.toFixed(2), date: addGoalRecord.date });
                var updatedGoalRecords = __spreadArray([], goalRecords, true);
                updatedGoalRecords[addGoalIndex] = updatedGoalRecord;
                setGoalRecords(updatedGoalRecords);
                setAddGoalRecord(__assign(__assign({}, addGoalRecord), { current: "", date: "" }));
                setShowModalLists(false);
            }
            else {
                alert("Insufficient balance. The amount to withdraw exceeds the current savings.");
            }
        }
    };
    return (<react_2.IonPage>
      <Header_1.default />
      <react_2.IonContent fullscreen>
        {goalRecords.map(function (goalRecord, index) {
            var currentAmount = parseFloat(goalRecord.current);
            var goalAmount = parseFloat(goalRecord.amount);
            var progressPercent = (currentAmount / goalAmount) * 100;
            return (<react_2.IonCard key={index} onClick={function () { return handleModalLists(index); }}>
              <react_2.IonCardContent>
                <react_2.IonList lines="none">
                  <react_2.IonItem>
                    <react_2.IonLabel className="savings-lists">
                      <div className="savings-label">
                        <h2>{goalRecord.label}</h2>
                        <div className="goal-container">
                          <p>₱{goalRecord.amount.toLocaleString()}</p>
                          <p>GOAL</p>
                        </div>
                      </div>
                      <div className="progressBar-container" style={{
                    width: "100%",
                    height: "10px",
                    backgroundColor: "#ccc",
                    borderRadius: "10px",
                }}>
                        <div className="progress" style={{
                    width: "".concat(progressPercent, "%"),
                    backgroundColor: "".concat(currentAmount === goalAmount ? "green" : "red", " "),
                    height: "100%",
                    borderRadius: "10px",
                }}></div>
                      </div>
                      <div className="savings-estimate">
                        <p>
                          ₱{goalRecord.current} <br /> {goalRecord.date}
                        </p>
                        <div className="savings-goal">
                          <p>
                            ₱
                            {"".concat((goalRecord.amount - goalRecord.current).toLocaleString())}
                          </p>
                          <p>REMAINING</p>
                        </div>
                      </div>
                    </react_2.IonLabel>
                  </react_2.IonItem>
                </react_2.IonList>
              </react_2.IonCardContent>
            </react_2.IonCard>);
        })}
        {/* SAVINGS MODAL */}
        {addGoalRecord && addGoalIndex !== null && (<react_2.IonModal isOpen={showModalLists} className="savings-modal">
            <react_2.IonContent>
              <react_2.IonHeader className="modal-header">
                <react_2.IonToolbar>
                  <react_2.IonTitle>Add Savings or Withdraw</react_2.IonTitle>
                </react_2.IonToolbar>
              </react_2.IonHeader>
              <react_2.IonList>
                <react_2.IonItem className="modal-inputs">
                  <label>Amount:</label>
                  <input type="text" value={addGoalRecord.current} onChange={function (e) {
                return setAddGoalRecord(function (prev) { return (__assign(__assign({}, prev), { current: e.target.value })); });
            }}></input>
                </react_2.IonItem>
                <react_2.IonItem className="modal-inputs">
                  <react_2.IonRadioGroup value={selectedOption} className="savings-radio" onIonChange={function (e) { return setSelectedOption(e.detail.value); }}>
                    <react_2.IonRadio value="savings">Savings</react_2.IonRadio>
                    <react_2.IonRadio value="withdraw">Withdraw</react_2.IonRadio>
                  </react_2.IonRadioGroup>
                </react_2.IonItem>
                <react_2.IonItem className="modal-inputs">
                  <label>Date:</label>
                  <input type="date" value={addGoalRecord.date} onChange={function (e) {
                return setAddGoalRecord(function (prev) { return (__assign(__assign({}, prev), { date: e.target.value })); });
            }}></input>
                </react_2.IonItem>
              </react_2.IonList>
              <div className="modal-footer">
                <react_2.IonButton onClick={function () { return setShowModalLists(function (prev) { return !prev; }); }}>
                  CANCEL
                </react_2.IonButton>
                <react_2.IonButton onClick={handleSavingsWithdraw}>DONE</react_2.IonButton>
              </div>
            </react_2.IonContent>
          </react_2.IonModal>)}

        {/* ADD BUTTON */}
        <react_2.IonFab slot="fixed" vertical="bottom" horizontal="end">
          <react_2.IonFabButton onClick={handleModalAdd}>
            <react_2.IonIcon icon={icons_1.add}></react_2.IonIcon>
          </react_2.IonFabButton>
        </react_2.IonFab>

        {/* ADD MODAL */}
        <react_2.IonModal isOpen={showModalAdd} className="tab2-modal">
          <react_2.IonContent>
            <react_2.IonHeader className="modal-header">
              <react_2.IonToolbar>
                <react_2.IonTitle>Create New Goal</react_2.IonTitle>
              </react_2.IonToolbar>
            </react_2.IonHeader>
            <react_2.IonList>
              <react_2.IonItem className="modal-inputs">
                <label>Goal name:</label>
                <input type="text" value={goalName} onChange={function (e) { return setGoalName(e.target.value); }}></input>
              </react_2.IonItem>
              <react_2.IonItem className="modal-inputs">
                <label>Goal Amount:</label>
                <input type="text" value={goalAmount} onChange={function (e) { return setGoalAmount(e.target.value); }}></input>
              </react_2.IonItem>
            </react_2.IonList>
            <div className="modal-footer">
              <react_2.IonButton onClick={function () { return setShowModalAdd(false); }}>
                CANCEL
              </react_2.IonButton>
              <react_2.IonButton onClick={function () {
            setGoalRecords(function (prev) {
                return __spreadArray(__spreadArray([], prev, true), [
                    {
                        label: goalName,
                        amount: goalAmount,
                        current: currentAmount,
                        date: goalDate,
                    },
                ], false);
            });
            setShowModalAdd(false);
            setGoalName("");
            setGoalAmount("");
        }}>
                DONE
              </react_2.IonButton>
            </div>
          </react_2.IonContent>
        </react_2.IonModal>
      </react_2.IonContent>
    </react_2.IonPage>);
};
exports.default = Tab2;
