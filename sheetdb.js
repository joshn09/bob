
// EXAMPLE ROOT FOR SHEET CMD !!!

const { SlashCommandBuilder } = require("discord.js");
const axios = require('axios');

module.exports - {

    data: new SlashCommandBuilder()
    .setName('sheetdb')
    .setDescription('spreadsheet api '),
    async execute (interaction) {

        await interaction.reply( "sheet successfully logged!")

        axios.post('https://sheetdb.io/api/v1/jg3hu8lkr7fad', {
            data: {
                discordID: '123456',
                name: 'bob',
                rank: 'farmer',
                medal: 'medal2'
            }

        })
    }

        

}
