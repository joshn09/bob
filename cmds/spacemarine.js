const { SlashCommandBuilder } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('spacemarine')
            .setDescription('Pledge!'),

            async execute(interaction) {
                // await
                interaction.reply(`## My honour is my life. My duty is my fate. My fear is to fail. My salvation is my reward. My craft is death. My pledge is eternal service.`);
            }
}