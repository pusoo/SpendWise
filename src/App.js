"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@ionic/react");
var react_router_1 = require("@ionic/react-router");
var icons_1 = require("ionicons/icons");
var Tab1_1 = require("./pages/Tab1");
var Tab2_1 = require("./pages/Tab2");
var Tab3_1 = require("./pages/Tab3");
var MainPage_1 = require("./components/MainPage");
/* Core CSS required for Ionic components to work properly */
require("@ionic/react/css/core.css");
/* Basic CSS for apps built with Ionic */
require("@ionic/react/css/normalize.css");
require("@ionic/react/css/structure.css");
require("@ionic/react/css/typography.css");
/* Optional CSS utils that can be commented out */
require("@ionic/react/css/padding.css");
require("@ionic/react/css/float-elements.css");
require("@ionic/react/css/text-alignment.css");
require("@ionic/react/css/text-transformation.css");
require("@ionic/react/css/flex-utils.css");
require("@ionic/react/css/display.css");
/* Theme variables */
require("./theme/variables.css");
(0, react_2.setupIonicReact)();
var App = function () { return (<react_2.IonApp>
    <react_router_1.IonReactRouter>
      <react_2.IonTabs>
        <react_2.IonRouterOutlet>
          <react_router_dom_1.Route path="/tab1">
            <MainPage_1.default selectedTab="tab1"/>
          </react_router_dom_1.Route>
          <react_router_dom_1.Route path="/tab2">
            <Tab2_1.default />
          </react_router_dom_1.Route>
          <react_router_dom_1.Route path="/tab3">
            <Tab3_1.default />
          </react_router_dom_1.Route>
          <react_router_dom_1.Redirect exact from="/" to="/tab1"/>
        </react_2.IonRouterOutlet>
        <react_2.IonTabBar slot="bottom">
          <react_2.IonTabButton tab="tab1" href="/tab1">
            <react_2.IonIcon aria-hidden="true" icon={icons_1.home}/>
            <react_2.IonLabel>Home</react_2.IonLabel>
          </react_2.IonTabButton>
          <react_2.IonTabButton tab="tab2" href="/tab2">
            <react_2.IonIcon aria-hidden="true" icon={icons_1.wallet}/>
            <react_2.IonLabel>Savings</react_2.IonLabel>
          </react_2.IonTabButton>
          <react_2.IonTabButton tab="tab3" href="/tab3">
            <react_2.IonIcon aria-hidden="true" icon={icons_1.grid}/>
            <react_2.IonLabel>Categories</react_2.IonLabel>
          </react_2.IonTabButton>
        </react_2.IonTabBar>
      </react_2.IonTabs>
    </react_router_1.IonReactRouter>
  </react_2.IonApp>); };
exports.default = App;
