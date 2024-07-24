import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { connect, MqttClient} from 'mqtt';

@Injectable()
export class MqttService implements OnModuleDestroy {
    private client: MqttClient;
    private handlers: { [topic: string]: (topic: string, message: Buffer) => void } = {};

    constructor() {
        console.log('Initializing MQTT client')
        this.client = connect('mqtt://localhost:1883');

        this.client.on('connect', () => {
            console.log('MQTT client connected');
        });

        this.client.on('message', (topic, message) => {
            if (this.handlers[topic]) {
                this.handlers[topic](topic, message);
            } else {
                console.log(`No handler for topic ${topic}`);
            }
        });

        this.client.on('error', (error) => {
            console.error('MQTT client error:', error);
        });

        this.client.on('close', () => {
            console.log('MQTT client disconnected');
        });
    }

    onModuleDestroy() {
        if (this.client) {
            this.client.end();
        }
    }

    publish(topic: string, message: string) {
        if (this.client) {
            this.client.publish(topic, message);
        }
    }

    subscribeAndHandle(topic: string, handler: (topic: string, message: Buffer) => void) {
        this.client.subscribe(topic, (err) => {
            if (err) {
                console.error(`Subscription error for topic ${topic}:`, err);
            } else {
                console.log(`Subscribed to topic ${topic}`);
                this.handlers[topic] = handler;
            }
        });
    }
}
