import * as mongoose from 'mongoose'

export const SimulatorSchema = new mongoose.Schema(
    {
        profile_id:{
            type:  mongoose.Schema.Types.ObjectId,
            ref:'Profile',
            required:true
        },
        dateRecorded:{
            type: Date,
            required:true
        },
        cryptocurrency:{
            type: String,
            required:true
        },
        euros:{
            type: Number,
            required:true
        },
        price:{
            type: Number,
            required:true
        },
        quantity:{
            type: Number,
        }
    },
    {
        timestamps: true,
    }   
)