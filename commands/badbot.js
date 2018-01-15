exports.run = (client, message) => {
  message.channel.send('<:disgustedamon:402314262594191360>');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'badbot',
  description: 'tells bot it is indeed bad',
  usage: 'badbot'
};
