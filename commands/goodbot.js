exports.run = (client, message) => {
  message.channel.send('Thankies <:blobmelt:402326065965432857>');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'goodbot',
  description: 'tell\'s bot it is a good boye',
  usage: 'goodbot'
};
