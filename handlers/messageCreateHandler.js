const fs = require("fs");
const path = require("path");

module.exports = (client) => {
  const handlersPath = path.join(__dirname);
  const handlerFiles = fs
    .readdirSync(handlersPath)
    .filter(
      (file) => file.endsWith(".js") && file !== "messageCreateHandler.js",
    );

  for (const file of handlerFiles) {
    const filePath = path.join(handlersPath, file);
    const handler = require(filePath);
    client.on("messageCreate", handler.bind(null, client));
  }
};
