const { SlashCommandBuilder, CommandInteractionOptionType } = require('discord.js')
const axios = require('axios');

module.exports = {

                data: new SlashCommandBuilder()
                        .setName('addsheet')
                        .setDescription('add users to the spreadsheet!')
                            
                            .addUserOption(option =>
                                option  .setName('user')
                                        .setDescription('Usernamae')
                                        .setRequired(true)
 
                            )
                            .addStringOption(option =>
                                option  .setName('medal')
                                        .setDescription('User medals')
                                        .setRequired(true)

                                            .addChoices(
                                                { name: `Orden Svyatogo Georgiya`, value: 'Orden Svyatogo Georgiya'},
                                                { name: `Medal Ubiytsy`, value: 'Medal Ubiytsy'},
                                            )
                            ),


                            async execute(interaction) {


                                const user = interaction.options.getUser('user');
                                const medal = interaction.options.getString('medal');
                                
                                try {
                                    
                                    axios.post('https://sheetdb.io/api/v1/wx9g3cmpktv6a', {
                                        data: {
                                            USERNAME: `${user.username}`,
                                            MEDALS: `${medal}`,
                                        }
                                    })

                                    await interaction.reply(`${user.username} has successfully added sheet with the medal: ${medal}!`);
                
                                } catch (error) {
                        
                                    await interaction.reply('-# An error occurred while updating the sheet. Please contact the developers!');
                                }

                            }
 }