import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
/* import { Role } from './entities/role.entity';
import { User } from './entities/user.entity'; */

ConfigModule.forRoot({
  envFilePath: '.env'
});

const configService = new ConfigService();

@Module({
  imports: [
    /* TypeOrmModule.forFeature([Role, User]), */
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: 0,
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      entities: [__dirname + '/../**/**/*.entity{.ts, .js}'],
      migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
      migrationsRun: true,
      logging: false,
      namingStrategy: new SnakeNamingStrategy()
    }),
    UsersModule,
    RolesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
