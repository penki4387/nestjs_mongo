import { Module } from '@nestjs/common';
import { FacebookStrategy } from './facebook.strategy';
import { FacebookController } from './facebook.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [FacebookController],
  providers: [FacebookStrategy],
  exports: [FacebookStrategy],
})
export class FacebookModule {} 