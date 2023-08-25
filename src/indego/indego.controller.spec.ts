import { Test, TestingModule } from '@nestjs/testing';
import { IndegoController } from './indego.controller';
import { IndegoService } from './indego.service';

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
            getStationsSnapshot: jest.fn(),
            getStationSnapshot: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<IndegoController>(IndegoController);
    service = module.get<IndegoService>(IndegoService);
  });

  describe('getStationsSnapshot', () => {
    it('should return snapshot data for all stations', async () => {
      const expectedSnapshot = /* ... construct your expected snapshot data ... */;

      service.getStationsSnapshot.mockResolvedValue(expectedSnapshot);

      const result = await controller.getStationsSnapshot('2019-09-01T10:00:00');
      expect(result).toEqual(expectedSnapshot);
    });

    it('should throw NotFoundException if snapshot data not found', async () => {
      service.getStationsSnapshot.mockResolvedValue(null);

      await expect(controller.getStationsSnapshot('2019-09-01T10:00:00')).rejects.toThrowError(
        'Snapshot data not found.',
      );
    });
  });

  describe('getStationSnapshot', () => {
    it('should return snapshot data for a specific station', async () => {
      const expectedSnapshot = /* ... construct your expected snapshot data ... */;

      service.getStationSnapshot.mockResolvedValue(expectedSnapshot);

      const result = await controller.getStationSnapshot('KIOSKID', '2019-09-01T10:00:00');
      expect(result).toEqual(expectedSnapshot);
    });

    it('should throw NotFoundException if snapshot data not found', async () => {
      service.getStationSnapshot.mockResolvedValue(null);

      await expect(controller.getStationSnapshot('KIOSKID', '2019-09-01T10:00:00')).rejects.toThrowError(
        'Snapshot data not found.',
      );
    });
  });
});