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
      const expectedSnapshot = {
        "at": "2023-08-25T08:20:27.523Z",
        "stations": [
          {
            "id": "f005d428-c68d-4da5-b152-12697bbd3e6b",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.14403,
                39.94733
              ]
            },
            "properties": {
              "id": 3005,
              "name": "Welcome Park, NPS",
              "bikes": [
                {
                  "battery": 35,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 54,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 26,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3005,
              "eventEnd": null,
              "latitude": 39.94733,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.14403,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 13,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.14403,
                39.94733
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "191 S. 2nd St.",
              "addressZipCode": "19106",
              "bikesAvailable": 7,
              "docksAvailable": 5,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 7,
              "rewardDocksAvailable": 5,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3005,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "5652a2b4-2154-43d4-a4d9-9dc1e1b078ce",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1612,
                39.93724
              ]
            },
            "properties": {
              "id": 3025,
              "name": "11th & Washington",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 73,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 74,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 46,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 23,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3025,
              "eventEnd": null,
              "latitude": 39.93724,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1612,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1612,
                39.93724
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1084 Washington Ave.",
              "addressZipCode": "19147",
              "bikesAvailable": 10,
              "docksAvailable": 5,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 10,
              "rewardDocksAvailable": 5,
              "classicBikesAvailable": 6,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3025,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "1efd67d7-4e13-468c-8da4-93733917bdcb",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.14983,
                39.95403
              ]
            },
            "properties": {
              "id": 3019,
              "name": "6th & Race",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3019,
              "eventEnd": null,
              "latitude": 39.95403,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.14983,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.14983,
                39.95403
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "160 N. 6th St.",
              "addressZipCode": "19106",
              "bikesAvailable": 4,
              "docksAvailable": 11,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 11,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3019,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "7a9baf34-0929-4fd1-a591-208338d87655",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19007,
                39.94855
              ]
            },
            "properties": {
              "id": 3020,
              "name": "University City Station",
              "bikes": [],
              "notes": null,
              "kioskId": 3020,
              "eventEnd": null,
              "latitude": 39.94855,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19007,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 36,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19007,
                39.94855
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3051 South St.",
              "addressZipCode": "19147",
              "bikesAvailable": 0,
              "docksAvailable": 36,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 36,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3020,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "648f1500-87a2-4f2c-b327-22e3230f2e4d",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1455,
                39.94182
              ]
            },
            "properties": {
              "id": 3026,
              "name": "2nd & Lombard",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 86,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 58,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 93,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 95,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 53,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 67,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 94,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 60,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3026,
              "eventEnd": null,
              "latitude": 39.94182,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1455,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1455,
                39.94182
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "509 S 2nd St.",
              "addressZipCode": "19147",
              "bikesAvailable": 11,
              "docksAvailable": 5,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 11,
              "rewardDocksAvailable": 5,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 8
            },
            "kioskId": 3026,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "bce36ec5-9ac0-4c34-921d-ec1d9422360b",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15522,
                39.98005
              ]
            },
            "properties": {
              "id": 3031,
              "name": "13th & Montgomery",
              "bikes": [
                {
                  "battery": 0,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3031,
              "eventEnd": null,
              "latitude": 39.98005,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15522,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 21,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15522,
                39.98005
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1284 W. Montgomery Ave.",
              "addressZipCode": "19122",
              "bikesAvailable": 1,
              "docksAvailable": 20,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 1,
              "rewardDocksAvailable": 20,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3031,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "1a861b9c-cc58-4c34-ad22-865dfc0ec413",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16902,
                39.9539
              ]
            },
            "properties": {
              "id": 3021,
              "name": "18th & JFK",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 2,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 28,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3021,
              "eventEnd": null,
              "latitude": 39.9539,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16902,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 34,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16902,
                39.9539
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1750 John F. Kennedy Blvd.",
              "addressZipCode": "19103",
              "bikesAvailable": 3,
              "docksAvailable": 31,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 3,
              "rewardDocksAvailable": 31,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3021,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "fa33329f-83de-4f8d-8a34-68afce35fae9",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.14958,
                39.94061
              ]
            },
            "properties": {
              "id": 3028,
              "name": "4th & Bainbridge",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 56,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 28,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 20,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 16,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3028,
              "eventEnd": null,
              "latitude": 39.94061,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.14958,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.14958,
                39.94061
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "404 Bainbridge St.",
              "addressZipCode": "19147",
              "bikesAvailable": 10,
              "docksAvailable": 5,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 10,
              "rewardDocksAvailable": 5,
              "classicBikesAvailable": 6,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3028,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "b2b8e2d6-999b-49f3-8812-3fcef72681c3",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15979,
                39.95273
              ]
            },
            "properties": {
              "id": 3018,
              "name": "12th & Filbert",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 92,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3018,
              "eventEnd": null,
              "latitude": 39.95273,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15979,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15979,
                39.95273
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1200 Filbert St.",
              "addressZipCode": "19107",
              "bikesAvailable": 4,
              "docksAvailable": 14,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 14,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3018,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "ec7bdaf5-ffdf-4562-899a-6e4585706ada",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15993,
                39.94517
              ]
            },
            "properties": {
              "id": 3007,
              "name": "11th & Pine, Kahn Park",
              "bikes": [
                {
                  "battery": 79,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 77,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 46,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 93,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 28,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 70,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 65,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 1,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 63,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 81,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 50,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 33,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3007,
              "eventEnd": null,
              "latitude": 39.94517,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15993,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 20,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15993,
                39.94517
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "328 S. 11th St.",
              "addressZipCode": "19107",
              "bikesAvailable": 20,
              "docksAvailable": 0,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 20,
              "rewardDocksAvailable": 0,
              "classicBikesAvailable": 8,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 12
            },
            "kioskId": 3007,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "720366c8-7eea-4f8d-b0dc-5e5dfc518c6f",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17971,
                39.94527
              ]
            },
            "properties": {
              "id": 3032,
              "name": "23rd & South",
              "bikes": [
                {
                  "battery": 64,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 82,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 76,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 69,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 0,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3032,
              "eventEnd": null,
              "latitude": 39.94527,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17971,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 20,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17971,
                39.94527
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "671 S. 23rd St.",
              "addressZipCode": "19146",
              "bikesAvailable": 10,
              "docksAvailable": 9,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 10,
              "rewardDocksAvailable": 9,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 6
            },
            "kioskId": 3032,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "2c6d3199-7e08-421d-907b-98a7e5cf9d4c",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15067,
                39.98081
              ]
            },
            "properties": {
              "id": 3008,
              "name": "Temple University Station",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 45,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 0,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 46,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 80,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3008,
              "eventEnd": null,
              "latitude": 39.98081,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15067,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15067,
                39.98081
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1076 Berks Street",
              "addressZipCode": "19122",
              "bikesAvailable": 1,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 1,
              "rewardDocksAvailable": 13,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3008,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "1594d9e2-3016-45b2-8ce1-e0a9c16503a9",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15672,
                39.95005
              ]
            },
            "properties": {
              "id": 3033,
              "name": "10th & Chestnut",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3033,
              "eventEnd": null,
              "latitude": 39.95005,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15672,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 20,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15672,
                39.95005
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "921 Chestnut St.",
              "addressZipCode": "19107",
              "bikesAvailable": 0,
              "docksAvailable": 18,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 18,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3033,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "b77ecd98-29b4-4d39-aa47-e31019b0b4a6",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15716,
                39.93935
              ]
            },
            "properties": {
              "id": 3030,
              "name": "Darien & Catharine",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 72,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 22,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 60,
                  "dockNumber": 23,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 96,
                  "dockNumber": 24,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 41,
                  "dockNumber": 25,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 26,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 94,
                  "dockNumber": 27,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 64,
                  "dockNumber": 28,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 86,
                  "dockNumber": 29,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3030,
              "eventEnd": null,
              "latitude": 39.93935,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15716,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 29,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15716,
                39.93935
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "840 S. Darien St.",
              "addressZipCode": "19147",
              "bikesAvailable": 19,
              "docksAvailable": 10,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 19,
              "rewardDocksAvailable": 10,
              "classicBikesAvailable": 12,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 7
            },
            "kioskId": 3030,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "354e7c0b-7896-4a2d-aaa7-fb5d50bbc464",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1742,
                39.9625
              ]
            },
            "properties": {
              "id": 3054,
              "name": "Rodin Museum",
              "bikes": [
                {
                  "battery": 100,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 76,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 26,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 79,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 82,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 56,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 79,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 53,
                  "dockNumber": 23,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 74,
                  "dockNumber": 25,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 27,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 28,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 91,
                  "dockNumber": 29,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 31,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 90,
                  "dockNumber": 33,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 37,
                  "dockNumber": 34,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 78,
                  "dockNumber": 35,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3054,
              "eventEnd": null,
              "latitude": 39.9625,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1742,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 35,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1742,
                39.9625
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2170 Hamilton St.",
              "addressZipCode": "19146",
              "bikesAvailable": 20,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 20,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 16
            },
            "kioskId": 3054,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "bda630e9-9d31-42fa-9c0a-e3ec9e294b90",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15457,
                39.95112
              ]
            },
            "properties": {
              "id": 3055,
              "name": "8th & Market",
              "bikes": [],
              "notes": null,
              "kioskId": 3055,
              "eventEnd": null,
              "latitude": 39.95112,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15457,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15457,
                39.95112
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "834 Market St.",
              "addressZipCode": "19107",
              "bikesAvailable": 0,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3055,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "0f7386f0-b3ab-4787-9130-afd66585d4af",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15813,
                39.97669
              ]
            },
            "properties": {
              "id": 3056,
              "name": "Broad & Oxford",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3056,
              "eventEnd": null,
              "latitude": 39.97669,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15813,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15813,
                39.97669
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1501 N. Broad St.",
              "addressZipCode": "19122",
              "bikesAvailable": 2,
              "docksAvailable": 19,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 2,
              "rewardDocksAvailable": 20,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3056,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "888d5b77-e5b3-42b2-9a58-938ee652d3f0",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16042,
                39.93431
              ]
            },
            "properties": {
              "id": 3098,
              "name": "10th & Federal",
              "bikes": [
                {
                  "battery": 70,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 83,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 90,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 36,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 15,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 39,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3098,
              "eventEnd": null,
              "latitude": 39.93431,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16042,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16042,
                39.93431
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1201 S. 10th Street",
              "addressZipCode": "19147",
              "bikesAvailable": 14,
              "docksAvailable": 5,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 14,
              "rewardDocksAvailable": 5,
              "classicBikesAvailable": 7,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 7
            },
            "kioskId": 3098,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "eace8f3f-b06f-4916-8de1-7a635831ab86",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18323,
                39.95472
              ]
            },
            "properties": {
              "id": 3022,
              "name": "Amtrak 30th Street Station",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 77,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 34,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3022,
              "eventEnd": null,
              "latitude": 39.95472,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18323,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 21,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18323,
                39.95472
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2933 Market Street",
              "addressZipCode": "19104",
              "bikesAvailable": 3,
              "docksAvailable": 17,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 3,
              "rewardDocksAvailable": 18,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3022,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "526fc6b2-4301-4e2c-ae08-c937d46fac77",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.20311,
                39.9522
              ]
            },
            "properties": {
              "id": 3006,
              "name": "40th & Spruce",
              "bikes": [
                {
                  "battery": 48,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3006,
              "eventEnd": null,
              "latitude": 39.9522,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.20311,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.20311,
                39.9522
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "246 S. 40th St.",
              "addressZipCode": "19104",
              "bikesAvailable": 2,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 2,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3006,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "fe1d2f14-b2f1-4e0c-a24a-d6abd028daab",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19479,
                39.9538
              ]
            },
            "properties": {
              "id": 3029,
              "name": "36th & Sansom",
              "bikes": [
                {
                  "battery": 3,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 35,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 31,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 67,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3029,
              "eventEnd": null,
              "latitude": 39.9538,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19479,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19479,
                39.9538
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "125 S. 36th St.",
              "addressZipCode": "19104",
              "bikesAvailable": 5,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 5,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3029,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "8ce4f042-6ae8-4942-b842-7c8a0f227888",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18982,
                39.95576
              ]
            },
            "properties": {
              "id": 3009,
              "name": "33rd & Market",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3009,
              "eventEnd": null,
              "latitude": 39.95576,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18982,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 14,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18982,
                39.95576
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3318 Market St.",
              "addressZipCode": "19104",
              "bikesAvailable": 0,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 13,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3009,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "c9e66a80-6b3d-4426-ae3b-240cf857cc71",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16248,
                39.93315
              ]
            },
            "properties": {
              "id": 3034,
              "name": "11th & Reed",
              "bikes": [
                {
                  "battery": 79,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 70,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 95,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 78,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 87,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3034,
              "eventEnd": null,
              "latitude": 39.93315,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16248,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 16,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16248,
                39.93315
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1300 S. 11th Street",
              "addressZipCode": "19147",
              "bikesAvailable": 12,
              "docksAvailable": 4,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 12,
              "rewardDocksAvailable": 4,
              "classicBikesAvailable": 6,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 6
            },
            "kioskId": 3034,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "4cd31e7a-cc7c-4838-b184-83851840b4e7",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17474,
                39.93082
              ]
            },
            "properties": {
              "id": 3043,
              "name": "18th & Fernon, Aquinas Center",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 42,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 58,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 71,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 68,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 71,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 69,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3043,
              "eventEnd": null,
              "latitude": 39.93082,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17474,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17474,
                39.93082
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1625 S. 18th St.",
              "addressZipCode": "19145",
              "bikesAvailable": 18,
              "docksAvailable": 0,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 18,
              "rewardDocksAvailable": 0,
              "classicBikesAvailable": 12,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 6
            },
            "kioskId": 3043,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "c601f167-5024-4adf-9541-04c02e8f0b4d",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.20908,
                39.94822
              ]
            },
            "properties": {
              "id": 3024,
              "name": "43rd & Chester, Clark Park",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 36,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3024,
              "eventEnd": null,
              "latitude": 39.94822,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.20908,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.20908,
                39.94822
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "598 S. 43rd St.",
              "addressZipCode": "19104",
              "bikesAvailable": 6,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3024,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "9b042cfd-0512-4c7d-b357-0f8d64dcb970",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19419,
                39.96271
              ]
            },
            "properties": {
              "id": 3035,
              "name": "Dornsife Center",
              "bikes": [
                {
                  "battery": 56,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 95,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3035,
              "eventEnd": null,
              "latitude": 39.96271,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19419,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 20,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19419,
                39.96271
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3599 Spring Garden",
              "addressZipCode": "19104",
              "bikesAvailable": 4,
              "docksAvailable": 14,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3035,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "7f1b14b8-a156-4d95-abd7-3fd0bb0fc0cc",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17747,
                39.94218
              ]
            },
            "properties": {
              "id": 3012,
              "name": "21st & Catharine",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 9,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 47,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 19,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 16,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 88,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 96,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 59,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 30,
                  "dockNumber": 22,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 25,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3012,
              "eventEnd": null,
              "latitude": 39.94218,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17747,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 27,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17747,
                39.94218
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "807 S. 21st St.",
              "addressZipCode": "19149",
              "bikesAvailable": 18,
              "docksAvailable": 8,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 18,
              "rewardDocksAvailable": 8,
              "classicBikesAvailable": 10,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 8
            },
            "kioskId": 3012,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "3b8627c8-5d9e-408e-baef-e2db3373b0cf",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15993,
                39.97157
              ]
            },
            "properties": {
              "id": 3039,
              "name": "Broad & Girard",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 50,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 5,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3039,
              "eventEnd": null,
              "latitude": 39.97157,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15993,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15993,
                39.97157
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "922 N. Broad St.",
              "addressZipCode": "19130",
              "bikesAvailable": 7,
              "docksAvailable": 10,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 7,
              "rewardDocksAvailable": 10,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 3
            },
            "kioskId": 3039,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "3a439e6f-e20c-443c-b913-7a146eb5555f",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1547,
                39.96892
              ]
            },
            "properties": {
              "id": 3016,
              "name": "11th & Poplar, John F. Street Community Center",
              "bikes": [
                {
                  "battery": 61,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 46,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 88,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 41,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 32,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 83,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3016,
              "eventEnd": null,
              "latitude": 39.96892,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1547,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1547,
                39.96892
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1100 Poplar St.",
              "addressZipCode": "19123",
              "bikesAvailable": 10,
              "docksAvailable": 5,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 10,
              "rewardDocksAvailable": 5,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 7
            },
            "kioskId": 3016,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "9c3fac05-4b4f-4e97-9981-31fa3810d88f",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18669,
                39.97522
              ]
            },
            "properties": {
              "id": 3120,
              "name": "31st & Girard",
              "bikes": [
                {
                  "battery": 49,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 30,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 2,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 84,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 85,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 62,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 68,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 10,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 41,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3120,
              "eventEnd": null,
              "latitude": 39.97522,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18669,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18669,
                39.97522
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1210 N. 31st Street",
              "addressZipCode": "19121",
              "bikesAvailable": 13,
              "docksAvailable": 5,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 13,
              "rewardDocksAvailable": 5,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 8
            },
            "kioskId": 3120,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "66d252cf-f138-4c02-916c-4658dc044167",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16618,
                39.94711
              ]
            },
            "properties": {
              "id": 3010,
              "name": "15th & Spruce",
              "bikes": [],
              "notes": null,
              "kioskId": 3010,
              "eventEnd": null,
              "latitude": 39.94711,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16618,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16618,
                39.94711
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1483 Spruce St.",
              "addressZipCode": "19102",
              "bikesAvailable": 0,
              "docksAvailable": 22,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 22,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3010,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "64422008-9db9-4d64-a205-43af1d9ff314",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16138,
                39.95424
              ]
            },
            "properties": {
              "id": 3037,
              "name": "Pennsylvania Convention Center",
              "bikes": [
                {
                  "battery": 73,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3037,
              "eventEnd": null,
              "latitude": 39.95424,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16138,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 21,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16138,
                39.95424
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1321 Arch St.",
              "addressZipCode": "19107",
              "bikesAvailable": 0,
              "docksAvailable": 20,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 20,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3037,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "8d8de69e-6238-4173-84a5-1282ca86e59c",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17369,
                39.95886
              ]
            },
            "properties": {
              "id": 3014,
              "name": "21st & Winter, Franklin Institute",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 71,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 65,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3014,
              "eventEnd": null,
              "latitude": 39.95886,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17369,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 25,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17369,
                39.95886
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2090 Winter St.",
              "addressZipCode": "19103",
              "bikesAvailable": 4,
              "docksAvailable": 21,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 21,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3014,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "e033bfbb-9006-4011-9f70-64d46018c7bf",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.14947,
                39.95073
              ]
            },
            "properties": {
              "id": 3047,
              "name": "Independence Mall, NPS",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3047,
              "eventEnd": null,
              "latitude": 39.95073,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.14947,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 20,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.14947,
                39.95073
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "519 Market St.",
              "addressZipCode": "19106",
              "bikesAvailable": 1,
              "docksAvailable": 19,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 1,
              "rewardDocksAvailable": 19,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3047,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "ab5fc5d2-171d-43b0-b3f5-3fd5f9823f84",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17987,
                39.96439
              ]
            },
            "properties": {
              "id": 3057,
              "name": "Philadelphia Museum of Art",
              "bikes": [
                {
                  "battery": 37,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 88,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 13,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 91,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 84,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 22,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 97,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 66,
                  "dockNumber": 23,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 86,
                  "dockNumber": 25,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3057,
              "eventEnd": null,
              "latitude": 39.96439,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17987,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 26,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17987,
                39.96439
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2600 Benjamin Franklin Pkwy",
              "addressZipCode": "19130",
              "bikesAvailable": 12,
              "docksAvailable": 13,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 12,
              "rewardDocksAvailable": 14,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 9
            },
            "kioskId": 3057,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "4bf4f0fb-4222-46f9-98b2-a17714322abc",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17943,
                39.95197
              ]
            },
            "properties": {
              "id": 3062,
              "name": "24th & Sansom",
              "bikes": [],
              "notes": null,
              "kioskId": 3062,
              "eventEnd": null,
              "latitude": 39.95197,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17943,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17943,
                39.95197
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "120 S. 24th St.",
              "addressZipCode": "19103",
              "bikesAvailable": 0,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3062,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "1acfce99-1f62-435f-9ceb-69893e43e2c1",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19973,
                39.96411
              ]
            },
            "properties": {
              "id": 3067,
              "name": "39th & Mt. Vernon, Mantua Haverford Community Center",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 71,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 27,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 34,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 58,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 61,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3067,
              "eventEnd": null,
              "latitude": 39.96411,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19973,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19973,
                39.96411
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "631 N. 39th St.",
              "addressZipCode": "19104",
              "bikesAvailable": 9,
              "docksAvailable": 7,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 9,
              "rewardDocksAvailable": 7,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3067,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "77a6f4f6-1801-41f7-84e6-d326effe4b12",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.13546,
                39.96849
              ]
            },
            "properties": {
              "id": 3041,
              "name": "Girard Station, MFL",
              "bikes": [
                {
                  "battery": 12,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 87,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 9,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 63,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 99,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 7,
                  "dockNumber": 23,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3041,
              "eventEnd": null,
              "latitude": 39.96849,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.13546,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 26,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.13546,
                39.96849
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1176 Leopard Ave.",
              "addressZipCode": "19123",
              "bikesAvailable": 7,
              "docksAvailable": 16,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 7,
              "rewardDocksAvailable": 16,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3041,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "d332b07a-dea4-40e9-b741-df92e648828e",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19409,
                39.94781
              ]
            },
            "properties": {
              "id": 3038,
              "name": "The Children's Hospital of Philadelphia (CHOP)",
              "bikes": [
                {
                  "battery": 100,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 23,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 24,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 26,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3038,
              "eventEnd": null,
              "latitude": 39.94781,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19409,
              "eventStart": null,
              "publicText": "Station accessible via the intersection at Osler Circle and Civic Center Blvd",
              "totalDocks": 28,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19409,
                39.94781
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3499 Civic Center Blvd.",
              "addressZipCode": "19104",
              "bikesAvailable": 4,
              "docksAvailable": 24,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 24,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3038,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "cdc9abbd-1d90-45e9-88d9-afefc7d61709",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.14886,
                39.94735
              ]
            },
            "properties": {
              "id": 3015,
              "name": "4th & Walnut, NPS",
              "bikes": [],
              "notes": null,
              "kioskId": 3015,
              "eventEnd": null,
              "latitude": 39.94735,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.14886,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 11,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.14886,
                39.94735
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "422 Walnut St.",
              "addressZipCode": "19106",
              "bikesAvailable": 0,
              "docksAvailable": 11,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 11,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3015,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "302c71e1-f74e-4fc5-a43c-ed026c799c6d",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16606,
                39.96289
              ]
            },
            "properties": {
              "id": 3040,
              "name": "17th & Spring Garden",
              "bikes": [
                {
                  "battery": 100,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 77,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 86,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3040,
              "eventEnd": null,
              "latitude": 39.96289,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16606,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 21,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16606,
                39.96289
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1684 Spring Garden St.",
              "addressZipCode": "19130",
              "bikesAvailable": 6,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3040,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "ed7a7ef4-f199-4d6a-b738-b1daea744060",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15426,
                39.95339
              ]
            },
            "properties": {
              "id": 3050,
              "name": "9th & Arch",
              "bikes": [],
              "notes": null,
              "kioskId": 3050,
              "eventEnd": null,
              "latitude": 39.95339,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15426,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15426,
                39.95339
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "813 Arch St.",
              "addressZipCode": "19107",
              "bikesAvailable": 0,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3050,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "30e82e78-3a4c-4769-a664-418385b80f4e",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.14472,
                39.95012
              ]
            },
            "properties": {
              "id": 3046,
              "name": "2nd & Market",
              "bikes": [
                {
                  "battery": 93,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 91,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 26,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3046,
              "eventEnd": null,
              "latitude": 39.95012,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.14472,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 26,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.14472,
                39.95012
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "215 Market St.",
              "addressZipCode": "19106",
              "bikesAvailable": 4,
              "docksAvailable": 21,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 22,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3046,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "5d2e1d0b-6a92-44db-bd07-c2bcb39190a1",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1425,
                39.94509
              ]
            },
            "properties": {
              "id": 3049,
              "name": "Foglietta Plaza",
              "bikes": [
                {
                  "battery": 82,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 59,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 46,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 58,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 79,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 92,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 56,
                  "dockNumber": 23,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 29,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3049,
              "eventEnd": null,
              "latitude": 39.94509,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1425,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 29,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1425,
                39.94509
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3 Dock St.",
              "addressZipCode": "19106",
              "bikesAvailable": 10,
              "docksAvailable": 18,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 10,
              "rewardDocksAvailable": 19,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 7
            },
            "kioskId": 3049,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "c2a8beb1-8aba-4e0e-986f-befcca73009c",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.14371,
                39.98003
              ]
            },
            "properties": {
              "id": 3017,
              "name": "6th & Berks",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 53,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 54,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 51,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3017,
              "eventEnd": null,
              "latitude": 39.98003,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.14371,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.14371,
                39.98003
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "527 W. Berks St.",
              "addressZipCode": "19122",
              "bikesAvailable": 2,
              "docksAvailable": 9,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 2,
              "rewardDocksAvailable": 9,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3017,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "f6c32035-e58b-46af-8575-65da4d0cd0ba",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1698,
                39.94633
              ]
            },
            "properties": {
              "id": 3063,
              "name": "17th & Pine",
              "bikes": [
                {
                  "battery": 76,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 39,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 36,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 58,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 23,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3063,
              "eventEnd": null,
              "latitude": 39.94633,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1698,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 25,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1698,
                39.94633
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "391  S. 17th St.",
              "addressZipCode": "19103",
              "bikesAvailable": 8,
              "docksAvailable": 17,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 8,
              "rewardDocksAvailable": 17,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3063,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "174086b7-a0cd-4d71-a685-b00476d601f9",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17036,
                39.95923
              ]
            },
            "properties": {
              "id": 3060,
              "name": "Free Library of Philadelphia - Central Library",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 65,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 31,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3060,
              "eventEnd": null,
              "latitude": 39.95923,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17036,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17036,
                39.95923
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "302 N. 19th St.",
              "addressZipCode": "19103",
              "bikesAvailable": 5,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3060,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "658cdf9b-fc58-4f6a-ad32-8ba7ae83dec6",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17001,
                39.96716
              ]
            },
            "properties": {
              "id": 3058,
              "name": "20th & Fairmount",
              "bikes": [
                {
                  "battery": 50,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 29,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 66,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 67,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 74,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3058,
              "eventEnd": null,
              "latitude": 39.96716,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17001,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17001,
                39.96716
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1940 Fairmount Ave.",
              "addressZipCode": "19130",
              "bikesAvailable": 7,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 7,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3058,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "7268ec3c-6b3d-4fff-a24e-6d0f8ac83c50",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17507,
                39.96744
              ]
            },
            "properties": {
              "id": 3051,
              "name": "23rd & Fairmount",
              "bikes": [
                {
                  "battery": 98,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 24,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 73,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 56,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 62,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 75,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 64,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 53,
                  "dockNumber": 23,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 48,
                  "dockNumber": 25,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 93,
                  "dockNumber": 27,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 29,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 73,
                  "dockNumber": 31,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 53,
                  "dockNumber": 34,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 36,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 55,
                  "dockNumber": 37,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3051,
              "eventEnd": null,
              "latitude": 39.96744,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17507,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 37,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17507,
                39.96744
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2237 Fairmount Ave.",
              "addressZipCode": "19130",
              "bikesAvailable": 19,
              "docksAvailable": 17,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 19,
              "rewardDocksAvailable": 17,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 17
            },
            "kioskId": 3051,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "3333fce4-0855-4c50-9aea-f1ebf61277a9",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.13983,
                39.96062
              ]
            },
            "properties": {
              "id": 3070,
              "name": "Spring Garden Station, MFL",
              "bikes": [
                {
                  "battery": 97,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 44,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 78,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 12,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3070,
              "eventEnd": null,
              "latitude": 39.96062,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.13983,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.13983,
                39.96062
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "117 Spring Garden St.",
              "addressZipCode": "19123",
              "bikesAvailable": 2,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 2,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3070,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "2074bda9-7156-4ae2-a839-a0911d001655",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16711,
                39.93549
              ]
            },
            "properties": {
              "id": 3068,
              "name": "Broad & Federal",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 80,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 96,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 20,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 99,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 83,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 43,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 41,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3068,
              "eventEnd": null,
              "latitude": 39.93549,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16711,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16711,
                39.93549
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1201 S. Broad St.",
              "addressZipCode": "19146",
              "bikesAvailable": 12,
              "docksAvailable": 6,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 12,
              "rewardDocksAvailable": 6,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 8
            },
            "kioskId": 3068,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "10f0a34e-c156-48b8-a253-c5fa1a2c507f",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15038,
                39.93704
              ]
            },
            "properties": {
              "id": 3069,
              "name": "4th & Christian",
              "bikes": [
                {
                  "battery": 19,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 82,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 68,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 53,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 69,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 58,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 83,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 20,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 23,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3069,
              "eventEnd": null,
              "latitude": 39.93704,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15038,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 23,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15038,
                39.93704
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "403 Christian St.",
              "addressZipCode": "19147",
              "bikesAvailable": 14,
              "docksAvailable": 9,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 14,
              "rewardDocksAvailable": 9,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 9
            },
            "kioskId": 3069,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "492f65b0-6b99-426d-a99f-062d2cda8e30",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1418,
                39.96984
              ]
            },
            "properties": {
              "id": 3088,
              "name": "3rd & Girard",
              "bikes": [
                {
                  "battery": 0,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 85,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 90,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 29,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 30,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 33,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3088,
              "eventEnd": null,
              "latitude": 39.96984,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1418,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 35,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1418,
                39.96984
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "317 W. Girard Ave. ",
              "addressZipCode": "19125",
              "bikesAvailable": 6,
              "docksAvailable": 29,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 29,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3088,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "469193d6-3dbe-4be8-95e2-c8d5a5bb940b",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17761,
                39.95425
              ]
            },
            "properties": {
              "id": 3061,
              "name": "23rd & Market",
              "bikes": [
                {
                  "battery": 95,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 23,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3061,
              "eventEnd": null,
              "latitude": 39.95425,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17761,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 25,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17761,
                39.95425
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2241 Market St.",
              "addressZipCode": "19103",
              "bikesAvailable": 4,
              "docksAvailable": 20,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 21,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3061,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "908d3e01-ae9e-4e6b-9abb-3eb47c99c224",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16121,
                39.96244
              ]
            },
            "properties": {
              "id": 3059,
              "name": "Spring Garden Station, BSL",
              "bikes": [
                {
                  "battery": 88,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 95,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 74,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 95,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 47,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 88,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 86,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 42,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3059,
              "eventEnd": null,
              "latitude": 39.96244,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16121,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 21,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16121,
                39.96244
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1415 Spring Garden St.",
              "addressZipCode": "19123",
              "bikesAvailable": 16,
              "docksAvailable": 4,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 16,
              "rewardDocksAvailable": 4,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 12
            },
            "kioskId": 3059,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "5d028de1-8445-4a2c-bb3c-8946861919b9",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17327,
                39.9384
              ]
            },
            "properties": {
              "id": 3064,
              "name": "18th & Washington, Chew Playground",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 92,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 67,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 45,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 79,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 85,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 48,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 43,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 56,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 5,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 96,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 47,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 22,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3064,
              "eventEnd": null,
              "latitude": 39.9384,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17327,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17327,
                39.9384
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1800 Washington Ave.",
              "addressZipCode": "19146",
              "bikesAvailable": 19,
              "docksAvailable": 2,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 19,
              "rewardDocksAvailable": 3,
              "classicBikesAvailable": 6,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 13
            },
            "kioskId": 3064,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "719a2975-27be-4d85-8561-437af676555c",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18788,
                39.96173
              ]
            },
            "properties": {
              "id": 3071,
              "name": "32nd & Baring, Drexel Park",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 38,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 17,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 45,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 74,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 15,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3071,
              "eventEnd": null,
              "latitude": 39.96173,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18788,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 13,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18788,
                39.96173
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3170 Baring St.",
              "addressZipCode": "19104",
              "bikesAvailable": 5,
              "docksAvailable": 6,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 7,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3071,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "34d902d6-ea24-4ae8-95ef-4bbde3e34d64",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.14541,
                39.93445
              ]
            },
            "properties": {
              "id": 3072,
              "name": "Front & Carpenter",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 77,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 38,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 84,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 58,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 89,
                  "dockNumber": 22,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 25,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3072,
              "eventEnd": null,
              "latitude": 39.93445,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.14541,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 25,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.14541,
                39.93445
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "925 S. Front St.",
              "addressZipCode": "19147",
              "bikesAvailable": 15,
              "docksAvailable": 10,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 15,
              "rewardDocksAvailable": 10,
              "classicBikesAvailable": 9,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 6
            },
            "kioskId": 3072,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "98d34b08-2e86-4365-9bc3-f8b383e0bb42",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17975,
                39.99119
              ]
            },
            "properties": {
              "id": 3096,
              "name": "29th & Dauphin",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 93,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 44,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 30,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 91,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 77,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 92,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 36,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3096,
              "eventEnd": null,
              "latitude": 39.99119,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17975,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 14,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17975,
                39.99119
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2301 N. 29th Street",
              "addressZipCode": "19132",
              "bikesAvailable": 8,
              "docksAvailable": 6,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 8,
              "rewardDocksAvailable": 6,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 7
            },
            "kioskId": 3096,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "bf082b47-fa3d-49ed-8f2f-f9ced9a9bf6c",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17348,
                39.94561
              ]
            },
            "properties": {
              "id": 3066,
              "name": "19th & Lombard",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3066,
              "eventEnd": null,
              "latitude": 39.94561,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17348,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 29,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17348,
                39.94561
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1910 Lombard St.",
              "addressZipCode": "19146",
              "bikesAvailable": 6,
              "docksAvailable": 23,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 23,
              "classicBikesAvailable": 6,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3066,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "e62d49cd-f3a7-48c2-aa7f-6c7c6eedd3e2",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15695,
                39.94732
              ]
            },
            "properties": {
              "id": 3052,
              "name": "9th & Locust",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 64,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 3,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 84,
                  "dockNumber": 24,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 90,
                  "dockNumber": 25,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3052,
              "eventEnd": null,
              "latitude": 39.94732,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15695,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 25,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15695,
                39.94732
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "923 Locust St.",
              "addressZipCode": "19107",
              "bikesAvailable": 9,
              "docksAvailable": 16,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 9,
              "rewardDocksAvailable": 16,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3052,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "f6cfdd85-e7f2-4495-8c4b-28176132059a",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18154,
                39.93231
              ]
            },
            "properties": {
              "id": 3053,
              "name": "Point Breeze & Tasker",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 27,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 49,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 60,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 40,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 83,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 80,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3053,
              "eventEnd": null,
              "latitude": 39.93231,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18154,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18154,
                39.93231
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1575 Point Breeze Ave.",
              "addressZipCode": "19146",
              "bikesAvailable": 11,
              "docksAvailable": 8,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 11,
              "rewardDocksAvailable": 8,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 6
            },
            "kioskId": 3053,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "50300981-05aa-4b20-87ba-a35b06049df0",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16351,
                39.97207
              ]
            },
            "properties": {
              "id": 3077,
              "name": "17th & Girard",
              "bikes": [
                {
                  "battery": 76,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 47,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 37,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3077,
              "eventEnd": null,
              "latitude": 39.97207,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16351,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16351,
                39.97207
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1617 Girard Ave.",
              "addressZipCode": "19130",
              "bikesAvailable": 4,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 3
            },
            "kioskId": 3077,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "21ca993e-a93b-4d36-b2e7-d5ddfb86cff6",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.20987,
                39.95511
              ]
            },
            "properties": {
              "id": 3074,
              "name": "44th & Walnut",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 43,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 90,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 34,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 76,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 24,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 57,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 77,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3074,
              "eventEnd": null,
              "latitude": 39.95511,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.20987,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.20987,
                39.95511
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "160 S. 44th St.",
              "addressZipCode": "19104",
              "bikesAvailable": 11,
              "docksAvailable": 3,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 11,
              "rewardDocksAvailable": 3,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 9
            },
            "kioskId": 3074,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "cdf7539f-2afe-497a-8c50-bb557537dcbf",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19551,
                39.94573
              ]
            },
            "properties": {
              "id": 3184,
              "name": "Health Sciences Drive",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3184,
              "eventEnd": null,
              "latitude": 39.94573,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19551,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19551,
                39.94573
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "Health Sciences Drive",
              "addressZipCode": "19104",
              "bikesAvailable": 1,
              "docksAvailable": 21,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 1,
              "rewardDocksAvailable": 21,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3184,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "1e0d15e5-b4d0-462e-926b-0cc771522c35",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15171,
                39.9707
              ]
            },
            "properties": {
              "id": 3065,
              "name": "Girard & Hutchinson",
              "bikes": [
                {
                  "battery": 46,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 82,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3065,
              "eventEnd": null,
              "latitude": 39.9707,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15171,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15171,
                39.9707
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "915 W. Girard Ave.",
              "addressZipCode": "19123",
              "bikesAvailable": 4,
              "docksAvailable": 11,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 11,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 3
            },
            "kioskId": 3065,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "6e70db48-0ba8-4349-b190-cf59472a9660",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17192,
                39.95355
              ]
            },
            "properties": {
              "id": 3078,
              "name": "19th & Market",
              "bikes": [
                {
                  "battery": 9,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3078,
              "eventEnd": null,
              "latitude": 39.95355,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17192,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17192,
                39.95355
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1901 Market St.",
              "addressZipCode": "19103",
              "bikesAvailable": 4,
              "docksAvailable": 14,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 14,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3078,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "fb7e64c1-855b-4654-8547-2058267bc0b1",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16691,
                39.94019
              ]
            },
            "properties": {
              "id": 3086,
              "name": "Broad & Christian",
              "bikes": [
                {
                  "battery": 87,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 47,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 91,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 46,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 48,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 56,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3086,
              "eventEnd": null,
              "latitude": 39.94019,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16691,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 21,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16691,
                39.94019
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1406 Christian Street",
              "addressZipCode": "19146",
              "bikesAvailable": 7,
              "docksAvailable": 14,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 7,
              "rewardDocksAvailable": 14,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 7
            },
            "kioskId": 3086,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "73b3192d-c2e9-49c7-ad19-a40ded864b37",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15094,
                39.93401
              ]
            },
            "properties": {
              "id": 3099,
              "name": "4th & Washington",
              "bikes": [
                {
                  "battery": 84,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 84,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 94,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 94,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 75,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 22,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 9,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 92,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3099,
              "eventEnd": null,
              "latitude": 39.93401,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15094,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15094,
                39.93401
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1110 S. 4th Street",
              "addressZipCode": "19147",
              "bikesAvailable": 16,
              "docksAvailable": 2,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 16,
              "rewardDocksAvailable": 3,
              "classicBikesAvailable": 8,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 8
            },
            "kioskId": 3099,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "dd134c74-28f1-4813-b070-0d3a665f63dc",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18866,
                39.98203
              ]
            },
            "properties": {
              "id": 3107,
              "name": "33rd & Reservoir",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 16,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 62,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3107,
              "eventEnd": null,
              "latitude": 39.98203,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18866,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18866,
                39.98203
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1626 N. 33rd Street",
              "addressZipCode": "19121",
              "bikesAvailable": 4,
              "docksAvailable": 14,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 4,
              "rewardDocksAvailable": 14,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3107,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "455a7004-23b5-48f7-b3fb-0cf53dd7290a",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16125,
                39.96718
              ]
            },
            "properties": {
              "id": 3075,
              "name": "Fairmount & Ridge",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 35,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3075,
              "eventEnd": null,
              "latitude": 39.96718,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16125,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 12,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16125,
                39.96718
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1413 Fairmount Ave.",
              "addressZipCode": "19130",
              "bikesAvailable": 3,
              "docksAvailable": 9,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 3,
              "rewardDocksAvailable": 9,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3075,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "886e63f5-c9da-441d-abc5-ff1fefe0916b",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15242,
                39.96143
              ]
            },
            "properties": {
              "id": 3073,
              "name": "9th & Spring Garden",
              "bikes": [
                {
                  "battery": 28,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 67,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 53,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 73,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 57,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3073,
              "eventEnd": null,
              "latitude": 39.96143,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15242,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 15,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15242,
                39.96143
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "802 Spring Garden St.",
              "addressZipCode": "19123",
              "bikesAvailable": 7,
              "docksAvailable": 8,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 7,
              "rewardDocksAvailable": 8,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3073,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "7c864687-e2ce-44c5-b9d9-f6ec1be84727",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18701,
                39.98837
              ]
            },
            "properties": {
              "id": 3093,
              "name": "33rd & Diamond",
              "bikes": [
                {
                  "battery": 0,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 87,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3093,
              "eventEnd": null,
              "latitude": 39.98837,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18701,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 16,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18701,
                39.98837
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2039 N. 33rd Street",
              "addressZipCode": "19121",
              "bikesAvailable": 3,
              "docksAvailable": 13,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 3,
              "rewardDocksAvailable": 13,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3093,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "cd5d7c51-6812-4340-96a9-b35dc0870bbe",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15103,
                39.92777
              ]
            },
            "properties": {
              "id": 3100,
              "name": "Moyamensing & Tasker",
              "bikes": [
                {
                  "battery": 69,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 38,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 45,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 96,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 37,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 95,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 91,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 66,
                  "dockNumber": 23,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 24,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 89,
                  "dockNumber": 29,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 52,
                  "dockNumber": 30,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 31,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 32,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 73,
                  "dockNumber": 33,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 93,
                  "dockNumber": 34,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 77,
                  "dockNumber": 35,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 36,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 38,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3100,
              "eventEnd": null,
              "latitude": 39.92777,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15103,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 38,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15103,
                39.92777
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1600 E. Moyamensing",
              "addressZipCode": "19148",
              "bikesAvailable": 23,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 23,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 7,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 16
            },
            "kioskId": 3100,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "0573c67d-4952-42e1-b837-31a9c95347bf",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17952,
                39.96759
              ]
            },
            "properties": {
              "id": 3102,
              "name": "Pennsylvania & Fairmount Perelman Building",
              "bikes": [
                {
                  "battery": 73,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 65,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 32,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 63,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 2,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 22,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 23,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 13,
                  "dockNumber": 24,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 87,
                  "dockNumber": 25,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 26,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3102,
              "eventEnd": null,
              "latitude": 39.96759,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17952,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 26,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17952,
                39.96759
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2601 Pennsylvania Avenue",
              "addressZipCode": "19130",
              "bikesAvailable": 21,
              "docksAvailable": 3,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 21,
              "rewardDocksAvailable": 3,
              "classicBikesAvailable": 13,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 8
            },
            "kioskId": 3102,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "3f067eee-385d-412c-825b-ad958b25ded6",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18012,
                39.93775
              ]
            },
            "properties": {
              "id": 3114,
              "name": "22nd & Federal",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 52,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3114,
              "eventEnd": null,
              "latitude": 39.93775,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18012,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18012,
                39.93775
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "22nd & Federal St.",
              "addressZipCode": "19146",
              "bikesAvailable": 6,
              "docksAvailable": 11,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 11,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3114,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "9b625609-0bad-49ca-8a25-513c3883cadd",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.13339,
                39.97888
              ]
            },
            "properties": {
              "id": 3097,
              "name": "Berks Station, MFL",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 85,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 60,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 25,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 53,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3097,
              "eventEnd": null,
              "latitude": 39.97888,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.13339,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.13339,
                39.97888
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1902 N. Front Street",
              "addressZipCode": "19122",
              "bikesAvailable": 8,
              "docksAvailable": 10,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 8,
              "rewardDocksAvailable": 10,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3097,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "a14cc9b4-1725-452a-99ac-510bd87eebb5",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19209,
                39.96664
              ]
            },
            "properties": {
              "id": 3104,
              "name": "34th & Mantua",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 55,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 66,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 71,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 38,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 75,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 53,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 40,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 94,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3104,
              "eventEnd": null,
              "latitude": 39.96664,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19209,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 13,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19209,
                39.96664
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "712 N. 34th Street",
              "addressZipCode": "19104",
              "bikesAvailable": 10,
              "docksAvailable": 1,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 12,
              "rewardDocksAvailable": 1,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 7
            },
            "kioskId": 3104,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "5e1aaac6-e73b-4925-879c-a6d8a2f2c6a3",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.13641,
                39.96175
              ]
            },
            "properties": {
              "id": 3110,
              "name": "Del. River Trail & Penn St.",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 38,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 38,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 33,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3110,
              "eventEnd": null,
              "latitude": 39.96175,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.13641,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.13641,
                39.96175
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "779 Delaware Ave",
              "addressZipCode": "19123",
              "bikesAvailable": 8,
              "docksAvailable": 11,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 8,
              "rewardDocksAvailable": 11,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3110,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "367dcaa4-16d6-42a0-9542-54b1359b03f8",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.22399,
                39.97841
              ]
            },
            "properties": {
              "id": 3117,
              "name": "ParkWest Town Center",
              "bikes": [
                {
                  "battery": 47,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 55,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 55,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 46,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3117,
              "eventEnd": null,
              "latitude": 39.97841,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.22399,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 14,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.22399,
                39.97841
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1575 N 52nd St.",
              "addressZipCode": "19131",
              "bikesAvailable": 5,
              "docksAvailable": 9,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 5,
              "rewardDocksAvailable": 9,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3117,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "f80587a0-4aa7-4197-b4b4-cf3ead5671a9",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17088,
                39.98004
              ]
            },
            "properties": {
              "id": 3123,
              "name": "22nd & Cecil B. Moore",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 73,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3123,
              "eventEnd": null,
              "latitude": 39.98004,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17088,
              "eventStart": null,
              "publicText": "Touchscreen temporarily unavailable. Please use your Indego key to check out a bike.",
              "totalDocks": 16,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17088,
                39.98004
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1637 N. 22nd Street",
              "addressZipCode": "19121",
              "bikesAvailable": 2,
              "docksAvailable": 13,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 2,
              "rewardDocksAvailable": 14,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3123,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "0865da4c-abf3-4052-ba15-35241153a172",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15955,
                39.94295
              ]
            },
            "properties": {
              "id": 3101,
              "name": "11th & South",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 75,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 64,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 20,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3101,
              "eventEnd": null,
              "latitude": 39.94295,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15955,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15955,
                39.94295
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1015 South Street",
              "addressZipCode": "19147",
              "bikesAvailable": 8,
              "docksAvailable": 8,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 8,
              "rewardDocksAvailable": 10,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 3
            },
            "kioskId": 3101,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "1f42e1df-d7d3-42a1-8a24-1fa048619201",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.21323,
                39.97779
              ]
            },
            "properties": {
              "id": 3111,
              "name": "Parkside & Belmont, Case Building",
              "bikes": [
                {
                  "battery": 34,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 69,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3111,
              "eventEnd": null,
              "latitude": 39.97779,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.21323,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 14,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.21323,
                39.97779
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "4601 Parkside Ave",
              "addressZipCode": "19104",
              "bikesAvailable": 2,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 2,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3111,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "3c4106ea-875b-4c38-bb77-8cd88188a6c9",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16757,
                39.97263
              ]
            },
            "properties": {
              "id": 3115,
              "name": "19th & Girard, PTTI",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 35,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3115,
              "eventEnd": null,
              "latitude": 39.97263,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16757,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16757,
                39.97263
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1901 W. Girard St.",
              "addressZipCode": "19130",
              "bikesAvailable": 1,
              "docksAvailable": 16,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 1,
              "rewardDocksAvailable": 16,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3115,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "45eb6a95-891f-4f32-8256-7076407a0b65",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.21323,
                39.95866
              ]
            },
            "properties": {
              "id": 3118,
              "name": "46th Street Station, MFL",
              "bikes": [
                {
                  "battery": 85,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 75,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 94,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 50,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 87,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3118,
              "eventEnd": null,
              "latitude": 39.95866,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.21323,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 20,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.21323,
                39.95866
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "4628 Market Street",
              "addressZipCode": "19139",
              "bikesAvailable": 6,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 3
            },
            "kioskId": 3118,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "af9511a6-4248-4f1c-a2b8-371aef5cca01",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.20286,
                39.94993
              ]
            },
            "properties": {
              "id": 3152,
              "name": "40th & Baltimore, Trolley Portal",
              "bikes": [
                {
                  "battery": 14,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3152,
              "eventEnd": null,
              "latitude": 39.94993,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.20286,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.20286,
                39.94993
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3960 Baltimore Ave,",
              "addressZipCode": "19104",
              "bikesAvailable": 1,
              "docksAvailable": 16,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 1,
              "rewardDocksAvailable": 16,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3152,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "05791e0d-6d93-49c7-bf61-b5b73826c5e1",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18637,
                39.99179
              ]
            },
            "properties": {
              "id": 3106,
              "name": "33rd & Dauphin",
              "bikes": [
                {
                  "battery": 79,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 65,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 59,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 82,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3106,
              "eventEnd": null,
              "latitude": 39.99179,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18637,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18637,
                39.99179
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2300 N. 33rd Street",
              "addressZipCode": "19132",
              "bikesAvailable": 5,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 5,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3106,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "febf5fa2-6530-43b9-9ebe-fbb0f9f5176d",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.21825,
                39.95373
              ]
            },
            "properties": {
              "id": 3112,
              "name": "48th & Spruce",
              "bikes": [
                {
                  "battery": 100,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 70,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 28,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 71,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3112,
              "eventEnd": null,
              "latitude": 39.95373,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.21825,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.21825,
                39.95373
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "310 S. 48th Street",
              "addressZipCode": "19139",
              "bikesAvailable": 10,
              "docksAvailable": 8,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 10,
              "rewardDocksAvailable": 8,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 9
            },
            "kioskId": 3112,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "aa2e5b94-fed1-4cb2-bbfa-4e9f0b2bb991",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.20799,
                39.96674
              ]
            },
            "properties": {
              "id": 3119,
              "name": "42nd & Lancaster",
              "bikes": [
                {
                  "battery": 0,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 31,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 64,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 18,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3119,
              "eventEnd": null,
              "latitude": 39.96674,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.20799,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.20799,
                39.96674
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "4209 Lancaster Avenue",
              "addressZipCode": "19104",
              "bikesAvailable": 5,
              "docksAvailable": 11,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 5,
              "rewardDocksAvailable": 11,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 3
            },
            "kioskId": 3119,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "5b97dc9b-a5a3-42af-ac17-7a4e541b9d3d",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17021,
                39.92884
              ]
            },
            "properties": {
              "id": 3150,
              "name": "15th & Castle, DiSilvestro Playground",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 32,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 90,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 63,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 49,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3150,
              "eventEnd": null,
              "latitude": 39.92884,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17021,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17021,
                39.92884
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1487 Castle Street",
              "addressZipCode": "19145",
              "bikesAvailable": 6,
              "docksAvailable": 11,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 11,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3150,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "55aed6f2-8992-4750-ba0f-231e098fc0a3",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19324,
                39.95048
              ]
            },
            "properties": {
              "id": 3208,
              "name": "34th & Spruce",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3208,
              "eventEnd": null,
              "latitude": 39.95048,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19324,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 28,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19324,
                39.95048
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3566 Spruce St",
              "addressZipCode": "19104",
              "bikesAvailable": 0,
              "docksAvailable": 27,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 27,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3208,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "b1c42cd7-c2c8-4a59-9b1a-a62993d0a8d7",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19781,
                39.97472
              ]
            },
            "properties": {
              "id": 3113,
              "name": "Philadelphia Zoo",
              "bikes": [
                {
                  "battery": 37,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 7,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 20,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 31,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 32,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3113,
              "eventEnd": null,
              "latitude": 39.97472,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19781,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 12,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19781,
                39.97472
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1046 N. 34th Street",
              "addressZipCode": "19104",
              "bikesAvailable": 7,
              "docksAvailable": 5,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 7,
              "rewardDocksAvailable": 5,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3113,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "2e828fc2-b43d-486b-9ccc-f469e193347c",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17198,
                39.96006
              ]
            },
            "properties": {
              "id": 3116,
              "name": "Barnes Foundation",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 67,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 35,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 75,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 6,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3116,
              "eventEnd": null,
              "latitude": 39.96006,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17198,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 21,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17198,
                39.96006
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2025 Benjamin Franklin Pkwy",
              "addressZipCode": "19122",
              "bikesAvailable": 7,
              "docksAvailable": 13,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 7,
              "rewardDocksAvailable": 13,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3116,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "4f9145ce-07fe-47cf-8d07-a581007dbce5",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.13956,
                39.95367
              ]
            },
            "properties": {
              "id": 3124,
              "name": "Race Street Pier",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 75,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 50,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 39,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3124,
              "eventEnd": null,
              "latitude": 39.95367,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.13956,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.13956,
                39.95367
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "N Christopher Columbus Blvd (approx.)",
              "addressZipCode": "19106",
              "bikesAvailable": 12,
              "docksAvailable": 5,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 12,
              "rewardDocksAvailable": 5,
              "classicBikesAvailable": 6,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 6
            },
            "kioskId": 3124,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "be097de9-d021-4a10-8ba0-2afb21accaf0",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17407,
                39.95381
              ]
            },
            "properties": {
              "id": 3156,
              "name": "20th & Market",
              "bikes": [
                {
                  "battery": 2,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3156,
              "eventEnd": null,
              "latitude": 39.95381,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17407,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17407,
                39.95381
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2005 market street",
              "addressZipCode": "19103",
              "bikesAvailable": 0,
              "docksAvailable": 21,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 21,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3156,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "6059d043-4d6f-41ae-b9d0-6c65baeef56b",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18475,
                39.94595
              ]
            },
            "properties": {
              "id": 3162,
              "name": "27th & South",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 34,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3162,
              "eventEnd": null,
              "latitude": 39.94595,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18475,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 34,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18475,
                39.94595
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "630 Schuylkill Ave",
              "addressZipCode": "19146",
              "bikesAvailable": 1,
              "docksAvailable": 33,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 1,
              "rewardDocksAvailable": 33,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3162,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "3664c825-c0cb-4c9f-bdca-3b373a1b0559",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16735,
                39.94391
              ]
            },
            "properties": {
              "id": 3125,
              "name": "15th & South",
              "bikes": [
                {
                  "battery": 3,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 60,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 57,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 72,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3125,
              "eventEnd": null,
              "latitude": 39.94391,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16735,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 16,
              "addressCity": "Philadelphia ",
              "coordinates": [
                -75.16735,
                39.94391
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1505 South St. ",
              "addressZipCode": "19146",
              "bikesAvailable": 9,
              "docksAvailable": 6,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 9,
              "rewardDocksAvailable": 7,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3125,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "d78ae830-f8d2-40ff-a806-10b9b1334e72",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16904,
                39.92552
              ]
            },
            "properties": {
              "id": 3158,
              "name": "Broad & Passyunk ",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 1,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3158,
              "eventEnd": null,
              "latitude": 39.92552,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16904,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 16,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16904,
                39.92552
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1384 McKean Street",
              "addressZipCode": "19148",
              "bikesAvailable": 5,
              "docksAvailable": 11,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 5,
              "rewardDocksAvailable": 11,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3158,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "35c0d7f9-e388-4bd8-88da-de2c94898163",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15954,
                39.92545
              ]
            },
            "properties": {
              "id": 3157,
              "name": "8th & Mifflin, Bok Building",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 68,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 59,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 77,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 85,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 2,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 60,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3157,
              "eventEnd": null,
              "latitude": 39.92545,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15954,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15954,
                39.92545
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "808 Mifflin St.",
              "addressZipCode": "19148",
              "bikesAvailable": 16,
              "docksAvailable": 1,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 16,
              "rewardDocksAvailable": 1,
              "classicBikesAvailable": 10,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 6
            },
            "kioskId": 3157,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "1fb2d8a2-d7cf-4509-862c-07eeacb73f54",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17394,
                39.95134
              ]
            },
            "properties": {
              "id": 3168,
              "name": "20th & Sansom",
              "bikes": [
                {
                  "battery": 0,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 14,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 52,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 19,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 42,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3168,
              "eventEnd": null,
              "latitude": 39.95134,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17394,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 23,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17394,
                39.95134
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "129 S. 20th St.",
              "addressZipCode": "19122",
              "bikesAvailable": 6,
              "docksAvailable": 14,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 14,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 3
            },
            "kioskId": 3168,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "430e2aab-5cfc-4b08-8a8f-52137e89f703",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.192,
                39.95441
              ]
            },
            "properties": {
              "id": 3207,
              "name": "34th & Chestnut",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 4,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3207,
              "eventEnd": null,
              "latitude": 39.95441,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.192,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.192,
                39.95441
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3400 Chestnut St",
              "addressZipCode": "19104",
              "bikesAvailable": 3,
              "docksAvailable": 19,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 3,
              "rewardDocksAvailable": 19,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3207,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "8c090c4d-8eaa-46b8-8a87-94727b011ff8",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.12994,
                39.97216
              ]
            },
            "properties": {
              "id": 3153,
              "name": "Thompson & Palmer, Adaire School",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 57,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3153,
              "eventEnd": null,
              "latitude": 39.97216,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.12994,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 11,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.12994,
                39.97216
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "448 East Thompson Street",
              "addressZipCode": "19125",
              "bikesAvailable": 2,
              "docksAvailable": 8,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 2,
              "rewardDocksAvailable": 9,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3153,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "4f11ad90-7f7d-44a5-9587-e79677f80901",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18091,
                39.95486
              ]
            },
            "properties": {
              "id": 3161,
              "name": "30th Street Station East",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 22,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3161,
              "eventEnd": null,
              "latitude": 39.95486,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18091,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 23,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18091,
                39.95486
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "Market & Schuylkill Ave",
              "addressZipCode": "19104",
              "bikesAvailable": 2,
              "docksAvailable": 20,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 2,
              "rewardDocksAvailable": 20,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3161,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "7f58baee-7f41-4d55-902a-52671606315e",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18097,
                39.94974
              ]
            },
            "properties": {
              "id": 3163,
              "name": "25th & Locust",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 84,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 22,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3163,
              "eventEnd": null,
              "latitude": 39.94974,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18097,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18097,
                39.94974
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "229 S. 25th Street ",
              "addressZipCode": "19122",
              "bikesAvailable": 10,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 10,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 9,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3163,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "6ba81348-6b1a-4622-b08e-5cb0f3e6e400",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.13445,
                39.97195
              ]
            },
            "properties": {
              "id": 3166,
              "name": "Frankford & Belgrade",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 3,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 93,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 47,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 96,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 99,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 59,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 22,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3166,
              "eventEnd": null,
              "latitude": 39.97195,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.13445,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.13445,
                39.97195
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1400 Frankford Ave",
              "addressZipCode": "19122",
              "bikesAvailable": 12,
              "docksAvailable": 10,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 12,
              "rewardDocksAvailable": 10,
              "classicBikesAvailable": 6,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 6
            },
            "kioskId": 3166,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "b99d643a-04a6-47f8-b68e-37f10ef72d89",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17033,
                39.92083
              ]
            },
            "properties": {
              "id": 3197,
              "name": "Broad & Ritner",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 45,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 40,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 22,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 23,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3197,
              "eventEnd": null,
              "latitude": 39.92083,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17033,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 23,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17033,
                39.92083
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2301 S Broad St.",
              "addressZipCode": "19148",
              "bikesAvailable": 7,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 7,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3197,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "2f1f6f98-00ab-4e4a-afb9-4e6951feec55",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15442,
                39.94018
              ]
            },
            "properties": {
              "id": 3155,
              "name": "7th & Fitzwater",
              "bikes": [
                {
                  "battery": 66,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 48,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 28,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 70,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3155,
              "eventEnd": null,
              "latitude": 39.94018,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15442,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15442,
                39.94018
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "736 S. 7th St.",
              "addressZipCode": "19147",
              "bikesAvailable": 5,
              "docksAvailable": 11,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 5,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3155,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "22faa5f9-ff96-4ddc-bc2b-d7849b0f120b",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19962,
                39.95121
              ]
            },
            "properties": {
              "id": 3159,
              "name": "38th & Spruce",
              "bikes": [
                {
                  "battery": 86,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 75,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 20,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 81,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 55,
                  "dockNumber": 23,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3159,
              "eventEnd": null,
              "latitude": 39.95121,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19962,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 23,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19962,
                39.95121
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3804 spruce street",
              "addressZipCode": "19104",
              "bikesAvailable": 3,
              "docksAvailable": 17,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 3,
              "rewardDocksAvailable": 17,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 3
            },
            "kioskId": 3159,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "04386b48-56df-4957-82c7-2ea8414c99fe",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1782,
                39.95819
              ]
            },
            "properties": {
              "id": 3165,
              "name": "24th & Race SRT",
              "bikes": [
                {
                  "battery": 36,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 87,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 23,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 57,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3165,
              "eventEnd": null,
              "latitude": 39.95819,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1782,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1782,
                39.95819
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2317 Race St",
              "addressZipCode": "19103",
              "bikesAvailable": 8,
              "docksAvailable": 14,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 8,
              "rewardDocksAvailable": 14,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3165,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "3e4bb4cf-d454-4b0a-b0bd-f003624c370c",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.14263,
                39.95382
              ]
            },
            "properties": {
              "id": 3169,
              "name": "2nd & Race",
              "bikes": [
                {
                  "battery": 0,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 95,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 96,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 87,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 79,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 68,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 96,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 75,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 93,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3169,
              "eventEnd": null,
              "latitude": 39.95382,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.14263,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.14263,
                39.95382
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "151 Race St",
              "addressZipCode": "19106",
              "bikesAvailable": 13,
              "docksAvailable": 4,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 13,
              "rewardDocksAvailable": 4,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 10
            },
            "kioskId": 3169,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "68423232-c0ad-4556-a3c8-5925ad47a50d",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17227,
                39.94077
              ]
            },
            "properties": {
              "id": 3203,
              "name": "18th & Christian",
              "bikes": [
                {
                  "battery": 65,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 88,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 66,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 74,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 93,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 65,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 96,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 93,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 60,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 10,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3203,
              "eventEnd": null,
              "latitude": 39.94077,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17227,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 20,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17227,
                39.94077
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1798 Christian St",
              "addressZipCode": "19146",
              "bikesAvailable": 12,
              "docksAvailable": 7,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 13,
              "rewardDocksAvailable": 7,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 9
            },
            "kioskId": 3203,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "70273f53-5ca0-4bbd-836b-4ffce3474ea3",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15821,
                39.95924
              ]
            },
            "properties": {
              "id": 3154,
              "name": "12th & Callowhill",
              "bikes": [
                {
                  "battery": 58,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 10,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 68,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3154,
              "eventEnd": null,
              "latitude": 39.95924,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15821,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 16,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15821,
                39.95924
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "403 N. 12th Street",
              "addressZipCode": "19123",
              "bikesAvailable": 8,
              "docksAvailable": 8,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 8,
              "rewardDocksAvailable": 8,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 3
            },
            "kioskId": 3154,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "d4aee265-d70d-4e9b-992d-4a2c835adc9b",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.19862,
                39.95662
              ]
            },
            "properties": {
              "id": 3160,
              "name": "38th & Market",
              "bikes": [
                {
                  "battery": 94,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 52,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 9,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 100,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 94,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 69,
                  "dockNumber": 19,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 68,
                  "dockNumber": 21,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 57,
                  "dockNumber": 31,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 68,
                  "dockNumber": 35,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3160,
              "eventEnd": null,
              "latitude": 39.95662,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.19862,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 40,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.19862,
                39.95662
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3810 Market St.",
              "addressZipCode": "19104",
              "bikesAvailable": 9,
              "docksAvailable": 29,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 9,
              "rewardDocksAvailable": 30,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 9
            },
            "kioskId": 3160,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "599e642e-0144-45ad-be73-4baeb95e4a31",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17679,
                39.88994
              ]
            },
            "properties": {
              "id": 3183,
              "name": "15th & Kitty Hawk",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 1,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 30,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 14,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3183,
              "eventEnd": null,
              "latitude": 39.88994,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17679,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 20,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17679,
                39.88994
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "S. 15th & Kitty Hawk Ave",
              "addressZipCode": "19112",
              "bikesAvailable": 3,
              "docksAvailable": 16,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 3,
              "rewardDocksAvailable": 17,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3183,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "df5cbf57-af9d-4a89-8b79-48895d36a1d6",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1734,
                39.90471
              ]
            },
            "properties": {
              "id": 3188,
              "name": "Broad & Pattison, BSL",
              "bikes": [
                {
                  "battery": 19,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 52,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3188,
              "eventEnd": null,
              "latitude": 39.90471,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1734,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 30,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1734,
                39.90471
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "3701 Broad Street",
              "addressZipCode": "19148",
              "bikesAvailable": 10,
              "docksAvailable": 20,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 10,
              "rewardDocksAvailable": 20,
              "classicBikesAvailable": 8,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3188,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "c615b209-a44c-4cd7-98f2-4d0902bff9ad",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16582,
                39.96437
              ]
            },
            "properties": {
              "id": 3204,
              "name": "17th & Green",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 85,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 18,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 56,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 30,
                  "dockNumber": 22,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3204,
              "eventEnd": null,
              "latitude": 39.96437,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16582,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16582,
                39.96437
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1698 Green St",
              "addressZipCode": "19130",
              "bikesAvailable": 7,
              "docksAvailable": 15,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 7,
              "rewardDocksAvailable": 15,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 4
            },
            "kioskId": 3204,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "52343930-2f27-4194-ba49-b92cceabfa55",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16515,
                39.92814
              ]
            },
            "properties": {
              "id": 3164,
              "name": "12th & Passyunk",
              "bikes": [
                {
                  "battery": 90,
                  "dockNumber": 2,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 5,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 76,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 18,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3164,
              "eventEnd": null,
              "latitude": 39.92814,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16515,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16515,
                39.92814
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1724 S. 12th St",
              "addressZipCode": "19122",
              "bikesAvailable": 9,
              "docksAvailable": 9,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 9,
              "rewardDocksAvailable": 9,
              "classicBikesAvailable": 7,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3164,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "ccd5bcb8-414a-46fe-8371-535eccae55f6",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17477,
                39.98717
              ]
            },
            "properties": {
              "id": 3196,
              "name": "25th & Diamond",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 4,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 45,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 92,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 14,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3196,
              "eventEnd": null,
              "latitude": 39.98717,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17477,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17477,
                39.98717
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2501 Diamond Street",
              "addressZipCode": "19121",
              "bikesAvailable": 6,
              "docksAvailable": 10,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 10,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3196,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "98d3ce20-94e9-44fa-97e8-51abe739f3d8",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18134,
                39.94426
              ]
            },
            "properties": {
              "id": 3170,
              "name": "Grays Ferry & Pemberton",
              "bikes": [
                {
                  "battery": 94,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 70,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 71,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 59,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": 43,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 46,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 49,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 1,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 95,
                  "dockNumber": 15,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3170,
              "eventEnd": null,
              "latitude": 39.94426,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18134,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 16,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18134,
                39.94426
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2332 Grays Ferry Ave",
              "addressZipCode": "19146",
              "bikesAvailable": 13,
              "docksAvailable": 2,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 14,
              "rewardDocksAvailable": 2,
              "classicBikesAvailable": 4,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 9
            },
            "kioskId": 3170,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "0d116c78-81e7-4ada-a6a0-f08633db53ae",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.17232,
                39.95725
              ]
            },
            "properties": {
              "id": 3187,
              "name": "20th & Race",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 16,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3187,
              "eventEnd": null,
              "latitude": 39.95725,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.17232,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 19,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.17232,
                39.95725
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "20th & Race",
              "addressZipCode": "19103",
              "bikesAvailable": 2,
              "docksAvailable": 17,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 2,
              "rewardDocksAvailable": 17,
              "classicBikesAvailable": 2,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3187,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "3683fccc-cc36-4621-af09-6358c88a798d",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1706,
                39.97172
              ]
            },
            "properties": {
              "id": 3211,
              "name": "Corinthian & Poplar",
              "bikes": [
                {
                  "battery": 74,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 84,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 78,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 90,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 6,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 38,
                  "dockNumber": 7,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 88,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 69,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 71,
                  "dockNumber": 22,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3211,
              "eventEnd": null,
              "latitude": 39.97172,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1706,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1706,
                39.97172
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "900 Corinthian Ave",
              "addressZipCode": "19130",
              "bikesAvailable": 11,
              "docksAvailable": 11,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 11,
              "rewardDocksAvailable": 11,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 8
            },
            "kioskId": 3211,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "c3f2b77e-f8b8-4aa8-bdf8-46997153197f",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.1662,
                39.95523
              ]
            },
            "properties": {
              "id": 3201,
              "name": "16th & Arch",
              "bikes": [
                {
                  "battery": 20,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": 90,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 95,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 0,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 19,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 63,
                  "dockNumber": 20,
                  "isElectric": true,
                  "isAvailable": false
                }
              ],
              "notes": null,
              "kioskId": 3201,
              "eventEnd": null,
              "latitude": 39.95523,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.1662,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 20,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.1662,
                39.95523
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "107 16th Street",
              "addressZipCode": "19102",
              "bikesAvailable": 5,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 5,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 2
            },
            "kioskId": 3201,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "352104a1-4de8-495d-87b6-26fc42101232",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16846,
                39.97583
              ]
            },
            "properties": {
              "id": 3200,
              "name": "Ridge & Master",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 59,
                  "dockNumber": 8,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 81,
                  "dockNumber": 11,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 84,
                  "dockNumber": 13,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 34,
                  "dockNumber": 14,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 85,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 34,
                  "dockNumber": 17,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3200,
              "eventEnd": null,
              "latitude": 39.97583,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16846,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 17,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16846,
                39.97583
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2001 Ridge Ave.",
              "addressZipCode": "19121",
              "bikesAvailable": 10,
              "docksAvailable": 7,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 10,
              "rewardDocksAvailable": 7,
              "classicBikesAvailable": 3,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 7
            },
            "kioskId": 3200,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "49fe779e-c1ef-467a-9d57-14c518ad9a0c",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15668,
                39.98492
              ]
            },
            "properties": {
              "id": 3210,
              "name": "Broad & Diamond",
              "bikes": [
                {
                  "battery": 41,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 81,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 75,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 76,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 59,
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3210,
              "eventEnd": null,
              "latitude": 39.98492,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15668,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 18,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15668,
                39.98492
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "2108 N Broad St",
              "addressZipCode": "19121",
              "bikesAvailable": 6,
              "docksAvailable": 12,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 6,
              "rewardDocksAvailable": 12,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3210,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "2f75192c-ef0b-42af-8038-0e811e8bc255",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.15888,
                39.95169
              ]
            },
            "properties": {
              "id": 3185,
              "name": "11th & Market ",
              "bikes": [],
              "notes": null,
              "kioskId": 3185,
              "eventEnd": null,
              "latitude": 39.95169,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.15888,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 21,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.15888,
                39.95169
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "11th & Market",
              "addressZipCode": "19107",
              "bikesAvailable": 0,
              "docksAvailable": 21,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 0,
              "rewardDocksAvailable": 21,
              "classicBikesAvailable": 0,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 0
            },
            "kioskId": 3185,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "a8a4052b-bc1a-4cc7-9af9-d0bf9f0d44c2",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.16783,
                39.95405
              ]
            },
            "properties": {
              "id": 3205,
              "name": "17th & JFK",
              "bikes": [
                {
                  "battery": 88,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 66,
                  "dockNumber": 4,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 74,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 9,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 10,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 15,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 22,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3205,
              "eventEnd": null,
              "latitude": 39.95405,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.16783,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 22,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.16783,
                39.95405
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "1617 John F. Kennedy Blvd",
              "addressZipCode": "19103",
              "bikesAvailable": 8,
              "docksAvailable": 14,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 8,
              "rewardDocksAvailable": 14,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 3
            },
            "kioskId": 3205,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "83141866-ffe9-47a9-8803-7a97e9aaf2a1",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.21278,
                39.949
              ]
            },
            "properties": {
              "id": 3209,
              "name": "45th & Baltimore",
              "bikes": [
                {
                  "battery": 93,
                  "dockNumber": 1,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 2,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 98,
                  "dockNumber": 3,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 91,
                  "dockNumber": 5,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": 26,
                  "dockNumber": 6,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 7,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 8,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 28,
                  "dockNumber": 10,
                  "isElectric": true,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": null,
                  "dockNumber": 12,
                  "isElectric": false,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3209,
              "eventEnd": null,
              "latitude": 39.949,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.21278,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 14,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.21278,
                39.949
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "980 45th St",
              "addressZipCode": "19104",
              "bikesAvailable": 10,
              "docksAvailable": 4,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 10,
              "rewardDocksAvailable": 4,
              "classicBikesAvailable": 5,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 5
            },
            "kioskId": 3209,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          },
          {
            "id": "9b8a2f36-f03b-4897-9a73-fa96b9a2a397",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -75.18177,
                39.96383
              ]
            },
            "properties": {
              "id": 3212,
              "name": "Schuylkill Banks Pergola",
              "bikes": [
                {
                  "battery": null,
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": false
                },
                {
                  "battery": null,
                  "dockNumber": 11,
                  "isElectric": false,
                  "isAvailable": true
                },
                {
                  "battery": 92,
                  "dockNumber": 12,
                  "isElectric": true,
                  "isAvailable": true
                }
              ],
              "notes": null,
              "kioskId": 3212,
              "eventEnd": null,
              "latitude": 39.96383,
              "openTime": null,
              "timeZone": null,
              "closeTime": null,
              "isVirtual": false,
              "kioskType": 1,
              "longitude": -75.18177,
              "eventStart": null,
              "publicText": "",
              "totalDocks": 32,
              "addressCity": "Philadelphia",
              "coordinates": [
                -75.18177,
                39.96383
              ],
              "kioskStatus": "FullService",
              "addressState": "PA",
              "isEventBased": false,
              "addressStreet": "Schuylkill River Trail",
              "addressZipCode": "19130",
              "bikesAvailable": 2,
              "docksAvailable": 29,
              "trikesAvailable": 0,
              "kioskPublicStatus": "Active",
              "smartBikesAvailable": 0,
              "rewardBikesAvailable": 2,
              "rewardDocksAvailable": 30,
              "classicBikesAvailable": 1,
              "kioskConnectionStatus": "Active",
              "electricBikesAvailable": 1
            },
            "kioskId": 3212,
            "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
          }
        ],
        "weather": {
          "coord": {
            "lon": -75.1638,
            "lat": 39.9523
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "base": "stations",
          "main": {
            "temp": 295.23,
            "feels_like": 295.82,
            "temp_min": 293.92,
            "temp_max": 296.09,
            "pressure": 1012,
            "humidity": 89
          },
          "visibility": 10000,
          "wind": {
            "speed": 3.6,
            "deg": 210
          },
          "clouds": {
            "all": 100
          },
          "dt": 1692957758,
          "sys": {
            "type": 2,
            "id": 2037403,
            "country": "US",
            "sunrise": 1692958907,
            "sunset": 1693007055
          },
          "timezone": -14400,
          "id": 4560349,
          "name": "Philadelphia",
          "cod": 200
        }
      }


      const result = await controller.getStationsSnapshot('2019-09-01T10:00:00');
      expect(result).toEqual(expectedSnapshot);
    });

    it('should throw NotFoundException if snapshot data not found', async () => {

      await expect(controller.getStationsSnapshot('2019-09-01T10:00:00')).rejects.toThrowError(
        'Snapshot data not found.',
      );
    });
  });

  describe('getStationSnapshot', () => {
    it('should return snapshot data for a specific station', async () => {
      const expectedSnapshot = {
        "at": "2023-08-25T08:20:27.523Z",
        "station": {
          "id": "f005d428-c68d-4da5-b152-12697bbd3e6b",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -75.14403,
              39.94733
            ]
          },
          "properties": {
            "id": 3005,
            "name": "Welcome Park, NPS",
            "bikes": [
              {
                "battery": 35,
                "dockNumber": 1,
                "isElectric": true,
                "isAvailable": true
              },
              {
                "battery": 0,
                "dockNumber": 2,
                "isElectric": true,
                "isAvailable": true
              },
              {
                "battery": 54,
                "dockNumber": 4,
                "isElectric": true,
                "isAvailable": true
              },
              {
                "battery": 0,
                "dockNumber": 6,
                "isElectric": true,
                "isAvailable": true
              },
              {
                "battery": null,
                "dockNumber": 9,
                "isElectric": false,
                "isAvailable": true
              },
              {
                "battery": 26,
                "dockNumber": 10,
                "isElectric": true,
                "isAvailable": true
              },
              {
                "battery": null,
                "dockNumber": 12,
                "isElectric": false,
                "isAvailable": false
              },
              {
                "battery": null,
                "dockNumber": 13,
                "isElectric": false,
                "isAvailable": true
              }
            ],
            "notes": null,
            "kioskId": 3005,
            "eventEnd": null,
            "latitude": 39.94733,
            "openTime": null,
            "timeZone": null,
            "closeTime": null,
            "isVirtual": false,
            "kioskType": 1,
            "longitude": -75.14403,
            "eventStart": null,
            "publicText": "",
            "totalDocks": 13,
            "addressCity": "Philadelphia",
            "coordinates": [
              -75.14403,
              39.94733
            ],
            "kioskStatus": "FullService",
            "addressState": "PA",
            "isEventBased": false,
            "addressStreet": "191 S. 2nd St.",
            "addressZipCode": "19106",
            "bikesAvailable": 7,
            "docksAvailable": 5,
            "trikesAvailable": 0,
            "kioskPublicStatus": "Active",
            "smartBikesAvailable": 0,
            "rewardBikesAvailable": 7,
            "rewardDocksAvailable": 5,
            "classicBikesAvailable": 2,
            "kioskConnectionStatus": "Active",
            "electricBikesAvailable": 5
          },
          "kioskId": 3005,
          "indegoDataId": "dfb55cc7-2222-489d-9439-7c2086b998e5"
        },
        "weather": {
          "coord": {
            "lon": -75.1638,
            "lat": 39.9523
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "base": "stations",
          "main": {
            "temp": 295.31,
            "feels_like": 295.93,
            "temp_min": 293.58,
            "temp_max": 296.29,
            "pressure": 1012,
            "humidity": 90
          },
          "visibility": 10000,
          "wind": {
            "speed": 3.6,
            "deg": 210
          },
          "clouds": {
            "all": 100
          },
          "dt": 1692958664,
          "sys": {
            "type": 2,
            "id": 2037403,
            "country": "US",
            "sunrise": 1692958907,
            "sunset": 1693007055
          },
          "timezone": -14400,
          "id": 4560349,
          "name": "Philadelphia",
          "cod": 200
        }
      };

      const result = await controller.getStationSnapshot('3005', '2019-09-01T10:00:00');
      expect(result).toEqual(expectedSnapshot);
    });

    it('should throw NotFoundException if snapshot data not found', async () => {

      await expect(controller.getStationSnapshot('KIOSKID', '2019-09-01T10:00:00')).rejects.toThrowError(
        'Snapshot data not found.',
      );
    });
  });
});