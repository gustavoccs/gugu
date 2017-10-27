const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!chk 5140040222671014|09|2019|158') {
    	message.reply('APROVADA ESSA CC SUA');
  	}
});

client.on('message', message => {
    if (message.content === 'teste') {
    	message.reply('testado');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
