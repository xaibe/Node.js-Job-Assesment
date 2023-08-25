import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from '../prisma/prisma.service';

const apiKey=process.env.OPEN_WEATHER_MAP_API_KEY;
@Injectable()
export class IndegoService {
  constructor(private readonly prisma: PrismaService) {}

  async fetchAndStoreIndegoData() {
    try {
      console.log("started Fetching data");
      
      const response = await axios.get('https://www.rideindego.com/stations/json/');
      const indegoData = response.data;
      let stations= indegoData.features;
      // Store the data using Prisma
    const data= await this.prisma.indegoData.create({
        data:{timestamp:indegoData.last_updated}
      })
      
      stations.forEach(async station => {
        await this.prisma.station.create({
          data:{
            indegoDataId:data.id,
          geometry:station.geometry,
          kioskId:station.properties.id,
        properties:station.properties,}
        })
      });
      
      console.log( 'Indego data fetched and stored successfully.');
      

    } catch (error) {
      throw new Error('Error fetching and storing Indego data.');
    }
  }

  async getStationsSnapshot(at: Date) {
    // Fetch snapshot data from Prisma
    const snapshotData = await this.prisma.indegoData.findFirst({
      where: {
        timestamp: {
          gte: at,
        },
      },
      orderBy: {
        timestamp: 'asc',
      },
      include:{
        stations:true,
      }
    });

    if (!snapshotData) {
      return null;
    }

    // Fetch weather data using Open Weather Map API
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=${apiKey}`
    );

    return {
      at: snapshotData.timestamp.toISOString(),
      stations: snapshotData.stations,
      weather: weatherResponse.data,
    };
  }

  async getStationSnapshot(kioskId:number, at: Date) {
    // Fetch snapshot data from Prisma
    const snapshotData = await this.prisma.indegoData.findFirst({
      where: {
        timestamp: {
          gte: at,
        },
        stations: {
          some: {
            kioskId: kioskId,
          },
        },
      },
      orderBy: {
        timestamp: 'asc',
      },
      include:{
        stations:true,
      }
    });

    if (!snapshotData) {
      return null;
    }

    // Find the relevant station data
    const stationData = snapshotData.stations.find(
      (station) => station.kioskId === kioskId
    );

    // Fetch weather data using Open Weather Map API
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=${apiKey}`
    );

    return {
      at: snapshotData.timestamp.toISOString(),
      station: stationData,
      weather: weatherResponse.data,
    };
  }
}