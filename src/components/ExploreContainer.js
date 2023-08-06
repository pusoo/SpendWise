"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./ExploreContainer.css");
var ExploreContainer = function (_a) {
    var name = _a.name;
    return (<div className="container">
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>
      </p>
    </div>);
};
exports.default = ExploreContainer;
