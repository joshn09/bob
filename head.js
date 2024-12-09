const { token } = require('./config.json');

// dont remove any arguments below!!!!
const {Client, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');


const axios = require('axios');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`${c.user.username} is succesfully awake!`);



        const infoBob = new SlashCommandBuilder()
            .setName('info')
            .setDescription('info about bobs cousin!')
                .addBooleanOption(option => option.setName('confirm').setDescription('confirm the command.').setRequired(true))

        const replyToGooner = new SlashCommandBuilder()
            .setName('goon')
            .setDescription('replies to the user')


        const sheetdbCmd = new SlashCommandBuilder()
            .setName('sheetdb')
            .setDescription('spreadsheet api!')

                /// get user input -> sheet
                
                    .addIntegerOption(option =>
                        option.setName('id')
                                .setDescription('user discord id')
                                .setRequired(true)
                                .setMinValue(1)
                    )
                    .addStringOption(option =>
                        option.setName('name')
                                .setDescription('user Roblox name')
                                .setRequired(true)
                                .setMinLength(2)
                    )
                    .addStringOption(option =>
                        option.setName('rank')
                                .setDescription('user Roblox rank')
                                .setRequired(true)

                                    .addChoices(
                                        {name: 'Social Experiment', value: '1315652954023399496'},
                                        {name: 'Son', value: '1315338783134187530'},
                                    )
                    )
                    .addStringOption(option =>
                        option.setName('medal')
                                .setDescription('user medal')
                                .setRequired(true)

                    )

            
        client.application.commands.create(infoBob, '1315281543069044736');
        client.application.commands.create(replyToGooner, '1315281543069044736');
        client.application.commands.create(sheetdbCmd, '1315281543069044736');

})


client.on(Events.InteractionCreate, interaction => {
    if(!interaction.isChatInputCommand()) return;

        if(interaction.commandName === "info"){

            const id = interaction.options.getBoolean('confirm');

            interaction.reply(`## I'm bobs cousin, nice to meet you all!`);

        }
            if(interaction.commandName === "goon"){
                interaction.reply(` Need help? ${interaction.user.username}`);
            }

                if(interaction.commandName === "sheetdb"){
                    

                        const id = interaction.options.getInteger('id');
                        const name = interaction.options.getString('name');
                        const rank = interaction.options.getString('rank');
                        const medal = interaction.options.getString('medal');

                    
                        axios.post('https://sheetdb.io/api/v1/jg3hu8lkr7fad', {
                            data: {
                                discordID: `${id}`,
                                name: `${name}`,
                                rank: `${rank}`,
                                medal: `${medal}`
                            }

                        })

                        interaction.reply('### sheet api updated!');
                }
})

/*
module.exports - {
async execute (interaction) {

    await interaction.reply({ content: "api succesfully logged!", ephemeral: true})
    
    const discordID = interaction.options.getString('discordID');
    const name = interaction.options.getString('RbName');
    const rank = interaction.options.getString('RbRank');
    const medal = interaction.options.getString('RbMedal');


    axios.post('https://sheetdb.io/api/v1/jg3hu8lkr7fad', {
        data: {
            discordID: `${discordID}`,
            name: `${name}`,
            rank: `${rank}`,
            medal: `${medal}`
        }

    })
}
}
*/



// dont delete!!
client.login(token);