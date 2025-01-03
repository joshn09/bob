const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const puppeteer = require('puppeteer');

const userMemory = {};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask-bob')
        .setDescription('Ask Bob a question')
        .addStringOption((option) =>
            option.setName('question').setDescription('Question for Bob').setRequired(true)
        ),
    async execute(interaction) {
        try {
            await interaction.deferReply({ ephemeral: true });
        } catch (err) {
            console.error('Failed to defer interaction:', err);
            return;
        }

        const prompt = interaction.options.getString('question');
        const userId = interaction.user.id;
        const inputSelector = '[data-testid="user-prompt"]';
        const responseSelector = '[data-testid="bot-message"]';

        let browser;
        
        try {
            browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();

            await page.goto('https://bobgpt-21ebf1.zapier.app', { waitUntil: 'load', timeout: 10000 });

            // Wait for the input selector to be available
            await page.waitForSelector(inputSelector, { visible: true, timeout: 30000 });

            await page.type(inputSelector, prompt);
            await page.keyboard.press('Enter');
        
            await new Promise(resolve => setTimeout(resolve, 15000)); // Wait for response

            var responses = await page.$$eval(responseSelector, (elements) =>
                elements.map((element) => element.textContent)
            );

            if (!responses || responses.length === 0) {
                return await interaction.editReply('Bob could not provide a proper response. Please try again later.');
            }

            responses.shift(); // Remove the first response if necessary

            // Store the current question and response in memory for the user
            if (!userMemory[userId]) {
                userMemory[userId] = [];
            }
            userMemory[userId].push({ question: prompt, response: responses.join('\n\n') });

            // Create an embed with the most recent response
            const embed = new EmbedBuilder()
                .setAuthor({ name: 'bobGPT', iconURL: 'https://cdn.discordapp.com/attachments/1315911289905873007/1318087956111691806/3dgifmaker62340_online-video-cutter.com.gif?ex=6767a411&is=67665291&hm=50042a6e396a7bc10f307fa1dac8c20c180a5cce3a55173b965b385adae58e97&' })
                .setColor(0xffe4b5)
                .setDescription(`\`\`\`${responses.join('\n\n')}\`\`\``)
                .addFields(
                    { name: 'User:', value: prompt, inline: true },
                )
                .setFooter({ text: 'Powered by bobGPT', iconURL: 'https://cdn.discordapp.com/attachments/1315911289905873007/1319507523283189771/3dgifmaker00013.gif?ex=67678824&is=676636a4&hm=a94aa1f1881eb2e4aa0c9dfa0fcaffd3d11835ce2479abfd4d0b53514f0c7931&' })
                .setTimestamp();

            // Display previous questions and responses if they exist
            const previousInteractions = userMemory[userId];
            if (previousInteractions.length > 1) {
                const pastResponses = previousInteractions.slice(0, -1).map((entry, index) => {
                    return `**Q${index + 1}:** ${entry.question}\n**A${index + 1}:** \`\`\`${entry.response}\`\`\``;
                }).join('\n\n');
            }

            await interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Error during Puppeteer execution:', error);
            await interaction.editReply('An error occurred while trying to get Bob response. Please try again later.');
        } finally {
            if (browser) await browser.close();
        }
    }
};
