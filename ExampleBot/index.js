const {
    cmdHandler,
    logger
} = require("@silent-coder/discord-cmd-handler");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login(require('./config.json').token);
// ==================================================================
const mocy = require("mocy")
// Connecting to mongoose
mocy.connectToMongoDB(require("./config.json").mongourl)
// To Get The new event working we nee dto initilize it by:
ultrax.inviteLogger(client)
// now below event will work
client.on('inviteJoin', (member, invite, inviter) => {
    console.log(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`)
});
// ==================================================================
// New Event for Remind function;
// this will make so below events triggers
ultrax.remind.startRemind(client);
client.on('reminder', (user, reason, time) => {
    client.users.cache.get(user.id).send(`You asked me \`${time}\` ago to remind you \n \`${reason}\``)
});
// ==================================================================


client.on("ready", () => {
    //I'm using logger and not console beacuse it has colours :) 
    logger.info(`Logged in as ${client.user.tag} Successfully..!!`)
    cmdHandler(client, {
        logs: {
            consoleLogEnabled: true,
            consoleLogMessage: "{user.tag} ( {user.id} ) ran a command: {command} in {guild.name} ( {channel.name} )",
            cmdLogEnabled: false,
            cmdLogChannel: "ChannelID HERE",
            cmdLogMessage: "{user.tag} ( {user.id} ) ran a command: {command} in {guild.name} ( {channel.name} )"
        },
        cooldownMSG: "Calm down, {user.tag}, You still have {time} before you can run the command again.",
        EnableCommmandonEdit: true,
        mentionPrefix: true,
        prefix: "?",
        owners: ["YOUR DISCORD ID", "YOUR TRUSTED FRIEND Discord ID"],
        path: __dirname + "/commands",
        logCommands: true
    });
    //This will load all commands.
});