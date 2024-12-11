const { SlashCommandBuilder, CommandInteractionOptionType } = require('discord.js')
const axios = require('axios');

module.exports = {

                data: new SlashCommandBuilder()
                        .setName('updatesheet')
                        .setDescription('update users to the spreadsheet!')
                            
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
                                
                                axios.patch(`https://sheetdb.io/api/v1/wx9g3cmpktv6a/MEDALS/${user})`, {

                                        data: {
                                            MEDALS: `${medal}`,
                                        }

                                    }),
                                    
                                interaction.reply(`${user} has been updated to the sheet!`);
                            }
 }
            