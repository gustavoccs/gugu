const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!vostosim') {
    	message.reply('ti fude nao bane o cara nao \n nada ver irmao');
  	}
});

client.on('message', message => {
    if (message.content === '!votdsaonao') {
    	message.reply('ai sim votar nao é legau\n nada ver irmao');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
