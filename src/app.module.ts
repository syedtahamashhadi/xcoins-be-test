import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimulatorModule } from './simulator/simulator.module';
import { FavouriteModule } from './favourite/favourite.module';
import { ProfileModule } from './profile/profile.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService)=>{
        return{
          uri:configService.get('MONGO_URI')
        }
      }
    }),
    SimulatorModule,
    FavouriteModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService,{provide: APP_GUARD,useClass: ThrottlerGuard}],
})
export class AppModule {}
