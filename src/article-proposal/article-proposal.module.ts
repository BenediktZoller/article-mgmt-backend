import { Module } from '@nestjs/common';
import {ArticleProposalService} from "./article-proposal.service";
import {MqttModule} from "../mqtt/mqtt.module";

@Module({
  providers: [ArticleProposalService],
  imports: [MqttModule]
})
export class ArticleProposalModule {}
