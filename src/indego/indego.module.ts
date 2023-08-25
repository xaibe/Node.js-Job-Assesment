import { Module } from '@nestjs/common';
import { IndegoService } from './indego.service';
import { IndegoController } from './indego.controller';
import { PrismaService } from '../prisma/prisma.service'

@Module({
  controllers: [IndegoController],
  providers: [IndegoService,PrismaService]
})
export class IndegoModule {}
