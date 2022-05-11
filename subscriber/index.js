console.log('subscriber ...')
import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';

var subscriber = new Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092',
  }, {});
  
  subscriber.connect();
  
  subscriber.on('ready', () => {
    console.log('consumer ready..')
    subscriber.subscribe(['kafka']);
    subscriber.consume();
  }).on('data', function(data) {
    console.log(`received message: ${eventType.fromBuffer(data.value)}`);
  });