console.log("___________PRODUCER____________");

import Kafka from "node-rdkafka";
import { TOPIC_NAME } from "../constants.js";
import { getRandomLanguage, getRandomFrameworkOrLibrary } from "./utility.js";

// Our producer with its Kafka brokers
// This call returns a new writable stream to our topic 'topic-name'
const stream = Kafka.Producer.createWriteStream(
    {
        "metadata.broker.list": "localhost:9092",
    },
    {},
    {
        topic: TOPIC_NAME,
    }
);

// NOTE: MAKE SURE TO LISTEN TO THIS IF YOU WANT THE STREAM TO BE DURABLE
// Otherwise, any error will bubble up as an uncaught exception.
stream.on("error", function (err) {
    // Here's where we'll know if something went wrong sending to Kafka
    console.error("Error in our kafka stream");
    console.error(err);
});

function queueRandomMessage() {
    const lang = getRandomLanguage();
    const lib = getRandomFrameworkOrLibrary(lang);
    const event = { lang, lib };
    const success = stream.write(JSON.stringify(event));

    if (success) {
        console.log(`message queued (${JSON.stringify(event)})`);
    } else {
        console.log("Too many messages in the queue already..");
    }
}

setInterval(() => {
    queueRandomMessage();
}, 3000);
