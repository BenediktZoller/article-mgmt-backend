import { Injectable } from '@nestjs/common';
import { MqttService } from '../mqtt/mqtt.service';

@Injectable()
export class ArticleProposalService {
    constructor(private readonly mqttService: MqttService) {
        this.subscribeToTopics();
    }

    private subscribeToTopics() {
        console.log('Subscribing to article proposal topic')
        this.mqttService.subscribeAndHandle('article/proposal', this.handleArticleProposal.bind(this));
    }

    private handleArticleProposal(topic: string, message: Buffer) {
        const data = message.toString();
        console.log(`Article Proposal received on ${topic}: ${data}`);
    }
}
