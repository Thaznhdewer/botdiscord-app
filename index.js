const fs = require("fs");
const path = require("path");
const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  Collection,
  ActivityType,
} = require("discord.js");
const { token, clientId, guildId } = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

const commands = [];

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if (command.data && typeof command.data.toJSON === "function") {
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
  }
}

client.once("ready", () => {
  console.log(`Đã đăng nhập với tên ${client.user.tag}`);

  // Đặt trạng thái hoạt động của bot
  client.user.setActivity("with Thành", { type: ActivityType.Playing });
  client.user.setStatus("idle"); // Các trạng thái có thể là: 'online', 'idle', 'dnd', 'invisible'
});

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

// Load messageCreate handlers
require("./handlers/messageCreateHandler")(client);

client.login(token);
