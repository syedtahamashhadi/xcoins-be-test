import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { newProfileI, ProfileSchemaI } from './profile.interfaces';

@Injectable()
export class ProfileService {
    constructor(
        @InjectModel('Profile') private profileDoc: Model<ProfileSchemaI>
    ){}

    async getProfile(){
        try {
            let allProfile = await this.profileDoc.find().lean()
            return {
                message: allProfile.length>0?"record found":"no record found",
                data: allProfile 
            }
        } catch (error) {
            throw new Error(error.message)            
        }
    }

    async addProfile(newProfile:newProfileI){
        try {
            let { email, nickname } = newProfile;

            let findProfile = await this.profileDoc.findOne({
                $or: [{ email }, { nickname }],
            })
            if(!findProfile){
                const addedProfile = await this.profileDoc.create({...newProfile})
                return{
                    message: "profile has been added",
                    data: addedProfile
                }
            }else{
                throw new Error('email or nickname already exist')
            }
        } catch (error) {
            throw new Error(error.message)            
        }
    }
}
