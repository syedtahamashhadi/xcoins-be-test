import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { addingSimulatorI, byProfileIdI, SimulatorSchemaI } from './simulator.interfaces';
import { Model } from 'mongoose'

@Injectable()
export class SimulatorService {
    constructor(
        @InjectModel('Simulator') private simulatorDoc: Model<SimulatorSchemaI>
    ){}

    async getSimulator(profileId:byProfileIdI){
        try {
            let simulator;
            if(profileId?.profile_id){
                simulator = await this.simulatorDoc.findOne({profile_id:profileId.profile_id}).populate('profile_id')
                return {
                    message: simulator?"record found":"no record found",
                    data: simulator 
                }
            }else{
                simulator = await this.simulatorDoc.find().lean()
                return {
                    message: simulator.length>0?"record found":"no record found",
                    data: simulator 
                }
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async addSimulator(profile_id:byProfileIdI,addingSimulator:addingSimulatorI){
        try {
            let newSimulator = await this.simulatorDoc.create({
                profile_id:profile_id.profile_id,
                ...addingSimulator
            })
            return {
                message: "new record has been created",
                data: newSimulator
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
