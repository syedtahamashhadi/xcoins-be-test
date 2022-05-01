import { IsMongoId, IsOptional} from "class-validator";

export class GetSimulatorByProfileParamDto{
    @IsOptional()
    @IsMongoId()
    profile_id: string
}