"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const configs_1 = require("./configs");
const error_middleware_1 = require("./middleware/error.middleware");
const routers_1 = __importDefault(require("./routers"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.configure();
        this.api();
        this.handleError();
    }
    api() {
        this.app.use('/api/v1', routers_1.default);
    }
    configure() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.set('port', this.port || configs_1.PORT || 5000);
        this.app.use(morgan_1.default('dev'));
    }
    handleError() {
        this.app.use(error_middleware_1.GetError);
        this.app.use(error_middleware_1.HandleError);
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is running on port ${this.app.get('port')}`);
        });
    }
}
exports.App = App;
