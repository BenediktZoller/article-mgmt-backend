import { Module } from '@nestjs/common';
import { MqttModule } from '../mqtt/mqtt.module';
import { PlcModule } from '../plc/plc.module';
import { ArticleProposalService } from './article-proposal.service';

@Module({
  providers: [ArticleProposalService],
  imports: [MqttModule, PlcModule],
})
export class ArticleProposalModule {}
