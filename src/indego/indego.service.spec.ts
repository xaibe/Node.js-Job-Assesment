import { Test, TestingModule } from '@nestjs/testing';
import { IndegoService } from './indego.service';

describe('IndegoService', () => {
  let service: IndegoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndegoService],
    }).compile();

    service = module.get<IndegoService>(IndegoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
