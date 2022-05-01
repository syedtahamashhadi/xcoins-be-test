import * as mongoose from 'mongoose'

export const FavouriteSchema = new mongoose.Schema(
    {
        profile_id:{
            type:  mongoose.Schema.Types.ObjectId,
            ref:'Profile',
            required:true
        },
        name:{
            type: String,
            required: true
        },
        favourite1: {
            type: String
        },
        favourite2: {
            type: String
        },
        favourite3: {
            type: String
        },
    },
    {
        timestamps: true,
    }
)