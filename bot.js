const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.ping') {
    	message.reply('pong');
  	
});

client.on('message', message => {
    if (message.content === '!on?') {
        channel = ctx.message.channel
        t1 = time.perf_counter()
        await self.bot.send_typing(channel)
        t2 = time.perf_counter()
        message.reply(":ping_pong: Ping: {}ms".format(round((t2-t1)*1000)))
  
});
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '.avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});

client.login(process.env.BOT_TOKEN);
