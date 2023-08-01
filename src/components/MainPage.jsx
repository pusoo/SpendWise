import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Tab3 from "../pages/Tab3";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";

// svg icons
import Awards from "../icons/awards.svg";
import Baby from "../icons/baby.svg";
import Beauty from "../icons/beauty.svg";
import Bills from "../icons/bills.svg";
import Car from "../icons/car.svg";
import Clothing from "../icons/clothing.svg";
import Coupons from "../icons/coupons.svg";
import Education from "../icons/education.svg";
import Electronics from "../icons/electronics.svg";
import Entertainment from "../icons/entertainment.svg";
import Food from "../icons/food.svg";
import Grants from "../icons/grants.svg";
import Health from "../icons/health.svg";
import Home from "../icons/home.svg";
import Insurance from "../icons/insurance.svg";
import Lottery from "../icons/lottery.svg";
import Refunds from "../icons/refunds.svg";
import Rental from "../icons/rental.svg";
import Salary from "../icons/salary.svg";
import Sale from "../icons/sale.svg";
import Shopping from "../icons/shopping.svg";
import Social from "../icons/social.svg";
import Sport from "../icons/sport.svg";
import Tax from "../icons/tax.svg";
import Telephone from "../icons/telephone.svg";
import Transportation from "../icons/transportation.svg";

const CommonParent = () => {
  const [categories, setCategories] = useState([
    { id: 1, label: "Awards", icon: Awards },
    { id: 2, label: "Baby", icon: Baby },
    { id: 3, label: "Beauty", icon: Beauty },
    { id: 4, label: "Bills", icon: Bills },
    { id: 5, label: "Car", icon: Car },
    { id: 6, label: "Clothing", icon: Clothing },
    { id: 7, label: "Coupons", icon: Coupons },
    { id: 8, label: "Education", icon: Education },
    { id: 9, label: "Electronics", icon: Electronics },
    { id: 10, label: "Entertainment", icon: Entertainment },
    { id: 11, label: "Food", icon: Food },
    { id: 12, label: "Grants", icon: Grants },
    { id: 13, label: "Health", icon: Health },
    { id: 14, label: "Home", icon: Home },
    { id: 15, label: "Insurance", icon: Insurance },
    { id: 16, label: "Lottery", icon: Lottery },
    { id: 17, label: "Refunds", icon: Refunds },
    { id: 18, label: "Rental", icon: Rental },
    { id: 19, label: "Salary", icon: Salary },
    { id: 20, label: "Sale", icon: Sale },
    { id: 21, label: "Shopping", icon: Shopping },
    { id: 22, label: "Social", icon: Social },
    { id: 23, label: "Sport", icon: Sport },
    { id: 24, label: "Tax", icon: Tax },
    { id: 25, label: "Telephone", icon: Telephone },
    { id: 26, label: "Transportation", icon: Transportation },
  ]);

  return (
    <Switch>
      <Route path="/tab1">
        <Tab1 categories={categories} />
      </Route>
      <Route path="/tab2">
        <Tab2 />
      </Route>
      <Route path="/tab3">
        <Tab3 categories={categories} setCategories={setCategories} />
      </Route>
    </Switch>
  );
};

export default CommonParent;
