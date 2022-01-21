// Kafka consumer using stream implementations

import Kafka from "node-rdkafka";
import { TOPIC_NAME } from "../constants.js";

const stream = Kafka.KafkaConsumer.createReadStream(
    {
        "metadata.broker.list": "localhost:9092",
        "group.id": "kafka",
        "socket.keepalive.enable": true,
        "enable.auto.commit": false,
    },
    {},
    {
        topics: TOPIC_NAME,
        waitInterval: 0,
        objectMode: false,
    }
);

stream.on("error", function (err) {
    if (err) console.log(err);
    process.exit(1);
});

stream.pipe(process.stdout);

stream.on("error", function (err) {
    console.log(err);
    process.exit(1);
});

stream.consumer.on("event.error", function (err) {
    console.log(err);
});
