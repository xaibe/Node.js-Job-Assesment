import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IndegoService {
  constructor(private readonly prisma: PrismaService) {}

  async fetchAndStoreIndegoData() {
    try {
      const response = await axios.get('https://www.rideindego.com/stations/json/');
      const indegoData = response.data;

      // Store the data using Prisma
      await this.prisma.indegoData.createMany({ data: indegoData });
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
    });

    if (!snapshotData) {
      return null;
    }

    // Fetch weather data using Open Weather Map API
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=YOUR_API_KEY`
    );

    return {
      at: snapshotData.timestamp.toISOString(),
      stations: snapshotData.stations,
      weather: weatherResponse.data,
    };
  }

  async getStationSnapshot(kioskId: string, at: Date) {
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
      `https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=YOUR_API_KEY`
    );

    return {
      at: snapshotData.timestamp.toISOString(),
      station: stationData,
      weather: weatherResponse.data,
    };
  }
}