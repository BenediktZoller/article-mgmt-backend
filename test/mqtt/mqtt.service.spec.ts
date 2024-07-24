import { Test, TestingModule } from '@nestjs/testing';
import {MqttService} from "../../src/mqtt/mqtt.service";

describe('MqttService', () => {
  let service: MqttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MqttService],
    }).compile();

    service = module.get<MqttService>(MqttService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
