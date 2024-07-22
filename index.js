import { Client, GatewayIntentBits } from 'discord.js';
import weather from './Wether.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", async (message) => {
    let t = message.content
    t=t.split(" ")
    if (t[0].toLowerCase()=="weather") {
        try {
            console.log(t[1])
            let temperature = await weather.getData(t[1]);
            temperature= String(temperature)
            message.reply(temperature);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

});

client.on('interactionCreate', interaction => {
    // console.log(interaction);
    interaction.reply('pong')
});
client.login("");