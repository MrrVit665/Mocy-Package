const Discord = require("discord.js")
exports.run = async (client, message, args, logger) => {
    try {
        const mocy = require('mocy')
        if (!args.join(' ')) return message.channel.send('What do you want to bin?');
        else {
            const bin = await ultrax.bin(args.join(' '), true); // true means editable while false means not editable
            message.channel.send('Here i binned the code ' + bin)
        }

    } catch (error) {
        logger.error(error);
    }
}

exports.help = {
    name: "bin",
    description: "Bin's a message",
    usage: "bin",
    example: "bin"
}

exports.conf = {
    aliases: [], //Other names of the command.
    cooldown: 5 // % seconds of cooldown, Owners have bypass
}