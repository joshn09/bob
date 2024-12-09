const { token } = require('./config.json');
// dont remove any arguments below!!!!
const {Client, Events, GatewayIntentBits, SlashCommandBuilder, Collection } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, (c) => {
    console.log(`${c.user.username} is succesfully awake!`);
})




client.on(Events.InteractionCreate, (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    let command = client.commands.get(interaction.commandName);
    
    try {
        if(interaction.replied) return;
        command.execute(interaction);
    } catch (error) {
        console.error(error);
    }
      
})


// dont delete!!
client.login(token);

