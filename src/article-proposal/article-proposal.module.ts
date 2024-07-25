import { Module } from '@nestjs/common';
import {ArticleProposalService} from "./article-proposal.service";
import {MqttModule} from "../mqtt/mqtt.module";
import {PlcModule} from "../plc/plc.module";

@Module({
  providers: [ArticleProposalService],
  imports: [MqttModule, PlcModule]
})
export class ArticleProposalModule {}
