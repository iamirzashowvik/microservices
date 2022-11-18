import { ConfigService } from '@nestjs/config';
export declare class AppConfigurationService {
    private readonly _configService;
    private readonly _connectionString;
    get connectionString(): string;
    constructor(_configService: ConfigService);
    private _getConnectionStringFromEnvFile;
}
