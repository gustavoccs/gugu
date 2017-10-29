const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'teste') {
    	message.reply('testado1');
  	}
});

client.on('message', message => {
    if (message.content === 'teste') {
    	message.reply('Pedrinho Guimarães');
  	}
});

client.on('message', message => {
    if (message.content === 'teste') {
    	message.reply('testado3');
  	}
});

client.on('message', message => {
    if (message.content === 'teste') {
    	message.reply('https://media.discordapp.net/attachments/297732013006389252/374321541413994496/image.png');
  	}
});

client.on('message', message => {
    if (message.content === 'teste5') {
    	message.reply('testado5');
  	}
});

client.on('message', message => {
    if (message.content === 'teste') {
    	message.reply('testado6');
  	}
});

client.on('message', message => {
    if (message.content === 'teste') {
    	message.reply('sou o thesad');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
