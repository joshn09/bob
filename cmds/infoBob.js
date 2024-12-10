const { SlashCommandBuilder } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('info')
            .setDescription('info about bobs cousin!'),

                async execute(interaction) {
                    // await
                    interaction.reply(`## I'm bobs cousin, nice to meet you all!`);
                }
}
