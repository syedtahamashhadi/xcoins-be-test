import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AddProfileParamDto } from './dtos/addProfile.dto';
import { ProfileService } from './profile.service';
import { Response } from 'express'

@Controller('profile')
export class ProfileController {
    constructor(
        private readonly profileService: ProfileService
    ){}

    @Get('/')
    async getProfile(@Res() res:Response){
        try {
            let getOperation = await this.profileService.getProfile()
            return res.status(200).json(
                {
                    ...getOperation
                }
            )
        } catch (error) {
            return res.status(400).json(
                {
                    message: error.message
                }
            )
        }
    }

    @Post('/')
    async addProfile(@Body() body:AddProfileParamDto, @Res() res:Response){
        try {
            const postOperation = await this.profileService.addProfile({...body})
            return res.status(200).json(
                {
                    ...postOperation
                }
            )
        } catch (error) {
            return res.status(400).json(
                {
                    message: error.message
                }
            )
        }
    }
}
