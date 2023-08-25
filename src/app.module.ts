import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndegoModule } from './indego/indego.module';
import { APP_GUARD } from '@nestjs/core';
import { StaticTokenGuard } from './Auth/guards/static-token.guard';

@Module({
  imports: [IndegoModule],
  controllers: [AppController],
  providers: [
    AppService,
      {
        provide: APP_GUARD,
        useClass: StaticTokenGuard,
      },
    ],
})
export class AppModule {}
