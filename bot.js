const Discord = require('discord.js');
const auth = require('./auth.json');

// Initialize Client
const client = new Discord.Client();

client.on('ready', evnt => {
	console.log('I am ready!');
	
    let channel = client.channels.get('392763289186336780');
	channel.join()
	.then(connection => console.log('Connected'))
	.catch(console.error);
});


client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
	const broadcast = client.createVoiceBroadcast();
	broadcast.playFile('./Avril14.mp3');
	
	for (const connection of client.voiceConnections.values()) {
		connection.playBroadcast(broadcast);
	}
  }
  if(message.content === '!play'){
	  
  }
});

client.login(auth.token);