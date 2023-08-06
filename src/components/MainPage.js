"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Tab3_1 = require("../pages/Tab3");
var Tab1_1 = require("../pages/Tab1");
var Tab2_1 = require("../pages/Tab2");
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
var CommonParent = function () {
    var _a = (0, react_1.useState)([
        { id: 1, label: "Awards", icon: awards_svg_1.default },
        { id: 2, label: "Baby", icon: baby_svg_1.default },
        { id: 3, label: "Beauty", icon: beauty_svg_1.default },
        { id: 4, label: "Bills", icon: bills_svg_1.default },
        { id: 5, label: "Car", icon: car_svg_1.default },
        { id: 6, label: "Clothing", icon: clothing_svg_1.default },
        { id: 7, label: "Coupons", icon: coupons_svg_1.default },
        { id: 8, label: "Education", icon: education_svg_1.default },
        { id: 9, label: "Electronics", icon: electronics_svg_1.default },
        { id: 10, label: "Entertainment", icon: entertainment_svg_1.default },
        { id: 11, label: "Food", icon: food_svg_1.default },
        { id: 12, label: "Grants", icon: grants_svg_1.default },
        { id: 13, label: "Health", icon: health_svg_1.default },
        { id: 14, label: "Home", icon: home_svg_1.default },
        { id: 15, label: "Insurance", icon: insurance_svg_1.default },
        { id: 16, label: "Lottery", icon: lottery_svg_1.default },
        { id: 17, label: "Refunds", icon: refunds_svg_1.default },
        { id: 18, label: "Rental", icon: rental_svg_1.default },
        { id: 19, label: "Salary", icon: salary_svg_1.default },
        { id: 20, label: "Sale", icon: sale_svg_1.default },
        { id: 21, label: "Shopping", icon: shopping_svg_1.default },
        { id: 22, label: "Social", icon: social_svg_1.default },
        { id: 23, label: "Sport", icon: sport_svg_1.default },
        { id: 24, label: "Tax", icon: tax_svg_1.default },
        { id: 25, label: "Telephone", icon: telephone_svg_1.default },
        { id: 26, label: "Transportation", icon: transportation_svg_1.default },
    ]), categories = _a[0], setCategories = _a[1];
    return (<react_router_dom_1.Switch>
      <react_router_dom_1.Route path="/tab1">
        <Tab1_1.default categories={categories}/>
      </react_router_dom_1.Route>
      <react_router_dom_1.Route path="/tab2">
        <Tab2_1.default />
      </react_router_dom_1.Route>
      <react_router_dom_1.Route path="/tab3">
        <Tab3_1.default categories={categories} setCategories={setCategories}/>
      </react_router_dom_1.Route>
    </react_router_dom_1.Switch>);
};
exports.default = CommonParent;
