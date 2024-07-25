import { Injectable } from '@nestjs/common';
import { Client, AdsClientOptions, setDebugging } from 'ads-client';

@Injectable()
export class PlcService {
    private client: Client;

    constructor() {
        const options: AdsClientOptions = {
            localAmsNetId: '10.30.2.124.1.1',  //Can be anything but needs to be in PLC StaticRoutes.xml file
            localAdsPort: 61059,                //Can be anything that is not used
            targetAmsNetId: '192.168.1.20.1.1',
            targetAdsPort: 851,
            routerAddress: '127.0.0.1',     //PLC ip address
            routerTcpPort: 48898
        };

        this.client = new Client(options);
        this.client.setDebugging(4)

        // this.client.connect()
        //     .then(() => {
        //         console.log('Connected to PLC');
        //     })
        //     .catch((err) => {
        //         console.error('Failed to connect to PLC:', err);
        //     });
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
