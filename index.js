
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('Villager is online!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "hurr") {
        message.channel.send('HURR!');
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join()
        .then(connection =>{
            client.on('message', message =>{
            if(!message.content.startsWith(prefix) || message.author.bot) return;
        
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
            if(command === 'hello'){
                const dispatcher = connection.play(require("path").join(__dirname, './hehe.mp3'));
            }
            else if(command === 'hi' || 'angel'){
                const dispatcher = connection.play(require("path").join(__dirname, './hehe.mp3'));
            }
            else if(command === 'amir'|| 'gago' || 'pillager'){
                const dispatcher = connection.play(require("path").join(__dirname, './huh.mp3'));
            }
            })
        client.on('voiceStateUpdate', (oldMember, newMember) => {
            const newUserChannel = newMember.voicechannelID;
            const oldUserChannel = oldMember.voicechannelID;
            const dispatcher = connection.play(require("path").join(__dirname, './hurr.mp3'));
           })
       
        }).catch(err => console.log(err));
    }   
    else if (command === "bye") {
        var voiceChannel = message.member.voice.channel;

        voiceChannel.leave();
            }      
});

client.login('NzY2NTQxMjc4MjE3MTA5NTE0.X4k3Mg.neNszqDtsGYIBUycMQe2Gyl2ddQ');
