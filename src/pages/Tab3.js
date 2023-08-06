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
var react_2 = require("@ionic/react");
var icons_1 = require("ionicons/icons");
var Header_1 = require("../components/Header");
require("./Tab3.css");
require("../components/Modal/Modal.css");
// svg icons
var awards_svg_1 = require("../icons/awards.svg");
var baby_svg_1 = require("../icons/baby.svg");
var beauty_svg_1 = require("../icons/beauty.svg");
var bills_svg_1 = require("../icons/bills.svg");
var car_svg_1 = require("../icons/car.svg");
var clothing_svg_1 = require("../icons/clothing.svg");
var coupons_svg_1 = require("../icons/coupons.svg");
var education_svg_1 = require("../icons/education.svg");
var electronics_svg_1 = require("../icons/electronics.svg");
var entertainment_svg_1 = require("../icons/entertainment.svg");
var food_svg_1 = require("../icons/food.svg");
var grants_svg_1 = require("../icons/grants.svg");
var health_svg_1 = require("../icons/health.svg");
var home_svg_1 = require("../icons/home.svg");
var insurance_svg_1 = require("../icons/insurance.svg");
var lottery_svg_1 = require("../icons/lottery.svg");
var refunds_svg_1 = require("../icons/refunds.svg");
var rental_svg_1 = require("../icons/rental.svg");
var salary_svg_1 = require("../icons/salary.svg");
var sale_svg_1 = require("../icons/sale.svg");
var shopping_svg_1 = require("../icons/shopping.svg");
var social_svg_1 = require("../icons/social.svg");
var sport_svg_1 = require("../icons/sport.svg");
var tax_svg_1 = require("../icons/tax.svg");
var telephone_svg_1 = require("../icons/telephone.svg");
var transportation_svg_1 = require("../icons/transportation.svg");
var Tab3 = function (_a) {
    var categories = _a.categories, setCategories = _a.setCategories;
    var _b = (0, react_1.useState)(false), showModalAdd = _b[0], setShowModalAdd = _b[1];
    var _c = (0, react_1.useState)(false), showModalEdit = _c[0], setShowModalEdit = _c[1];
    var _d = (0, react_1.useState)(""), categoryName = _d[0], setCategoryName = _d[1];
    var _e = (0, react_1.useState)(null), categoryIcon = _e[0], setCategoryIcon = _e[1];
    var _f = (0, react_1.useState)(null), editCategoryIndex = _f[0], setEditCategoryIndex = _f[1];
    var _g = (0, react_1.useState)(""), editCategoryName = _g[0], setEditCategoryName = _g[1];
    var _h = (0, react_1.useState)(null), editCategory = _h[0], setEditCategory = _h[1];
    var _j = (0, react_1.useState)(null), editCategoryIcon = _j[0], setEditCategoryIcon = _j[1];
    var handleReorder = function (event) {
        console.log("Dragged from index", event.detail.from, "to", event.detail.to);
        event.detail.complete();
    };
    var handleModalAdd = function () {
        setShowModalAdd(function (prev) { return !prev; });
    };
    var handleModalEdit = function (category, index) {
        console.log("Editing category:", category);
        console.log("Category index:", index);
        setEditCategory(category);
        setEditCategoryName(category.label);
        setEditCategoryIndex(index);
        setEditCategoryIcon(category.icon);
        setShowModalEdit(true);
    };
    var iconOptions = [
        { label: "Awards", icon: awards_svg_1.default },
        { label: "Baby", icon: baby_svg_1.default },
        { label: "Beauty", icon: beauty_svg_1.default },
        { label: "Bills", icon: bills_svg_1.default },
        { label: "Car", icon: car_svg_1.default },
        { label: "Clothing", icon: clothing_svg_1.default },
        { label: "Coupons", icon: coupons_svg_1.default },
        { label: "Education", icon: education_svg_1.default },
        { label: "Electronics", icon: electronics_svg_1.default },
        { label: "Entertainment", icon: entertainment_svg_1.default },
        { label: "Food", icon: food_svg_1.default },
        { label: "Grants", icon: grants_svg_1.default },
        { label: "Health", icon: health_svg_1.default },
        { label: "Home", icon: home_svg_1.default },
        { label: "Insurance", icon: insurance_svg_1.default },
        { label: "Lottery", icon: lottery_svg_1.default },
        { label: "Refunds", icon: refunds_svg_1.default },
        { label: "Rental", icon: rental_svg_1.default },
        { label: "Salary", icon: salary_svg_1.default },
        { label: "Sale", icon: sale_svg_1.default },
        { label: "Shopping", icon: shopping_svg_1.default },
        { label: "Social", icon: social_svg_1.default },
        { label: "Sport", icon: sport_svg_1.default },
        { label: "Tax", icon: tax_svg_1.default },
        { label: "Telephone", icon: telephone_svg_1.default },
        { label: "Transportation", icon: transportation_svg_1.default },
    ];
    var handleAddCategory = function () {
        if (categoryName.trim() !== "" && categoryIcon) {
            var newCategoryObject_1 = {
                id: Date.now(),
                label: categoryName.trim(),
                icon: categoryIcon,
            };
            setCategories(function (prevCategories) { return __spreadArray(__spreadArray([], prevCategories, true), [newCategoryObject_1], false); });
            setShowModalAdd(false);
            setCategoryName("");
            setCategoryIcon(null);
        }
    };
    var handleSaveEditCategory = function () {
        if (editCategory && editCategoryIndex !== null) {
            setCategories(function (prevCategories) {
                var updatedCategories = __spreadArray([], prevCategories, true);
                updatedCategories[editCategoryIndex] = __assign(__assign({}, editCategory), { label: editCategoryName.trim(), icon: editCategoryIcon });
                return updatedCategories;
            });
            setShowModalEdit(false);
            setEditCategory(null);
            setEditCategoryIndex(null);
        }
    };
    return (<react_2.IonPage>
      <Header_1.default />
      <react_2.IonContent fullscreen>
        <react_2.IonList className="category-lists">
          <react_2.IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            {categories &&
            categories.map(function (category, index) { return (<react_2.IonItem key={category.id}>
                  <react_2.IonButton fill="clear" onClick={function () {
                    setCategories(function (prev) {
                        return prev.filter(function (prevCategory) { return prevCategory.id !== category.id; });
                    });
                }}>
                    <react_2.IonIcon slot="icon-only" icon={icons_1.removeCircleOutline}/>
                  </react_2.IonButton>
                  <react_2.IonIcon icon={category.icon} style={{
                    marginLeft: "10px",
                    marginRight: "8px",
                    width: "35px",
                    height: "35px",
                }}/>
                  <react_2.IonLabel>{category.label}</react_2.IonLabel>
                  <react_2.IonReorder slot="end"/>
                  <react_2.IonButton fill="clear" onClick={function () { return handleModalEdit(category, index); }}>
                    <react_2.IonIcon slot="icon-only" icon={icons_1.createOutline}/>
                  </react_2.IonButton>

                  {/* EDIT MODAL */}
                  {editCategoryIndex === index && (<react_2.IonModal isOpen={showModalEdit} className="edit-modal">
                      <react_2.IonContent>
                        <react_2.IonHeader className="modal-header">
                          <react_2.IonToolbar>
                            <react_2.IonTitle>Edit Category</react_2.IonTitle>
                          </react_2.IonToolbar>
                        </react_2.IonHeader>
                        <react_2.IonList className="modal-inputs">
                          <react_2.IonItem key={editCategory.id}>
                            <react_2.IonInput label="Name:" labelPlacement="stacked" type="text" value={editCategoryName} onIonChange={function (e) {
                        return setEditCategoryName(e.target.value);
                    }}></react_2.IonInput>
                          </react_2.IonItem>
                          <react_2.IonItem lines="none">
                            <react_2.IonLabel>Icon</react_2.IonLabel>
                          </react_2.IonItem>
                          <react_2.IonGrid>
                            <react_2.IonRow style={{
                        border: "1px solid #004ba8",
                        borderRadius: "10px",
                    }}>
                              {iconOptions.map(function (option, index) { return (<react_2.IonCol size="3" key={index}>
                                  <react_2.IonIcon icon={option.icon} onClick={function () {
                            return setEditCategoryIcon(option.icon);
                        }} style={{
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                            padding: "8px",
                            background: "".concat(editCategoryIcon === option.icon
                                ? "#d7d8da"
                                : "transparent"),
                            borderRadius: "10px",
                        }}/>
                                </react_2.IonCol>); })}
                            </react_2.IonRow>
                          </react_2.IonGrid>
                        </react_2.IonList>
                        <div className="modal-footer">
                          <react_2.IonButton onClick={function () { return setShowModalEdit(false); }}>
                            CANCEL
                          </react_2.IonButton>
                          <react_2.IonButton onClick={handleSaveEditCategory}>
                            SAVE
                          </react_2.IonButton>
                        </div>
                      </react_2.IonContent>
                    </react_2.IonModal>)}
                </react_2.IonItem>); })}
          </react_2.IonReorderGroup>
        </react_2.IonList>
      </react_2.IonContent>
    </react_2.IonPage>);
};
exports.default = Tab3;
