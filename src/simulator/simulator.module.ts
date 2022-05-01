import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SimulatorSchema } from './schemas/simulator.schema';
import { SimulatorController } from './simulator.controller';
import { SimulatorService } from './simulator.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'Simulator', schema: SimulatorSchema },
    ])
  ],
  controllers: [SimulatorController],
  providers: [SimulatorService]
})
export class SimulatorModule {}
