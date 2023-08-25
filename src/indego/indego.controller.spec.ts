import { Test, TestingModule } from '@nestjs/testing';
import { IndegoController } from './indego.controller';
import { IndegoService } from './indego.service';
import { NotFoundException } from '@nestjs/common';

describe('IndegoController', () => {
  let controller: IndegoController;
  let service: IndegoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndegoController],
      providers: [
        {
          provide: IndegoService,
          useValue: {
            getStationSnapshot: jest.fn(),
            getStationsSnapshot: jest.fn(),
            fetchAndStoreIndegoData: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<IndegoController>(IndegoController);
    service = module.get<IndegoService>(IndegoService);
  });


  describe('fetchAndStoreIndegoData', () => {
    it('should fetch And Store Indego data for all stations', async () => {
     let expectedIndegoData={"message": "Indego data fetched and stored successfully."};


      const result = await controller.fetchAndStoreIndegoData();
      console.log("result",result);
      
      expect(result).toEqual(expectedIndegoData);
    });

    it('should throw NotFoundException if indego data not found', async () => {

      await expect(controller.fetchAndStoreIndegoData()).rejects.toThrowError(
       'Indego data not found.'
      );
    });
  });

  describe('getStationsSnapshot', () => {
    it('should return snapshot data for all stations', async () => {
      const expectedSnapshot = { "at": "string",
         stations:{ id: "string", geometry: "Prisma.JsonValue", 
        properties: "Prisma.JsonValue", kioskId: "number", indegoDataId: "string" }, weather: "any" }


      const result = await controller.getStationsSnapshot('2019-09-01T10:00:00');
      expect(result).toEqual(expectedSnapshot);
    });

    it('should throw NotFoundException if snapshot data not found', async () => {

      await expect(controller.getStationsSnapshot('2027-09-01T10:00:00')).rejects.toThrowError(
        'Snapshot data not found.',
      );
    });
  });

  describe('getStationSnapshot', () => {
    it('should return snapshot data for a specific station', async () => {
      const expectedSnapshot = { "at": "string",
      stations:{ id: "string", geometry: "Prisma.JsonValue", 
     properties: "Prisma.JsonValue", kioskId: "number", indegoDataId: "string" }, weather: "any" }


      const result = await controller.getStationSnapshot('3005', '2019-09-01T10:00:00');
      expect(result).toEqual(expectedSnapshot);
    });

    it('should throw NotFoundException if snapshot data not found', async () => {

      await expect(controller.getStationSnapshot('30050', '2019-09-01T10:00:00')).rejects.toThrowError(
        'Snapshot data not found.',
      );
    });
  });
});