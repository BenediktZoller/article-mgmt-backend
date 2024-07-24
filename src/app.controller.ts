import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getVersion() {
    return {
      version: '1.0.0',
      description: 'MQTT Client Application',
      timestamp: new Date().toISOString(),
    };
  }
}
