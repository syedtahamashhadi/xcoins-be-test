import { IsMongoId, IsOptional} from "class-validator";

export class GetFavouriteByProfileParamDto{
    @IsOptional()
    @IsMongoId()
    profile_id: string
}