import { Injectable } from '@nestjs/common';
import { AdsClientOptions, Client } from 'ads-client';

@Injectable()
export class PlcService {
  private client: Client;

  constructor() {
    const options: AdsClientOptions = {
      targetAmsNetId: '172.18.60.221.1.1', //Can be anything but needs to be in PLC StaticRoutes.xml file
      targetAdsPort: 851,
    };

    this.client = new Client(options);

    this.client
      .connect()
      .then(() => {
        console.log('Connected to PLC');
      })
      .catch((err) => {
        console.error('Failed to connect to PLC:', err);
      });
  }

  readVariable(varName: string): Promise<any> {
    try {
      return this.client.readSymbol(varName);
    } catch (error) {
      console.error('Failed to read variable:', error);
      throw error;
    }
  }

  writeVariable(varName: string, value: any): Promise<any> {
    try {
      return this.client.writeSymbol(varName, value);
    } catch (error) {
      console.error('Failed to write variable:', error);
      throw error;
    }
  }
}
