import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module'; // Assuming AuthModule exists
import { UsersController } from './users/users.controller'; // Assuming UsersController exists
import { UsersService } from './users/users.service'; // Assuming UsersService exists
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/typeorm.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    AuthModule,
    UsersModule,
  ],
  providers: [TypeOrmConfigService],
})
export class AppModule {}
