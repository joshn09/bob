const { SlashCommandBuilder } = require('discord.js')
const axios = require('axios');

module.exports = {

                data: new SlashCommandBuilder()
                        .setName('sheetdb')
                        .setDescription('spreadsheet api!'),
            
                            async execute(interaction) {
                                
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
 }
            