import { Module } from '@nestjs/common';
import { RolesController } from './controllers/roles.controller';

@Module({
    imports: [],
    controllers: [RolesController]
})
export class RolesModule { }
