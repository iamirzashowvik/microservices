"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigurationService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
let AppConfigurationService = class AppConfigurationService {
    get connectionString() {
        return this._connectionString;
    }
    constructor(_configService) {
        this._configService = _configService;
        this._connectionString = this._getConnectionStringFromEnvFile();
    }
    _getConnectionStringFromEnvFile() {
        const connectionString = `mongodb+srv://mirzaOP:mVymEu4FOjjnD7MT@cluster0.bpoemf2.mongodb.net/?retryWrites=true&w=majority`;
        if (!connectionString) {
            throw new Error('No connection string has been provided in the .env file.');
        }
        return connectionString;
    }
};
AppConfigurationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppConfigurationService);
exports.AppConfigurationService = AppConfigurationService;
//# sourceMappingURL=config.js.map