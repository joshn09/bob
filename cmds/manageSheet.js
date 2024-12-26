const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()

        // permission that user MUST have to use this command!
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)

        .setName('sheet')
        .setDescription('Add or update user medals in the spreadsheet!')
            
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('Username')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('medal')
                .setDescription('Medals you want to add or update!')
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
            await interaction.deferReply({ ephemeral: true });
            
            // endpoint URL of sheetdb API
            const endpoint = 'https://sheetdb.io/api/v1/eqxuuefaj4hmr';
    
            // Fetch existing user data
            const getResponse = await axios.get(`${endpoint}?USERNAME=${user.username}`);
            const existingData = getResponse.data;
    
            if (existingData.length > 0) {
                // Check if the medal exists for the user
                const matchingEntry = existingData.find(entry => entry.MEDALS === medal);
    
                if (matchingEntry) {
                    // Delete the specific medal row for the user
                    const deleteResponse = await axios.delete(`${endpoint}`, {
                        data: {
                            column: 'MEDALS',
                            value: medal,
                            condition: { USERNAME: user.username },
                        },
                    });
    
                    if (deleteResponse.status === 200) {
                        // Re-add the updated medal with the new class
                        const postResponse = await axios.post(endpoint, {
                            data: [
                                {
                                    USERNAME: user.username,
                                    MEDALS: medal,
                                    CLASS: classMedal,
                                },
                            ],
                        });
    
                        if (postResponse.status === 201) {
                            await interaction.editReply(`${user.username} updated to the sheet!\n\`\`\`diff\n# Medal: ${medal}\n+ Updated: ${classMedal}\`\`\``);
                        } else {
                            await interaction.editReply('Failed to update the class. Please try again.');
                        }
                    } else {
                        await interaction.editReply('Failed to delete the existing entry. Please try again.');
                    }
                } else {
                    // Medal not found for the user, so add new medal
                    const postResponse = await axios.post(endpoint, {
                        data: [
                            {
                                USERNAME: user.username,
                                MEDALS: medal,
                                CLASS: classMedal,
                            },
                        ],
                    });

                    if (postResponse.status === 201) {
                        await interaction.editReply(`${user.username} successfully added to the sheet!\n\`\`\`diff\n+ Medal: ${medal}\n# Class: ${classMedal}\n\`\`\``);
                    } else {
                        await interaction.editReply('Failed to add the medal. Please try again.');
                    }
                }
            } else {
                // User not found in the database, so add new user with medal
                const postResponse = await axios.post(endpoint, {
                    data: [
                        {
                            USERNAME: user.username,
                            MEDALS: medal,
                            CLASS: classMedal,
                        },
                    ],
                });

                if (postResponse.status === 201) {
                    await interaction.editReply(`${user.username} has been added with the medal: **${medal}**. class: **${classMedal}**`);
                } else {
                    await interaction.editReply('Failed to add the user and medal. Please try again.');
                }
            }
        } catch (error) {
            console.error(error);
            if (!interaction.replied) {
                await interaction.reply('-# An error occurred while managing the sheet. Please contact the developers!');
            }
        }
    }
};