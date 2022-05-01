import * as mongoose from 'mongoose'

export interface FavouriteSchemaI extends mongoose.Document{
    profile_id: string;
    name: string;
    favourite1: string;
    favourite2: string;
    favourite3: string;
}

export interface profileIdI{
    profile_id?: string;
}
