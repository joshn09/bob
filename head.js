
// NEVER TOUCH WITH UR DEGENERATE HANDS THIS ACIENT CODE!!!!


const { token } = require("./config.json");
// dont remove any arguments below!!!!
const {Client, Events, GatewayIntentBits, SlashCommandBuilder, Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({ intents: [GatewayIntentBits.Guilds] | [GatewayIntentBits.GuildMembers] | [GatewayIntentBits.MessageContent] | GatewayIntentBits.GuildMessages} );

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))


for(const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
        if(event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        }
        else {
            client.on(event.name, (...args) => event.execute(...args));
        }
}


// dont delete!!
client.login(token);



