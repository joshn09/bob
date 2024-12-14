const { SlashCommandBuilder, CommandInteractionOptionType, PermissionFlagsBits } = require('discord.js')
const axios = require('axios');

module.exports = {

                data: new SlashCommandBuilder()

                        // permission that user MUST have to use this command!
                        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)


                        .setName('addsheet')
                        .setDescription('add users to the spreadsheet!')
                            
                            .addUserOption(option =>
                                option  .setName('user')
                                        .setDescription('Username')
                                        .setRequired(true)
 
                            )
                            .addStringOption(option =>
                                option
                                    .setName('medal')
                                    .setDescription('User medals')
                                    .setRequired(true)
                                    .addChoices(
                                        { name: `Orden Svyatogo Andreya`, value: 'Orden Svyatogo Andreya' },
                                        { name: `Orden Svyatogo Georgiya`, value: 'Orden Svyatogo Georgiya' },
                                        { name: `Orden Svyatogo Stanislava`, value: 'Orden Svyatogo Stanislava' },
                                        { name: `Orden Belogo Orla`, value: 'Orden Belogo Orla' },
                                        { name: `Orden Svyatogo Aleksandra Nevskogo`, value: 'Orden Svyatogo Aleksandra Nevskogo' },
                                        { name: `Orden Svyatoy Anny`, value: 'Orden Svyatoy Anny' },
                                        { name: `Medal Komendanta za Sluzhbu`, value: 'Medal Komendanta za Sluzhbu' },
                                        { name: `Medal za Initsiativu`, value: 'Medal za Initsiativu' },
                                        { name: `Imperskoy Gvardii Korpus Medal`, value: 'Imperskoy Gvardii Korpus Medal' },
                                        { name: `Medal Ubiytsy`, value: 'Medal Ubiytsy' },
                                        { name: `Patrioticheskaya Medal`, value: 'Patrioticheskaya Medal' },
                                        { name: `Volonterskaya Medal`, value: 'Volonterskaya Medal' },
                                        { name: `Medal za Verbovku`, value: 'Medal za Verbovku' },
                                        { name: `Sotsial'naya Medal`, value: `Sotsial'naya Medal` },
                                        { name: `Medal Khudozhnika`, value: 'Medal Khudozhnika' },
                                        { name: `Administrativnaya Medal`, value: 'Administrativnaya Medal' },
                                        { name: `1-y Korpus Medal`, value: '1-y Korpus Medal' },
                                        { name: `2-y Korpus Medal`, value: '2-y Korpus Medal' },
                                        { name: `Dvor`, value: 'Dvor' },
                                        { name: `Medal Vagrama`, value: 'Medal Vagrama' },
                                        { name: `Obsluzhivaniye Kampaniy`, value: 'Obsluzhivaniye Kampaniy' },
                                        { name: `Kavaleriyskiy Otlichitel\'nyy Krest`, value: `Kavaleriyskiy Otlichitel 'nyy Krest` },
                                        { name: `Orden Svyatoy Yekateriny`, value: 'Orden Svyatoy Yekateriny' }
                                    )
                            )

                                .addStringOption(option => 
                                    option 
                                        .setName('class')
                                        .setDescription('Medal class of the user!')
                                        .setRequired(true)

                                            .addChoices(
                                                { name: `Bronzen`, value: 'Bronzen'},
                                                { name: `Zilver`, value: 'Zilver'},
                                                { name: `Gouden`, value: 'Gouden'},

                                                    { name: `Pervyy Klass`, value: 'Pervyy Klass'},
                                                    { name: `Vtoroy Klass`, value: 'Vtoroy Klass'},
                                                    { name: `Tretiy Klass`, value: 'Tretiy Klass'}
                                            ) 
                                    ),



                            async execute(interaction) {

                                

                                const user = interaction.options.getUser('user');
                                const medal = interaction.options.getString('medal');
                                const classMedal = interaction.options.getString('class');
                                

                                try {

                                    axios.post('https://sheetdb.io/api/v1/eqxuuefaj4hmr', {       
                                                USERNAME: user.username,
                                                MEDALS: medal,
                                                CLASS: classMedal,                                
                                        
                                    }),

                                    await interaction.reply(`${user.username} has successfully added sheet with the medal: **${medal}**. class: **${classMedal}**`);
                
                                } catch (error) {
                                        if(!interaction.reply){
                                        await interaction.reply('-# An error occurred while updating the sheet. Please contact the developers!');
                                        }
                                }

                            }
 }


