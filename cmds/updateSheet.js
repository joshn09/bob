const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('updatesheet')
        .setDescription('Update users to the spreadsheet!')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('Username to update')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('medal')
                .setDescription('Medal to assign')
                .setRequired(true)
                .addChoices(
                    { name: 'Orden Svyatogo Georgiya', value: 'Orden Svyatogo Georgiya' },
                    { name: 'Medal Ubiytsy', value: 'Medal Ubiytsy' },
                )
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const medal = interaction.options.getString('medal');

        await interaction.deferReply();

        try {
            const endpoint = 'https://sheetdb.io/api/v1/wx9g3cmpktv6a';

            const getResponse = await axios.get(`${endpoint}?USERNAME=${user.username}`);
            const existingData = getResponse.data;

            if (existingData.length > 0) {
                const deleteResponse = await axios.delete(`${endpoint}/USERNAME/${user.username}`);
            }

            const postResponse = await axios.post(endpoint, {
                data: [{ USERNAME: user.username, MEDALS: medal }],
            });

            if (postResponse.status === 201) {
                await interaction.editReply(`${user.username} has been updated in the sheet with the medal: ${medal}!`);
            } else {
                console.error('Unexpected Response:', postResponse.data);
                await interaction.editReply('Failed to update the sheet. Please try again.');
            }
        } catch (error) {
            console.error('Error updating the sheet:', error.message);
            if (error.response) {
                console.error('Error Response Data:', error.response.data);
            }

            await interaction.editReply('-# An error occurred while updating the sheet. Please contact the developers!');
        }
    },
};
