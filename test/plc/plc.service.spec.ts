import { Test, TestingModule } from '@nestjs/testing';
import {PlcService} from "../../src/plc/plc.service";

describe('PlcService', () => {
  let service: PlcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlcService],
    }).compile();

    service = module.get<PlcService>(PlcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
