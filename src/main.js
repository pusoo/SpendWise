"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("./App");
var root = document.getElementById('root');
(0, client_1.createRoot)(root).render(<react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>);
