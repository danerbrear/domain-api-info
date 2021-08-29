"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = __importStar(require("./src/router"));
const port = 8083;
const app = express_1.default();
app.use(express_1.default.json());
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
// Configure routes
routes.register(app);
module.exports = () => {
    // const isTest = api.env('test');
    // You can use isTest to determine what presets and plugins to use.
    return {
        presets: [
            [
                '@babel/preset-env',
                '@babel/preset-typescript',
                {
                    targets: {
                        node: 'current',
                    },
                },
            ],
        ],
    };
};
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map