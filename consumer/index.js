console.log("___________CONSUMER____________");

import Kafka from "node-rdkafka";
import { TOPIC_NAME } from "../constants.js";

const consumer = new Kafka.KafkaConsumer(
    {
        "group.id": "kafka",
        "metadata.broker.list": "localhost:9092",
        // "enable.auto.commit": true,
    },
    {}
);

consumer.connect();
//counter to commit offsets every numMessages are received
// let counter = 0;
// const numMessages = 5;

consumer
    .on("ready", () => {
        console.log("consumer ready..");
        consumer.subscribe([TOPIC_NAME]);
        consumer.consume();
    })
    .on("data", function (data) {
        // counter++;

        //committing offsets every numMessages
        // if (counter % numMessages === 0) {
        //   console.log("calling commit");
        //   consumer.commit(data);
        // }

        // Output the actual message contents
        // console.log(JSON.stringify(data));
        console.log(`received message: ${data.value.toString()}`);
    });

consumer.on("disconnected", function (arg) {
    console.log("consumer disconnected. " + JSON.stringify(arg));
});
