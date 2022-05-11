# Kafka Creator Subscriber APP

## Tech stack
- [Node](https://nodejs.org/en/)
- Docker


## Prerequisite 
- Docker installation

## Dependencies installation
Need to run 
```bash
$ npm i
```
## Running the app
Need to run
```bash
$ docker-compose up
```
Start kafka shell
```bash
$ docker exec -it kafka /bin/sh
```
Kafka topic creation
```bash
$ kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic kafka
```
Start creator
```bash
$ npm run start:creator
```
Start subscriber
```bash
$ npm run start:subscriber
```
