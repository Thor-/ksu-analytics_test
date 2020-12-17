import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import fs from 'fs';

@Injectable()
export class DatabaseService {
    constructor(private configService: ConfigService) { }

    public get_config() {
        const config = {
            type: this.configService.get<string>('DATABASE_TYPE'),
            host: this.configService.get<string>('DATABASE_HOST'),
            port: this.configService.get<number>('DATABASE_PORT'),
            username: this.configService.get<string>('DATABASE_USER'),
            password: this.configService.get<string>('DATABASE_PASSWORD'),
            database: this.configService.get<string>('DATABASE_NAME'),
            entities: [
                `${__dirname}/../**/*.entity.{ts,js}`
            ],

            migrationsTableName: 'migrations',
            migrations: [
                `${__dirname}/../migrations/*{.ts,.js}`,
            ],
            cli: {
                migrationsDir: `src/migrations`,
            },
            synchronize: false,
        };

        return config;
    }

    public create_ormconfig() {
        fs.writeFileSync(`${__dirname}/../../ormconfig.json`, JSON.stringify(this.get_config, null, 4));
    }
}

