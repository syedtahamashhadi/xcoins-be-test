import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { GetSimulatorByProfileParamDto } from './dtos/getSimulator.dto';
import { SimulatorService } from './simulator.service';
import { Response } from 'express'
import { AddSimulatorByProfileParamDto } from './dtos/addSimulator.dto';

@Controller('simulator')
export class SimulatorController {

    constructor(
        private readonly simulatorService: SimulatorService
    ){}

    @Get('/:profile_id?')
    async getSimulator(@Param() params:GetSimulatorByProfileParamDto, @Res() res:Response){
        try {
            const getOperation = await this.simulatorService.getSimulator(params)
            return res.status(200).json(
                {
                    ...getOperation
                }
            )
        } catch (error) {
            return res.status(400).json(
                {
                    message:error.message
                }
            )
        }
    }

    @Post('/:profile_id')
    async addSimulator(@Param() params:AddSimulatorByProfileParamDto, @Body() body, @Res() res:Response){
        try {
            const postOperation = await this.simulatorService.addSimulator(params,body)
            return res.status(200).json(
                {
                    ...postOperation
                }
            )
        } catch (error) {
            return res.status(400).json(
                {
                    message:error.message
                }
            )
        }
    }
}
