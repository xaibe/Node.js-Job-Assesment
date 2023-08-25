import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndegoModule } from './indego/indego.module';

@Module({
  imports: [IndegoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
