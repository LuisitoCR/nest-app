import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-166.railway.app',
      port: 5709,
      username: 'postgres',
      password: 'dcqU9l87K5n6Cqmv9Z72',
      database: 'railway',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
