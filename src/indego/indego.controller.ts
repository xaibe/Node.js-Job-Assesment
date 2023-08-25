import { Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { IndegoService } from './indego.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Indego')
@Controller('api/v1')
export class IndegoController {
  constructor(private readonly indegoService: IndegoService) {}

  @Post('indego-data-fetch-and-store-it-db')
  async fetchAndStoreIndegoData() {
    await this.indegoService.fetchAndStoreIndegoData();
    return { message: 'Indego data fetched and stored successfully.' };
  }

  
  @Get('stations')
  async getStationsSnapshot(@Query('at') at: string) {
    const snapshot = await this.indegoService.getStationsSnapshot(new Date(at));
    if (!snapshot) {
      throw new NotFoundException('Snapshot data not found.');
    }
    return snapshot;
  }

  @Get('stations/:kioskId')
  async getStationSnapshot(
    @Param('kioskId') kioskId: string,
    @Query('at') at: string
  ) {
    const snapshot = await this.indegoService.getStationSnapshot(
      kioskId,
      new Date(at)
    );
    if (!snapshot) {
      throw new NotFoundException('Snapshot data not found.');
    }
    return snapshot;
  }

}