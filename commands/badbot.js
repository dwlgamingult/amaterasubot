exports.run = (client, message) => {
  message.channel.send('<:blobpeekknife:389527388284911616>');
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
