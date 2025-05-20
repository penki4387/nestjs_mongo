import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('api/v1/social-login/facebook')
export class FacebookController {
  @Get()
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth() {
    // This route will redirect to Facebook
  }

  @Get('redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthRedirect(@Req() req: any, @Res() res: Response) {
    // Handle the Facebook callback
    const user = req.user;
    
    // Here you can implement your own logic to handle the authenticated user
    // For example, create a JWT token, save user to database, etc.
    
    // For now, we'll just redirect to the frontend with the user data
    res.redirect(`http://localhost:3000/auth/success?user=${JSON.stringify(user)}`);
  }
} 