const { SlashCommandBuilder, CommandInteractionOptionType } = require('discord.js')
const axios = require('axios');

module.exports = {

                data: new SlashCommandBuilder()
                        .setName('sheetdb')
                        .setDescription('spreadsheet api!')
                            
                            .addUserOption(option =>
                                option  .setName('user')
                                        .setDescription('Usernamae')
                                        .setRequired(true)
 
                            )
                            .addStringOption(option =>
                                option  .setName('medal')
                                        .setDescription('User medal')
                                        .setRequired(true)

                                            .addChoices(
                                                { name: `Orden Svyatogo Georgiya`, value: 'Orden Svyatogo Georgiya'},
                                                { name: `Medal Ubiytsy`, value: 'Medal Ubiytsy'},
                                            )
                            ),


                            async execute(interaction) {
                                
                                const user = interaction.options.getUser('user');
                                const medal = interaction.options.getString('medal');
                                
                                axios.post('https://sheetdb.io/api/v1/wx9g3cmpktv6a', {
                                    data: {
                                        A: 'a',
                                        USERNAME: `${user.username}`,
                                        MEDALS: `${medal}`,
                                    }
                                }),

                                await interaction.reply(`${user} has been added to the sheet!`);
                            }
 }
            