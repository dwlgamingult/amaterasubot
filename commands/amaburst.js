exports.run = (client, message) => {
  message.channel.send('Current Amaterasu Burst start times are PST: 12pm and 6pm | GMT: 8pm and 2am');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'amaburst',
  description: 'shows burst time for Amaterasu',
  usage: 'amaburst'
};
