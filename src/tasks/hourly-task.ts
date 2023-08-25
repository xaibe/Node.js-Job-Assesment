import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { IndegoController } from 'src/indego/indego.controller';
import { IndegoService } from 'src/indego/indego.service';

@Injectable()
export class HourlyTask {
constructor(private indegoService:IndegoService){}
    logger: any;
  @Cron(CronExpression.EVERY_HOUR)
  async handleCron() {
    await this.indegoService.fetchAndStoreIndegoData();
    
    // You can perform your desired actions here
  }
}