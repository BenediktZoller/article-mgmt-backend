import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MqttService } from './mqtt/mqtt.service';
import {ArticleProposalModule} from "./article-proposal/article-proposal.module";
import {MqttModule} from "./mqtt/mqtt.module";

@Module({
  imports: [
    MqttModule,
    ArticleProposalModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
