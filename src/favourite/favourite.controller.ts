import { Controller, Get, Param, Res } from '@nestjs/common';
import { FavouriteService } from './favourite.service';
import { Response } from 'express'
import { GetFavouriteByProfileParamDto } from './dtos/getFavouriteProfile.dto';

@Controller('favourite')
export class FavouriteController {

    constructor(
        private readonly favouriteService: FavouriteService
    ){}

    @Get('/:profile_id?')
    async getFavouriteByProfile(@Param() params:GetFavouriteByProfileParamDto, @Res() res:Response){
        try {
            const getOperation = await this.favouriteService.getFavouriteByProfile(params)
            return res.status(200).json(
                {
                    ...getOperation
                }
            )
        } catch (error) {
            return res.status(400).json(
                {
                    message:error.message
                }
            )
        }
    }
}
