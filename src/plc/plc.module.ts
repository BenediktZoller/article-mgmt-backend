import { Module } from '@nestjs/common';
import {PlcService} from "./plc.service";

@Module({
    providers: [PlcService],
    exports: [PlcService]
})
export class PlcModule {}
