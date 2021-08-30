"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const dns_service_1 = require("./dns-service");
exports.get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new dns_service_1.DnsService("64.233.191.255");
    service.getDomains()
        .then((data) => {
        res.send({
            info: data
        });
    })
        .catch((err) => {
        res.status(500);
        res.send({
            err
        });
    });
});
//# sourceMappingURL=handler.js.map