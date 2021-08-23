"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomDomain = exports.getRandomNumber = void 0;
const namor = require("namor");
exports.getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.getRandomDomain = () => {
    return namor.generate();
};
//# sourceMappingURL=utils.js.map