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
        // Array of embeds
        const embeds = [
            new EmbedBuilder()
                .setTitle('📜Rossiyskaya Imperiya Wiki!')
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
                .setTitle('🦅IMPERATORSKAYA GVARDIYA')
                .setURL(
                    'https://discord.com/channels/935566950568951838/1279668250401312789'
                )
                .setAuthor({
                    name: 'Rossiyskaya Imperiya',
                    iconURL: 'https://cdn.discordapp.com/attachments/1315911289905873007/1322040239606206574/aas.gif',
                })
                .setDescription(
                    'The Imperatorskaya Gvardiya is the creme-de-la-creme of Russian infantry formed off the reserves and veteran regiments of Russia. Europe has never seen the full potential of the mighty Soldiers of the Russian Guard, but its reputation from the wars where they have been deployed leaves fear across the lands of Europe.'
                )
                .setImage(
                    'https://media.discordapp.net/attachments/1180480714517532685/1312892418047082526/101_guard_rally.png?ex=67765b98&is=67750a18&hm=42ebd8adfc95721f5eaf1268674ee474ee1b551e9fae99b7b94ae56b88096084&=&format=webp&quality=lossless&width=1281&height=676'
                )
                .addFields(
                    { name: '**[BAG] Bagration Brigade**', value: '*Finlandsky Leyb-Gvardiy Polk*' },
                    { name: '**[NEV] Neverovsky Brigade**', value: '*Pavlosky Grenaderskiy Leyb-Gvardiy Polk\nIzmailovsky Grenaderskiy Leyb-Gvardiy Polk*' },
                    { name: '**[KON] Konstantin Brigade**', value: '*Preobrazhenskiy Grenaderskiy Leyb-Gvardiy Polk\nSemyonovsky Grenaderskiy Leyb-Gvardiy Polk*' }
                )
                .setColor(0x7fffbf),
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

        // Action row with buttons
        const buttons = () => new ActionRowBuilder()
            .addComponents(communityLink, backPage.setDisabled(currentPage === 0), nextPage.setDisabled(currentPage === embeds.length - 1));

        let currentPage = 0; // Keep track of the current page

        // Send the initial embed
        await interaction.reply({
            embeds: [embeds[currentPage]],
            components: [buttons()],
        });

        // Create a collector to listen for button interactions
        const filter = (i) => i.user.id === interaction.user.id;
        const collector = interaction.channel.createMessageComponentCollector({
            filter,
            time: 600000,
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
