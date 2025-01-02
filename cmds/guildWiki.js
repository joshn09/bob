const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wiki')
        .setDescription('NW Russia Wiki!'),

    async execute(interaction) {

        // Custom emojis!
        const emeticonGuardCorps = '<:Guard_Corps_2:1323975368222179380>';
        const emeticonGuard = '<:guard2:1323982821542334524>';
        const emeticonGuardA = '<:guardA:1323979507597709322>';
        const emeticonGuardB = '<:guardB:1323979505831907418>';
        const emeticonGuardC = '<:guardC:1323979970158268527>';
        const emeticonGuard1 = '<:guard1:1323979509422358528>';
        const emeticonGuardCrown = '<:crownguard:1323982819512418324>';
        const emeticonMorgan = '<:morgan:1324232909753683978>';
        const emeticonSiver = '<:siver:1324233488953769986>';

        // Array of embeds
        const embeds = [
            new EmbedBuilder()
                .setTitle(`📜 Rossiyskaya Imperiya Wiki!`)
                .setURL('https://discord.gg/pPfSH6ZsEc')
                .setAuthor({
                    name: 'Rossiyskaya Imperiya',
                    iconURL: 'https://cdn.discordapp.com/attachments/1315911289905873007/1322040239606206574/aas.gif',
                })
                .setDescription(
                    'Napoleonic Wars Russia encyclopedia, presented to you by the bob developers!'
                )
                .setImage(
                    'https://media.discordapp.net/attachments/1170846254549434449/1313091629955158036/image.png'
                )
                .setColor(0x7fffbf),

            new EmbedBuilder()
                .setTitle(`${emeticonGuardCorps} IMPERSKAYA GVARDIA ${emeticonGuardCrown}`)
                .setURL(
                    'https://discord.gg/gvardii'
                )
                    .setAuthor({
                        name: 'Rossiyskaya Imperiya',
                        iconURL: 'https://cdn.discordapp.com/attachments/1315911289905873007/1322040239606206574/aas.gif',
                    })

                        .setThumbnail('https://cdn.discordapp.com/attachments/1315292407860039830/1323969030196822066/Gvardii_Legion.png?ex=677671be&is=6775203e&hm=e58bd4ae9a0a03159112e3365bb264c5998da7c7834204eae13e8e4477155b35&')
                        
                            .setDescription(
                                `\n\n ${emeticonGuard1} The Imperatorskaya Gvardiya is the creme-de-la-creme of Russian infantry formed off the reserves and veteran regiments of Russia. Europe has never seen the full potential of the mighty Soldiers of the Russian Guard, but its reputation from the wars where they have been deployed leaves fear across the lands of Europe.\n\n${emeticonGuard} Imperskaya Gvardia consists of three different Brigades of Progression. These brigades are more commonly known as "echelons".`
                            )
                                .setImage(
                                    'https://media.discordapp.net/attachments/1180480714517532685/1312892418047082526/101_guard_rally.png?ex=67765b98&is=67750a18&hm=42ebd8adfc95721f5eaf1268674ee474ee1b551e9fae99b7b94ae56b88096084&=&format=webp&quality=lossless&width=1281&height=676'
                                )
                                .addFields(
                                    {
                                        name: `${emeticonGuardA} __**[BGR] BRIGADA BAGRATION**__`, value: `-# ${emeticonGuard1} Brigada Bagration is the *green* Brigade within the Imperial Guard, serving as the bulk of the Corps and essential backbone. This Brigade consists of the **Kursanty Mushketery**, or Cadets and the **Finlandskiy Leyb-Yegerskiy Polk**, the Primary Regiment within the Brigade.`,
                                    },
                                    {
                                        name: `${emeticonGuardB} __**[NEV] BRIGADA NEVEROVSKY**__`, value: `-# ${emeticonGuard1} Brigada Neverovsky conists of the Combat tested men of the **Pavlovskiy Grenadierskiy Polk**, now elevated as a regiment of the Imperskoy Gvardii and contains one of Russia's oldest Imperial Guard Formations, the Infamous **Izamilovskiy Leib-Gvardiy Polk** Serving as the Speicalist Bulk of the Imperial Guard, these soldiers have proven time and time again their worth on the battlefield.`,
                                    },
                                    {
                                        name: `${emeticonGuardC} __**[KON] BRIGADA KONSTANTIN**__`, value: `-# ${emeticonGuard} The Crème de-la-crème of all Russia, these veteran-elite soldiers have proven themselves in the thick of combat, coming out on-top of their foe in almost every engagement they face Only the finest within the Corps can find their place amongst the best of Russia. This Brigade contains Russia's **oldest** Regiments in service; The **Preobrazhenskiy Leib-Gvardiy Polk** and the **Semyonovsky Leyb-Gvardi Polk** both formed by *Peter the Great* to serve as his personal guard.`,
                                    },
                                )
                                
                                .addFields(
                                    {name: `${emeticonGuard1} __GVARDIA ENLISTMENT__ ${emeticonGuardCrown}`, value: `-# ${emeticonSiver} brigade has **AS/OC** division. \n${emeticonGuardA} **[BGR] BRIGADA BAGRATION** ${emeticonSiver}\n\n*[Finlandskiy Leyb-Yegerskiy Polk](https://discord.com/channels/1177721548874985512/1177721549516722292/1286919474070556733)*\n*[Kursanty Mushketery](https://discord.com/channels/1177721548874985512/1177721549516722292/1286919474070556733)*\n\n${emeticonGuardB} **[NEV] BRIGADA NEVEROVSKY** \n\n*[Pavlovskiy Grenadierskiy Polk](https://discord.com/channels/1177721548874985512/1177721549516722292/1286919603846385686)*\n*[Izamilovskiy Leib-Gvardiy Polk](https://discord.com/channels/1177721548874985512/1177721549516722292/1286919603846385686)*\n\n${emeticonGuardC} **[KON] BRIGADA KONSTANTIN** \n\n*[Preobrazhenskiy Leib-Gvardiy Polk](https://discord.com/channels/1177721548874985512/1177721549516722292/1286919741893644301)*\n*[Semyonovsky Leyb-Gvardi Polk](https://discord.com/channels/1177721548874985512/1177721549516722292/1286919741893644301)*`},
                                )

                            .setColor(0x7fffbf)

                                .setFooter({text: `STOYAT DO SMERTI`, iconURL: 'https://media.discordapp.net/attachments/1315292407860039830/1323969030196822066/Gvardii_Legion.png?ex=677671be&is=6775203e&hm=e58bd4ae9a0a03159112e3365bb264c5998da7c7834204eae13e8e4477155b35&=&format=webp&quality=lossless'}),


            

        ];

        // Buttons
        const nextPage = new ButtonBuilder()
            .setCustomId('nextPage')
            .setLabel('Next')
            .setStyle(ButtonStyle.Success);

            const backPage = new ButtonBuilder()
                .setCustomId('backPage')
                .setLabel('Back')
                .setStyle(ButtonStyle.Danger);

                const communityLink = new ButtonBuilder()
                    .setLabel('NW community!')
                    .setURL('https://discord.gg/pPfSH6ZsEc')
                    .setStyle(ButtonStyle.Link);

                    const timezoneCheck = new ButtonBuilder()

        // Action row with buttons
        const buttons = () => new ActionRowBuilder()
            .addComponents(communityLink, backPage.setDisabled(currentPage === 0), nextPage.setDisabled(currentPage === embeds.length - 1));

        let currentPage = 0;

        // Send the initial embed
        await interaction.reply({
            embeds: [embeds[currentPage]],
            components: [buttons()],
        });

        // Create a collector to listen for button interactions
        const filter = (i) => i.user.id === interaction.user.id;
        const collector = interaction.channel.createMessageComponentCollector({
            filter,
            time: 60000,
        });

        collector.on('collect', async (i) => {
            // Update the current page based on the button clicked
            if (i.customId === 'nextPage' && currentPage < embeds.length - 1) {
                currentPage++;
            } else if (i.customId === 'backPage' && currentPage > 0) {
                currentPage--;
            }

            // Update the embed and buttons
            await i.update({
                embeds: [embeds[currentPage]],
                components: [buttons()],
            });
        });
        collector.on('end', () => {
            // Disable buttons after the collector ends
            interaction.editReply({
                components: [
                    new ActionRowBuilder().addComponents(
                        communityLink,
                        backPage.setDisabled(true),
                        nextPage.setDisabled(true)
                    ),
                ],
            });
        });
    },
};
