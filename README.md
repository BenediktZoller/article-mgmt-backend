<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## Start Mosquitto Broker

Run docker-compose up in the root directory to start the MQTT broker.
The folder `mosquitto` contains the configuration for the broker.
```bash
$ docker-compose up
```

### Mosquitto CLI
    
```bash
$ docker exec -it mqtt5 mosquitto_pub -h localhost -t article/proposal -m "test message"
 ```

## MQTT Client

For Example:
- MQTT.fx 1.71 for Windows
- MQTTX  for Mac


## Swagger

http://localhost:3000/api
