const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const puppeteer = require('puppeteer');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask-bob')
        .setDescription('Ask Bob a question')
        .addStringOption((option) =>
            option.setName('question').setDescription('Question for Bob').setRequired(true)
        ),
        

    async execute(interaction) {


        try {
            await interaction.deferReply({ ephemeral: false });
        } catch (err) {
            console.error('Failed to defer interaction:', err);
            return;
        }
        
        const prompt = interaction.options.getString('question');
        const inputSelector = '[data-testid="user-prompt"]';
        const responseSelector = 'div[data-testid="bot-message"]';

        let browser;
        
        try {
            browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
        
            await page.goto('https://bobgpt-21ebf1.zapier.app', { waitUntil: 'load', timeout: 15000 })



            await page.type(inputSelector, prompt);
            await page.keyboard.press('Enter');
        
            await new Promise(resolve => setTimeout(resolve, 15000)); // Adjust delay if needed
        
            const responses = await page.$$eval(responseSelector, (elements) =>
                elements.map((element) => element.textContent.trim())
            );

        
            if (!responses || responses.length === 0) {
                return await interaction.editReply('Bob could not provide a proper response. Please try again later.');
            }


            const embed = new EmbedBuilder()
                .setTitle('bobGPT')
                .setColor(0x120a8f)
                .addFields(
                    { name: 'User:', value: prompt },
                    { name: 'Response:', value: responses.join('\n\n') }
                );
        
            await interaction.editReply({ embeds: [embed] });
        
        } catch (error) {
            console.error('Error during Puppeteer execution:', error);
            await interaction.editReply('An error occurred while trying to get Bob response. Please try again later.');
        } finally {
            if (browser) await browser.close();
        }
        
    }
};
