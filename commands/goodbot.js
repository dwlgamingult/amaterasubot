exports.run = (client, message) => {
  message.channel.send('Thankies <:blobmelt:381057783321067540>');
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
