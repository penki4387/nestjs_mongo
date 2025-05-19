import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { SocialLoginService } from './social-login.service';
import { SocialLoginController } from './social-login.controller'; 
import { GoogleStrategy } from './google.strategy'; 

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    ConfigModule,  // add this to inject ConfigService properly
  ],
  providers: [SocialLoginService, GoogleStrategy],
  controllers: [SocialLoginController],
})
export class SocialLoginModule {}
