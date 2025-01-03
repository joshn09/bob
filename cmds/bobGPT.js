const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const puppeteer = require('puppeteer');

const userMemory = {};
const memoryLimit = 5;  // Limit how many past interactions to store

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask-bob')
        .setDescription('Ask Bob a question and continue the conversation')
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

        // Initialize or retrieve the user's memory (store multiple past interactions)
        if (!userMemory[userId]) {
            userMemory[userId] = [];
        }

        // Add the current question to memory
        userMemory[userId].push({ role: 'user', message: prompt });

        // Limit the stored memory to the last 'memoryLimit' interactions
        if (userMemory[userId].length > memoryLimit) {
            userMemory[userId].shift(); // Remove the oldest interaction if we exceed the limit
        }

        // Create context by concatenating the last 'memoryLimit' interactions
        let context = userMemory[userId].map(entry => {
            return `${entry.role === 'user' ? 'User' : 'Bob'}: ${entry.message}`;
        }).join('\n');

        try {
            browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();

            await page.goto('https://bobgpt-21ebf1.zapier.app', { waitUntil: 'load', timeout: 10000 });

            // Wait for the input selector to be available
            await page.waitForSelector(inputSelector, { visible: true, timeout: 30000 });

            // Send the context (previous interactions) and the new question
            await page.type(inputSelector, context + '\n' + prompt);  // Include context and new question
            await page.keyboard.press('Enter');

            await new Promise(resolve => setTimeout(resolve, 15000)); // Wait for response

            var responses = await page.$$eval(responseSelector, (elements) =>
                elements.map((element) => element.textContent)
            );

            if (!responses || responses.length === 0) {
                return await interaction.editReply('Bob could not provide a proper response. Please try again later.');
            }

            responses.shift(); // Remove the first response if necessary

            // Add Bob's response to the memory
            userMemory[userId].push({ role: 'bob', message: responses.join('\n\n') });

            // Limit the stored memory to the last 'memoryLimit' interactions
            if (userMemory[userId].length > memoryLimit) {
                userMemory[userId].shift(); // Remove the oldest interaction if we exceed the limit
            }

            // Create an embed with only the latest question and response
            const embed = new EmbedBuilder()
                .setAuthor({ name: 'bobGPT', iconURL: 'https://cdn.discordapp.com/attachments/1315911289905873007/1318087956111691806/3dgifmaker62340_online-video-cutter.com.gif?ex=6767a411&is=67665291&hm=50042a6e396a7bc10f307fa1dac8c20c180a5cce3a55173b965b385adae58e97&' })
                .setColor(0xffe4b5)
                .setDescription(`\`\`\`${responses.join('\n\n')}\`\`\``)
                .addFields(
                    { name: 'User:', value: prompt, inline: true },
                )
                .setFooter({ text: 'Powered by bobGPT', iconURL: 'https://cdn.discordapp.com/attachments/1315911289905873007/1319507523283189771/3dgifmaker00013.gif?ex=67678824&is=676636a4&hm=a94aa1f1881eb2e4aa0c9dfa0fcaffd3d11835ce2479abfd4d0b53514f0c7931&' })
                .setTimestamp();

            await interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Error during Puppeteer execution:', error);
            await interaction.editReply('An error occurred while trying to get Bob response. Please try again later.');
        } finally {
            if (browser) await browser.close();
        }
    }
};
