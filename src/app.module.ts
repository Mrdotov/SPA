import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfig } from './database/typeorm.config';
import { AuthModule } from './auth/auth.module'; // Assuming AuthModule exists
import { UsersController } from './users/users.controller'; // Assuming UsersController exists
import { UsersService } from './users/users.service'; // Assuming UsersService exists

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmConfig,
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
