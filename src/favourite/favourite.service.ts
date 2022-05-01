import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FavouriteSchemaI, profileIdI } from './favourite.interfaces';
import { Model } from 'mongoose';


@Injectable()
export class FavouriteService {
    constructor(
        @InjectModel('Favourite') private favouriteDoc: Model<FavouriteSchemaI>
    ){}

    async getFavouriteByProfile(profileId:profileIdI){
        try {
            let favourite;
            if(profileId?.profile_id){
                favourite = await this.favouriteDoc.findOne({profile_id:profileId.profile_id}).populate('profile_id')
                return {
                    message: favourite?"record found":"no record found",
                    data: favourite 
                }
            }else{
                favourite = await this.favouriteDoc.find().populate('profile_id').lean()
                return {
                    message: favourite.length>0?"record found":"no record found",
                    data: favourite 
                }
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
