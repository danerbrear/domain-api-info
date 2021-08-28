"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
exports.get = (req, res) => {
    res.send({
        statusCode: 200,
        body: {
            message: 'it work'
        },
        headers: {
            'content-type': 'application/json'
        }
    });
};
//# sourceMappingURL=handler.js.map