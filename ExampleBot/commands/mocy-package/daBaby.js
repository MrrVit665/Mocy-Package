const mocy = require('mocy')
exports.run = async (client, message, args, logger) => {

  const member = message.mentions.members.first() || message.member;

  var image = await ultrax.daBaby(member.user.displayAvatarURL({ format: 'png' }))
  
  message.channel.send(image)

}
  exports.help = {
    name: "dababy",
    description: "daBabys a user",
    usage: "daBaby <@user>",
    example: "daBaby @M"
  }

  exports.conf = {
    aliases: ["baby"], //Other names of the command.
    cooldown: 5 // % seconds of cooldown, Owners have bypass
  }