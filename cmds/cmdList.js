const { SlashCommandBuilder } = require('discord.js')
// const { execute } = require('./sheetdb')

module.exports = {

    data: new SlashCommandBuilder()
        .setName('bobupdate')
        .setDescription('Bob Update cmd list!'),

            async execute(interaction) {
                await interaction.reply('### Developers can finally add cmds to Bob. \n -# Updated: 12/10/2024');
            }

}