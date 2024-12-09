const { token } = require('./config.json');
// dont remove any arguments below!!!!
const {Client, Events, GatewayIntentBits, SlashCommandBuilder, Collection } = require('discord.js');
const fs = require('node:fs')

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = getCommands('./bot_cmds');

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



function getCommands(dir) {
    let commands = new Collection();
    const commandFiles = getFiles(dir);
    
    for(const commandFile of commandFiles){
        const command = require(commandFile);
        commands.set(command.data.toJSON().name, command)
    }
    return commands;
}

    function getFiles(dir){
        const files = fs.readdirSync({dir,
            withFilesType: true
        });
        let commandFiles = [];

        for(const file of files) {
            if(file.isDirectory()){
                commandFiles = [
                    ...commandFiles,
                    ...getFiles(`${dir}/$(file.name)`)
                ]
            } else if(file.name.endsWith(".js")) {
                commandFiles.push(`${dir}/$(file.name)`)
            }
        }

        return commandFiles;
    }

