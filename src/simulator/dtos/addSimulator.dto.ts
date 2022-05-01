import { IsMongoId, IsOptional} from "class-validator";

export class AddSimulatorByProfileParamDto{
    @IsMongoId()
    profile_id: string
}