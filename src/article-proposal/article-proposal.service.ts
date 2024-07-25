import { Injectable } from '@nestjs/common';
import { MqttService } from '../mqtt/mqtt.service';
import { PlcService } from '../plc/plc.service';

@Injectable()
export class ArticleProposalService {
  constructor(
    private readonly mqttService: MqttService,
    private readonly plcService: PlcService,
  ) {
    this.subscribeToTopics();
  }

  private subscribeToTopics() {
    console.log('Subscribing to article proposal topic');
    this.mqttService.subscribeAndHandle(
      'article/proposal',
      this.handleArticleProposal.bind(this),
    );
  }

  private async handleArticleProposal(topic: string, message: Buffer) {
    const data = message.toString();
    console.log(`Article Proposal received on ${topic}: ${data}`);
    const plcValue = await this.plcService.readVariable('G_HMI.HMIAbAlarmHorn');
    console.log(`PLC value for ${data}`, plcValue.value);
  }
}
