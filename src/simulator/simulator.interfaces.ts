import * as mongoose from 'mongoose'

export interface SimulatorSchemaI extends mongoose.Document{
    profile_id: string;
    dateRecorded: string;
    cryptocurrency: string;
    euros: number;
    price: number;
    quantity: number;
}

export interface addingSimulatorI{
    profile_id: string;
    dateRecorded: string;
    cryptocurrency: string;
    euros: number;
    price: number;
    quantity: number;
}

export interface byProfileIdI{
    profile_id: string
}