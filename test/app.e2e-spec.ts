import { Test, TestingModule } from '@nestjs/testing';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as request from 'supertest';
import { AppModule } from '../src/app.module'; // Adjust the path

describe('IndegoController (e2e)', () => {
  let app: NestExpressApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestExpressApplication>();
    await app.init();
  });

  it('/api/v1/indego-data-fetch-and-store-it-db (POST)', () => {
    return request(app.getHttpServer())
      .post('/api/v1/indego-data-fetch-and-store-it-db')
      .expect(201); // Adjust the expected status code
  });

  it('/api/v1/stations?at=2019-09-01T10:00:00 (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/stations?at=2019-09-01T10:00:00')
      .expect(200) // Adjust the expected status code
      .expect((res) => {
        // Write assertions for the response body here...
      });
  });

  it('/api/v1/stations/KIOSKID?at=2019-09-01T10:00:00 (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/stations/KIOSKID?at=2019-09-01T10:00:00')
      .expect(200) // Adjust the expected status code
      .expect((res) => {
        // Write assertions for the response body here...
      });
  });
  
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });


  afterAll(async () => {
    await app.close();
  });
});