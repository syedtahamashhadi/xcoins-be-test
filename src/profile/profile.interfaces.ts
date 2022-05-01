import * as mongoose from 'mongoose'

export interface ProfileSchemaI extends mongoose.Document{
    name: string;
    nickname: string;
    email: string;
    capital: number;
    divisa: number;
    prefered_cryptocurrency: number;
}

export interface newProfileI{
    name: string;
    nickname: string;
    email: string;
    capital?: number;
    divisa?: number;
    prefered_cryptocurrency?: number;
}
