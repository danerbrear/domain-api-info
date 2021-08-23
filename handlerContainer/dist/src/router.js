"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
exports.register = (app) => {
    app.get('/', (req, res) => {
        res.status(200).json({ message: "Get request successfull" });
    });
};
//# sourceMappingURL=router.js.map