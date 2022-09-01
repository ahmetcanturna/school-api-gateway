import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TranslationService } from './services/translation.service';

@Module({
  imports: [
    ConfigModule,
  ],
  providers: [
    TranslationService,
  ],
  exports: [
    TranslationService,
  ],
})
export class CommonModule {}
