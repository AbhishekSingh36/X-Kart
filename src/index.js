const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
mongoose
    .connect(config.mongoose.url, config.mongoose.options)
    .then(() => {
        console.log("DB is connected")
    })
    .catch((e) => {
        console.log("DB not connected Error:", e)
    })

    app.listen(config.port, () => {
        console.log(`Backend is running at ${config.port}`)
    })