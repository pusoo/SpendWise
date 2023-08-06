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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@ionic/react");
var icons_1 = require("ionicons/icons");
var Header_1 = require("../components/Header");
require("./Tab1.css");
var axios_1 = require("axios");
var Tab1 = function (_a) {
    var categories = _a.categories;
    var _b = (0, react_1.useState)(0), updateTrigger = _b[0], setUpdateTrigger = _b[1];
    var _c = (0, react_1.useState)([]), data = _c[0], setData = _c[1];
    (0, react_1.useEffect)(function () {
        axios_1.default
            .get("http://localhost:3000/tracker")
            .then(function (res) {
            setData(res.data.data.map(function (record) { return record; }));
        })
            .catch(function (error) { return console.error("Error fetching data:", error); });
    }, [updateTrigger]);
    var createIncome = function (body) {
        console.log(body);
        axios_1.default.post("http://localhost:3000/tracker", body).then(function (res) {
            console.log(res.data),
                setShowIncomeModal(false),
                setUpdateTrigger(function (prev) { return prev + 1; });
        });
    };
    var createExpense = function (body) {
        console.log(body);
        axios_1.default.post("http://localhost:3000/tracker", body).then(function (res) {
            console.log(res.data),
                setShowExpenseModal(false),
                setUpdateTrigger(function (prev) { return prev + 1; });
        });
    };
    var deleteIncomeData = function () {
        var IncomeRecordId = selectedIncomeRecord._id;
        axios_1.default
            .delete("http://localhost:3000/tracker/".concat(IncomeRecordId))
            .then(function () {
            console.log("Income Record deleted successfully!");
            setData(function (prev) {
                return prev.filter(function (record) { return record._id !== IncomeRecordId; });
            });
        })
            .catch(function (error) {
            console.error("Error deleting Income record:", error);
        });
        setShowIncomeActionSheet(false);
    };
    var deleteExpenseData = function () {
        var ExpenseRecordId = selectedExpenseRecord["_id"];
        axios_1.default
            .delete("http://localhost:3000/tracker/".concat(ExpenseRecordId))
            .then(function () {
            console.log("Expense Record deleted successfully!");
            setData(function (prev) {
                return prev.filter(function (record) { return record._id !== ExpenseRecordId; });
            });
        })
            .catch(function (error) {
            console.error("Error deleting Expense record:", error);
        });
        setShowExpenseActionSheet(false);
    };
    var _d = (0, react_1.useState)(null), selectedExpenseRecord = _d[0], setSelectedExpenseRecord = _d[1];
    var _e = (0, react_1.useState)(null), selectedIncomeRecord = _e[0], setSelectedIncomeRecord = _e[1];
    var _f = (0, react_1.useState)(null), editIncomeRecord = _f[0], setEditIncomeRecord = _f[1];
    var _g = (0, react_1.useState)(null), editIncomeIndex = _g[0], setEditIncomeIndex = _g[1];
    var _h = (0, react_1.useState)(null), editExpenseRecord = _h[0], setEditExpenseRecord = _h[1];
    var _j = (0, react_1.useState)(null), editExpenseIndex = _j[0], setEditExpenseIndex = _j[1];
    var updateIncomeData = function (incomeRecordId, updatedData) {
        axios_1.default
            .patch("http://localhost:3000/tracker/".concat(incomeRecordId), updatedData)
            .then(function (res) {
            console.log("Income record updated successfully!");
            setData(function (prevData) {
                return prevData.map(function (record) {
                    return record._id === incomeRecordId
                        ? __assign(__assign({}, record), updatedData) : record;
                });
            });
        })
            .catch(function (error) {
            console.error("Error updating income record:", error);
        });
    };
    var updateExpenseData = function (expenseRecordId, updatedData) {
        axios_1.default
            .patch("http://localhost:3000/tracker/".concat(expenseRecordId), updatedData)
            .then(function (res) {
            console.log("Expense record updated successfully!");
            setData(function (prevData) {
                return prevData.map(function (record) {
                    return record._id === expenseRecordId
                        ? __assign(__assign({}, record), updatedData) : record;
                });
            });
        })
            .catch(function (error) {
            console.error("Error updating expense record:", error);
        });
    };
    // const handleUpdatedIncome = () => {
    //   if (selectedIncomeRecord && editIncomeRecord) {
    //     updateIncomeData(selectedIncomeRecord._id, editIncomeRecord);
    //     setShowEditIncomeModal(false);
    //   }
    // };
    var handleUpdatedIncome = function () {
        if (selectedIncomeRecord && editIncomeRecord) {
            var updatedRecord = __assign(__assign({}, editIncomeRecord), { icon: selectedIncomeCategory === null || selectedIncomeCategory === void 0 ? void 0 : selectedIncomeCategory.icon, name: selectedIncomeCategory === null || selectedIncomeCategory === void 0 ? void 0 : selectedIncomeCategory.label });
            console.log(updatedRecord);
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
    var handleUpdatedExpense = function () {
        if (selectedExpenseRecord && editExpenseRecord) {
            var updatedRecord = __assign(__assign({}, editExpenseRecord), { icon: selectedExpenseCategory === null || selectedExpenseCategory === void 0 ? void 0 : selectedExpenseCategory.icon, name: selectedExpenseCategory === null || selectedExpenseCategory === void 0 ? void 0 : selectedExpenseCategory.label });
            console.log(updatedRecord);
            updateExpenseData(selectedExpenseRecord._id, updatedRecord);
            setShowEditExpenseModal(false);
        }
    };
    var _k = (0, react_1.useState)(0), incomeAmount = _k[0], setIncomeAmount = _k[1];
    var _l = (0, react_1.useState)(""), incomeDate = _l[0], setIncomeDate = _l[1];
    var _m = (0, react_1.useState)(0), expenseAmount = _m[0], setExpenseAmount = _m[1];
    var _o = (0, react_1.useState)(""), expenseDate = _o[0], setExpenseDate = _o[1];
    var _p = (0, react_1.useState)(false), showIncomeModal = _p[0], setShowIncomeModal = _p[1];
    var _q = (0, react_1.useState)(false), showExpenseModal = _q[0], setShowExpenseModal = _q[1];
    var _r = (0, react_1.useState)(false), showEditIncomeModal = _r[0], setShowEditIncomeModal = _r[1];
    var _s = (0, react_1.useState)(false), showEditExpenseModal = _s[0], setShowEditExpenseModal = _s[1];
    var _t = (0, react_1.useState)(false), showCategoryModal = _t[0], setShowCategoryModal = _t[1];
    var _u = (0, react_1.useState)(null), selectedIncomeCategory = _u[0], setSelectedIncomeCategory = _u[1];
    var _v = (0, react_1.useState)(null), selectedExpenseCategory = _v[0], setSelectedExpenseCategory = _v[1];
    var _w = (0, react_1.useState)(false), showIncomeActionSheet = _w[0], setShowIncomeActionSheet = _w[1];
    var _x = (0, react_1.useState)(false), showExpenseActionSheet = _x[0], setShowExpenseActionSheet = _x[1];
    var _y = (0, react_1.useState)(true), isIncomeTab = _y[0], setIsIncomeTab = _y[1];
    var _z = (0, react_1.useState)(false), isExpenseTab = _z[0], setIsExpenseTab = _z[1];
    var handleIncomeModal = function () {
        setSelectedIncomeCategory(null);
        setShowIncomeModal(function (prev) { return !prev; });
        setIsIncomeTab(true);
        setIsExpenseTab(false);
    };
    var handleExpenseModal = function () {
        setSelectedExpenseCategory(null);
        setShowExpenseModal(function (prev) { return !prev; });
        setIsIncomeTab(false);
        setIsExpenseTab(true);
    };
    var handleIncomeEditModal = function (incomeRecord, index) {
        setEditIncomeRecord(incomeRecord);
        setEditIncomeIndex(index);
        setShowIncomeActionSheet(false);
        setShowEditIncomeModal(true);
    };
    var handleExpenseEditModal = function (expenseRecord, index) {
        setEditExpenseRecord(expenseRecord);
        setEditExpenseIndex(index);
        setShowExpenseActionSheet(false);
        setShowEditExpenseModal(true);
    };
    var handleCategoryModal = function (category, index) {
        if (isIncomeTab) {
            setSelectedIncomeCategory(__assign(__assign({}, category), { index: index }));
        }
        else if (isExpenseTab) {
            setSelectedExpenseCategory(__assign(__assign({}, category), { index: index }));
        }
        setShowCategoryModal(function (prev) { return !prev; });
    };
    var openIncomeActionSheet = function (incomeRecord, index) {
        setSelectedIncomeRecord(incomeRecord);
        setEditIncomeIndex(index);
        setShowIncomeActionSheet(true);
    };
    var openExpenseActionSheet = function (expenseRecord, index) {
        setSelectedExpenseRecord(expenseRecord);
        setEditExpenseIndex(index);
        setShowExpenseActionSheet(true);
    };
    return (<react_2.IonPage>
      <Header_1.default />
      <react_2.IonContent fullscreen>
        <react_2.IonCard>
          <react_2.IonCardContent>
            <react_2.IonGrid>
              <react_2.IonRow>
                <react_2.IonCol class="balance">
                  <p>BALANCE</p>
                  <h1>
                    ₱
                    {"".concat((data
            .filter(function (val) { return val.type === "income"; })
            .reduce(function (acc, cur) {
            return (acc += cur.amount);
        }, 0) -
            data
                .filter(function (val) { return val.type === "expense"; })
                .reduce(function (acc, cur) {
                return (acc += cur.amount);
            }, 0)).toLocaleString())}
                  </h1>
                </react_2.IonCol>
              </react_2.IonRow>
              <react_2.IonRow>
                <react_2.IonCol class="expense">
                  <p>EXPENSE</p>
                  <h1>
                    ₱
                    {data
            .filter(function (val) { return val.type === "expense"; })
            .reduce(function (acc, cur) {
            return (acc += cur.amount);
        }, 0)
            .toLocaleString()}
                  </h1>
                </react_2.IonCol>
                <react_2.IonCol>
                  <p>INCOME</p>
                  <h1>
                    ₱
                    {data
            .filter(function (val) { return val.type === "income"; })
            .reduce(function (acc, cur) {
            return (acc += cur.amount);
        }, 0)
            .toLocaleString()}
                  </h1>
                </react_2.IonCol>
              </react_2.IonRow>
            </react_2.IonGrid>
          </react_2.IonCardContent>
        </react_2.IonCard>
        <react_2.IonList lines="full">
          <react_2.IonItem>
            <react_2.IonLabel>Income</react_2.IonLabel>
          </react_2.IonItem>
          {data
            .filter(function (val) { return val.type === "income"; })
            .map(function (incomeRecord, index) {
            var formattedDate = new Date(incomeRecord.date).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "2-digit",
            });
            return (<react_2.IonGrid key={index}>
                  <react_2.IonRow style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <react_2.IonCol style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                      {incomeRecord.icon && (<react_2.IonIcon icon={incomeRecord.icon} style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "5px",
                    }}/>)}
                      {incomeRecord.name && <span>{incomeRecord.name}</span>}
                    </react_2.IonCol>
                    <react_2.IonCol>₱{incomeRecord.amount.toLocaleString()}</react_2.IonCol>
                    <react_2.IonCol>{formattedDate}</react_2.IonCol>
                    <react_2.IonCol>
                      <react_2.IonButton fill="clear" onClick={function () {
                    return openIncomeActionSheet(incomeRecord, index);
                }}>
                        <react_2.IonIcon icon={icons_1.ellipsisVerticalOutline}/>
                      </react_2.IonButton>
                    </react_2.IonCol>
                    {/* INCOME EDIT MODAL */}
                    {selectedIncomeRecord && editIncomeIndex === index && (<react_2.IonModal isOpen={showEditIncomeModal} className="lists-modal">
                        <react_2.IonHeader className="modal-header">
                          <react_2.IonToolbar>
                            <react_2.IonTitle>Income</react_2.IonTitle>
                          </react_2.IonToolbar>
                        </react_2.IonHeader>
                        <react_2.IonContent className="modal-content">
                          <react_2.IonButton className="category-btn" expand="block" fill="outline" onClick={function () {
                        return handleCategoryModal(selectedIncomeCategory);
                    }}>
                            Category
                          </react_2.IonButton>
                          <react_2.IonList key={index}>
                            <react_2.IonItem className="modal-inputs">
                              <label htmlFor="incomeEditDate">Date:</label>
                              <input type="date" id="incomeEditDate" value={(editIncomeRecord === null || editIncomeRecord === void 0 ? void 0 : editIncomeRecord.date) || ""} onChange={function (e) {
                        return setEditIncomeRecord(function (prev) { return (__assign(__assign({}, prev), { date: e.target.value })); });
                    }}/>
                            </react_2.IonItem>
                            <react_2.IonItem className="modal-inputs">
                              <label>Amount:</label>
                              <input type="text" id="incomeEditAmount" value={(editIncomeRecord === null || editIncomeRecord === void 0 ? void 0 : editIncomeRecord.amount) || ""} onChange={function (e) {
                        return setEditIncomeRecord(function (prev) { return (__assign(__assign({}, prev), { amount: parseInt(e.target.value) })); });
                    }}/>
                            </react_2.IonItem>
                          </react_2.IonList>
                          <div className="modal-footer">
                          <react_2.IonButton onClick={function () { return setShowEditIncomeModal(false); }}>
                              CANCEL
                            </react_2.IonButton>
                            <react_2.IonButton onClick={handleUpdatedIncome}>
                              SAVE
                            </react_2.IonButton>
                          </div>
                        </react_2.IonContent>
                      </react_2.IonModal>)}
                  </react_2.IonRow>
                </react_2.IonGrid>);
        })}
        </react_2.IonList>
        <react_2.IonList lines="full">
          <react_2.IonItem>
            <react_2.IonLabel>Expense</react_2.IonLabel>
          </react_2.IonItem>
          {data
            .filter(function (val) { return val.type === "expense"; })
            .map(function (expenseRecord, index) {
            var formattedDate = new Date(expenseRecord.date).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "2-digit",
            });
            return (<react_2.IonGrid key={index}>
                  <react_2.IonRow style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <react_2.IonCol style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                      {expenseRecord.icon && (<react_2.IonIcon icon={expenseRecord.icon} style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "5px",
                    }}/>)}
                      {expenseRecord.name && <span>{expenseRecord.name}</span>}
                    </react_2.IonCol>
                    <react_2.IonCol>₱{expenseRecord.amount.toLocaleString()}</react_2.IonCol>
                    <react_2.IonCol>{formattedDate}</react_2.IonCol>
                    <react_2.IonCol>
                      <react_2.IonButton fill="clear" onClick={function () {
                    return openExpenseActionSheet(expenseRecord, index);
                }}>
                        <react_2.IonIcon icon={icons_1.ellipsisVerticalOutline}/>
                      </react_2.IonButton>
                    </react_2.IonCol>
                    {/* EXPENSE EDIT MODAL */}
                    {selectedExpenseRecord && editExpenseIndex === index && (<react_2.IonModal isOpen={showEditExpenseModal} className="lists-modal">
                        <react_2.IonHeader className="modal-header">
                          <react_2.IonToolbar>
                            <react_2.IonTitle>Expense</react_2.IonTitle>
                          </react_2.IonToolbar>
                        </react_2.IonHeader>
                        <react_2.IonContent className="modal-content">
                          <react_2.IonButton className="category-btn" expand="block" fill="outline" onClick={function () {
                        return handleCategoryModal(selectedExpenseCategory);
                    }}>
                            Category
                          </react_2.IonButton>
                          <react_2.IonList key={index}>
                            <react_2.IonItem className="modal-inputs">
                              <label htmlFor="expenseEditDate">Date:</label>
                              <input type="date" id="expenseEditDate" value={(editExpenseRecord === null || editExpenseRecord === void 0 ? void 0 : editExpenseRecord.date) || ""} onChange={function (e) {
                        return setEditExpenseRecord(function (prev) { return (__assign(__assign({}, prev), { date: e.target.value })); });
                    }}/>
                            </react_2.IonItem>
                            <react_2.IonItem className="modal-inputs">
                              <label htmlFor="expenseEditAmount">Amount:</label>
                              <input type="text" id="expenseEditAmount" value={(editExpenseRecord === null || editExpenseRecord === void 0 ? void 0 : editExpenseRecord.amount) || ""} onChange={function (e) {
                        return setEditExpenseRecord(function (prev) { return (__assign(__assign({}, prev), { amount: parseInt(e.target.value) })); });
                    }}/>
                            </react_2.IonItem>
                          </react_2.IonList>

                          <div className="modal-footer">
                            <react_2.IonButton onClick={function () { return setShowEditExpenseModal(false); }}>
                              CANCEL
                            </react_2.IonButton>
                            <react_2.IonButton onClick={handleUpdatedExpense}>
                              SAVE
                            </react_2.IonButton>
                          </div>
                        </react_2.IonContent>
                      </react_2.IonModal>)}
                  </react_2.IonRow>
                </react_2.IonGrid>);
        })}
        </react_2.IonList>
        {/* ADD BUTTON */}
        <react_2.IonFab slot="fixed" vertical="bottom" horizontal="end">
          <react_2.IonFabButton>
            <react_2.IonIcon icon={icons_1.add}></react_2.IonIcon>
          </react_2.IonFabButton>
          <react_2.IonFabList side="top">
            <react_2.IonFabButton onClick={handleExpenseModal}>
              <react_2.IonIcon icon={icons_1.cashOutline}></react_2.IonIcon>
            </react_2.IonFabButton>
            <react_2.IonFabButton onClick={handleIncomeModal}>
              <react_2.IonIcon icon={icons_1.addCircleOutline}></react_2.IonIcon>
            </react_2.IonFabButton>
          </react_2.IonFabList>
        </react_2.IonFab>
        {/* INCOME MODAL */}
        <react_2.IonModal isOpen={showIncomeModal} className="income-modal">
          <react_2.IonHeader className="modal-header">
            <react_2.IonToolbar>
              <react_2.IonTitle>Income</react_2.IonTitle>
            </react_2.IonToolbar>
          </react_2.IonHeader>
          <react_2.IonContent className="modal-content">
            <react_2.IonButton className="category-btn" expand="block" fill="outline" onClick={handleCategoryModal}>
              Category
            </react_2.IonButton>
            <react_2.IonList>
              <react_2.IonItem className="modal-inputs">
                <label htmlFor="incomeDate">Date:</label>
                <input type="date" id="incomeDate" value={incomeDate} onChange={function (e) { return setIncomeDate(e.target.value); }}/>
              </react_2.IonItem>
              <react_2.IonItem className="modal-inputs">
                <label>Amount:</label>
                <input type="text" id="incomeAmount" value={incomeAmount} onChange={function (e) { return setIncomeAmount(e.target.value); }}/>
              </react_2.IonItem>
            </react_2.IonList>
            <div className="modal-footer">
              <react_2.IonButton onClick={function () {
            setShowIncomeModal(false);
            setIncomeDate("");
            setIncomeAmount(0);
        }}>
                CANCEL
              </react_2.IonButton>
              <react_2.IonButton onClick={function () {
            createIncome({
                type: "income",
                icon: selectedIncomeCategory === null || selectedIncomeCategory === void 0 ? void 0 : selectedIncomeCategory.icon,
                name: selectedIncomeCategory === null || selectedIncomeCategory === void 0 ? void 0 : selectedIncomeCategory.label,
                amount: parseInt(incomeAmount),
                date: incomeDate,
            });
            setIncomeDate("");
            setIncomeAmount(0);
        }}>
                DONE
              </react_2.IonButton>
            </div>
          </react_2.IonContent>
        </react_2.IonModal>
        {/* EXPENSE MODAL */}
        <react_2.IonModal isOpen={showExpenseModal} className="expense-modal">
          <react_2.IonHeader className="modal-header">
            <react_2.IonToolbar>
              <react_2.IonTitle>Expense</react_2.IonTitle>
            </react_2.IonToolbar>
          </react_2.IonHeader>
          <react_2.IonContent className="modal-content">
            <react_2.IonButton className="category-btn" expand="block" fill="outline" onClick={handleCategoryModal}>
              Category
            </react_2.IonButton>
            <react_2.IonList>
              <react_2.IonItem className="modal-inputs">
                <label htmlFor="expenseDate">Date:</label>
                <input type="date" id="expenseDate" value={expenseDate} onChange={function (e) { return setExpenseDate(e.target.value); }}/>
              </react_2.IonItem>
              <react_2.IonItem className="modal-inputs">
                <label>Amount:</label>
                <input type="text" id="expenseDate" value={expenseAmount} onChange={function (e) { return setExpenseAmount(e.target.value); }}/>
              </react_2.IonItem>
            </react_2.IonList>
            <div className="modal-footer">
              <react_2.IonButton onClick={function () {
            setShowExpenseModal(false);
            setExpenseDate("");
            setExpenseAmount(0);
        }}>
                CANCEL
              </react_2.IonButton>
              <react_2.IonButton onClick={function () {
            createExpense({
                type: "expense",
                icon: selectedExpenseCategory === null || selectedExpenseCategory === void 0 ? void 0 : selectedExpenseCategory.icon,
                name: selectedExpenseCategory === null || selectedExpenseCategory === void 0 ? void 0 : selectedExpenseCategory.label,
                amount: parseInt(expenseAmount),
                date: expenseDate,
            });
            setExpenseDate("");
            setExpenseAmount(0);
        }}>
                DONE
              </react_2.IonButton>
            </div>
          </react_2.IonContent>
        </react_2.IonModal>
        {/* CATEGORY MODAL */}
        <react_2.IonModal isOpen={showCategoryModal} className="category-modal">
          <react_2.IonContent>
            <react_2.IonHeader className="modal-header">
              <react_2.IonToolbar>
                <react_2.IonTitle>Select a Category</react_2.IonTitle>
              </react_2.IonToolbar>
            </react_2.IonHeader>
            <react_2.IonList className="modal-inputs">
              <react_2.IonItem lines="none">
                <react_2.IonLabel style={{ textAlign: "center", fontWeight: "bold" }}>
                  ICON
                </react_2.IonLabel>
              </react_2.IonItem>
              <react_2.IonGrid>
                <react_2.IonRow style={{ border: "1px solid #004ba8", borderRadius: "10px" }}>
                  {categories.map(function (category, index, set) { return (<react_2.IonCol size="3" key={index} style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
                padding: "5px",
                background: "".concat((isIncomeTab &&
                    (selectedIncomeCategory === null || selectedIncomeCategory === void 0 ? void 0 : selectedIncomeCategory.index) === index) ||
                    (isExpenseTab &&
                        (selectedExpenseCategory === null || selectedExpenseCategory === void 0 ? void 0 : selectedExpenseCategory.index) === index)
                    ? "#d7d8da"
                    : "transparent"),
                borderRadius: "10px",
            }} onClick={function () { return handleCategoryModal(category, index); }}>
                      <react_2.IonIcon icon={category.icon} style={{
                width: "30px",
                height: "30px",
            }}/>
                      <react_2.IonLabel style={{ fontSize: "12px" }}>
                        {category.label}
                      </react_2.IonLabel>
                    </react_2.IonCol>); })}
                </react_2.IonRow>
              </react_2.IonGrid>
            </react_2.IonList>
          </react_2.IonContent>
        </react_2.IonModal>
        {/* Action sheet for edit and delete */}
        {/* INCOME */}
        <react_2.IonActionSheet isOpen={showIncomeActionSheet} onDidDismiss={function () { return setShowIncomeActionSheet(false); }} buttons={[
            {
                text: "Edit",
                icon: icons_1.pencilOutline,
                handler: function () {
                    return handleIncomeEditModal(selectedIncomeRecord, editIncomeIndex);
                },
            },
            {
                text: "Delete",
                icon: icons_1.trashOutline,
                role: "destructive",
                handler: deleteIncomeData,
            },
            {
                text: "Cancel",
                icon: icons_1.closeOutline,
                role: "cancel",
            },
        ]}/>
        {/* EXPENSE */}
        <react_2.IonActionSheet isOpen={showExpenseActionSheet} onDidDismiss={function () { return setShowExpenseActionSheet(false); }} buttons={[
            {
                text: "Edit",
                icon: icons_1.pencilOutline,
                handler: function () {
                    return handleExpenseEditModal(selectedExpenseRecord, editExpenseIndex);
                },
            },
            {
                text: "Delete",
                icon: icons_1.trashOutline,
                role: "destructive",
                handler: deleteExpenseData,
            },
            {
                text: "Cancel",
                icon: icons_1.closeOutline,
                role: "cancel",
            },
        ]}/>
      </react_2.IonContent>
    </react_2.IonPage>);
};
exports.default = Tab1;
