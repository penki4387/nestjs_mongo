import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { GoogleLoginService } from './google-login.service';
import { SocialLoginController } from './google-login.controller'; 
import { GoogleStrategy } from './google.strategy'; 

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    ConfigModule,  // add this to inject ConfigService properly
  ],
  providers: [GoogleLoginService, GoogleStrategy],
  controllers: [SocialLoginController],
})
export class SocialLoginModule {}
