const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'toca ae') {
    	message.reply('splash toquei é nois mano tmj ');
  	}
});

client.on('message', message => {
    if (message.content === '!votdsaonao') {
    	message.reply('ai sim votar nao é legau\n nada ver irmao');
  	}
});

client.on('message', message => {
    if (message.content === 'votekick') {
		if(suffix){
			//first check if the bot can kick
			if(!msg.channel.permissionsFor(bot.user).hasPermission("kickMembers")){
				msg.channel.send( "I don't have permission to kick people!");
				return;
			}
			var vote = function(user){
				if(votekicks.hasOwnProperty(user.id)){
					var votes = votekicks[user.id];
					votes.count += 1;
					if(votes.voters.indexOf(msg.author.id) > -1){
						msg.channel.send(msg.author + " you can only vote once!");
						return;
					}
					votes.voters.push(msg.author.id);
					if(votes.count > usersOnline(msg.channel.server)/2){
						msg.channel.send("Vote passed!\nKicking " + user + " from " + msg.channel.server + "!",
							function() {
								bot.kickMember(users[0],msg.channel.server);
						});
					}
				} else {
					votekicks[user.id] = { count:1, voters:[msg.author.id]};
					msg.channel.send("Starting votekick for user " + user + "!");
				}
			};
			if(suffix.startsWith("<@")){
				suffix = suffix.substr(2,suffix.length-3);
			}
			var user = msg.channel.server.members.get("id",suffix);
			if(user){
				vote(user);
				return;
			}
			var users = msg.channel.server.members.getAll("username",suffix);
			if(users.length > 1){
				msg.channel.send("Multiple people match " + suffix + "!")
			} else if(users.length == 1){
				vote(users[0]);
			} else {
				msg.channel.send("I couldn't find a user " + suffix);
			}
		} else {
			msg.channel.send("You must specify a user to kick!");
		}
	}
}

exports.kick = {
	usage: "<user>",
	description: "Kick a user with a message! Requires both the author of the message and the bot to have kick permission",
	process: function(bot,msg,suffix) {
		let args = suffix.split(" ");
		if(args.length > 0 && args[0]){
			//first check if the bot can kick
			let hasPermissonToKick =  msg.guild.members.get(bot.user.id).permissions.has("KICK_MEMBERS");
			if(!hasPermissonToKick){
				msg.channel.send( "I don't have permission to kick people!");
				return;
			}
			//now check if the user can kick
			if(!msg.guild.members.get(msg.author.id).permissions.has("KICK_MEMBERS")){
				msg.channel.send( "You don't have permission to kick people!");
				return;
			}
			var targetId = resolveMention(args[0]);
			let target = msg.guild.members.get(targetId);
			if(target != undefined){
				if(!target.kickable){
					msg.channel.send("I can't kick " + target + ". Do they have the same or a higher role than me?");
					return;
				}
				if(args.length > 1) {
					let reason = args.slice(1).join(" ");
					target.kick(reason).then(x => {
						msg.channel.send("Kicking " + target + " from " + msg.guild + " for " + reason + "!");
					}).catch(err => msg.channel.send("Kicking " + target + " failed:\n"));
				} else {
					target.kick().then(x => {
						msg.channel.send("Kicking " + target + " from " + msg.guild + "!");
					}).catch(err => msg.channel.send("Kicking " + target + " failed:\n"));
				}
			} else {
				msg.channel.send("I couldn't find a user " + args[0]);
			}
		} else {
			msg.channel.send("You must specify a user to kick!");
		}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
