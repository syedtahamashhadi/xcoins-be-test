import * as mongoose from 'mongoose'

export const ProfileSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true
        },
        nickname: {
            type: String,
            trim: true
        },
        email:{
            type: String,
            required: true,
            trim: true
        },
        capital:{
            type: Number
        }, 
        divisa:{
            type: String
        }, 
        prefered_cryptocurrency:{
            type: String
        }
    },
)
